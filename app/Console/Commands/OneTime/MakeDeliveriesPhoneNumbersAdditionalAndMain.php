<?php

namespace App\Console\Commands\OneTime;

use App\Models\Delivery;
use Illuminate\Console\Command;

class MakeDeliveriesPhoneNumbersAdditionalAndMain extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'number:make-deliveries-phone-numbers-additional-and-main';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Make delivery phone numbers additional and main';

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
        $deliveries = Delivery::orderBy('id', 'desc')->get();
        foreach ($deliveries as $delivery) {
            if (empty($delivery->phone)) {
                continue;
            }
            $initialPhoneArray = explode("|", $delivery->phone);
            $phoneArray = [];
            foreach ($initialPhoneArray as $value) {
                if (!empty($value)) {
                    $phoneArray[] = trim($value);
                }
            }
            if (empty($phoneArray)) {
                continue;
            }
            $phoneRequest = preg_replace("/[^0-9]/", '', $phoneArray[0]);
            $mainPhone = '+' . $phoneRequest;
            if ($mainPhone[0] !== '+') {
                $mainPhone = '+' . $mainPhone;
            }
            Delivery::where('id', $delivery->id)
                ->update([
                    'phone' => $mainPhone
                ]);
            $countPhoneArray = count($phoneArray);
            if ($countPhoneArray > 1) {
                $additionalPhone = '';
                foreach ($phoneArray as $index => $phoneNumber) {
                    if (!$index) {
                        continue;
                    }
                    if ($phoneNumber !== '+') {
                        $phoneNumber = '+' . $phoneNumber;
                    }
                    if (!$additionalPhone) {
                        $additionalPhone = $phoneNumber;
                    } else {
                        $additionalPhone .= ' | ' . $phoneNumber;
                    }
                }
                Delivery::where('id', $delivery->id)
                    ->update([
                        'additional_phone' => $additionalPhone
                    ]);
            }
        }
    }
}
