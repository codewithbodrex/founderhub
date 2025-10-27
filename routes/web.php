<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\Auth\AuthenticatedSessionController;
use App\Http\Controllers\Auth\RegisteredUserController;
use App\Http\Controllers\SocialAuthController;
use App\Http\Controllers\CourseController;
use App\Http\Controllers\RoleTestController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\CourseLearningController;
use App\Http\Controllers\VideoStreamController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
*/

Route::get('/', fn () => Inertia::render('Welcome'))->name('home');

/* ===== PUBLIC (no middleware) ===== */
// Browse & detail course bebas diakses
Route::prefix('courses')->name('courses.')->group(function () {
    Route::get('/',        [CourseController::class, 'index'])->name('index');
    Route::get('/{slug}',  [CourseController::class, 'show'])
        ->where('slug', '[A-Za-z0-9\-]+')
        ->name('show');
});

// === Role Test (public: tidak perlu login) ===
Route::prefix('role-test')->name('role-test.')->group(function () {
    Route::get('/', [RoleTestController::class, 'index'])->name('index');
    Route::post('/', [RoleTestController::class, 'submit'])->name('submit');
    Route::get('/result', [RoleTestController::class, 'result'])->name('result');
});

/* ===== Guest only ===== */
Route::middleware('guest')->group(function () {
    Route::get('/login',  [AuthenticatedSessionController::class, 'create'])->name('login');
    Route::post('/login', [AuthenticatedSessionController::class, 'store']);

    Route::get('/register',  [RegisteredUserController::class, 'create'])->name('register');
    Route::post('/register', [RegisteredUserController::class, 'store']);

    // Google OAuth
    Route::get('/auth/google/redirect', [SocialAuthController::class, 'redirect'])->name('google.redirect');
    Route::get('/auth/google/callback', [SocialAuthController::class, 'callback'])->name('google.callback');
});


/* ===== Authenticated only ===== */
Route::middleware('auth')->group(function () {
    Route::post('/logout', [AuthenticatedSessionController::class, 'destroy'])->name('logout');
    Route::get('/dashboard', fn () => Inertia::render('Dashboard'))->name('dashboard');

    Route::get('/profile',  [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile',[ProfileController::class, 'update'])->name('profile.update');    

    // Start learning (akses player)
    Route::get('/courses/{course}/learn', [CourseLearningController::class, 'start'])
        ->name('courses.start')
        ->whereNumber('course'); 

    // Streaming video (via storage, aman dari direct access)
    Route::get('/lectures/{lecture}/stream', [\App\Http\Controllers\VideoStreamController::class, 'show'])
        ->name('lectures.stream')
        ->whereNumber('lecture');

    Route::prefix('api')->group(function () {
        Route::get('/lectures/{lecture}/stream', [\App\Http\Controllers\VideoStreamController::class, 'show'])
            ->name('lectures.stream');
        // (kalau belum dipindah) pindahkan juga learning API ke sini
        Route::get('/courses/{course}/learn', [\App\Http\Controllers\LearningApiController::class, 'courseData']);
        Route::post('/lectures/{lecture}/progress', [\App\Http\Controllers\LearningApiController::class, 'saveProgress']);
        Route::post('/lectures/{lecture}/complete', [\App\Http\Controllers\LearningApiController::class, 'markComplete']);
        Route::get('/lectures/{lecture}/notes', [\App\Http\Controllers\LearningApiController::class, 'getNotes']);
        Route::post('/lectures/{lecture}/notes', [\App\Http\Controllers\LearningApiController::class, 'saveNotes']);
        Route::get('/lectures/{lecture}/resources', [\App\Http\Controllers\LearningApiController::class, 'resources']);
    });        
});
