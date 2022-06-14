<?php

namespace App\Http\Controllers;

use GuzzleHttp\Client;
use SimpleXMLElement;
use Illuminate\Http\Request;
use App\Models\Delivery;
use Carbon\Carbon;

class MaxoptraController extends Controller
{

    public function sms(Request $request)
    {
        $data = $request->items;

        foreach ($data as $key => $value) {
            file_get_contents("https://sms.ru/sms/send?api_id=155D583E-8CC2-A136-757F-F0CF5F19BD48&to=" . $value['clientPhone'] . "&msg=" . urlencode(iconv("utf8", "utf-8", "Привет! У Вас доставка на " . $value['date'] . " с " . $value['from'] . ":00 до " . $value['to'] . ":00! +7(499)3227216")) . "&json=1");
        }
    }

    public function listDate(Request $request)
    {
        $items = Delivery::where('delivery_prod_date', $request->datelist)->get();
        $all = "";
        $today = "";
        $tomorrom = "";
        if ($request->datelist) {
            $all = "Всего кол. доставок: " . Delivery::where('delivery_prod_date', $request->datelist)->count();
            $today = Delivery::where('delivery_prod_date', $request->datelist)->where('delivery_date', $request->datelist)->count();;
            $tomorrom = Delivery::where('delivery_prod_date', $request->datelist)->where('delivery_date', "<>", $request->datelist)->count();
            $dt = Carbon::createFromFormat('Y-m-d', $request->datelist);
            $dt = $dt->addDays(1);
            $today = "Кол. доставок на" . " " . Carbon::parse($request->datelist)->format('Y-m-d') . ": " . $today;
            $tomorrom = "Кол. доставок на" . " " . $dt->toDateString() . ": " . $tomorrom;
        }
        if (!empty($items)) {
            foreach ($items as $index => $item) {
                $quantity = '';
                if ($item->s5 != '0' || $item->s7 != '0') {
                    $quantity .= 'S' . ((int)$item->s5 + (int)$item->s7);
                }
                if ($item->m5 != '0' || $item->m7 != '0') {
                    if ($quantity) {
                        $ration = ' M';
                    } else {
                        $ration = 'M';
                    }
                    $quantity .= $ration . ((int)$item->m5 + (int)$item->m7);
                }
                if ($item->l5 != '0' || $item->l7 != '0') {
                    if ($quantity) {
                        $ration = ' L';
                    } else {
                        $ration = 'L';
                    }
                    $quantity .= $ration . ((int)$item->l5 + (int)$item->l7);
                }
                if ($item->p5 != '0' || $item->p7 != '0') {
                    if ($quantity) {
                        $ration = ' P';
                    } else {
                        $ration = 'P';
                    }
                    $quantity .= $ration . ((int)$item->p5 + (int)$item->p7);
                }

                $instruction = $item->getNormFulladress($item->address);
                if (!empty($item->additional_phone)) {
                    $instruction .= ', Дополнительный телефон:' . $item->additional_phone;
                }
                $item->instruction = $instruction;
                $item->quantity = $quantity;
            }
        }
        return view('amocrm.allitems', [
            'items' => $items,
            'all' => $all,
            'today' => $today,
            'tomorrow' => $tomorrom
        ]);
    }

    public function listDateExcludesFasovka(Request $request)
    {
        $amo = new \AmoCRM\Client(config('amocrm.domain'), config('amocrm.login'), config('amocrm.hash'));
        $items_clear = [];
        $leads_ids = [];
        $clients_ids = [];

        $leads = $amo->lead->apiList([
            'id' => $request->id,
        ]);

        $userAmocrm = $amo->contact->apiList([
            'id' => $leads[0]['main_contact_id']
        ]);
        foreach ($userAmocrm[0]['custom_fields'] as $custom_fields) {
            if ($custom_fields['id'] == '652019') {
                $items_clear = $custom_fields['values'][0]['value'];
            }
        }
        return $items_clear;
    }

    public function listDateExcludes(Request $request)
    {
        $amo = new \AmoCRM\Client(config('amocrm.domain'), config('amocrm.login'), config('amocrm.hash'));

        $items = Delivery::where('delivery_date', $request->datelist)->get();

        $items_clear = [];
        $leads_ids = [];
        $clients_ids = [];

        foreach ($items as $value) {
            $leads_ids[] = $value->amocrm_id;
        }
        $leads = $amo->lead->apiList([
            'id' => $leads_ids,
        ]);
        foreach ($leads as $lead) {
            $clients_ids[] = $lead['main_contact_id'];
        }
        $userAmocrm = $amo->contact->apiList([
            'id' => $clients_ids,
        ]);
        foreach ($items as $value) {
            foreach ($userAmocrm as $user) {
                foreach ($user['linked_leads_id'] as $lead) {
                    if ($lead == $value->amocrm_id) {
                        foreach ($user['custom_fields'] as $custom_fields) {
                            if ($custom_fields['id'] == '652019') {
                                $packet = "";
                                if ($value->s5 > 0) {
                                    $packet = "S5";
                                }
                                if ($value->s7 > 0) {
                                    $packet = "S7";
                                }
                                if ($value->l5 > 0) {
                                    $packet = "L5";
                                }
                                if ($value->l7 > 0) {
                                    $packet = "L7";
                                }
                                if ($value->m5 > 0) {
                                    $packet = "M5";
                                }
                                if ($value->m7 > 0) {
                                    $packet = "M7";
                                }
                                $items_clear[] = [
                                    'lead' => $value->maxoptra_id,
                                    'client' => $value->client,
                                    'packet' => $packet,
                                    'exclude' => $custom_fields['values'][0]['value']
                                ];
                            }
                        }
                    }
                }
            }
        }

        return $response = [
            'items' => $items_clear
        ];
    }

    public function listDateProd(Request $request)
    {
        $items = Delivery::where('delivery_prod_date', $request->datelist)->get();

        return view('amocrm.prod', [
            'items' => $items
        ]);
    }

    public function auth()
    {
        $client = new Client();
        $res = $client->request('POST', 'http://commerce.maxoptra.ru/rest/2/authentication/createSession', [
            'form_params' => [
                'accountID' => 'otbabuli',
                'user' => 'grisha.90@mail.ru',
                'password' => 'MKR-qGu-d6v-RKg'
            ]
        ]);
        if ($res->getStatusCode() == 200) { // 200 OK
            $response_data_orders = $res->getBody()->getContents();
        }
        $xml = new SimpleXMLElement($response_data_orders);
        return $xml->authResponse->sessionID;
    }

    public function list(Request $request)
    {
        $client = new Client();
        $res = $client->request('POST', 'http://commerce.maxoptra.ru/rest/2/distribution-api/orders/getOrdersWithZone', [
            'form_params' => [
                'sessionID' => $request->token,
                'date' => $request->date,
                'aocID' => '1120'
            ]
        ]);

        if ($res->getStatusCode() == 200) { // 200 OK
            $response_data_orders = $res->getBody()->getContents();
        }

        $client = new Client();
        $res = $client->request('POST', 'http://commerce.maxoptra.ru/rest/2/distribution-api/schedules/getScheduleByAOCOnDate', [
            'form_params' => [
                'sessionID' => $request->token,
                'date' => $request->date,
                'aocID' => '1120'
            ]
        ]);

        if ($res->getStatusCode() == 200) { // 200 OK
            $response_data_deliverys = $res->getBody()->getContents();
        }


        return $response = [
            'orders' => $response_data_orders,
            'deliverys' => $response_data_deliverys
        ];
    }
}
