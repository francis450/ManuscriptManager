<?php

namespace App\Http\Controllers;

use App\Models\Document;
use App\Models\Submission;
use App\Models\SubmissionCall;
use Illuminate\Http\Request;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class SubmissionController extends Controller
{

    public function documents($id) {
        // find the documents
        $document = Document::findOrFail($id);

        return response()->json([
            $document
        ]);
    }
    public function show(Submission $submission)
    {
        return Inertia::render('Submission/Show', [
            'submission' => $submission->load(['documents', 'reviews.reviewer']),
            'tab' => 0
        ]);
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
    public function store($id, Request $request)
    {
        // find submission call
        $submissionCall = SubmissionCall::findOrFail($id);
        $paths = [];

        // create submission
        $submission = $submissionCall->submissions()->create([
            'user_id' => auth()->id(),
            'title' => $request->title,
            'description' => $request->description,
            'date_submitted' => now(),
            'status' => 'pending',
        ]);

        if (count($request->files)) {
            $files = collect($request->file('files'));
            // $paths[] =  $files;
            $count = count($files);

            for ($i = 0; $i < $count; $i++) {
                // $count++;
                $file = $files[$i]['file'];
                $path = $this->uploadFile($file, 'submission-calls/' . $submissionCall->id . '/submissions/' . $submission->id);
                $submission->documents()->create([
                    'name' => $file->getClientOriginalName(),
                    'extension' => $file->extension(),
                    'size' => $file->getSize(),
                    'path' => $path,
                ]);
                $paths[] = $path;
            }
        }

        return Inertia::render('Submission/Show', [
            'submission' => $submission->load(['documents', 'reviews', 'reviewers']),
            'tab' => 0
        ]);
    }

    // Other methods remain unchanged...
}
