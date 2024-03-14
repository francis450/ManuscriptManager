<?php

namespace App\Http\Controllers;

use App\Models\SubmissionCall;
use Illuminate\Http\Request;
use Inertia\Inertia;

class DashboardController extends Controller
{
    
    public function index()
    {
        // get submission all available submission calls
        $submissionCalls = SubmissionCall::all();

        return Inertia::render('Dashboard', [
            'submissionCalls' => $submissionCalls
        ]);
    }
}
