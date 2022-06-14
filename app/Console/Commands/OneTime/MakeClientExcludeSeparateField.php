<?php

namespace App\Console\Commands\OneTime;

use App\Models\Delivery;
use Illuminate\Console\Command;

class MakeClientExcludeSeparateField extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'clientExclude:make-client-exclude-separate-field';

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
        $deliveries = Delivery::where('address', 'like', '%, !!!* %')->get();
        foreach ($deliveries as $delivery) {
            $arr = explode(', !!!*', $delivery->address);
            $address = $arr[0];
            $clientExclude = str_replace("ФАСОВКА:", "", trim($arr[1]));
            $clientExclude = str_replace("Фасовка:", "", trim($clientExclude));
            $clientExclude = str_replace("ФАСОВКА :", "", trim($clientExclude));
            $clientExclude = str_replace("Фасовка :", "", trim($clientExclude));
            $clientExclude = str_replace("ФАСОВКА", "", trim($clientExclude));
            $clientExclude = str_replace("Фасовка", "", trim($clientExclude));
            Delivery::where('id', $delivery->id)
                ->update([
                    'address' => $address,
                    'client_exclude' => $clientExclude,
                ]);
        }
    }
}
