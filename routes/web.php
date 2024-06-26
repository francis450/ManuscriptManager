<?php

use App\Http\Controllers\DashboardController;
use App\Http\Controllers\FilesController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\SubmissionCallController;
use App\Http\Controllers\SubmissionController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', [DashboardController::class, 'index'])->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
    Route::post('/upload', [FilesController::class, 'store']);
});

Route::middleware(['auth:sanctum', 'verified'])->group(function () {
    Route::get('/submissionCall/{submissionCall}', [SubmissionCallController::class, 'show'])->name('submissionCall.show');
    Route::get('/submissionCalls', [SubmissionCallController::class, 'index'])->name('submissionCalls.index');
    Route::post('/submissionCallForm', [SubmissionCallController::class, 'store'])->name('submissionCallForm.store');
    Route::post('/submissionCall/{id}', [SubmissionCallController::class, 'update'])->name('submissionCall.update');
    Route::delete('/submissionCall/{id}', [SubmissionCallController::class, 'destroy'])->name('submissionCall.destroy');
    Route::post('/submissionCall/{id}/submit', [SubmissionController::class, 'store'])->name('submissionCall.submit');
});

Route::middleware(['auth:sanctum', 'verified'])->group(function () {
    Route::get('/submission/{submission}', [SubmissionController::class, 'show'])->name('submission.show');
});

Route::middleware(['auth:sanctum', 'verified'])->group(function (){
    Route::get('/submit', function(){
        return Inertia::render('Submit/SubmissionForm');
    });

});

require __DIR__.'/auth.php';
