<?php
namespace App\Listeners;

use App\Http\Controllers\RoleTestController;
use Illuminate\Auth\Events\Login;
use Illuminate\Auth\Events\Registered;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Cookie;

class PersistRoleTestAfterLogin
{
    public function handle($event): void
    {
        // 1) Coba dari session (kalau masih ada)
        if (session()->has('role_test')) {
            app(RoleTestController::class)->persistFromSession(optional(auth()->user())->id);
            return;
        }

        // 2) Fallback: cookie + cache (aman melewati register/login)
        $token = request()->cookie('role_test_token');
        if (!$token) return;

        $data = Cache::pull("role_test:{$token}"); // pull = ambil & hapus
        Cookie::queue(Cookie::forget('role_test_token'));

        if (!$data || !is_array($data)) return;

        app(RoleTestController::class)->persistArray($data, optional(auth()->user())->id);
    }
}
