<?php

namespace App\Http\Controllers;

use App\Models\SubmissionCall;
use Illuminate\Http\Request;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;

class FilesController extends Controller
{
    public function uploadFile(UploadedFile $file, $folder = null, $filename = null)
    {
        $name = !is_null($filename) ? $filename : Str::random(25);

        // store file in gcs and return the file name
        $file = Storage::disk('gcs')->put($folder, $file, []);

        return $file;
    }

    public function store(Request $request)
    {
        $link = $request->hasFile('file') ? $this->uploadFile($request->file('file'), 'submission') : null;

        if ($request->hasFile('file')) {
            $link = $this->uploadFile($request->file('file'));

            return response()->json([
                'link' => $link
            ]);
        } else {
            return response()->json([
                'error' => 'No file was uploaded'
            ]);
        }
    }

    public function download($file)
    {
        return response()->download(storage_path('app/' . $file));
    }

    public function index()
    {
        $files = Storage::disk('gcs')->allFiles();

        return response()->json([
            'files' => $files
        ]);
    }

    public function attachmentFiles($id)
    {
        // get attachment documents for current user
        $attachmentDetails = SubmissionCall::find($id)->documents->where('submission_call_id', $id);  

        return response()->json([
            'attachmentDetails' => $attachmentDetails
        ]);    
    }

}
