<?php


namespace App\Http\Controllers\Admin\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Foundation\Auth\AuthenticatesUsers;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Session;

class EmployeeLoginController extends Controller
{
    use AuthenticatesUsers;

    protected $redirectTo = '/admin';

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('guest:employee');
    }

    /*
     @return property guard use for login
    */
    public function guard()
    {
        return Auth::guard('employee');
    }

    // login from for employee
    public function showLoginForm()
    {
        return view('employee.login');
    }

    /**
     * @param Request $request
     * @return \Illuminate\Http\RedirectResponse
     */
    public function login(Request $request)
    {
        $pass = $request->input('password');
        $login = $request->input('login');
        if ($login == config('auth.admin_panel.login') && $pass == config('auth.admin_panel.password')) {
            Session::put('employee', 'true');
            Session::put('url.intended', "/admin");
            return redirect()->intended('/admin');
        }
        return redirect()->back()->withInput($request->only('login', 'remember'))->withErrors(['login' => 'Данные не верны!']);
    }

    /**
     * @return string
     */
    public function username()
    {
        return 'login';
    }

    /**
     * @return string
     */
    public function redirectPath()
    {
        return $this->redirectTo;
    }

    /**
     * @param Request $request
     * @param $user
     * @return \Illuminate\Http\RedirectResponse
     */
    public function authenticated(Request $request, $user)
    {
        Session::put('url.intended', "/admin");
        Session::put('employee', 'true');
        return redirect()->intended();
    }

    /**
     * @param Request $request
     * @return \Illuminate\Http\RedirectResponse
     */
    public function logout(Request $request)
    {
        Session::forget('employee');
        return redirect()->route('adminIndex');
    }
}
