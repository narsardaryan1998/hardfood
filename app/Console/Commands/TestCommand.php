<?php

namespace App\Console\Commands;

use App\Models\User;
use Carbon\Carbon;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\Date;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Http;

class TestCommand extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'test:command';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Command description';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
        $qqq = DB::table('menus')
            ->orderBy("weekDay")
            ->groupBy('name')
            ->where('url', 'like', '%.selcdn.ru%')
            ->get()
            ->toArray();
        foreach ($qqq as $q) {
            $img = $q->url;
            $imageName = $q->name;
            $imageName = str_replace('"', "", $imageName);
            $imageName = str_replace("'", "", $imageName);
            $path = public_path('all_images/' . $imageName . '.jpg');
            file_put_contents($path, file_get_contents($img));
        }
        dd($qqq);
        die;
        $txt_file = fopen('D:/fileGrisha/deliveryclub_part1', 'r');
        while ($line = fgets($txt_file)) {
            $customerData = json_decode($line, true);
            if (empty($customerData['data']['customer']['phone'])) {
                continue;
            }
            $phoneNumber = '+' . preg_replace("/[^0-9]/", '', $customerData['data']['customer']['phone']);
            if (empty($customerData['data']['customer']['address']['city']['title']) || ($customerData['data']['customer']['address']['city']['title'] !== 'Москва'
                    && $customerData['data']['customer']['address']['city']['title'] !== 'Московская область')) {
                continue;
            }
//        $data = [];
            $totalAmountClient = '-';
            $totalAmountVendor = '-';
            if (!empty($customerData['data']['price'])) {
                foreach ($customerData['data']['price'] as $price) {
                    if (!empty($price['type']) && $price['type'] === 'vendor' && !empty($price['value'])) {
                        $totalAmountVendor = $price['value'];
                    } else if (!empty($price['type']) && $price['type'] === 'client' && !empty($price['value'])) {
                        $totalAmountClient = $price['value'];
                    }
                }
            }
            \App\Models\TempTable::create(
                [
                    'phone' => $phoneNumber,
                    'name' => !empty($customerData['data']['customer']['name']) ? $customerData['data']['customer']['name'] : '-',
                    'email' => !empty($customerData['data']['customer']['email']) ? $customerData['data']['customer']['email'] : '-',
                    'city' => !empty($customerData['data']['customer']['address']['city']['title']) ? $customerData['data']['customer']['address']['city']['title'] : '-',
                    'total_amount_vendor' => $totalAmountVendor,
                    'total_amount_client' => $totalAmountClient,
                    'order_date' => !empty($customerData['data']['createdAt']) ? Carbon::parse($customerData['data']['createdAt'])->format('Y-m-d') : '-',
                ]
            );
//        $data[] = !empty($customerData['data']['customer']['name']) ? $customerData['data']['customer']['name'] : '-';
//        $data[] = $phoneNumber;
//        $data[] = !empty($customerData['data']['customer']['email']) ? $customerData['data']['customer']['email'] : '-';
//        $data[] = $totalAmountVendor;
//        $data[] = $totalAmountClient;
//        $data[] = !empty($customerData['data']['customer']['address']['city']['title']) ? $customerData['data']['customer']['address']['city']['title'] : '-';
//        $data[] = !empty($customerData['data']['createdAt']) ? Carbon::parse($customerData['data']['createdAt'])->format('Y-m-d') : '-';
        }
        fclose($txt_file);


//        $k = '+79163837776';
//        dd(strlen($k));
        $amo = new \AmoCRM\Client(config('amocrm.domain'), config('amocrm.login'), config('amocrm.hash'));

        $referralFriendAmo = $amo->contact->apiList([
            'query' => '+73125648768',
        ]);
        dd($referralFriendAmo);
        $leads = $amo->lead->apiList([
            'query' => '+79670841876',
        ]);
        dd($leads);
        dd($leads);


        $orderIds = D::select('order_id')
            ->groupBy('order_id')
            ->pluck('order_id')
            ->toArray();
        dd('0' == 0);
        $amo = new \AmoCRM\Client(config('amocrm.domain'), config('amocrm.login'), config('amocrm.hash'));
        $leads = $amo->lead->apiList([
            'date_create' => [
                'from' => 1650614000
            ],
        ]);
        dd($leads);
        $leads = $amo->lead->apiList([
            'id' => '31099677',
        ]);
        dd($leads);
        $response = Http::withHeaders([
            'Content-Type' => 'application/x-www-form-urlencoded',
        ])->post('https://commerce.maxoptra.ru/rest/2/authentication/createSession?accountID=otbabuli&user=grisha.90@mail.ru&password=f86FSc7v');

        $responseXml = simplexml_load_string($response->getBody()->getContents());
        $sessionID = (string)$responseXml->authResponse->sessionID;
        $statusResponse = Http::withHeaders([
            'Content-Type' => 'application/x-www-form-urlencoded',
        ])->post("https://commerce.maxoptra.ru/rest/2/distribution-api/orders/getOrderStatuses?sessionID=${sessionID}&orders=31072255-1");
        $statusResponseXml = json_decode(json_encode(simplexml_load_string($statusResponse->getBody()->getContents())), true);
        dd($statusResponseXml);
//        $statusResponseString = $statusResponseXml


        dd($ttyyy);
        dd(json_decode($response->getBody()->getContents(), true));
        dd(json_decode($response, true));
        die;
        $arr = [
            'aaa' => null
        ];
        $k = null;
        dd(!array_key_exists('aaa', $arr));
        dd(gmdate("Y-M-d H:i:s", 1649240357));
//        $seconds = round('1582802675');

//        $output = sprintf('%02d:%02d:%02d', ($seconds/ 3600),($seconds/ 60 % 60), $seconds% 60);
//        dd($output);
        $amo = new \AmoCRM\Client(config('amocrm.domain'), config('amocrm.login'), config('amocrm.hash'));
//        $promocodes = $amo->catalog_element->apiList(
//            [
//                'catalog_id' => 6683
//            ]
//        );
//
//        $successfullyFound = false;
//        $validUntilDate = '';
//        $validUntilDate = '';
//        foreach ($promocodes as $promocodeAmocrm) {
//            if ($promocodeAmocrm['name'] == 'TestPromoCode') {
//                dd($promocodeAmocrm);
//                $quantityOfUse = '';
//                foreach ($promocodeAmocrm['custom_fields'] as $custom_fields) {
//                    if ($custom_fields['id'] == '618995') {
//                        if ($custom_fields['values'][0]['value'] < Carbon::now()) {
//                            continue;
//                        } else {
//
//                        }
//                    }
//                    //616997 - количество использований
//                    if ($custom_fields['id'] == '616997') {
//                        $quantityOfUse = $custom_fields['values'][0]['value'];
//                    }
//                }
//                $element = $amo->catalog_element;
//                $element['name'] = 'TestPromoCode';
//                $element['catalog_id'] = 6683; // без catalog_id amocrm не обновит
//                $element->addCustomField(616997, (int)$quantityOfUse + 1);
//                $element->apiUpdate((int)$promocodeAmocrm['id']);
//                break;
//            }
//        }
//        die;
//        $user = User::findOrFail(1793);
//        $userAmoCrm = $amo->contact->apiList([
//            'query' => '+73252515465',
//        ]);
        $leads = $amo->lead->apiList([
            'query' => '+79670841876',
        ]);
        dd($leads);
        foreach ($userAmocrm['custom_fields'] as $value) {
            if ($value['id'] == config('amocrm.contactFields.phone')) {
                $userData['phone'] = $value['values']['0']['value'];
            } elseif ($value['id'] == config('amocrm.contactFields.address')) {
                $userData['address'] = $value['values']['0']['value'];
            }
        }
        $contact = $amo->contact;

        $contact->addCustomField(config('amocrm.contactFields.bonus'), '');
        $contact->apiUpdate((int)$userAmoCrm['0']['id'], 'now');
        dd($userAmoCrm);
        die;
        $lead = $amo->lead;
        $lead->addCustomField(config('amocrm.contactFields.isPayed'), '1');
        $lead->apiUpdate((int)'30973777', 'now');
        die;
        $user = User::findOrFail(1784);

        $refs = [];
        //приглашенные пользователи:рефералы
        $referrals = User::where('referred_by', $user->affiliate_id)->get();

        if ($referrals) {
            //получает данные обо всех заказах приглашенных пользователей
            foreach ($referrals as $ref) {
                $amo = new \AmoCRM\Client(config('amocrm.domain'), config('amocrm.login'), config('amocrm.hash'));
                $leads = $amo->lead->apiList([
                    'query' => '+7998646122',
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
        dd($refs);
    }
}
