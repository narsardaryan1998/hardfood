<?php

use Illuminate\Support\Facades\Route;

Route::get('/', 'App\Http\Controllers\ViewController@index')->middleware('referral')->name('index');
Route::get('/sale900', 'App\Http\Controllers\ViewController@sale900')->name('sale900');
Route::get('/gift2days', 'App\Http\Controllers\ViewController@gift2Days')->name('gift2Days');
Route::group(['middleware' => ['auth']], function () {
    Route::group(['prefix' => 'personal-area'], function () {
        Route::get('/', 'App\Http\Controllers\ViewController@personalArea')->name('personal-area');
        Route::get('/referrals', 'App\Http\Controllers\ViewController@referrals')->name('referrals');
        Route::get('/orders', 'App\Http\Controllers\ViewController@orders')->name('orders');
        Route::get('/bonuses', 'App\Http\Controllers\ViewController@bonuses')->name('bonuses');
        Route::get('/my-preferences', 'App\Http\Controllers\ViewController@myPreferences')->name('myPreferences');
    });
    /**
     * API
     */
    Route::group(['prefix' => 'api'], function () {
        Route::group(['prefix' => 'add-order'], function () {
            Route::post('/order-to-crm', 'App\Http\Controllers\OrderController@addOrderToAmo');
            Route::post('/order-to-crm-gift-a-week', 'App\Http\Controllers\OrderController@addOrderToAmoGiftAWeek');
            Route::post('/update-lead', 'App\Http\Controllers\OrderController@updateLead');
        });
        Route::group(['prefix' => 'address'], function () {
            Route::post('add', 'App\Http\Controllers\PersonalAreaController@addAddress');
            Route::post('update', 'App\Http\Controllers\PersonalAreaController@updateAddres');
            Route::post('delete', 'App\Http\Controllers\PersonalAreaController@delete');
        });
        Route::post('update-user-detail', 'App\Http\Controllers\PersonalAreaController@updateUserDetail');
        Route::get('/get-user-orders', 'App\Http\Controllers\PersonalAreaController@getUserOrders');
        Route::post('/get-actual-menu', 'App\Http\Controllers\MenuController@getActualMenu')->name('getActualMenu');
        Route::post('/check-promo-code', 'App\Http\Controllers\OrderController@checkPromoCode');
        Route::post('/update-delivery-address', 'App\Http\Controllers\PersonalAreaController@updateDeliveryAddress');
        Route::post('/add-new-address-for-delivery', 'App\Http\Controllers\PersonalAreaController@addNewAddressForDelivery');
        Route::get('/get-user-bonuses', 'App\Http\Controllers\PersonalAreaController@getUserBonuses');
        Route::get('/get-user-active-referrals-count', 'App\Http\Controllers\PersonalAreaController@getUserActiveReferralsCount');
    });
});
Route::get('/gratitude', 'App\Http\Controllers\ViewController@gratitude')->name('gratitude');
Route::get('/rules', 'App\Http\Controllers\ViewController@rules')->name('rules');

Route::group(['prefix' => 'blog'], function () {
    Route::get('/', 'App\Http\Controllers\ViewController@blog')->name('blog');
    Route::get('/avocado', 'App\Http\Controllers\ViewController@blogAvocado')->name('blogAvocado');
    Route::get('/diet', 'App\Http\Controllers\ViewController@blogDiet')->name('blogDiet');
    Route::get('/stevia', 'App\Http\Controllers\ViewController@blogStevia')->name('blogStevia');
    Route::get('/appetite', 'App\Http\Controllers\ViewController@blogAppetite')->name('blogAppetite');
    Route::get('/burn', 'App\Http\Controllers\ViewController@blogBurn')->name('blogBurn');
    Route::get('/drying', 'App\Http\Controllers\ViewController@blogDrying')->name('blogDrying');
    Route::get('/delivery', 'App\Http\Controllers\ViewController@blogDelivery')->name('blogDelivery');
    Route::get('/nutrition', 'App\Http\Controllers\ViewController@blogNutrition')->name('blogNutrition');
    Route::get('/breakfast', 'App\Http\Controllers\ViewController@blogBreakfast')->name('blogBreakfast');
    Route::get('/top', 'App\Http\Controllers\ViewController@blogTop')->name('blogTop');
});
/**
 * API
 */
Route::group(['prefix' => 'api'], function () {
    Route::get('/get-user', 'App\Http\Controllers\Auth\LoginController@userAmocrm');
    Route::post('/get-simple-menu', 'App\Http\Controllers\MenuController@getSimpleMenu')->name('getSimpleMenu');
    Route::post('/callback', 'App\Http\Controllers\OrderController@addCallBackToAmo');
    Route::post('/fast-order', 'App\Http\Controllers\OrderController@fastOrder');
    Route::get('/search-address', 'App\Http\Controllers\OrderController@searchAddress');
});

/**
 * Группа маршрутов для авторизации пользователя
 */
Route::group(['prefix' => 'login'], function () {
    Route::get('/', 'App\Http\Controllers\Auth\LoginController@index')->name('loginIndex');
    Route::get('/get-sms', 'App\Http\Controllers\Auth\LoginController@getSms')->name('getSms');
    Route::get('/auth', 'App\Http\Controllers\Auth\LoginController@authorization')->name('authorization');
});
Route::get('/logout', 'App\Http\Controllers\Auth\LoginController@logout')->name('loginOut');


// ???
Route::get('/testamo/{id}', 'App\Http\Controllers\DeliveryController@list');
Route::get('/maxoptralist', 'App\Http\Controllers\MaxoptraController@list');
Route::get('/maxoptralistdate', 'App\Http\Controllers\MaxoptraController@listDate');
Route::get('/maxoptralistdateprod', 'App\Http\Controllers\MaxoptraController@listDateProd');
Route::get('/maxoptralistdateexcludes', function () {
    return view('amocrm.excludes');
});
Route::get('/maxoptralistdateexclude', 'App\Http\Controllers\MaxoptraController@listDateExcludes');
Route::get('/listDateExcludesFasovka', 'App\Http\Controllers\MaxoptraController@listDateExcludesFasovka');
Route::post('/maxoptralistsms', 'App\Http\Controllers\MaxoptraController@sms');
Route::get('/maxoptraauth', 'App\Http\Controllers\MaxoptraController@auth');
Route::group(['middleware' => 'amocrm'], function () {
    Route::group(['prefix' => 'amocrm'], function () {
        Route::group(['prefix' => 'delivery'], function () {
            Route::get('/{id}', 'App\Http\Controllers\DeliveryController@list')->where('id', '[0-9]+');
            Route::get('/list', 'App\Http\Controllers\DeliveryController@allItems');
            Route::get('/maxoptra', function () {
                return view('maxoptra.list');
            });
        });
    });
});

//запросы из amoCrmListComponent.vue
Route::post('/deliverys', 'App\Http\Controllers\DeliveryController@addToDB');
Route::post('/deliverysdelete', 'App\Http\Controllers\DeliveryController@delete');
Route::post('/deliverysdeleteamo', 'App\Http\Controllers\DeliveryController@deleteAmo');
Route::get('/yandex_10f321d2c5c3c823.html', function () {
    return File::get(public_path() . '/yandex_10f321d2c5c3c823.html');
})->name('yandex');

Route::group(['prefix' => 'employee'], function () {
    Route::get('/add', 'App\Http\Controllers\Admin\EmployeeController@addEmployeeView')->name('addEmployeeView');
    Route::get('/postAdd', 'App\Http\Controllers\Admin\EmployeeController@addEmployee')->name('postAdd');
});

Route::group(['prefix' => 'admin', 'middleware' => ['web', 'employee']], function () {
    Route::get('/', 'App\Http\Controllers\Admin\AdminController@index')->name('adminIndex');
    Route::get('/google/{week}', 'App\Http\Controllers\Admin\AdminController@google');
    Route::group(['prefix' => 'promocodes'], function () {
        Route::get('/', 'App\Http\Controllers\Admin\AdminController@promocodeIndex')->name('promocodeIndex');
        Route::get('/add', 'App\Http\Controllers\Admin\AdminController@promocodeAdd')->name('promocodeAdd');
    });

    Route::group(['prefix' => 'menu'], function () {
        Route::get('/', 'App\Http\Controllers\MenuController@menuIndex')->name('menuIndex');
        Route::get('/iiko', 'App\Http\Controllers\MenuController@menuIIKO')->name('menuIIKO');
        Route::get('/history', 'App\Http\Controllers\MenuController@menuHistory')->name('menuHistory');
        Route::get('/history/{startDate}', 'App\Http\Controllers\MenuController@getMenuByDate');
        Route::get('/getMenuForWeek', 'App\Http\Controllers\MenuController@getMenuForWeek')->name('getMenuForWeek');
        Route::get('/import', 'App\Http\Controllers\Admin\AdminController@import')->name('import');
        Route::get('/add', 'App\Http\Controllers\Admin\AdminController@menuAdd')->name('menuAdd');
        Route::post('/add', 'App\Http\Controllers\Admin\AdminController@postMenuAdd')->name('postMenuAdd');
        Route::post('/importExcel', 'App\Http\Controllers\Admin\AdminController@importExcel')->name('importExcel');
        Route::post('/addMenuScheduleFromIiko', 'App\Http\Controllers\MenuController@addMenuScheduleFromIiko')->name('addMenuScheduleFromIiko');
    });

    Route::group(['prefix' => 'testimonials'], function () {
        Route::get('/', 'App\Http\Controllers\Admin\AdminController@testimonialsIndex')->name('testimonialsIndex');
    });
    Route::group(['prefix' => 'analytics'], function () {
        Route::get('orders', function () {
            return view('admin.analytics.orders');
        })->name('orderAnalytics');
        Route::post('/orders', 'App\Http\Controllers\Admin\AnalyticsController@ordersData');
        Route::get('/promocodes', 'App\Http\Controllers\Admin\AnalyticsController@promocodes')->name('promocodeAnalytics');
        Route::get('/common', 'App\Http\Controllers\Admin\AnalyticsController@common');
    });

    Route::get('/iiko', 'App\Http\Controllers\Admin\IikoController@getMenu')->name('test');
});

Route::get('/employee/login', 'App\Http\Controllers\Admin\Auth\EmployeeLoginController@showLoginForm')->name('employeeLogin');
Route::post('/employee/login', 'App\Http\Controllers\Admin\Auth\EmployeeLoginController@login')->name('employee.login.post');
Route::get('/employee/logout', 'App\Http\Controllers\Admin\Auth\EmployeeLoginController@logout')->name('employee.logout');
