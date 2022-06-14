<?php

namespace App\Http\Controllers;

use App\Helpers\AmoCrmHelper;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Kolirt\Openstreetmap\Facade\Openstreetmap;

class OrderController extends Controller
{
    /**
     * @return bool[]|\Illuminate\Http\JsonResponse
     */
    public function addOrderToAmoGiftAWeek()
    {
        $amo = new \AmoCRM\Client(config('amocrm.domain'), config('amocrm.login'), config('amocrm.hash'));
        $userAmoCrm = $amo->contact->apiList([
            'query' => Auth::user()->phone,
        ]);

        if (empty($userAmoCrm)) {
            return response()->json([
                'success' => false,
                'errorMessage' => '401 Unauthorized',
            ], 401);
        }
        $quantityOfGiftAWeek = 0;
        foreach ($userAmoCrm[0]['custom_fields'] as $value) {
            if ($value['id'] == config('amocrm.contactFields.quantityOfGiftAWeek')) {
                $quantityOfGiftAWeek = (int)$value['values']['0']['value'];
                break;
            }
        }
        $userActiveReferralsCount = count(\App\Helpers\AmoCrmHelper::getUserReferrals(Auth::user()));
        if ($userActiveReferralsCount < (($quantityOfGiftAWeek + 1) * 3)) {
            return response()->json([
                'success' => false,
                'errorMessage' => '401 Unauthorized',
            ], 401);
        }
        $leadRes = AmoCrmHelper::addOrderDataToAmoGiftAWeek($amo);
        AmoCrmHelper::addLinkBetweenContactAndLead($amo, $userAmoCrm, $leadRes['leadId']);
        AmoCrmHelper::addNoteToAmo($amo, $leadRes['leadId']);
        AmoCrmHelper::increaseQuantityOfGiftAWeek($userAmoCrm['0']['id'], $quantityOfGiftAWeek + 1, $amo);

        return [
            'success' => true,
        ];
    }

    /**
     * Добавляет новый заказ пользователя в amoCrm
     * @param Request $request - данные о заказе
     * @return false|string|void
     */
    public function addOrderToAmo(Request $request)
    {
        $amo = new \AmoCRM\Client(config('amocrm.domain'), config('amocrm.login'), config('amocrm.hash'));
        $userData = $request->userData;

        $userAmoCrm = $amo->contact->apiList([
            'query' => Auth::user()->phone,
        ]);

        if (empty($userAmoCrm)) {
            return response()->json([
                'success' => false,
                'errorMessage' => '401 Unauthorized',
            ], 401);
        }

        AmoCrmHelper::updateOrCreateUserInAmoCrm($amo, $userData, $userAmoCrm, $request);
        $leadRes = AmoCrmHelper::addOrderDataToAmo($request, $amo, $userData, $userAmoCrm);
        AmoCrmHelper::addLinkBetweenContactAndLead($amo, $userAmoCrm, $leadRes['leadId']);
        AmoCrmHelper::addNoteToAmo($amo, $leadRes['leadId']);

        $response_data = [
            'order' => $leadRes['leadId'],
            'totalPrice' => $leadRes['totalPrice'],
            'success' => true,
        ];

        return json_encode($response_data);
    }

    /**
     * Зарегистрировать заказ в amoCrm
     * @param Request $request - данные о заказе
     */
    public function addCallBackToAmo(Request $request)
    {
        return AmoCrmHelper::callbackAndFastOrderFunctionality($request->phone, 'Консультация. Тел: ');
    }

    /**
     * Зарегистрировать быстрый заказ в amoCrm
     * @param Request $request - данные о заказе
     */
    public function fastOrder(Request $request)
    {
        return AmoCrmHelper::callbackAndFastOrderFunctionality($request->phone, 'Заказ по телефону. Тел: ');
    }

    /**
     * Выполняется при оплате заказа банковской картой
     * @param Request $request
     * @throws \AmoCRM\Exception
     */
    public function updateLead(Request $request)
    {
        $amo = new \AmoCRM\Client(config('amocrm.domain'), config('amocrm.login'), config('amocrm.hash'));
        $lead = $amo->lead;
        $lead->addCustomField(config('amocrm.contactFields.isPayed'), '1');
        $lead->apiUpdate((int)$request->orderId, 'now');
    }

    /**
     * @param Request $request
     * @return array
     * @throws \AmoCRM\Exception
     */
    public function checkPromoCode(Request $request)
    {
        return AmoCrmHelper::checkPromoCode($request->promoCode, $request->cart);
    }

    /**
     * @param Request $request
     * @return array
     */
    public function searchAddress(Request $request)
    {
        $keyword = $request->searchAddressKeyword;
        $results = [];

        if (empty($keyword)) {
            return [
                'success' => true,
                'results' => $results
            ];
        }
        $response = Openstreetmap::search($keyword, 6);
        if (!empty($response)) {
            foreach ($response as $values) {
                $results[] = $values->display_name;
            }
        }
        return [
            'success' => true,
            'results' => $results
        ];
    }
}
