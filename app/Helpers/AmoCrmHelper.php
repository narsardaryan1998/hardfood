<?php


namespace App\Helpers;

use App\Models\PromocodesUsing;
use App\Models\User;
use Carbon\Carbon;
use Illuminate\Support\Facades\Auth;

class AmoCrmHelper
{
    /**
     * стурктурирует данные из amoCrm в удобный вид
     * @param $userAmocrm - данные пользователя из AmoCrm
     * @return mixed
     */
    public static function getUserData($userAmocrm)
    {
        $userData['name'] = $userAmocrm['name'];
        $userData['id'] = $userAmocrm['id'];

        foreach ($userAmocrm['custom_fields'] as $value) {
            if ($value['id'] == config('amocrm.contactFields.phone')) {
                $userData['phone'] = $value['values']['0']['value'];
            } elseif ($value['id'] == config('amocrm.contactFields.address')) {
                $userData['address'] = $value['values']['0']['value'];
            } elseif ($value['id'] == config('amocrm.contactFields.flat')) {
                $userData['flat'] = $value['values']['0']['value'];
            } elseif ($value['id'] == config('amocrm.contactFields.porch')) {
                $userData['porch'] = $value['values']['0']['value'];
            } elseif ($value['id'] == config('amocrm.contactFields.floor')) {
                $userData['floor'] = $value['values']['0']['value'];
            } elseif ($value['id'] == config('amocrm.contactFields.intercom')) {
                $userData['intercom'] = $value['values']['0']['value'];
            } elseif ($value['id'] == config('amocrm.contactFields.email')) {
                $userData['email'] = $value['values']['0']['value'];
            } elseif ($value['id'] == config('amocrm.contactFields.comment')) {
                $userData['commentForOrder'] = $value['values']['0']['value'];
            } elseif ($value['id'] == config('amocrm.contactFields.balance')) {
                $userData['balance'] = $value['values']['0']['value'];
            } elseif ($value['id'] == config('amocrm.contactFields.address2')) {
                $userData['address2'] = $value['values']['0']['value'];
            } elseif ($value['id'] == config('amocrm.contactFields.flat2')) {
                $userData['flat2'] = $value['values']['0']['value'];
            } elseif ($value['id'] == config('amocrm.contactFields.porch2')) {
                $userData['porch2'] = $value['values']['0']['value'];
            } elseif ($value['id'] == config('amocrm.contactFields.floor2')) {
                $userData['floor2'] = $value['values']['0']['value'];
            } elseif ($value['id'] == config('amocrm.contactFields.intercom2')) {
                $userData['intercom2'] = $value['values']['0']['value'];
            } elseif ($value['id'] == config('amocrm.contactFields.comment2')) {
                $userData['commentForOrder2'] = $value['values']['0']['value'];
            } elseif ($value['id'] == config('amocrm.contactFields.quantityOfGiftAWeek')) {
                $userData['quantityOfGiftAWeek'] = (int)$value['values']['0']['value'];
            } elseif ($value['id'] == config('amocrm.contactFields.dateOfBirthday')) {
                $userData['dateOfBirthday'] = Carbon::parse($value['values']['0']['value'])->format('Y-m-d');
            }
        }
        $userData['phone'] = '+' . preg_replace("/[^0-9]/", '', $userData['phone']);

        return $userData;
    }

    /**
     * Зарегистрировать заказ в amoCrm
     * @param $request - данные о заказе
     * @param $amo - объект для доступа в amoCrm
     */
    public static function addOrderDataToAmo($request, $amo, $userData, $userAmoCrm)
    {
        //roistat.com - для статистики
        $roistatVisitId = array_key_exists('roistat_visit', $_COOKIE) ? $_COOKIE['roistat_visit'] : "неизвестно";

        $lead = $amo->lead;
        $lead['name'] = 'Заявка с сайта ' . config('app.name');
        $lead['date_create'] = Carbon::now();
        $lead['price'] = 0;

        //всего 6 видов заказов 3(s,m,l)*2(5,7)
        $out_1 = "";
        $out_2 = "";
        $out_3 = "";
        $out_4 = "";
        $out_5 = "";
        $out_6 = "";
        foreach ($request->cart as $cartItem) {
            if ($cartItem['choosedRation']) {
                if ($cartItem['choosedRation'] === User::CHOSEN_RATION_S && $cartItem['timeToEat'] === 5) {
                    $out_1 .= $cartItem['chosenWeek'] . '/';
                } elseif ($cartItem['choosedRation'] == User::CHOSEN_RATION_S && $cartItem['timeToEat'] == 7) {
                    $out_2 .= $cartItem['chosenWeek'] . '/';
                } elseif ($cartItem['choosedRation'] == User::CHOSEN_RATION_M && $cartItem['timeToEat'] == 5) {
                    $out_3 .= $cartItem['chosenWeek'] . '/';
                } elseif ($cartItem['choosedRation'] == User::CHOSEN_RATION_M && $cartItem['timeToEat'] == 7) {
                    $out_4 .= $cartItem['chosenWeek'] . '/';
                } elseif ($cartItem['choosedRation'] == User::CHOSEN_RATION_L && $cartItem['timeToEat'] == 5) {
                    $out_5 .= $cartItem['chosenWeek'] . '/';
                } elseif ($cartItem['choosedRation'] == User::CHOSEN_RATION_L && $cartItem['timeToEat'] == 7) {
                    $out_6 .= $cartItem['chosenWeek'] . '/';
                } else {
                    return false;
                }
                $lead['price'] += $cartItem['totalPriseFirst'];
            }
        }

        $decrementedSum = 0;
        $moreBonuses = 0;
        if ($userData['useBalance'] && $userData['balance']) {
            if ($userData['balance'] >= ($lead['price'] / 2)) {
                $decrementedSum = ($lead['price'] / 2);
            } else {
                $decrementedSum = $userData['balance'];
            }
            $lead->addCustomField(config('amocrm.leadFields.usedBonuses'), $decrementedSum);
        } else if ($userData['usePromoCode'] && $userData['promoCode']) {
            $promoCodeResponse = AmoCrmHelper::usePromoCode($userData['promoCode'], $amo, $request->cart, $lead['price']);

            if ($promoCodeResponse['successfullyFound'] && $promoCodeResponse['promoCodeSaleCost']) {
                $decrementedSum = $promoCodeResponse['promoCodeSaleCost'];

                if ($promoCodeResponse['promoCodeType'] === 'referral') {
                    User::where('id', Auth::user()->id)
                        ->update([
                            'referred_by' => $userData['promoCode']
                        ]);
                }
            } else if ($promoCodeResponse['successfullyFound'] && $promoCodeResponse['moreBonuses']) {
                $moreBonuses = $promoCodeResponse['moreBonusesCost'];
                $lead->addCustomField(config('amocrm.leadFields.promoCode'), $userData['promoCode']);
                $lead->addCustomField(config('amocrm.leadFields.promoCodeSaleCost'), "+ ${moreBonuses} бонусы");
                $lead->addCustomField(config('amocrm.leadFields.promoCodeType'), $promoCodeResponse['promoCodeType'] === 'referral' ? 'Реферал' : 'Специальный');
            } else if ($promoCodeResponse['successfullyFound'] && $promoCodeResponse['plus2Days']) {
                $lead->addCustomField(config('amocrm.leadFields.promoCode'), $userData['promoCode']);
                $lead->addCustomField(config('amocrm.leadFields.promoCodeSaleCost'), '+ 2 дня подарок');
                $lead->addCustomField(config('amocrm.leadFields.promoCodeType'), 'Специальный');
            } else if ($promoCodeResponse['successfullyFound'] && $promoCodeResponse['moreBonusesByPercent']) {
                $moreBonuses = ($lead['price'] + $request->excludesPrice) * $promoCodeResponse['moreBonusesPercent'] / 100;
                $lead->addCustomField(config('amocrm.leadFields.promoCode'), $userData['promoCode']);
                $lead->addCustomField(config('amocrm.leadFields.promoCodeSaleCost'), "+ ${moreBonuses} бонусы");
                $lead->addCustomField(config('amocrm.leadFields.promoCodeType'), $promoCodeResponse['promoCodeType'] === 'referral' ? 'Реферал' : 'Специальный');
            }
        }

        if ($decrementedSum) {
            $lead['price'] -= $decrementedSum;
            if ($userData['usePromoCode'] && $userData['promoCode']) {
                $lead->addCustomField(config('amocrm.leadFields.promoCode'), $userData['promoCode']);
                $lead->addCustomField(config('amocrm.leadFields.promoCodeSaleCost'), $promoCodeResponse['promoCodeSaleCost']);
                $lead->addCustomField(config('amocrm.leadFields.promoCodeType'), $promoCodeResponse['promoCodeType'] === 'referral' ? 'Реферал' : 'Специальный');
            }
        }

        $lead->addCustomField(config('amocrm.leadFields.out1'), $out_1);
        $lead->addCustomField(config('amocrm.leadFields.out2'), $out_2);
        $lead->addCustomField(config('amocrm.leadFields.out3'), $out_3);
        $lead->addCustomField(config('amocrm.leadFields.out4'), $out_4);
        $lead->addCustomField(config('amocrm.leadFields.out5'), $out_5);
        $lead->addCustomField(config('amocrm.leadFields.out6'), $out_6);
        $lead->addCustomField(config('amocrm.leadFields.bonus'), $request->orderTotalBonus + $moreBonuses);
        $lead->addCustomField(config('amocrm.leadFields.roistatVisitId'), $roistatVisitId);
        $lead->addCustomField(config('amocrm.leadFields.paymentMethod'), $userData['paymentMethod'] == 'cashPayment' ? 'Наличными' : 'Онлайн картой');
        $lead->addCustomField(config('amocrm.leadFields.selectedAddress'), $userData['selectedAddress']);
        if (!empty($request->fromSalePage) && $request->fromSalePage && !empty($request->salePrice) && $request->salePrice) {
            $leads = $amo->lead->apiList([
                'query' => Auth::user()->phone,
            ]);
            $orders = [];
            foreach ($leads as $leadOld) {
                if (strpos($leadOld['name'], 'Сделка ') === false && strpos($leadOld['name'], 'Заявка с сайта ') === false
                    && strpos($leadOld['name'], 'Заказ по телефону. Тел:') === false) {
                    continue;
                }
                $orders[] = $leadOld;
            }
            if (count($orders) === 0) {
                $lead->addCustomField(config('amocrm.leadFields.offer'), "Скидка " . $request->salePrice . " ₽, для нового клиента");
                $lead['price'] -= $request->salePrice;
            }
        }
        $lead['price'] += $request->excludesPrice;
        // ID заказа в AmoCrm
        $leadId = $lead->apiAdd();

        if ($decrementedSum && $userData['useBalance']) {
            self::decrementBalanceForUsingBonus($decrementedSum, $userAmoCrm, $amo);
        }

        return [
            'leadId' => $leadId,
            'totalPrice' => $lead['price'],
        ];
    }

    /**
     * @param $amo
     * @return array
     */
    public static function addOrderDataToAmoGiftAWeek($amo)
    {
        //roistat.com - для статистики
        $roistatVisitId = array_key_exists('roistat_visit', $_COOKIE) ? $_COOKIE['roistat_visit'] : "неизвестно";

        $lead = $amo->lead;
        $lead['name'] = '"Подарок неделю" с сайта ' . config('app.name');
        $lead['date_create'] = Carbon::now();
        $lead['price'] = 0;
        $lead->addCustomField(config('amocrm.leadFields.out1'), '1/');
        $lead->addCustomField(config('amocrm.leadFields.roistatVisitId'), $roistatVisitId);
        $lead->addCustomField(config('amocrm.leadFields.selectedAddress'), '1');
        $leadId = $lead->apiAdd();

        return [
            'leadId' => $leadId,
        ];
    }

    /**
     * Связывает заказ из закзчика
     * @param $amo - доступ в amoCrm
     * @param $userAmoCrm - данные пользователя из amoCrm
     * @param $leadId - id заказа
     */
    public static function addLinkBetweenContactAndLead($amo, $userAmoCrm, $leadId)
    {
        $link = $amo->links;
        $link['from'] = 'leads';
        $link['from_id'] = $leadId;
        $link['to'] = 'contacts';
        $link['to_id'] = $userAmoCrm['0']['id'];
        $link->apiLink();
    }

    /**
     * Добавить запись о регистрации заказа
     * @param $amo
     * @param $leadId
     */
    public static function addNoteToAmo($amo, $leadId)
    {
        $out = "Состав заявки \n";
        $note = $amo->note;
        $note['element_id'] = $leadId;
        $note['element_type'] = \AmoCRM\Models\Note::TYPE_LEAD; // 1 - contact, 2 - lead
        $note['note_type'] = \AmoCRM\Models\Note::COMMON; // @see https://developers.amocrm.ru/rest_api/notes_type.php
        $note['text'] = $out;
        $note->apiAdd();
    }

    /**
     * Добавить или обновить информацию о пользователе в AmoCrm
     *
     * @param $amo
     * @param $userData
     */
    public static function updateOrCreateUserInAmoCrm($amo, $userData, $userAmoCrm, $request)
    {
        $contact = $amo->contact;
        $contact['name'] = $userData['name'];
        $contact->addCustomField(config('amocrm.contactFields.address'), $userData['addressStreet']);
        $contact->addCustomField(config('amocrm.contactFields.email'), $userData['email'], 'WORK');
        $contact->addCustomField(config('amocrm.contactFields.porch'), $userData['addressPorch']);
        $contact->addCustomField(config('amocrm.contactFields.intercom'), $userData['addressIntercom']);
        $contact->addCustomField(config('amocrm.contactFields.floor'), $userData['addressFloor']);
        $contact->addCustomField(config('amocrm.contactFields.flat'), $userData['addressFlat']);
        $contact->addCustomField(config('amocrm.contactFields.comment'), $userData['commentForOrder']);
        $contact->addCustomField(config('amocrm.contactFields.address2'), $userData['addressStreet2']);
        $contact->addCustomField(config('amocrm.contactFields.porch2'), $userData['addressPorch2']);
        $contact->addCustomField(config('amocrm.contactFields.intercom2'), $userData['addressIntercom2']);
        $contact->addCustomField(config('amocrm.contactFields.floor2'), $userData['addressFloor2']);
        $contact->addCustomField(config('amocrm.contactFields.flat2'), $userData['addressFlat2']);
        $contact->addCustomField(config('amocrm.contactFields.comment2'), $userData['commentForOrder2']);
        $excludeString = 'Рацион: ';
        $rationSExists = false;
        $rationMExists = false;
        $rationLExists = false;
        $excludesExists = false;
        foreach ($request->cart as $cartItem) {
            if ($cartItem['choosedRation']) {
                if ($cartItem['choosedRation'] === User::CHOSEN_RATION_S) {
                    $rationSExists = true;
                } elseif ($cartItem['choosedRation'] == User::CHOSEN_RATION_M) {
                    $rationMExists = true;
                } elseif ($cartItem['choosedRation'] == User::CHOSEN_RATION_L) {
                    $rationLExists = true;
                }
            }
        }
        if ($rationSExists) {
            $excludeString .= ' S';
        }
        if ($rationMExists) {
            $excludeString .= ' M';
        }
        if ($rationLExists) {
            $excludeString .= ' L';
        }
        foreach ($request->excludes as $excludeArray) {
            if (empty($excludeArray)) {
                continue;
            }
            $excludesExists = true;
            $excludeString .= ', ' . implode(", ", $excludeArray);
        }
        if ($excludesExists) {
            $contact->addCustomField(config('amocrm.contactFields.excludes'), $excludeString);
        }
        $referredBy = Auth::user()->referred_by;
        if (!empty($referredBy)) {
            $referralFriend = User::where('affiliate_id', $referredBy)->first();
            if (!empty($referralFriend)) {
                $referralFriendAmo = $amo->contact->apiList([
                    'query' => $referralFriend->phone,
                ]);
                if (!empty($referralFriendAmo)) {
                    $referralFriendAmoId = $referralFriendAmo['0']['id'];
                    $contact->addCustomField(config('amocrm.contactFields.referralFriend'), "https://otbabuli.amocrm.ru/contacts/detail/" . $referralFriendAmoId);
                }
            }
        }
        $contact->apiUpdate((int)$userAmoCrm['0']['id'], 'now');
    }

    /**
     * @param $phone
     * @param $leadName
     * @return bool[]
     */
    public static function callbackAndFastOrderFunctionality($phone, $leadName)
    {
        $amo = new \AmoCRM\Client(config('amocrm.domain'), config('amocrm.login'), config('amocrm.hash'));
        $phoneRequest = '+' . preg_replace("/[^0-9]/", '', $phone);

        $userAmoCrm = $amo->contact->apiList([
            'query' => $phoneRequest,
        ]);

        if (empty($userAmoCrm)) {
            $contact = $amo->contact;
            $contact->addCustomField(config('amocrm.contactFields.phone'), $phoneRequest, 'WORK');
            $contact->apiAdd();
        }

        $lead = $amo->lead;
        $lead['name'] = $leadName . $phoneRequest;
        $lead['date_create'] = 'now';
        $roistatVisitId = array_key_exists('roistat_visit', $_COOKIE) ? $_COOKIE['roistat_visit'] : "неизвестно";
        $lead->addCustomField(config('amocrm.leadFields.roistatVisitId'), $roistatVisitId);

        $id = $lead->apiAdd();

        $userAmocrm = $amo->contact->apiList([
            'query' => $phoneRequest,
        ]);

        $link = $amo->links;
        $link['from'] = 'leads';
        $link['from_id'] = $id;
        $link['to'] = 'contacts';
        $link['to_id'] = $userAmocrm['0']['id'];
        $link->apiLink();

        return ['success' => true];
    }

    /**
     * @param $decrementedSum
     * @param $userAmoCrm
     * @param $amo
     */
    public static function decrementBalanceForUsingBonus($decrementedSum, $userAmoCrm, $amo)
    {
        $currentBonus = 0;
        foreach ($userAmoCrm[0]['custom_fields'] as $field) {
            if ($field['id'] == config('amocrm.contactFields.balance')) {
                $currentBonus = $field['values']['0']['value'];
                break;
            }
        }
        $contact = $amo->contact;
        $contact->addCustomField(config('amocrm.contactFields.balance'), $currentBonus - $decrementedSum);

        $contact->apiUpdate((int)$userAmoCrm['0']['id'], 'now');
    }

    /**
     * получить рефералы(приглашенных пользователей) для пользователя
     * @return array
     */
    public static function getUserReferrals($user)
    {
        $refs = [];
        if (empty($user)) {
            return $refs;
        }
        //приглашенные пользователи:рефералы
        $referrals = User::where('referred_by', $user->affiliate_id)->get();
        if (!empty($referrals)) {
            $amo = new \AmoCRM\Client(config('amocrm.domain'), config('amocrm.login'), config('amocrm.hash'));
            //получает данные обо всех заказах приглашенных пользователей
            foreach ($referrals as $ref) {
                $leads = $amo->lead->apiList([
                    'query' => $ref->phone,
                ]);
                //заменяет ключи массива числами: "key"=>123 to "0"=>123
                $lead = array_values($leads);
                //получает последний элемент массива
                $lead = end($leads);

                //если последний заказ реферала был совершен после регистрации партнера
                if (date('d/m/Y', strtotime($ref->created_at)) <= date('d/m/Y', $lead['date_create'])) {
                    foreach ($lead['custom_fields'] as $custom_fields) {
                        //620209 - статус, оплачен или нет
                        if ($custom_fields['id'] == config('amocrm.contactFields.isPayed')) {
                            //если оплачен
                            if ($custom_fields['values'][0]['value'] == 1) {
                                array_push($refs, $lead);
                            }
                        }
                    }
                }
            }
        }

        return $refs;
    }

    /**
     * @param $promoCode
     * @param $cart
     * @return array
     * @throws \AmoCRM\Exception
     */
    public static function checkPromoCode($promoCode, $cart)
    {
        if ($promoCode === '+300') {
            return [
                'successfullyFound' => true,
                'promoCodeUsingText' => 'Огоооо, у вас появится еще 300 бонусов!',
                'promoCodeSaleCost' => 0,
                'moreBonusesCost' => 300,
                'promoCodeType' => 'special',
                'moreBonuses' => true,
            ];
        } else if ($promoCode === 'gy1E3') {
            if (!PromocodesUsing::where('phone', Auth::user()->phone)->where('promocodeId', $promoCode)->exists()) {
                return [
                    'successfullyFound' => true,
                    'promoCodeUsingText' => 'Огоооо, у вас появится еще 150 бонусов!',
                    'promoCodeSaleCost' => 0,
                    'moreBonusesCost' => 150,
                    'promoCodeType' => 'special',
                    'moreBonuses' => true,
                ];
            }
        }

//        else if ($promoCode === 'hot') {
//            return [
//                'successfullyFound' => true,
//                'promoCodeUsingText' => 'К заказу начислятся дополнительные бонусы, добавьте больше дней питания, чтобы увеличить кэшбек!',
//                'promoCodeSaleCost' => 0,
//                'moreBonusesCost' => 0,
//                'moreBonusesPercent' => 4,
//                'promoCodeType' => 'special',
//                'moreBonuses' => false,
//                'moreBonusesByPercent' => true,
//            ];
//        }
        $successfullyFound = false;
        $saleCost = '';
        $promoCodeType = '';
        $responseText = 'Не активирована! Неправильный промокод';
        $amo = new \AmoCRM\Client(config('amocrm.domain'), config('amocrm.login'), config('amocrm.hash'));
        $leads = $amo->lead->apiList([
            'query' => Auth::user()->phone,
        ]);
        $orders = [];
        foreach ($leads as $lead) {
            if (strpos($lead['name'], 'Сделка ') === false && strpos($lead['name'], 'Заявка с сайта ') === false
                && strpos($lead['name'], 'Заказ по телефону. Тел:') === false) {
                continue;
            }
            $orders[] = $lead;
        }

        if (strtoupper($promoCode) == 'FIRST' && count($cart) === 1) {
            $cart = $cart[0];
            if ($cart['chosenWeek'] == 4) {
                return [
                    'successfullyFound' => false,
                    'promoCodeUsingText' => 'Промокод действует на заказы от 5 до 14 дней питания',
                    'promoCodeSaleCost' => '',
                    'promoCodeType' => 'special',
                    'moreBonuses' => false,
                ];
            }
            if (count($orders) == 0) {
                return [
                    'successfullyFound' => true,
                    'promoCodeUsingText' => 'Промокод применен! Скидка 700 ₽',
                    'promoCodeSaleCost' => 700,
                    'promoCodeType' => 'special',
                    'moreBonuses' => false,
                ];
            } else {
                return [
                    'successfullyFound' => false,
                    'promoCodeUsingText' => 'Извините, промокод действует только на первый заказ',
                    'promoCodeSaleCost' => '',
                    'promoCodeType' => 'special',
                    'moreBonuses' => false,
                ];
            }
        }

        if (strtoupper($promoCode) == 'TRY') {
            if (count($orders) == 0) {
                return [
                    'successfullyFound' => true,
                    'promoCodeUsingText' => 'Промокод применен! Скидка 900 ₽',
                    'promoCodeSaleCost' => 900,
                    'promoCodeType' => 'special',
                    'moreBonuses' => false,
                ];
            } else {
                return [
                    'successfullyFound' => false,
                    'promoCodeUsingText' => 'Извините, промокод действует только на первый заказ',
                    'promoCodeSaleCost' => '',
                    'promoCodeType' => 'special',
                    'moreBonuses' => false,
                ];
            }
        }

        if (strtoupper($promoCode) == 'EDA1' || strtoupper($promoCode) == 'EDA2' ||
            strtoupper($promoCode) == 'EDA3' || strtoupper($promoCode) == 'EDA4' ||
            strtoupper($promoCode) == 'EDA5' || strtoupper($promoCode) == 'EDA6' ||
            strtoupper($promoCode) == 'EDA7' || strtoupper($promoCode) == 'EDA8' ||
            strtoupper($promoCode) == 'EDA9' || strtoupper($promoCode) == 'EDA10' ||
            strtoupper($promoCode) == 'EDA11' || strtoupper($promoCode) == 'EDA12' ||
            strtoupper($promoCode) == 'EDA13') {
            if (count($orders) == 0) {
                return [
                    'successfullyFound' => true,
                    'promoCodeUsingText' => 'Промокод применен! Скидка 900 ₽',
                    'promoCodeSaleCost' => 900,
                    'promoCodeType' => 'special',
                    'moreBonuses' => false,
                ];
            } else {
                return [
                    'successfullyFound' => false,
                    'promoCodeUsingText' => 'Извините, промокод действует только на первый заказ',
                    'promoCodeSaleCost' => '',
                    'promoCodeType' => 'special',
                    'moreBonuses' => false,
                ];
            }
        }

        if (strtoupper($promoCode) == 'LETO') {
            return [
                'successfullyFound' => true,
                'promoCodeUsingText' => 'Промокод применен! Скидка 500 ₽',
                'promoCodeSaleCost' => 500,
                'promoCodeType' => 'special',
                'moreBonuses' => false,
            ];
        }

        if (count($cart) === 1 && count($orders) == 0 && ($promoCode === 'w2t8' || $promoCode === 'g83u')) {
            $cart = $cart[0];
            if ($cart['chosenWeek'] == 1 && $cart['timeToEat'] == 5) {
                return [
                    'successfullyFound' => true,
                    'promoCodeUsingText' => 'Активирована! + 2 дня подарок',
                    'plus2Days' => true,
                ];
            }
        }

        if (count($cart) === 1 && count($orders) == 0 && $promoCode === 'w88L') {
            $cartArray = $cart[0];
            if ($cartArray['chosenWeek'] != 4 && $cartArray['chosenWeek'] != 22) {
                $successfullyFound = true;
                $saleCost = 1000;
                $responseText = "Активирована! Скидка 1000 ₽";
            }
        }

        if (count($orders) == 0 && (is_null(Auth::user()->referred_by) || Auth::user()->referred_by === $promoCode)
            && User::where('affiliate_id', $promoCode)->where('id', '!=', Auth::user()->id)->exists()) {
            return [
                'successfullyFound' => true,
                'promoCodeUsingText' => 'Огоооо, у вас появится еще 300 бонусов!',
                'promoCodeSaleCost' => 0,
                'moreBonusesCost' => 300,
                'promoCodeType' => 'referral',
                'moreBonuses' => true,
            ];
        }

//        if (!$successfullyFound) {
//            $promocodes = $amo->catalog_element->apiList(
//                [
//                    'catalog_id' => config('amocrm.catalogIdForPromoCodes')
//                ]
//            );
//
//            foreach ($promocodes as $promoCodeAmocrm) {
//                if ($promoCodeAmocrm['name'] == $promoCode) {
//                    foreach ($promoCodeAmocrm['custom_fields'] as $custom_fields) {
//                        if ($custom_fields['id'] == '618995') {
//                            if ($custom_fields['values'][0]['value'] < Carbon::now()) {
//                                break 2;
//                            }
//                        } else if ($custom_fields['id'] == '616999') {
//                            $saleCost = $custom_fields['values'][0]['value'];
//                        }
//                    }
//                    $successfullyFound = true;
//                    $responseText = "Активирована! Скидка ${saleCost} ₽";
//                    break;
//                }
//            }
//        }

        return [
            'successfullyFound' => $successfullyFound,
            'promoCodeUsingText' => $responseText,
            'promoCodeSaleCost' => $saleCost,
            'promoCodeType' => $promoCodeType,
            'moreBonuses' => false,
        ];
    }

    /**
     * @param $promoCode
     * @param $amo
     * @param $cart
     * @param $price
     * @return array
     */
    public static function usePromoCode($promoCode, $amo, $cart, $price)
    {
        $successfullyFound = false;
        $plus2Days = false;
        $saleCost = 0;
        $promoCodeType = '';

        if ($promoCode === '+300') {
            PromocodesUsing::create([
                'phone' => Auth::user()->phone,
                'promocodeId' => $promoCode,
                'description' => '+300 бонусов',
                'price' => $price,
            ]);
            return [
                'successfullyFound' => true,
                'promoCodeSaleCost' => 0,
                'promoCodeType' => 'special',
                'moreBonusesByPercent' => false,
                'moreBonusesCost' => 300,
                'moreBonusesPercent' => 0,
                'plus2Days' => false,
                'moreBonuses' => true,
            ];
        } else if ($promoCode === 'gy1E3') {
            if (!PromocodesUsing::where('phone', Auth::user()->phone)->where('promocodeId', $promoCode)->exists()) {
                PromocodesUsing::create([
                    'phone' => Auth::user()->phone,
                    'promocodeId' => $promoCode,
                    'description' => '+150 бонусов',
                    'price' => $price,
                ]);
                return [
                    'successfullyFound' => true,
                    'promoCodeSaleCost' => 0,
                    'promoCodeType' => 'special',
                    'moreBonusesCost' => 150,
                    'moreBonusesPercent' => 0,
                    'moreBonuses' => true,
                    'plus2Days' => false,
                    'moreBonusesByPercent' => false,
                ];
            }
        }
//        else if ($promoCode === 'hot') {
//            PromocodesUsing::create([
//                'phone' => Auth::user()->phone,
//                'promocodeId' => $promoCode,
//            ]);
//            return [
//                'successfullyFound' => true,
//                'promoCodeSaleCost' => 0,
//                'moreBonusesCost' => 0,
//                'moreBonusesPercent' => 4,
//                'promoCodeType' => 'special',
//                'moreBonuses' => false,
//                'plus2Days' => false,
//                'moreBonusesByPercent' => true,
//            ];
//        }
        $leads = $amo->lead->apiList([
            'query' => Auth::user()->phone,
        ]);

        $orders = [];

        foreach ($leads as $lead) {
            if (strpos($lead['name'], 'Сделка ') === false && strpos($lead['name'], 'Заявка с сайта ') === false
                && strpos($lead['name'], 'Заказ по телефону. Тел:') === false) {
                continue;
            }
            $orders[] = $lead;
        }

        if (count($cart) === 1 && count($orders) == 0 && ($promoCode === 'w2t8' || $promoCode === 'g83u')) {
            $cart = $cart[0];
            if ($cart['chosenWeek'] == 1 && $cart['timeToEat'] == 5) {
                $successfullyFound = true;
                $promoCodeType = 'special';
                $plus2Days = true;
            }
        }

        if (count($cart) === 1 && count($orders) == 0 && $promoCode === 'w88L') {
            $cartArray = $cart[0];
            if ($cartArray['chosenWeek'] != 4 && $cartArray['chosenWeek'] != 22) {
                $successfullyFound = true;
                $saleCost = 1000;
                $promoCodeType = 'special';
                PromocodesUsing::create([
                    'phone' => Auth::user()->phone,
                    'promocodeId' => $promoCode,
                    'description' => 'Скидка 1000 рубль',
                    'price' => $price - 1000,
                ]);
            }
        }

        if (count($orders) == 0 && strtoupper($promoCode) == 'FIRST' && $cart[0]['chosenWeek'] != 4 && count($cart) === 1) {
            $successfullyFound = true;
            $saleCost = 700;
            $promoCodeType = 'special';
            PromocodesUsing::create([
                'phone' => Auth::user()->phone,
                'promocodeId' => strtoupper($promoCode),
                'description' => 'Скидка 700 рубль',
                'price' => $price - 700,
            ]);
        }

        if (count($orders) == 0 && strtoupper($promoCode) == 'TRY') {
            $successfullyFound = true;
            $saleCost = 900;
            $promoCodeType = 'special';
            PromocodesUsing::create([
                'phone' => Auth::user()->phone,
                'promocodeId' => strtoupper($promoCode),
                'description' => 'Скидка 900 рубль',
                'price' => $price - 900,
            ]);
        }

        if (count($orders) == 0 && (strtoupper($promoCode) == 'EDA1' || strtoupper($promoCode) == 'EDA2' ||
                strtoupper($promoCode) == 'EDA3' || strtoupper($promoCode) == 'EDA4' ||
                strtoupper($promoCode) == 'EDA5' || strtoupper($promoCode) == 'EDA6' ||
                strtoupper($promoCode) == 'EDA7' || strtoupper($promoCode) == 'EDA8' ||
                strtoupper($promoCode) == 'EDA9' || strtoupper($promoCode) == 'EDA10' ||
                strtoupper($promoCode) == 'EDA11' || strtoupper($promoCode) == 'EDA12' ||
                strtoupper($promoCode) == 'EDA13')) {
            $successfullyFound = true;
            $saleCost = 900;
            $promoCodeType = 'special';
            PromocodesUsing::create([
                'phone' => Auth::user()->phone,
                'promocodeId' => strtoupper($promoCode),
                'description' => 'Скидка 900 рубль',
                'price' => $price - 900,
            ]);
        }

        if (strtoupper($promoCode) == 'LETO') {
            $successfullyFound = true;
            $saleCost = 500;
            $promoCodeType = 'special';

            PromocodesUsing::create([
                'phone' => Auth::user()->phone,
                'promocodeId' => strtoupper($promoCode),
                'description' => 'Скидка 500 рубль',
                'price' => $price - 500,
            ]);
        }

        if (!$successfullyFound && count($orders) == 0 && (is_null(Auth::user()->referred_by) || Auth::user()->referred_by === $promoCode)
            && User::where('affiliate_id', $promoCode)->where('id', '!=', Auth::user()->id)->exists()) {
            PromocodesUsing::create([
                'phone' => Auth::user()->phone,
                'promocodeId' => $promoCode,
                'description' => '+700 бонусов',
                'type' => 'Реферал',
                'price' => $price,
            ]);
            return [
                'successfullyFound' => true,
                'promoCodeSaleCost' => 0,
                'promoCodeType' => 'referral',
                'moreBonusesCost' => 700,
                'moreBonusesPercent' => 0,
                'moreBonuses' => true,
                'plus2Days' => false,
                'moreBonusesByPercent' => false,
            ];
        }

        return [
            'successfullyFound' => $successfullyFound,
            'promoCodeSaleCost' => $saleCost,
            'promoCodeType' => $promoCodeType,
            'moreBonuses' => false,
            'moreBonusesPercent' => 0,
            'plus2Days' => $plus2Days,
            'moreBonusesCost' => 0,
            'moreBonusesByPercent' => false,
        ];
    }

    /**
     * @param $amocrmId
     * @return array|int
     */
    public static function createTaskWhenUserChangeDeliveryParams($amocrmId)
    {
        if (empty($amocrmId)) {
            return false;
        }
        $taskDateTill = date('d.m.Y H:i:s', strtotime('tomorrow') - 1);
        $amo = new \AmoCRM\Client(config('amocrm.domain'), config('amocrm.login'), config('amocrm.hash'));
        $task = $amo->task;
        $task['element_id'] = $amocrmId;
        $task['element_type'] = 2;
        $task['task_type'] = 1;
        $task['text'] = "Клиент самостоятельно изменил доставку. Проверить!";
        $task['responsible_user_id'] = 24647101;
        $task['complete_till'] = $taskDateTill;
        return $task->apiAdd();
    }

    /**
     * @param $id
     * @param $quantity
     * @param $amo
     * @return mixed
     */
    public static function increaseQuantityOfGiftAWeek($id, $quantity, $amo)
    {
        $contact = $amo->contact;
        $contact->addCustomField(config('amocrm.contactFields.quantityOfGiftAWeek'), $quantity);
        return $contact->apiUpdate((int)$id, 'now');
    }
}
