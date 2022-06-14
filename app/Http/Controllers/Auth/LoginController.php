<?php

namespace App\Http\Controllers\Auth;

use App\Helpers\AmoCrmHelper;
use App\Http\Controllers\Controller;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Hash;
use Illuminate\Support\Facades\Log;

class LoginController extends Controller
{
    /**
     * @return array|false[]
     */
    public function index()
    {
        $user = Auth::user();
        if (!empty($user)) {
            $amo = new \AmoCRM\Client(config('amocrm.domain'), config('amocrm.login'), config('amocrm.hash'));
            $userAmoCrm = $amo->contact->apiList([
                'query' => Auth::user()->phone,
            ]);
            if (!empty($userAmoCrm)) {
                return [
                    'user' => $user,
                    'userAmoCrm' => $userAmoCrm[0]
                ];
            } else {
                return [
                    'user' => $user,
                    'userAmoCrm' => false
                ];
            }
        }

        return [
            'user' => false,
            'userAmoCrm' => false
        ];
    }

    /**
     *Выход из панели пользователя
     * @return bool[]
     */
    public function logout()
    {
        Auth::logout();

        return ['success' => true];
    }

    /**
     * оптравляет пользователю ключ для входа
     * @param Request $request : номер телефона пользователя
     * @return array|false|string
     */
    public function getSms(Request $request)
    {
        //убирает знак + с номера
        AmoCrmHelper::callbackAndFastOrderFunctionality($request->phone, 'Клиент пытался зайти: ');
        $phoneRequest = preg_replace("/[^0-9]/", '', $request->phone);
        $smscLogin = config('smsc.login');
        $smscPassword = config('smsc.password');
        $phoneRequestWithPlus = '+' . $phoneRequest;
        if ($user = User::where('phone', $phoneRequestWithPlus)->first()) {
            $gen_password = $this->generatePasswordForEnter($user);
            Log::channel('sms-code')->info('phone: ' . $phoneRequestWithPlus . '  ___   Code:' . $gen_password);

            //https-запрос для отправки пароля на номер пользователя
            file_get_contents("https://smsc.ru/sys/send.php?login=${smscLogin}&psw=${smscPassword}&phones=${phoneRequest}&mes=" . urlencode("Ваш код для входа: " . $gen_password));
            $response_data = [
                'password' => intval($gen_password),
                'getCodeSms' => true,
            ];

            return json_encode($response_data);
        } else {
            $gen_password = rand(1111, 9999);
            $user = new User;
            $user->phone = $phoneRequestWithPlus;
            $user->password = Hash::make($gen_password);
            $user->save();
            Log::channel('sms-code')->info('phone: ' . $phoneRequestWithPlus . '  ___   Code:' . $gen_password);
            file_get_contents("https://smsc.ru/sys/send.php?login=${smscLogin}&psw=${smscPassword}&phones=${phoneRequest}&mes=" . urlencode("Ваш код для входа: " . $gen_password));

            $response_data = [
                'password' => intval($gen_password),
                'getCodeSms' => true,
            ];

            return json_encode($response_data);
        }
    }

    /**
     *производит авторизацию пользователя
     * @param Request $request
     * @return array
     */
    public function authorization(Request $request)
    {
        $phoneRequest = preg_replace("/[^0-9]/", '', $request->phone);
        $passwordRequest = preg_replace("/[^0-9]/", '', $request->password);
        $phoneRequestWithPlus = '+' . $phoneRequest;
        $responseData = [
            'success' => false,
            'errorMessage' => 'Неправильный код'
        ];

        if (Auth::attempt(['phone' => $phoneRequestWithPlus, 'password' => $passwordRequest])) {
            $user = Auth::user();

            $responseData = [
                'user' => $user,
                'success' => true
            ];

            //Записываем во внешние куки для отслеживания пользователя
            setcookie("loginEvent", 1, time() + 3600, "/", "", 1);
        }

        return $responseData;
    }

    /**
     * генерирует для пользователя ключ для входа
     * @param $user
     * @return int
     */
    private function generatePasswordForEnter($user)
    {
        $gen_password = rand(1111, 9999);
        $password = Hash::make($gen_password);
        $user->password = $password;
        $user->update();

        return $gen_password;
    }

    /**
     * получить данные о пользователе из amoCrm
     * @param Request $request
     * @return false
     */
    public function userAmocrm(Request $request)
    {
        if (Auth::user() && Auth::user()->phone) {
            $amo = new \AmoCRM\Client(config('amocrm.domain'), config('amocrm.login'), config('amocrm.hash'));
            $userAmoCrm = $amo->contact->apiList([
                'query' => Auth::user()->phone,
            ]);

            if (!empty($userAmoCrm)) {
                return AmoCrmHelper::getUserData($userAmoCrm[0]);
            }
        }

        return false;
    }
}
