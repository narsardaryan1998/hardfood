<?php

namespace App\Console\Commands\OneTime;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\Auth;

class MakeAmoCrmPhoneNumbersWithPlus extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'numbers:make-amocrm-phone-numbers-with-plus';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Make AmoCrm phone numbers with plus';

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
//        $amo = new \AmoCRM\Client(config('amocrm.domain'), config('amocrm.login'), config('amocrm.hash'));
//        $users = $amo->contact->apiList([
//            'query' => '+73252984456',
//        ]);
//        $contact = $amo->contact;
//        $phoneForAmoCrm = '+' . Auth::user()->phone;
//        $contact->apiUpdate((int)$userAmoCrm['0']['id'], 'now');
//        $contact->addCustomField(config('amocrm.contactFields.phone'), $phoneForAmoCrm, 'WORK');
//        foreach ($users as $user) {
//            foreach ($user['custom_fields'] as $customField) {
//                if ($customField['id'] == config('amocrm.contactFields.phone')) {
//                    dd($customField['values']);
//                    foreach ($customField['values'] as $phoneNumber) {
//                        if ($phoneNumber['value'][0] !== '+') {
//                            dump($phoneNumber);
//                        }
//                    }
//                }
//            }
//        }
    }
}
