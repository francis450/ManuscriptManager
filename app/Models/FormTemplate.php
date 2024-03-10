<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class FormTemplate extends Model
{
    use HasFactory;

    protected $fillable = [
        'type',
        'fields'
    ];

    protected $casts = [
        'fields' => 'array'
    ];

    public function submissionCalls() {
        return $this->morphMany(SubmissionCall::class, 'form');
    }    
}