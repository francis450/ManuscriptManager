<?php

namespace App\Http\Controllers;

use App\Models\SubmissionCall;
use Illuminate\Http\Request;
use Inertia\Inertia;

class SubmissionCallController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        // Get all submission calls
        $submissionCalls = SubmissionCall::all();

        // Return the submission calls to the view
        return Inertia::render('SubmissionCalls/Index', [
            'submissionCalls' => $submissionCalls,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('SubmissionCalls/Index');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $this->validate($request, [
            'title' => 'required|unique:submission_calls|max:255',
            'description' => 'required',
            'deadline' => 'required|date',
        ]);

        SubmissionCall::create([
            'title' => $request->title,
            'description' => $request->description,
            'deadline' => $request->deadline,
            'user_id' => auth()->id(),
        ]);

        return redirect('/submissionCalls');
    }

    /**
     * Display the specified resource.
     */
    public function show(SubmissionCall $submissionCall)
    {
        return Inertia::render('SubmissionCalls/Show', [
            'submissionCall' => $submissionCall->load(['submissions', 'reviews', 'documents']),
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(SubmissionCall $submissionCall)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, SubmissionCall $submissionCall)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(SubmissionCall $submissionCall)
    {
        //
    }
}
