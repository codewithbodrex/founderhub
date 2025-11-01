<?php

namespace App\Listeners;

use Illuminate\Auth\Events\Login;
use Illuminate\Auth\Events\Registered;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Cookie;
use App\Http\Controllers\RoleTestController;

class PersistRoleTestAfterAuth
{
    public function handle($event): void
    {
        $userId = optional($event->user)->id;
        if (!$userId) return;

        $token = request()->cookie('role_test_token');
        if ($token && Cache::has("role_test:{$token}")) {
            $payload = Cache::pull("role_test:{$token}");
            app(RoleTestController::class)->persistArray($payload, $userId);
            Cookie::queue(Cookie::forget('role_test_token'));
        }

        app(RoleTestController::class)->persistFromSession($userId);
    }
}
