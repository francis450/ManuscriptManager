<?php

namespace App\Http\Controllers;

use App\Models\SubmissionCall;
use Illuminate\Http\Request;
use Inertia\Inertia;

class DashboardController extends Controller
{
    
    public function index()
    {
        // get submission all available submission calls with all related data
        $submissionCalls = SubmissionCall::with('requirements')->get();

        return Inertia::render('Dashboard', [
            'submissionCalls' => $submissionCalls
        ]);
    }
}
