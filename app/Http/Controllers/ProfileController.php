<?php

namespace App\Http\Controllers;

use App\Http\Requests\ProfileUpdateRequest;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;
use Inertia\Response;

class ProfileController extends Controller
{
    /**
     * Display the user's profile form.
     */
    public function edit(Request $request)
    {
        return Inertia::render('Profile/Edit', [
            'user' => $request->user()->only('id','name','email','avatar','role'),
            'flash' => session()->get('success') ? ['success' => session('success')] : (object)[],
        ]);
    }

    public function update(Request $request)
    {
        $user = $request->user();

        $validated = $request->validate([
            'name'   => ['required','string','max:255'],
            'email'  => ['required','email','max:255', Rule::unique('users')->ignore($user->id)],
            'avatar' => ['nullable','image','max:2048'], // 2MB
        ]);

        if ($request->hasFile('avatar')) {
            $path = $request->file('avatar')->store('avatars', 'public');

            // Hapus avatar lama jika berasal dari storage publik (bukan URL eksternal)
            if ($user->avatar && Str::startsWith($user->avatar, '/storage/')) {
                $old = Str::after($user->avatar, '/storage/');
                Storage::disk('public')->delete($old);
            }
            $validated['avatar'] = '/storage/'.$path;
        }

        $user->fill($validated)->save();

        return redirect()->route('profile.edit')->with('success', 'Profil berhasil diperbarui.');
    }

    /**
     * Delete the user's account.
     */
    public function destroy(Request $request): RedirectResponse
    {
        $request->validate([
            'password' => ['required', 'current_password'],
        ]);

        $user = $request->user();

        Auth::logout();

        $user->delete();

        $request->session()->invalidate();
        $request->session()->regenerateToken();

        return Redirect::to('/');
    }
}
