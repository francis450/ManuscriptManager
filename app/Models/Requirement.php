<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Notifications\Notifiable;

class Requirement extends Model
{
    use HasFactory, Notifiable, SoftDeletes;

    protected $fillable = [
        'submission_call_id',
        'file_types',
        'max_file_size',
        'max_files',
    ];

    public function submissionCall()
    {
        return $this->belongsTo(SubmissionCall::class);
    }
}
