<?php

namespace App\Helpers;

use Illuminate\Support\Facades\Auth;

class ViewHelper
{
    /**
     * @param $pageName
     * @return \Illuminate\Contracts\Foundation\Application|\Illuminate\Contracts\View\Factory|\Illuminate\Contracts\View\View
     */
    public static function index($pageName)
    {
        $user = Auth::user();
        if (!empty($user)) {
            $amo = new \AmoCRM\Client(config('amocrm.domain'), config('amocrm.login'), config('amocrm.hash'));
            $userAmoCrm = $amo->contact->apiList([
                'query' => Auth::user()->phone,
            ]);
            if (!empty($userAmoCrm)) {
                return view($pageName, ['user' => $user, 'userAmoCrm' => $userAmoCrm[0]]);
            } else {
                return view($pageName, ['user' => $user, 'userAmoCrm' => false]);
            }
        }
        return view($pageName, ['user' => false, 'userAmoCrm' => false]);
    }
}
