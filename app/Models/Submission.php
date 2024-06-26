<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Notifications\Notifiable;

class Submission extends Model
{
    use HasFactory, Notifiable, SoftDeletes;

    protected $fillable = [
        'submission_call_id',
        'user_id',
        'title',
        'description',
        'path',
        'date_submitted',
        'status',
    ];

    public function submissionCall()
    {
        return $this->belongsTo(SubmissionCall::class, 'submission_call_id', 'id');
    }

    public function owner()
    {
        return $this->belongsTo(User::class);
    }

    public function documents()
    {
        return $this->hasMany(Document::class);
    }

    public function reviews()
    {
        return $this->hasMany(Review::class);
    }

    public function reviewers(){
        return $this->hasManyThrough(User::class, Review::class, 'submission_id', 'id', 'id', 'reviewer');
    }
}
