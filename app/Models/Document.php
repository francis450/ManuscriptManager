<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Notifications\Notifiable;

class Document extends Model
{
    use HasFactory, Notifiable, SoftDeletes;

    protected $fillable = [
        'name',
        'extension',
        'size',
        'submission_id',
        'submission_call_id',
        'path',
        'status',
    ];

    public function submission()
    {
        return $this->belongsTo(Submission::class);
    }

    public function submissionCall()
    {
        return $this->belongsTo(SubmissionCall::class);
    }

    // public function owner()
    // {
    //     return $this->belongsTo(User::class);
    // }
}
