<?php
namespace App\Http\Controllers;

use App\Models\RoleTestQuestion;
use App\Models\RoleTestSubmission;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Cookie;
use Illuminate\Support\Str;
use Inertia\Inertia;

class RoleTestController extends Controller
{
    public function index()
    {
        $questions = RoleTestQuestion::orderBy('role')->orderBy('order')->get()
            ->groupBy('role')->map->values();

        return Inertia::render('RoleTest/Index', ['questions' => $questions]);
    }

    public function submit(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'gender' => 'required|in:male,female,other',
            'age_range' => 'required|in:16-20,21-25,26-30,>=31',
            'city' => 'required|string|max:255',
            'answers' => 'required|array|size:40',
            'answers.*' => 'required|integer|min:1|max:5',
        ]);

        $roles  = ['hustler','hacker','hipster','handler'];
        $score  = array_fill_keys($roles, 0);

        $i = 0;
        foreach ($roles as $role) {
            for ($k=0; $k<10; $k++) { $score[$role] += (int) $validated['answers'][$i++]; }
        }

        $percent = [];
        foreach ($roles as $role) { $percent[$role] = (int) round(($score[$role]/50)*100); }

        $dominant_role = collect($roles)->sortByDesc(fn($r) => $percent[$r]*100 + $score[$r])->first();

        $payload = [
            'name' => $validated['name'],
            'gender' => $validated['gender'],
            'age_range' => $validated['age_range'],
            'city' => $validated['city'],
            'score' => $score,
            'percent' => $percent,
            'dominant_role' => $dominant_role,
        ];

        // Simpan ke session untuk render halaman result saat ini
        session(['role_test' => $payload]);

        // Tambah: simpan juga ke CACHE + COOKIE supaya aman melewati register/login
        $token = (string) Str::uuid();
        Cache::put("role_test:{$token}", $payload, now()->addHours(2));           // TTL 2 jam
        Cookie::queue(cookie('role_test_token', $token, 120, null, null, false, true, false, 'Lax')); // 120 menit

        if (Auth::check()) {
            $this->persistArray($payload, Auth::id());
            session()->forget('role_test');
            Cache::forget("role_test:{$token}");
            Cookie::queue(Cookie::forget('role_test_token'));
        }

        return redirect()->route('role-test.result');
    }

    public function result()
    {
        abort_unless(session()->has('role_test'), 404);
        return Inertia::render('RoleTest/Result', session('role_test'));
    }

    /** Persist dari SESSION lama (kompat) */
    public function persistFromSession(?int $userId = null): void
    {
        if (!session()->has('role_test')) return;
        $this->persistArray(session('role_test'), $userId);
        session()->forget('role_test');
    }

    /** Persist dari ARRAY (dipakai listener cookie+cache) */
    public function persistArray(array $data, ?int $userId = null): void
    {
        $submission = RoleTestSubmission::create([
            'user_id' => $userId,
            'name' => $data['name'],
            'gender' => $data['gender'],
            'age_range' => $data['age_range'],
            'city' => $data['city'],
            'score_hustler' => $data['score']['hustler'],
            'score_hacker'  => $data['score']['hacker'],
            'score_hipster' => $data['score']['hipster'],
            'score_handler' => $data['score']['handler'],
            'percent_hustler' => $data['percent']['hustler'],
            'percent_hacker'  => $data['percent']['hacker'],
            'percent_hipster' => $data['percent']['hipster'],
            'percent_handler' => $data['percent']['handler'],
            'dominant_role'   => $data['dominant_role'],
        ]);

        if ($userId && auth()->user()) {
            $user = auth()->user();
            $user->role = $data['dominant_role'];
            $user->save();
        }

        session(['last_role_test_id' => $submission->id]);
    }
}
