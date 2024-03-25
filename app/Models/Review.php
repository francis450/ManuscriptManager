<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Notifications\Notifiable;

class Review extends Model
{
    use HasFactory, Notifiable, SoftDeletes;
    
    protected $fillable = [
        'submission_id',
        'rating',
        'date_reviewed',
        'reviewer',
        'status',
        'comment',
    ];

    public function submission()
    {
        return $this->belongsTo(Submission::class);
    }

    public function reviewer()
    {
        return $this->belongsTo(User::class, 'reviewer', 'id');
    }
}
