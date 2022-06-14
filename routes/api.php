<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
Route::get('/download-customer-numbers-without-order', 'App\Http\Controllers\Admin\AnalyticsController@downloadCustomerPhoneNumbersWithoutOrder');
Route::get('/download-customer-numbers-who-had-orders-but-not-currently', 'App\Http\Controllers\Admin\AnalyticsController@downloadCustomerPhoneNumbersWhoHadOrdersButNorCurrently');
Route::get('/download-customer-emails', 'App\Http\Controllers\Admin\AnalyticsController@downloadCustomerEmails');

