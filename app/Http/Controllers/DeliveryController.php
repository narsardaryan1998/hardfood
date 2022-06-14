<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Delivery;

/**
 *
 * Class DeliveryController
 * @package App\Http\Controllers
 */
class DeliveryController extends Controller
{
    /**
     *
     * @param Request $request
     */
    public function deleteAmo(Request $request)
    {
        Delivery::where('amocrm_id', $request['leads']['status'][0]['id'])->delete();
    }

    public function delete(Request $request)
    {
        Delivery::where('amocrm_id', $request->lead_id)->delete();
    }

    /**
     * Сохраняет необходимость доставки, добавляет задачу в amoCrm
     * @param Request $request - данные о доставке
     * @return Delivery - полная информация о доставкеы
     * @throws \AmoCRM\Exception
     */
    public function addToDB(Request $request)
    {
        $amo = new \AmoCRM\Client(config('amocrm.domain'), config('amocrm.login'), config('amocrm.hash'));
        $deliverys = $request->deliverys;
        $findItems = $deliverys[0];

        $userAmocrm = $amo->contact->apiList([
            'query' => $findItems['clientPhone'],
        ]);
        $referralExists = false;
        foreach ($userAmocrm[0]['custom_fields'] as $custom_fields) {
            if ($custom_fields['id'] == config('amocrm.contactFields.referralFriend')) {
                if (!empty($custom_fields['values'][0]['value'])) {
                    $referralExists = true;
                }
                break;
            }
        }

        Delivery::where('amocrm_id', $findItems['amocrmId'])->delete();

        foreach ($deliverys as $key => $value) {
            $newkey = $key + 1;
            $delivery = new Delivery;
            $delivery->amocrm_id = $value['amocrmId'];
            $delivery->delivery_prod_date = $value['deliveryDate'];
            $delivery->delivery_date = $value['deliveryDayData'];
            $delivery->deliveryClientInterval = $value['deliveryClientInterval'];
            $delivery->maxoptra_id = $value['amocrmId'] . '-' . $newkey;
            $delivery->items = $value['s5'] + $value['m5'] + $value['l5'] + $value['s7'] + $value['m7'] + $value['p5'] + $value['m7'] + $value['p7'];
            $delivery->s5 = $value['s5'];
            $delivery->m5 = $value['m5'];
            $delivery->l5 = $value['l5'];
            $delivery->s7 = $value['s7'];
            $delivery->m7 = $value['m7'];
            $delivery->l7 = $value['l7'];
            $delivery->p5 = $value['p5'];
            $delivery->p7 = $value['p7'];
            $delivery->phone = $value['clientPhone'];
            $delivery->additional_phone = $value['clientPhoneAdditional'];
            $delivery->from = $value['hours_delivery_from'];
            $delivery->to = $value['hours_delivery_to'];
            $delivery->pay = $value['pay'] ? $value['pay'] : '';
            $delivery->client = $value['clientName'];
            $delivery->client_exclude = $value['clientExclude'];
            $delivery->address = $value['selectedAddress'] == 2 ? $value['clientAddressSecond'] : $value['clientAddress'];
            $delivery->selected_address = $value['selectedAddress'];

            $taskDate = strtotime($value['deliveryDayData']);
            $taskDate = strtotime("+1 day", $taskDate);

            $taskDate = date('d.m.Y', $taskDate);

            if ($newkey === 1) {
                if ($request->isPayed === '1' && $request->paymentMethod === 'Онлайн картой') {
                    $firstDate = strtotime($value['deliveryDayData']);
                    $firstDate = strtotime("+1 day", $firstDate);
                    $firstDate = date('d.m.Y', $firstDate);
                    $task = $amo->task;
                    $task['element_id'] = $findItems['amocrmId'];
                    $task['element_type'] = 2;
                    $task['date_create'] = $firstDate;
                    $task['task_type'] = 1;
                    $task['text'] = "Осуществлена ли оплата?";
                    $task['responsible_user_id'] = 24647101;
                    $task['complete_till'] = $firstDate;
                    $task->apiAdd();
                }
            }

            if (!empty($value['pay']) && $value['pay'] > 0) {
                $taskDateForPay = strtotime($value['deliveryDayData']);
                $taskDateForPay = strtotime("+1 day", $taskDateForPay);
                $taskDateForPay = date('d.m.Y', $taskDateForPay);

                $task = $amo->task;
                $task['element_id'] = $findItems['amocrmId'];
                $task['element_type'] = 2;
                $task['date_create'] = $taskDateForPay;
                $task['task_type'] = 1;
                $task['text'] = "Прошла ли оплата наличными ? смени статус";
                $task['responsible_user_id'] = 24647101;
                $task['complete_till'] = $taskDateForPay;
                $task->apiAdd();
            }

            $delivery->save();
        }

        $lead = $amo->lead;
        $lead->addCustomField(642665, '1');
        $lead->apiUpdate((int)$value['amocrmId'], 'now');

        $task = $amo->task;
        $task['element_id'] = $findItems['amocrmId'];
        $task['element_type'] = 2;
        $task['date_create'] = $taskDate;
        $task['task_type'] = 1;
        $task['text'] = "Связаться с клиентом";
        $task['responsible_user_id'] = 24647101;
        $task['complete_till'] = $taskDate;
        $id = $task->apiAdd();

        if ($referralExists) {
            $task = $amo->task;
            $task['element_id'] = $findItems['amocrmId'];
            $task['element_type'] = 2;
            $task['date_create'] = $taskDate;
            $task['task_type'] = 1;
            $task['text'] = 'Как только статус заказа будет "Завершён", проверь и пополни на 500 бонусов «приведи друга»';
            $task['responsible_user_id'] = 24647101;
            $task['complete_till'] = $taskDate;
            $id = $task->apiAdd();
        }

        return $delivery;
    }

    /***
     * Добавляет исключение к адресу доставки таблицы Deliverys
     * @param $clientAddress - адресс доставки из таблицы Deliverys
     * @param $clientAddressWithExcluion - адресс доставки из amo
     * @return mixed
     */
    public function addExclusionToAddress($clientAddress, $clientAddressWithExcluion)
    {
        $delimiter = "!!!*";

        if (strpos($clientAddressWithExcluion, $delimiter) === false)
            return $clientAddress;

        if (strpos($clientAddress, $delimiter) === false) {
            $arr = explode($delimiter, $clientAddressWithExcluion);
            $clientAddress = $clientAddress . " !!!*" . $arr[1];
            return $clientAddress;
        }
        return $clientAddress;
    }

    /**
     * Отображает всю информацию о доставках
     * @return array|\Illuminate\Contracts\View\Factory|\Illuminate\View\View|mixed
     */
    public function allItems()
    {
        $items = Delivery::all();

        return view('amocrm.allitems', [
            'items' => $items
        ]);
    }

    /**
     * Подробная информация о заказе
     * @param $leadId - id заказа
     * @return array|\Illuminate\Contracts\View\Factory|\Illuminate\View\View|mixed
     */
    public function list($leadId)
    {
        $amo = new \AmoCRM\Client(config('amocrm.domain'), config('amocrm.login'), config('amocrm.hash'));
        $items = Delivery::where('amocrm_id', $leadId)->get();
        $items = $items->toArray();

        $lead = $amo->lead->apiList([
            'id' => $leadId,
        ]);
        $lead = $lead[0];
        $cart = [
            's5' => "",
            's7' => "",
            'm5' => "",
            'm7' => "",
            'l5' => "",
            'l7' => "",
            'p5' => "",
            'p7' => ""
        ];
        $isPayed = '0';
        $selectedAddress = false;
        foreach ($lead['custom_fields'] as $custom_fields) {
            if ($custom_fields['id'] == '439637') {
                $firstdate = $custom_fields['values'][0]['value'];
            } elseif ($custom_fields['id'] == config('amocrm.leadFields.paymentMethod')) {
                $paymentMethod = $custom_fields['values'][0]['value'];
            } else if ($custom_fields['id'] == config('amocrm.contactFields.isPayed')) {
                $isPayed = $custom_fields['values'][0]['value'];
            } elseif ($custom_fields['id'] == config('amocrm.leadFields.out1')) {
                $cart['s5'] = $custom_fields['values'][0]['value'];
            } elseif ($custom_fields['id'] == config('amocrm.leadFields.out4')) {
                $cart['m7'] = $custom_fields['values'][0]['value'];
            } elseif ($custom_fields['id'] == config('amocrm.leadFields.out5')) {
                $cart['l5'] = $custom_fields['values'][0]['value'];
            } elseif ($custom_fields['id'] == config('amocrm.leadFields.out2')) {
                $cart['s7'] = $custom_fields['values'][0]['value'];
            } elseif ($custom_fields['id'] == config('amocrm.leadFields.out3')) {
                $cart['m5'] = $custom_fields['values'][0]['value'];
            } elseif ($custom_fields['id'] == config('amocrm.leadFields.out6')) {
                $cart['l7'] = $custom_fields['values'][0]['value'];
            } elseif ($custom_fields['id'] == config('amocrm.leadFields.selectedAddress')) {
                if ($selectedAddress === false) {
                    if ($custom_fields['values'][0]['value'] == 1) {
                        $selectedAddress = 1;
                    } elseif ($custom_fields['values'][0]['value'] == 2) {
                        $selectedAddress = 2;
                    }
                }
            } elseif ($custom_fields['id'] == '676319') {
                $cart['p5'] = $custom_fields['values'][0]['value'];
            } elseif ($custom_fields['id'] == '676321') {
                $cart['p7'] = $custom_fields['values'][0]['value'];
            }
        }

        $userAmocrm = $amo->contact->apiList([
            'id' => $lead['main_contact_id'],
        ]);
        $userAmocrm = $userAmocrm[0];

        $clientaddress = 'не указан';
        $clientaddressPod = 'не указан';
        $clientaddressDomofon = 'не указан';
        $clientaddressEtag = 'не указан';
        $clientaddressKv = 'не указан';
        $clientComment = 'не указан';
        $clientaddress2 = 'не указан';
        $clientaddressPod2 = 'не указан';
        $clientaddressDomofon2 = 'не указан';
        $clientaddressEtag2 = 'не указан';
        $clientaddressKv2 = 'не указан';
        $clientComment2 = 'не указан';
        $clientExclude = '';
        $clientPhoneMain = '';
        $clientPhoneAdditional = '';
        foreach ($userAmocrm['custom_fields'] as $custom_fields) {
            if ($custom_fields['id'] == config('amocrm.contactFields.address')) {
                if (!$selectedAddress) {
                    $selectedAddress = 1;
                }
                $clientaddress = $custom_fields['values'][0]['value'];
            } elseif ($custom_fields['id'] == config('amocrm.contactFields.porch')) {
                $clientaddressPod = $custom_fields['values'][0]['value'];
            } elseif ($custom_fields['id'] == config('amocrm.contactFields.intercom')) {
                $clientaddressDomofon = $custom_fields['values'][0]['value'];
            } elseif ($custom_fields['id'] == config('amocrm.contactFields.floor')) {
                $clientaddressEtag = $custom_fields['values'][0]['value'];
            } elseif ($custom_fields['id'] == config('amocrm.contactFields.flat')) {
                $clientaddressKv = $custom_fields['values'][0]['value'];
            } elseif ($custom_fields['id'] == config('amocrm.contactFields.comment')) {
                $clientComment = $custom_fields['values'][0]['value'];
            } elseif ($custom_fields['id'] == config('amocrm.contactFields.address2')) {
                if (!$selectedAddress) {
                    $selectedAddress = 2;
                }
                $clientaddress2 = $custom_fields['values'][0]['value'];
            } elseif ($custom_fields['id'] == config('amocrm.contactFields.porch2')) {
                $clientaddressPod2 = $custom_fields['values'][0]['value'];
            } elseif ($custom_fields['id'] == config('amocrm.contactFields.intercom2')) {
                $clientaddressDomofon2 = $custom_fields['values'][0]['value'];
            } elseif ($custom_fields['id'] == config('amocrm.contactFields.floor2')) {
                $clientaddressEtag2 = $custom_fields['values'][0]['value'];
            } elseif ($custom_fields['id'] == config('amocrm.contactFields.flat2')) {
                $clientaddressKv2 = $custom_fields['values'][0]['value'];
            } elseif ($custom_fields['id'] == '631231') {
                if ($custom_fields['values'][0]['value'] == 'Утро') {
                    $deliveryClientInterval = 'am';
                } else {
                    $deliveryClientInterval = 'pm';
                }
            } elseif ($custom_fields['id'] == config('amocrm.contactFields.comment2')) {
                $clientComment2 = $custom_fields['values'][0]['value'];
            } elseif ($custom_fields['id'] == config('amocrm.contactFields.phone')) {
                foreach ($custom_fields['values'] as $index => $value) {
                    if ($value['value'][0] !== '+') {
                        $value['value'] = '+' . $value['value'];
                    }
                    if (!$index) {
                        $phoneRequest = preg_replace("/[^0-9]/", '', $value['value']);
                        $clientPhoneMain = '+' . $phoneRequest;
                    } else {
                        if (!$clientPhoneAdditional) {
                            $clientPhoneAdditional = $value['value'];
                        } else {
                            $clientPhoneAdditional .= ' | ' . $value['value'];
                        }
                    }
                }
            } elseif ($custom_fields['id'] == '652019') {
                $clientExclude = $custom_fields['values'][0]['value'];
            }
        }

        if (empty($items)) {
            $items = 0;
        }

        $amocrm_data = [
            'leadid' => $lead['id'],
            'firstdate' => $firstdate,
            'paymentMethod' => $paymentMethod ?? null,
            'isPayed' => $isPayed,
            'cart' => $cart,
            'clientphone' => $clientPhoneMain,
            'clientPhoneAdditional' => $clientPhoneAdditional,
            'clientname' => $userAmocrm['name'],
            'clientExclude' => $clientExclude,
            'clientaddress' => $clientaddress . ', Подьезд: ' . $clientaddressPod . ', Домофон: ' . $clientaddressDomofon . ', Этаж: ' . $clientaddressEtag . ', Квартира: ' . $clientaddressKv . ', Комментарии: ' . $clientComment,
            'clientAddressSecond' => $clientaddress2 . ', Подьезд: ' . $clientaddressPod2 . ', Домофон: ' . $clientaddressDomofon2 . ', Этаж: ' . $clientaddressEtag2 . ', Квартира: ' . $clientaddressKv2 . ', Комментарии: ' . $clientComment2,
            'deliveryclientinterval' => $deliveryClientInterval,
            'selectedAddress' => $selectedAddress,
        ];

        return view('amocrm.list', [
            'amocrm_data' => json_encode($amocrm_data),
            'saved_deliverys' => json_encode($items),
        ]);
    }
}
