<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Str;

class FilesController extends Controller
{
    public function uploadFile(UploadedFile $file, $folder = null, $filename = null)
    {
        $name = !is_null($filename) ? $filename : Str::random(25);

        return $file->storeAs(
            $folder,
            $name . "." . $file->getClientOriginalExtension(),
            ['gcs']
        );
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

    
}
