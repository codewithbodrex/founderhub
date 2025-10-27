<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Str;
use Laravel\Socialite\Facades\Socialite;

class SocialAuthController extends Controller
{
    public function redirect()
    {
        return Socialite::driver('google')->redirect();
    }

    public function callback()
    {
        $googleUser = Socialite::driver('google')->user();

        // Cari user berdasarkan email (prefer), kalau tidak ada, buat baru
        $user = User::where('email', $googleUser->getEmail())->first();

        if (!$user) {
            $user = User::create([
                'name'        => $googleUser->getName() ?: $googleUser->getNickname(),
                'email'       => $googleUser->getEmail(),
                'password'    => bcrypt(Str::random(32)), // random, tidak dipakai untuk social login
                'provider'    => 'google',
                'provider_id' => (string)$googleUser->getId(),
                'avatar'      => $googleUser->getAvatar(),
                'email_verified_at' => now(), // biasanya Google verified
            ]);
        } else {
            // Link-kan akun kalau belum
            if (!$user->provider || !$user->provider_id) {
                $user->update([
                    'provider'    => 'google',
                    'provider_id' => (string)$googleUser->getId(),
                    'avatar'      => $googleUser->getAvatar() ?: $user->avatar,
                ]);
            }
        }

        Auth::login($user, remember: true);
        request()->session()->regenerate();

        return redirect()->intended(route('dashboard'));
    }
}
