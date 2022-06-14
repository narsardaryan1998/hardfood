<?php

namespace App\Http\Controllers;

use App\Helpers\AmoCrmHelper;
use App\Helpers\MaxoptraHelper;
use App\Models\Delivery;
use App\Models\Menu;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Http;

class PersonalAreaController extends Controller
{
    /**
     * @throws \AmoCRM\Exception
     */
    public function addAddress(Request $request)
    {
        $params = json_decode($request->params, true);
        $amo = new \AmoCRM\Client(config('amocrm.domain'), config('amocrm.login'), config('amocrm.hash'));
        $userAmoCrm = $amo->contact->apiList([
            'query' => Auth::user()->phone,
        ]);
        $address1Exists = false;
        $address2Exists = false;
        foreach ($userAmoCrm[0]['custom_fields'] as $value) {
            if ($value['id'] == config('amocrm.contactFields.address')) {
                $address1Exists = true;
            } elseif ($value['id'] == config('amocrm.contactFields.address2')) {
                $address2Exists = true;
            }
        }

        if ($address1Exists && $address2Exists) {
            return [
                'success' => false,
                'message' => 'Already 2 address exists',
            ];
        }

        if ($address1Exists) {
            $addressId = config('amocrm.contactFields.address2');
            $porchId = config('amocrm.contactFields.porch2');
            $intercomId = config('amocrm.contactFields.intercom2');
            $floorId = config('amocrm.contactFields.floor2');
            $flatId = config('amocrm.contactFields.flat2');
        } else {
            $addressId = config('amocrm.contactFields.address');
            $porchId = config('amocrm.contactFields.porch');
            $intercomId = config('amocrm.contactFields.intercom');
            $floorId = config('amocrm.contactFields.floor');
            $flatId = config('amocrm.contactFields.flat');
        }

        $contact = $amo->contact;
        $phoneForAmoCrm = '+' . Auth::user()->phone;
        $contact->addCustomField(config('amocrm.contactFields.phone'), $phoneForAmoCrm, 'WORK');
        $contact->addCustomField($addressId, $params['addressStreet']);
        $contact->addCustomField($porchId, $params['addressPorch']);
        $contact->addCustomField($intercomId, $params['addressIntercom']);
        $contact->addCustomField($floorId, $params['addressFloor']);
        $contact->addCustomField($flatId, $params['addressFlat']);
        $contact->apiUpdate((int)$userAmoCrm['0']['id'], 'now');

        return [
            'success' => true,
            'message' => 'Successfully added',
        ];
    }

    /**
     * @param Request $request
     * @return array
     * @throws \AmoCRM\Exception
     */
    public function updateAddres(Request $request)
    {
        $params = json_decode($request->params, true);
        $amo = new \AmoCRM\Client(config('amocrm.domain'), config('amocrm.login'), config('amocrm.hash'));
        $userAmoCrm = $amo->contact->apiList([
            'query' => Auth::user()->phone,
        ]);

        if ($request->index == 2) {
            $addressId = config('amocrm.contactFields.address2');
            $porchId = config('amocrm.contactFields.porch2');
            $intercomId = config('amocrm.contactFields.intercom2');
            $floorId = config('amocrm.contactFields.floor2');
            $flatId = config('amocrm.contactFields.flat2');
        } else {
            $addressId = config('amocrm.contactFields.address');
            $porchId = config('amocrm.contactFields.porch');
            $intercomId = config('amocrm.contactFields.intercom');
            $floorId = config('amocrm.contactFields.floor');
            $flatId = config('amocrm.contactFields.flat');
        }

        $contact = $amo->contact;
        $phoneForAmoCrm = '+' . Auth::user()->phone;
        $contact->addCustomField(config('amocrm.contactFields.phone'), $phoneForAmoCrm, 'WORK');
        $contact->addCustomField($addressId, $params['addressStreet']);
        $contact->addCustomField($porchId, $params['addressPorch']);
        $contact->addCustomField($intercomId, $params['addressIntercom']);
        $contact->addCustomField($floorId, $params['addressFloor']);
        $contact->addCustomField($flatId, $params['addressFlat']);
        $contact->apiUpdate((int)$userAmoCrm['0']['id'], 'now');

        $address = !empty($params['addressStreet']) ? $params['addressStreet'] : '';
        $porch = !empty($params['addressPorch']) ? $params['addressPorch'] : 'не указан';
        $intercom = !empty($params['addressIntercom']) ? $params['addressIntercom'] : 'не указан';
        $flat = !empty($params['addressFlat']) ? $params['addressFlat'] : 'не указан';
        $floor = !empty($params['addressFloor']) ? $params['addressFloor'] : 'не указан';
        $comment = !empty($params['commentForOrder']) ? $params['commentForOrder'] : 'не указан';

        $deliveryAddress = $address . ', Подьезд: ' . $porch . ', Домофон: ' . $intercom . ', Этаж: ' . $floor . ', Квартира: ' . $flat . ', Комментарии: ' . $comment;

        Delivery::where('id', $request->deliveryId)
            ->update([
                'address' => $deliveryAddress,
                'selected_address' => $request->index,
            ]);

        AmoCrmHelper::createTaskWhenUserChangeDeliveryParams($request->amocrmId);

        return [
            'success' => true,
            'message' => 'Successfully updated',
        ];
    }

    /**
     * @param Request $request
     * @return array
     * @throws \AmoCRM\Exception
     */
    public function delete(Request $request)
    {
        $amo = new \AmoCRM\Client(config('amocrm.domain'), config('amocrm.login'), config('amocrm.hash'));
        $userAmoCrm = $amo->contact->apiList([
            'query' => Auth::user()->phone,
        ]);
        if ($request->id == 2) {
            $addressId = config('amocrm.contactFields.address2');
            $porchId = config('amocrm.contactFields.porch2');
            $intercomId = config('amocrm.contactFields.intercom2');
            $floorId = config('amocrm.contactFields.floor2');
            $flatId = config('amocrm.contactFields.flat2');
        } else {
            $addressId = config('amocrm.contactFields.address');
            $porchId = config('amocrm.contactFields.porch');
            $intercomId = config('amocrm.contactFields.intercom');
            $floorId = config('amocrm.contactFields.floor');
            $flatId = config('amocrm.contactFields.flat');
        }

        $contact = $amo->contact;
        $phoneForAmoCrm = '+' . Auth::user()->phone;
        $contact->addCustomField(config('amocrm.contactFields.phone'), $phoneForAmoCrm, 'WORK');
        $contact->addCustomField($addressId, '');
        $contact->addCustomField($porchId, '');
        $contact->addCustomField($intercomId, '');
        $contact->addCustomField($floorId, '');
        $contact->addCustomField($flatId, '');
        $contact->apiUpdate((int)$userAmoCrm['0']['id'], 'now');

        return [
            'success' => true,
            'message' => 'Successfully deleted',
        ];
    }

    /**
     * @param Request $request
     * @return array
     * @throws \AmoCRM\Exception
     */
    public function updateUserDetail(Request $request)
    {
        $params = json_decode($request->params, true);
        $amo = new \AmoCRM\Client(config('amocrm.domain'), config('amocrm.login'), config('amocrm.hash'));
        $userAmoCrm = $amo->contact->apiList([
            'query' => Auth::user()->phone,
        ]);

        $contact = $amo->contact;
        $contact['name'] = $params['name'];
        $contact->addCustomField(config('amocrm.contactFields.email'), $params['email'], 'WORK');
        $contact->addCustomField(config('amocrm.contactFields.dateOfBirthday'), $params['dateOfBirthday']);
        $contact->apiUpdate((int)$userAmoCrm['0']['id'], 'now');

        return [
            'success' => true,
            'message' => 'Successfully updated',
        ];
    }

    /**
     * Get user orders
     */
    public function getUserOrders()
    {
        $amo = new \AmoCRM\Client(config('amocrm.domain'), config('amocrm.login'), config('amocrm.hash'));

        $leads = $amo->lead->apiList([
            'query' => Auth::user()->phone,
        ]);

        $userAmoCrm = $amo->contact->apiList([
            'query' => Auth::user()->phone,
        ]);
        $addressStreet = '';
        $addressStreet2 = '';
        $address = false;
        foreach ($userAmoCrm[0]['custom_fields'] as $value) {
            if ($value['id'] == config('amocrm.contactFields.address')) {
                $addressStreet .= $value['values']['0']['value'];
            }else if ($value['id'] == config('amocrm.contactFields.address2')) {
                $addressStreet2 .= $value['values']['0']['value'];
            }
        }

        $currentOrders = [];
        $oldOrders = [];
        $maxoptraIds = [];
        $minDate = null;
        $maxDate = null;
        foreach ($leads as $index => $lead) {
            if (strpos($lead['name'], 'Сделка ') === false && strpos($lead['name'], 'Заявка с сайта ') === false && strpos($lead['name'], 'Заказ по телефону. Тел:') === false) {
                continue;
            }
            $orderStatus = '';
            $orderStatusKey = '';
            if ($lead['status_id'] == '143') {
                $orderStatus = "Закрыто";
                $orderStatusKey = "closed";
            } elseif ($lead['status_id'] == '0') {
                $orderStatus = "Обработка";
                $orderStatusKey = "processing";
            } elseif ($lead['status_id'] == '142') {
                $orderStatus = "Успешно реализовано";
                $orderStatusKey = "successfullyRealized";
            } elseif ($lead['status_id'] == '24647110') {
                $orderStatus = "Новая заявка";
                $orderStatusKey = "newOrder";
            } elseif ($lead['status_id'] == '36023944') {
                $orderStatus = "Обработка";
                $orderStatusKey = "processing";
            } elseif ($lead['status_id'] == '24647116') {
                $orderStatus = "Подтверждено";
                $orderStatusKey = "confirmed";
            } elseif ($lead['status_id'] == '36024748') {
                $orderStatus = "Не дозвон";
                $orderStatusKey = "newOrder";
            } elseif ($lead['status_id'] == '24647119') {
                $orderStatus = "В работе";
                $orderStatusKey = "inWork";
            }

            $createdAt = !empty($lead['date_create']) ? gmdate("Y-m-d H:i:s", $lead['date_create']) : null;
            $paymentMethod = 'Наличными';
            $rations = 'Рацион:';
            $isPayed = '0';
            $orderNumber = $lead['id'];
            $totalPrice = $lead['price'];
            $deliveries = Delivery::select('id', 'maxoptra_id', 'delivery_date', 'address_name', 'address', 'selected_address', 'from', 'to', 's5', 's7', 'm5', 'm7', 'l5', 'l7',)->where('amocrm_id', $lead['id'])->get();
            $deliveriesIds = Delivery::select('maxoptra_id')->where('amocrm_id', $lead['id'])->pluck('maxoptra_id')->toArray();
            $minDateQuery = Delivery::select('maxoptra_id')->where('amocrm_id', $lead['id'])->min('delivery_date');
            $maxDateQuery = Delivery::select('maxoptra_id')->where('amocrm_id', $lead['id'])->max('delivery_date');

            if (empty($minDate)) {
                $minDate = $minDateQuery;
            } else if ($minDateQuery < $minDate) {
                $minDate = $minDateQuery;
            }
            if (empty($maxDate)) {
                $maxDate = $maxDateQuery;
            } else if ($maxDateQuery > $maxDate) {
                $maxDate = $maxDateQuery;
            }

            if (!empty($deliveriesIds)) {
                $maxoptraIds = array_merge($maxoptraIds, $deliveriesIds);
            }
            foreach ($lead['custom_fields'] as $value) {
                if ($value['id'] == config('amocrm.leadFields.paymentMethod')) {
                    $paymentMethod = $value['values']['0']['value'];
                } else if ($value['id'] == config('amocrm.contactFields.isPayed')) {
                    $isPayed = $value['values']['0']['value'];
                } elseif ($value['id'] == config('amocrm.leadFields.out1') || $value['id'] == config('amocrm.leadFields.out2')) {
                    if (strpos($rations, ' S') === false) {
                        $rations .= ' S';
                    }
                } elseif ($value['id'] == config('amocrm.leadFields.out4') || $value['id'] == config('amocrm.leadFields.out3')) {
                    if (strpos($rations, ' M') === false) {
                        $rations .= ' M';
                    }
                } elseif ($value['id'] == config('amocrm.leadFields.out5') || $value['id'] == config('amocrm.leadFields.out6')) {
                    if (strpos($rations, ' L') === false) {
                        $rations .= ' L';
                    }
                } elseif ($value['id'] == config('amocrm.leadFields.selectedAddress')) {
                    if ($value['values'][0]['value'] == 1) {
                        $address = $addressStreet;
                    } elseif ($value['values'][0]['value'] == 2) {
                        $address = $addressStreet2;
                    }
                }
            }
            if (!empty($addressStreet) && !$address) {
                $address = $addressStreet;
            } elseif (!$address && !empty($addressStreet2)) {
                $address = $addressStreet2;
            }
            if ($orderStatusKey === 'closed' || $orderStatusKey === 'successfullyRealized') {
                $oldOrders[] = [
                    'createdAt' => $createdAt,
                    'orderStatusByName' => $orderStatus,
                    'orderStatusKey' => $orderStatusKey,
                    'address' => $address,
                    'paymentMethod' => $paymentMethod,
                    'isPayed' => $isPayed,
                    'orderNumber' => $orderNumber,
                    'totalPrice' => $totalPrice,
                    'rations' => $rations,
                    'statusId' => $lead['status_id'],
                    'deliveries' => $deliveries,
                ];
            } else {
                $currentOrders[] = [
                    'createdAt' => $createdAt,
                    'orderStatusByName' => $orderStatus,
                    'orderStatusKey' => $orderStatusKey,
                    'address' => $address,
                    'paymentMethod' => $paymentMethod,
                    'isPayed' => $isPayed,
                    'orderNumber' => $orderNumber,
                    'totalPrice' => $totalPrice,
                    'statusId' => $lead['status_id'],
                    'deliveries' => $deliveries,
                    'rations' => $rations,
                    'deliveries_count' => count($deliveries),
                    'already_delivered_count' => 0,
                ];
            }
        }
        $maxoptraIdsString = implode('*', $maxoptraIds);
        $sessionIDResponse = Http::withHeaders([
            'Content-Type' => 'application/x-www-form-urlencoded',
        ])->post('https://commerce.maxoptra.ru/rest/2/authentication/createSession?accountID=otbabuli&user=grisha.90@mail.ru&password=MKR-qGu-d6v-RKg');

        $sessionIDResponseXml = simplexml_load_string($sessionIDResponse->getBody()->getContents());
        $sessionID = (string)$sessionIDResponseXml->authResponse->sessionID;
        $statusResponse = Http::withHeaders([
            'Content-Type' => 'application/x-www-form-urlencoded',
        ])->post("https://commerce.maxoptra.ru/rest/2/distribution-api/orders/getOrderStatuses?sessionID=${sessionID}&orders=${maxoptraIdsString}");
        $statusResponseXml = json_decode(json_encode(simplexml_load_string($statusResponse->getBody()->getContents())), true);
        if (!empty($statusResponseXml['orderStatusResponse']['orders']['order'])) {
            if (empty($statusResponseXml['orderStatusResponse']['orders']['order']['@attributes'])) {
                foreach ($statusResponseXml['orderStatusResponse']['orders']['order'] as $maxoptraOrder) {
                    foreach ($currentOrders as $index => $order) {
                        if (empty($order['deliveries'])) {
                            continue;
                        }
                        foreach ($order['deliveries'] as $delivery) {
                            if ($delivery->maxoptra_id == $maxoptraOrder['@attributes']['referenceNumber']) {
                                $delivery->status_code = $maxoptraOrder['@attributes']['status'];
                                $delivery->status_name = MaxoptraHelper::STATUS_ARRAY[$maxoptraOrder['@attributes']['status']];
                                if ($maxoptraOrder['@attributes']['status'] === 'CLOSED') {
                                    $currentOrders[$index]['already_delivered_count'] = $order['already_delivered_count'] + 1;
                                }
                                break 2;
                            }
                        }
                    }
                }
            } else {
                foreach ($currentOrders as $index => $order) {
                    if (empty($order['deliveries'])) {
                        continue;
                    }
                    foreach ($order['deliveries'] as $delivery) {
                        if ($delivery->maxoptra_id == $statusResponseXml['orderStatusResponse']['orders']['order']['@attributes']['referenceNumber']) {
                            $delivery->status_code = $statusResponseXml['orderStatusResponse']['orders']['order']['@attributes']['status'];
                            $delivery->status_name = MaxoptraHelper::STATUS_ARRAY[$statusResponseXml['orderStatusResponse']['orders']['order']['@attributes']['status']];
                            if ($statusResponseXml['orderStatusResponse']['orders']['order']['@attributes']['status'] === 'CLOSED') {
                                $currentOrders[$index]['already_delivered_count'] = $order['already_delivered_count'] + 1;
                            }
                            break 2;
                        }
                    }
                }
            }
        }
        $actualMenu = [];
        if (!empty($minDate) && !empty($maxDate)) {
            $minDateStartOfWeek = date("Y-m-d", strtotime('monday this week', strtotime($minDate)));
            $actualMenu = Menu::where('startDate', '>=', $minDateStartOfWeek)->where('startDate', '<', $maxDate)->orderBy("startDate")->get();
        }

        return [
            'currentOrders' => $currentOrders,
            'oldOrders' => $oldOrders,
            'actualMenu' => $actualMenu,
        ];
    }

    /**
     * @param Request $request
     * @return array|bool[]
     */
    public function updateDeliveryAddress(Request $request)
    {
        Delivery::where('id', $request->deliveryId)
            ->update([
                'address' => $request->deliveryAddress,
                'selected_address' => $request->selectedAddress,
            ]);

        AmoCrmHelper::createTaskWhenUserChangeDeliveryParams($request->amocrmId);

        return [
            'success' => true
        ];
    }

    /**
     * @param Request $request
     * @return array|bool[]
     * @throws \AmoCRM\Exception
     */
    public function addNewAddressForDelivery(Request $request)
    {
        $amo = new \AmoCRM\Client(config('amocrm.domain'), config('amocrm.login'), config('amocrm.hash'));
        $userAmoCrm = $amo->contact->apiList([
            'query' => Auth::user()->phone,
        ]);
        $address1Exists = false;
        $address2Exists = false;
        foreach ($userAmoCrm[0]['custom_fields'] as $value) {
            if ($value['id'] == config('amocrm.contactFields.address')) {
                $address1Exists = true;
            } elseif ($value['id'] == config('amocrm.contactFields.address2')) {
                $address2Exists = true;
            }
        }

        if ($address1Exists && $address2Exists) {
            return [
                'success' => false,
                'message' => 'Already 2 address exists',
            ];
        }

        if ($address1Exists) {
            $selectedAddress = 2;
            $addressId = config('amocrm.contactFields.address2');
            $porchId = config('amocrm.contactFields.porch2');
            $intercomId = config('amocrm.contactFields.intercom2');
            $floorId = config('amocrm.contactFields.floor2');
            $flatId = config('amocrm.contactFields.flat2');
        } else {
            $selectedAddress = 1;
            $addressId = config('amocrm.contactFields.address');
            $porchId = config('amocrm.contactFields.porch');
            $intercomId = config('amocrm.contactFields.intercom');
            $floorId = config('amocrm.contactFields.floor');
            $flatId = config('amocrm.contactFields.flat');
        }

        $contact = $amo->contact;
        $phoneForAmoCrm = '+' . Auth::user()->phone;
        $contact->addCustomField(config('amocrm.contactFields.phone'), $phoneForAmoCrm, 'WORK');
        $contact->addCustomField($addressId, $request->newAddress['addressStreet']);
        $contact->addCustomField($porchId, $request->newAddress['addressPorch']);
        $contact->addCustomField($intercomId, $request->newAddress['addressIntercom']);
        $contact->addCustomField($floorId, $request->newAddress['addressFloor']);
        $contact->addCustomField($flatId, $request->newAddress['addressFlat']);
        $contact->apiUpdate((int)$userAmoCrm['0']['id'], 'now');

        $address = !empty($request->newAddress['addressStreet']) ? $request->newAddress['addressStreet'] : '';
        $porch = !empty($request->newAddress['addressPorch']) ? $request->newAddress['addressPorch'] : 'не указан';
        $intercom = !empty($request->newAddress['addressIntercom']) ? $request->newAddress['addressIntercom'] : 'не указан';
        $flat = !empty($request->newAddress['addressFlat']) ? $request->newAddress['addressFlat'] : 'не указан';
        $floor = !empty($request->newAddress['addressFloor']) ? $request->newAddress['addressFloor'] : 'не указан';
        $comment = !empty($request->newAddress['commentForOrder']) ? $request->newAddress['commentForOrder'] : 'не указан';

        if (empty($address)) {
            return [
                'success' => false,
                'errorMessage' => 'Incorrect params',
            ];
        }

        $deliveryAddress = $address . ', Подьезд: ' . $porch . ', Домофон: ' . $intercom . ', Этаж: ' . $floor . ', Квартира: ' . $flat . ', Комментарии: ' . $comment;

        Delivery::where('id', $request->deliveryId)
            ->update([
                'address' => $deliveryAddress,
                'selected_address' => $selectedAddress,
            ]);

        AmoCrmHelper::createTaskWhenUserChangeDeliveryParams($request->amocrmId);

        return [
            'success' => true
        ];
    }

    public function getUserBonuses()
    {
        $amo = new \AmoCRM\Client(config('amocrm.domain'), config('amocrm.login'), config('amocrm.hash'));

        $leads = $amo->lead->apiList([
            'query' => Auth::user()->phone,
        ]);

        $bonusesByDate = [];
        foreach ($leads as $index => $lead) {
            if (
                (strpos($lead['name'], 'Сделка ') === false && strpos($lead['name'], 'Заявка с сайта ') === false &&
                    strpos($lead['name'], 'Заказ по телефону. Тел:') === false) || ($lead['status_id'] != '24647116' && $lead['status_id'] != '143' &&
                    $lead['status_id'] != '142' && $lead['status_id'] != '24647119')
            ) {
                continue;
            }
            $date = date('Y-m-d', $lead['date_create']);

            foreach ($lead['custom_fields'] as $value) {
                if ($value['id'] == config('amocrm.leadFields.bonus')) {
                    if ($value['values']['0']['value']) {
                        if (array_key_exists($date, $bonusesByDate)) {
                            $bonusesByDate[$date][] = [
                                'key' => 'Начисление бонусов',
                                'value' => $value['values']['0']['value']
                            ];
                        } else {
                            $bonusesByDate[$date] = [
                                [
                                    'key' => 'Начисление бонусов',
                                    'value' => $value['values']['0']['value']
                                ]
                            ];
                        }
                    }
                } else if ($value['id'] == config('amocrm.leadFields.usedBonuses')) {
                    if ($value['values']['0']['value']) {
                        if (array_key_exists($date, $bonusesByDate)) {
                            $bonusesByDate[$date][] = [
                                'key' => 'Списание бонусов',
                                'value' => $value['values']['0']['value']
                            ];
                        } else {
                            $bonusesByDate[$date] = [
                                [
                                    'key' => 'Списание бонусов',
                                    'value' => $value['values']['0']['value']
                                ]
                            ];
                        }
                    }
                }
            }
        }

        return $bonusesByDate;
    }

    /**
     * @return int
     */
    public function getUserActiveReferralsCount()
    {
        return count(\App\Helpers\AmoCrmHelper::getUserReferrals(Auth::user()));
    }
}
