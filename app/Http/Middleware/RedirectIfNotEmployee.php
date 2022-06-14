<?php


namespace App\Http\Middleware;

use Closure;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Session;

class RedirectIfNotEmployee
{
    /*
    Handle an incoming request.
    @param  \Illuminate\Http\Request  $request
    @param  \Closure  $next
    @return mixed
    */
    public function handle($request, Closure $next, $guard = "employee")
    {
//        $auth = Auth::guard('employee');
//        if (!$auth->check()) {
//            return redirect(route('employeeLogin'));
//        }
        $value = Session::get('employee');
        if ($value == "true") {
            return $next($request);
        }
        return redirect(route('employeeLogin'));
    }
}
