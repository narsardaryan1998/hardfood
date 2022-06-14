<?php

namespace App\Http\Middleware;

use Closure;

class AmocrmMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param \Illuminate\Http\Request $request
     * @param \Closure $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        if ($request->token == '90fasdf67asdfhjajktnw234pon423j4po24342n432ln432') {
            return $next($request);
        }
        abort('404');
    }
}
