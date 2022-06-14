<?php

namespace App\Console\Commands\OneTime;

use App\Models\User;
use Illuminate\Console\Command;

class MakeAllNumbersWithPlus extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'numbers:make-all-phone-numbers-with-plus';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Make all phone numbers with plus';

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
        $users = User::get();

        foreach ($users as $user) {
            if (empty($user->phone) || $user->phone[0] === '+') {
                continue;
            }
            $exists = User::where('phone', '+' . $user->phone);
            if ($exists) {
                User::where('id', $user->id)->delete();
            } else {
                User::where('id', $user->id)
                    ->update([
                        'phone' => '+' . $user->phone
                    ]);
            }
        }
    }
}
