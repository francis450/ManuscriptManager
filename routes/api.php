<?php

use App\Http\Controllers\FilesController;
use App\Http\Controllers\SubmissionController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('/upload', [FilesController::class, 'store']);

Route::get('/download/{file}', [FilesController::class, 'download']);

Route::get('/files', [FilesController::class, 'index']);

Route::get('/submissions/{id}/documents', [SubmissionController::class, 'show']);