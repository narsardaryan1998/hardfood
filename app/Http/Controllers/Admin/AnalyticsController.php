<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Delivery;
use App\Models\PromocodesUsing;
use App\Models\User;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Symfony\Component\HttpFoundation\StreamedResponse;

class AnalyticsController extends Controller
{
    /**
     * @param Request $request
     * @return array[]
     */
    public function ordersData(Request $request)
    {
        $date = $request->date;
        $mondayChosenWeek = strtotime('monday this week', strtotime($date));
        $sundayChosenWeek = strtotime('sunday this week', strtotime($date));
        $amo = new \AmoCRM\Client(config('amocrm.domain'), config('amocrm.login'), config('amocrm.hash'));
        $leads = $amo->lead->apiList([
            'date_create' => [
                'from' => $mondayChosenWeek,
                'to' => $sundayChosenWeek,
            ],
        ]);

        $tableLabels = [
            'Всего лидов', 'Всего оформлено', '- новые клиенты', '- повторные заказы клиентов',
            'Среднее кол-во дней', 'Средний чек', 'Сумма заказов за день', '- оплачен картой', '- оплачен наличными', '- не оплачены'
        ];

        $chartLabels = [
            'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'
        ];

        $tableArray = [];
        $chartArray = [];
        foreach ($tableLabels as $label) {
            $tableArray[] = [
                'name' => $label,
                'data' => [0, 0, 0, 0, 0, 0, 0, 0],
            ];
        }

        $tableTempArray = [];

        for ($i = 0; $i < 8; $i++) {
            $tableTempArray[] = [
                'allLeads' => 0,
                'totalCompleted' => 0,
                'newClients' => 0,
                'repeatedCustomerOrders' => 0,
                'avgQuantityOfDays' => 0,
                'avgBill' => 0,
                'orderTotalPerDay' => 0,
                'payedByCreditCart' => 0,
                'payedByCash' => 0,
                'notPayed' => 0,
                'totalDaysQuantity' => 0,
            ];
        }

        foreach ($leads as $lead) {
            $weekDayNumber = date('N', $lead['date_create']);
            $key = $weekDayNumber - 1;
            $tableTempArray[$key]['allLeads']++;
            $tableTempArray[7]['allLeads']++;
            if (
                (strpos($lead['name'], 'Сделка ') === false && strpos($lead['name'], 'Заявка с сайта ') === false
                    && strpos($lead['name'], 'Заказ по телефону. Тел:') === false) || ($lead['status_id'] != '142'
                    && $lead['status_id'] != '36023944' && $lead['status_id'] != '24647116' && $lead['status_id'] != '24647119')
            ) {
                continue;
            }
            $tableTempArray[$key]['totalCompleted']++;
            $tableTempArray[7]['totalCompleted']++;
            $tableTempArray[$key]['orderTotalPerDay'] += $lead['price'];
            $tableTempArray[7]['orderTotalPerDay'] += $lead['price'];
            $tableTempArray[$key]['avgBill'] = number_format((float)$tableTempArray[$key]['orderTotalPerDay'] / $tableTempArray[$key]['totalCompleted'], 2, '.', '');
            $tableTempArray[7]['avgBill'] = number_format((float)$tableTempArray[7]['orderTotalPerDay'] / $tableTempArray[7]['totalCompleted'], 2, '.', '');
            $isPayed = false;
            $paymentMethod = 'Наличными';
            $daysQuantity = 0;
            foreach ($lead['custom_fields'] as $custom_fields) {
                if ($custom_fields['id'] == config('amocrm.contactFields.isPayed')) {
                    if ($custom_fields['values'][0]['value'] == 1) {
                        $isPayed = true;
                    }
                } elseif ($custom_fields['id'] == config('amocrm.leadFields.paymentMethod')) {
                    $paymentMethod = $custom_fields['values'][0]['value'];
                } elseif ($custom_fields['id'] == config('amocrm.leadFields.out1')) {
                    $daysQuantity += (array_sum(explode('/', $custom_fields['values'][0]['value'])) * 5);
                } elseif ($custom_fields['id'] == config('amocrm.leadFields.out4')) {
                    $daysQuantity += (array_sum(explode('/', $custom_fields['values'][0]['value'])) * 7);
                } elseif ($custom_fields['id'] == config('amocrm.leadFields.out5')) {
                    $daysQuantity += (array_sum(explode('/', $custom_fields['values'][0]['value'])) * 5);
                } elseif ($custom_fields['id'] == config('amocrm.leadFields.out2')) {
                    $daysQuantity += (array_sum(explode('/', $custom_fields['values'][0]['value'])) * 7);
                } elseif ($custom_fields['id'] == config('amocrm.leadFields.out3')) {
                    $daysQuantity += (array_sum(explode('/', $custom_fields['values'][0]['value'])) * 5);
                } elseif ($custom_fields['id'] == config('amocrm.leadFields.out6')) {
                    $daysQuantity += (array_sum(explode('/', $custom_fields['values'][0]['value'])) * 7);
                }
            }
            $tableTempArray[$key]['totalDaysQuantity'] += $daysQuantity;
            $tableTempArray[7]['totalDaysQuantity'] += $daysQuantity;
            $tableTempArray[$key]['avgQuantityOfDays'] = number_format((float)$tableTempArray[$key]['totalDaysQuantity'] / $tableTempArray[$key]['totalCompleted'], 2, '.', '');
            $tableTempArray[7]['avgQuantityOfDays'] = number_format((float)$tableTempArray[7]['totalDaysQuantity'] / $tableTempArray[7]['totalCompleted'], 2, '.', '');
            if (!$isPayed) {
                $tableTempArray[$key]['notPayed']++;
                $tableTempArray[7]['notPayed']++;
            } else {
                if ($paymentMethod === 'Наличными') {
                    $tableTempArray[$key]['payedByCash']++;
                    $tableTempArray[7]['payedByCash']++;

                } else {
                    $tableTempArray[$key]['payedByCreditCart']++;
                    $tableTempArray[7]['payedByCreditCart']++;
                }
            }

            $userAmocrm = $amo->contact->apiList([
                'id' => $lead['main_contact_id'],
            ]);

            $phoneNumber = '';
            foreach ($userAmocrm[0]['custom_fields'] as $value) {
                if ($value['id'] == config('amocrm.contactFields.phone')) {
                    $phoneNumber = $value['values']['0']['value'];
                }
            }
            $oldLeads = $amo->lead->apiList([
                'query' => $phoneNumber,
            ]);

            if (empty($oldLeads)) {
                $tableTempArray[$key]['newClients']++;
                $tableTempArray[7]['newClients']++;
            }

            $findOldLeads = false;
            foreach ($oldLeads as $oldLead) {
                if ((strpos($oldLead['name'], 'Сделка ') !== false || strpos($oldLead['name'], 'Заявка с сайта ') !== false
                        || strpos($oldLead['name'], 'Заказ по телефону. Тел:') !== false) && $oldLead['id'] !== $lead['id']) {
                    $findOldLeads = true;
                    $tableTempArray[$key]['repeatedCustomerOrders']++;
                    $tableTempArray[7]['repeatedCustomerOrders']++;
                    break;
                }
            }

            if (!$findOldLeads) {
                $tableTempArray[$key]['newClients']++;
                $tableTempArray[7]['newClients']++;
            }
        }

        foreach ($tableArray as $key => $val) {
            foreach ($val['data'] as $dayNumber => $byDays) {
                if ($key === 0) {
                    $tableArray[$key]['data'][$dayNumber] = $tableTempArray[$dayNumber]['allLeads'];
                } elseif ($key === 1) {
                    $tableArray[$key]['data'][$dayNumber] = $tableTempArray[$dayNumber]['totalCompleted'];
                } elseif ($key === 2) {
                    $tableArray[$key]['data'][$dayNumber] = $tableTempArray[$dayNumber]['newClients'];
                } elseif ($key === 3) {
                    $tableArray[$key]['data'][$dayNumber] = $tableTempArray[$dayNumber]['repeatedCustomerOrders'];
                } elseif ($key === 4) {
                    $tableArray[$key]['data'][$dayNumber] = $tableTempArray[$dayNumber]['avgQuantityOfDays'];
                } elseif ($key === 5) {
                    $tableArray[$key]['data'][$dayNumber] = $tableTempArray[$dayNumber]['avgBill'];
                } elseif ($key === 6) {
                    $tableArray[$key]['data'][$dayNumber] = $tableTempArray[$dayNumber]['orderTotalPerDay'];
                } elseif ($key === 7) {
                    $tableArray[$key]['data'][$dayNumber] = $tableTempArray[$dayNumber]['payedByCreditCart'];
                } elseif ($key === 8) {
                    $tableArray[$key]['data'][$dayNumber] = $tableTempArray[$dayNumber]['payedByCash'];
                } elseif ($key === 9) {
                    $tableArray[$key]['data'][$dayNumber] = $tableTempArray[$dayNumber]['notPayed'];
                }
            }
        }

        foreach ($chartLabels as $index => $label) {
            $dataValues = array_values($tableTempArray[$index]);
            array_pop($dataValues);
            $chartArray[] = [
                'name' => $label,
                'data' => $dataValues,
            ];
        }

        return [
            'tableArray' => $tableArray,
            'chartArray' => $chartArray,
        ];
    }

    /**
     * @return StreamedResponse
     */
    public function downloadCustomerPhoneNumbersWithoutOrder()
    {
        ini_set('memory_limit', '-1');
        ini_set('max_execution_time', 0);
        $fileName = 'customer_numbers_without_order' . Carbon::now() . '.csv';

        $headers = [
            'Content-Type' => 'text/csv',
            'Cache-Control' => 'must-revalidate, post-check=0, pre-check=0',
            'Content-Disposition' => 'attachment; filename=' . $fileName,
            'Expires' => '0',
            'Pragma' => 'public',
        ];
        $response = new StreamedResponse(function () {
            $header = ['Phone Number'];
            $handle = fopen('php://output', 'w');
            fputcsv($handle, $header);

            $query = User::select('phone');

            $query->chunk(10000, function ($users) use ($handle) {
                foreach ($users as $user) {
                    if (strlen($user->phone) !== 12) {
                        continue;
                    }
                    $orderExists = Delivery::where('phone', $user->phone)->orWhere('additional_phone', $user->phone)->exists();

                    if ($orderExists) {
                        continue;
                    }

                    $data = [];
                    $data[] = $user->phone;

                    fputcsv($handle, $data);
                }
            });

            fclose($handle);
        }, 200, $headers);

        return $response->send();
    }

    /**
     * @return StreamedResponse
     */
    public function downloadCustomerPhoneNumbersWhoHadOrdersButNorCurrently()
    {
        ini_set('memory_limit', '-1');
        ini_set('max_execution_time', 0);
        $fileName = 'customer_numbers_who_had_orders_not_but_currently' . Carbon::now() . '.csv';

        $headers = [
            'Content-Type' => 'text/csv',
            'Cache-Control' => 'must-revalidate, post-check=0, pre-check=0',
            'Content-Disposition' => 'attachment; filename=' . $fileName,
            'Expires' => '0',
            'Pragma' => 'public',
        ];

        $response = new StreamedResponse(function () {
            $header = ['Phone Number'];
            $handle = fopen('php://output', 'w');
            fputcsv($handle, $header);

            $users = Delivery::select('phone')->groupBy('phone')->get();

            foreach ($users as $user) {
                if (strlen($user->phone) !== 12) {
                    continue;
                }
                $order = Delivery::where('phone', $user->phone)
                    ->orWhere('additional_phone', $user->phone)
                    ->orderBy('id', 'desc')
                    ->first();

                if (empty($order)) {
                    continue;
                }

                $date = Carbon::parse($order->delivery_date);
                $now = Carbon::now();

                if ($date > $now) {
                    continue;
                }
                $diff = $now->diffInDays($date);

                if ($diff < 21) {
                    continue;
                }

                $data = [];
                $data[] = $user->phone;

                fputcsv($handle, $data);
            }

            fclose($handle);
        }, 200, $headers);

        return $response->send();
    }

    /**
     * @return StreamedResponse
     */
    public function downloadCustomerEmails()
    {
        ini_set('memory_limit', '-1');
        ini_set('max_execution_time', 0);
        $fileName = 'customer_numbers_who_had_orders_not_but_currently' . Carbon::now() . '.csv';

        $headers = [
            'Content-Type' => 'text/csv',
            'Cache-Control' => 'must-revalidate, post-check=0, pre-check=0',
            'Content-Disposition' => 'attachment; filename=' . $fileName,
            'Expires' => '0',
            'Pragma' => 'public',
        ];

        $response = new StreamedResponse(function () {
            $header = ['Email'];
            $handle = fopen('php://output', 'w');
            fputcsv($handle, $header);

            $amo = new \AmoCRM\Client(config('amocrm.domain'), config('amocrm.login'), config('amocrm.hash'));

            $usersAmoCrmCom = $amo->contact->apiList([
                'query' => '.com',
            ]);

            $usersAmoCrmRu = $amo->contact->apiList([
                'query' => '.ru',
            ]);

            foreach ($usersAmoCrmCom as $user) {
                foreach ($user['custom_fields'] as $value) {
                    if ($value['id'] == config('amocrm.contactFields.email')) {
                        $data = [];
                        $data[] = $value['values']['0']['value'];

                        fputcsv($handle, $data);
                    }
                }
            }

            foreach ($usersAmoCrmRu as $user) {
                foreach ($user['custom_fields'] as $value) {
                    if ($value['id'] == config('amocrm.contactFields.email')) {
                        $data = [];
                        $data[] = $value['values']['0']['value'];

                        fputcsv($handle, $data);
                    }
                }
            }


            fclose($handle);
        }, 200, $headers);

        return $response->send();
    }

    /**
     * @return \Illuminate\Contracts\Foundation\Application|\Illuminate\Contracts\View\Factory|\Illuminate\Contracts\View\View
     */
    public function promocodes()
    {
        $usedPromocodes = PromocodesUsing::orderBy('id', 'desc')->get();
        $usedPromocodesArray = [];

        foreach ($usedPromocodes as $usedPromocode) {
            if (array_key_exists($usedPromocode->promocodeId, $usedPromocodesArray)) {
                $usedPromocodesArray[$usedPromocode->promocodeId]['numberOfUses'] += 1;
                $usedPromocodesArray[$usedPromocode->promocodeId]['price'] += $usedPromocode->price;
            } else {
                $usedPromocodesArray[$usedPromocode->promocodeId]['description'] = $usedPromocode->description;
                $usedPromocodesArray[$usedPromocode->promocodeId]['numberOfUses'] = 1;
                $usedPromocodesArray[$usedPromocode->promocodeId]['price'] = $usedPromocode->price;
                $usedPromocodesArray[$usedPromocode->promocodeId]['type'] = $usedPromocode->type;
            }
        }

        return view('admin.analytics.promocodes', ['usedPromocodes' => $usedPromocodesArray]);
    }


    public function common()
    {
        ini_set('memory_limit', '-1');
        ini_set('max_execution_time', 0);

        $customerDeliveries = Delivery::whereRaw("(phone IS NOT NULL AND phone !='')")
            ->whereRaw("(delivery_prod_date IS NOT NULL AND delivery_prod_date !='')")
            ->get();
        $customerDeliveries = $customerDeliveries->groupBy('phone');
        $phonesArray = [];

        foreach ($customerDeliveries as $phone => $deliveries) {
            $orderExists = false;
            foreach ($deliveries as $delivery) {
                $date = Carbon::parse($delivery->delivery_date);
                $now = Carbon::now();
                $diff = $now->diffInDays($date);
                if ($date > $now) {
                    $orderExists = true;
                    break;
                }
                if ($diff < 30) {
                    $orderExists = true;
                    break;
                }
            }

            if (!$orderExists) {
                $phonesArray[] = $phone;
            }
        }

        $fileName = 'customers_without_orders_more_than_month' . Carbon::now() . '.csv';

        $headers = [
            'Content-Type' => 'text/csv',
            'Cache-Control' => 'must-revalidate, post-check=0, pre-check=0',
            'Content-Disposition' => 'attachment; filename=' . $fileName,
            'Expires' => '0',
            'Pragma' => 'public',
        ];

        $response = new StreamedResponse(function () use ($phonesArray) {
            $header = ['Phone Number'];
            $handle = fopen('php://output', 'w');
            fputcsv($handle, $header);

            foreach ($phonesArray as $number) {
                $data = [];
                $data[] = $number;

                fputcsv($handle, $data);
            }

            fclose($handle);
        }, 200, $headers);

        return $response->send();
    }
//
//    public function common()
//    {
//        $data = [];
//        $customerDeliveries = Delivery::whereRaw("(phone IS NOT NULL AND phone !='')")
//            ->whereRaw("(amocrm_id IS NOT NULL AND amocrm_id !='')")
//            ->groupBy('amocrm_id')
//            ->get();
//        $customerDeliveries = $customerDeliveries->groupBy('phone');
//
//        $avgForAllCustomers = 0;
//        $numberOfCustomers = 0;
//        $amo = new \AmoCRM\Client(config('amocrm.domain'), config('amocrm.login'), config('amocrm.hash'));
//        foreach ($customerDeliveries as $phone => $deliveries) {
//            $avgForCustomer = 0;
//            $alreadyCalculated = false;
//            foreach ($deliveries as $delivery) {
//                $lead = $amo->lead->apiList([
//                    'id' => $delivery->amocrm_id,
//                ]);
//                if (!$alreadyCalculated && !empty($lead) && !empty($lead[0]['price'])) {
//                    $numberOfCustomers++;
//                    $alreadyCalculated = true;
//                    $avgForCustomer += $lead[0]['price'];
//                }
//            }
//            $avgForAllCustomers += $avgForCustomer;
//        }
//        dump($avgForAllCustomers);
//        dd($numberOfCustomers);
//        return view('admin.analytics.common', ['data' => $data]);
//    }
}
