<?php

namespace App\Http\Controllers;

use App\Models\FormTemplate;
use Illuminate\Http\Request;

class FormTemplateController extends Controller
{
    public function show($id) {
        $formTemplate = FormTemplate::findOrFail($id);

        return response()->json([
            $formTemplate
        ],200);
    }
}
