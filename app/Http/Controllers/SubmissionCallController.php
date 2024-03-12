<?php

namespace App\Http\Controllers;

use App\Models\FormTemplate;
use App\Models\Requirement;
use App\Models\SubmissionCall;
use Illuminate\Http\Request;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class SubmissionCallController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $submissionCalls = SubmissionCall::where('user_id', auth()->id())->get();

        return Inertia::render('SubmissionCalls/Index', [
            'submissionCalls' => $submissionCalls,
            'formTemplates' => FormTemplate::all(),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('SubmissionCalls/Index',);
    }

    public function uploadFile(UploadedFile $file, $folder = null, $filename = null)
    {
        $name = !is_null($filename) ? $filename : Str::random(25);

        $file = Storage::disk('gcs')->put($folder, $file, []);

        return $file;
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
            'max_files' => 'required|integer',
            'file_size' => 'integer',
            'file_types' => 'array',
            'type' => 'required'
        ]);

        $formTemplateId = FormTemplate::where('type', $request->type)->value('id');

        // Create the submission call with the provided data and form template ID
        $submissionCall = SubmissionCall::create([
            'title' => $request->title,
            'description' => $request->description,
            'deadline' => $request->deadline,
            'user_id' => auth()->id(),
            'form_template_type' => $formTemplateId,
            'form_template_id' => $formTemplateId,
        ]);

        $submissionCall->requirements()->create([
            'max_files' => $request->max_files,
            'max_file_size' => $request->file_size,
            'file_types' => json_encode($request->file_types),
        ]);

        if (count($request->attachments)) {
            $attachments = collect($request->attachments);

            foreach ($attachments as $file) {
                $path = $this->uploadFile($file['file'], 'submission-calls/' . $submissionCall->id);
                $submissionCall->documents()->create([
                    'name' => $file['file']->getClientOriginalName(),
                    'extension' => $file['file']->extension(),
                    'size' => $file['file']->getSize(),
                    'path' => $path,
                ]);
            }
        }

        return Inertia::render(
            'SubmissionCalls/Show',
            [
                'submissionCall' => $submissionCall->load(['submissions', 'reviews', 'documents', 'requirements']),
                'tab' => 4,
            ]
        );
    }

    /**
     * Display the specified resource.
     */
    public function show(SubmissionCall $submissionCall)
    {
        return Inertia::render('SubmissionCalls/Show', [
            'submissionCall' => $submissionCall->load(['submissions', 'reviews', 'documents']),
            'tab' => 0,
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
    public function update(Request $request, $id)
    {
        $submissionCall = SubmissionCall::find($id);

        if(!$submissionCall) {
            return response()->json(['message' => 'Submission call not found'], 404);
        }

        $submissionCall->update([
            'title' => $request->title,
            'description' => $request->description,
            'deadline' => $request->deadline,
        ]);

        return Inertia::render('SubmissionCalls/Show', [
            'submissionCall' => $submissionCall->load(['submissions', 'reviews', 'documents']),
            'tab' => 4,
        ]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        // find the submission call
        $submissionCall = SubmissionCall::findOrFail($id);

        // delete the submission call
        $submissionCall->delete();

        // return the submission calls index page
        $submissionCalls = SubmissionCall::where('user_id', auth()->id())->get();

        return Inertia::render('SubmissionCalls/Index', [
            'submissionCalls' => $submissionCalls,
            'formTemplates' => FormTemplate::all(),
        ]);   
    }
}
