<?php

/*
 * This file is part of Laravel AmoCrm.
 *
 * (c) dotzero <mail@dotzero.ru>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

return [

    /*
    |--------------------------------------------------------------------------
    | Авторизация в системе amoCRM
    |--------------------------------------------------------------------------
    |
    | Эти параметры необходимы для авторизации в системе amoCRM.
    | - Поддомен компании. Приставка в домене перед .amocrm.ru;
    | - Логин пользователя. В качестве логина в системе используется e-mail;
    | - Ключ пользователя, который можно получить на странице редактирования
    |   профиля пользователя.
    |
    */

    'domain' => env('AMO_DOMAIN', 'example'),
    'login' => env('AMO_LOGIN', 'login@example.com'),
    'hash' => env('AMO_HASH', 'd56b699830e77ba53855679cb1d252da'),

    /*
    |--------------------------------------------------------------------------
    | Авторизация в системе B2B Family
    |--------------------------------------------------------------------------
    |
    | Эти параметры авторизации необходимо указать если будет использована
    | отправка писем с привязкой к сделке в amoCRM, через сервис B2B Family.
    |
    */

    'b2bfamily' => [
        'appkey' => env('B2B_APPKEY'),
        'secret' => env('B2B_SECRET'),
        'email' => env('B2B_EMAIL'),
        'password' => env('B2B_PASSWORD'),
    ],

    /*
    |--------------------------------------------------------------------------
    | Константы для AmoCrm
    |--------------------------------------------------------------------------
    |
    */

    'contactFields' => [
        'phone' => 431861,
        'address' => 613329,
        'flat' => 617127,
        'porch' => 613327,//подъезд
        'floor' => 617129,//этаж
        'intercom' => 617131,//домофон
        'email' => 431863,
        'isPayed' => 620209,
        'comment' => 685773,
        'comment2' => 782551,
        'nameForAddress' => 782167,
        'balance' => 782169,
        'address2' => 643285,
        'flat2' => 782327,
        'floor2' => 782323,
        'porch2' => 782321,
        'nameForAddress2' => 782319,
        'intercom2' => 782325,
        'referralFriend' => 782699,
        'quantityOfGiftAWeek' => 782701,
        'excludes' => 652019,
        'dateOfBirthday' => 782781,
    ],

    'leadFields' => [
        'out1' => 627881,
        'out2' => 627883,
        'out3' => 631121,
        'out4' => 631123,
        'out5' => 627879,
        'out6' => 627877,
        'promoCode' => 629229,
        'promoCodeSaleCost' => 782297,
        'promoCodeType' => 782299,
        'quantityOfPromoCodeUsage' => 616997,
        'roistatVisitId' => 636667,
        'paymentMethod' => 620123,
        'bonus' => 782557,
        'usedBonuses' => 782689,
        'selectedAddress' => 782611,
        'offer' => 782753,
    ],

    'catalogIdForPromoCodes' => 6683
];
