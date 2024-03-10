<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Notifications\Notifiable;

class SubmissionCall extends Model
{
    use HasFactory, Notifiable, SoftDeletes;

    protected $fillable = [
        'title',
        'description',
        'deadline',
        'status',
        'user_id',
        'form_id',
        'form_type',
        
    ];

    public function owner()
    {
        return $this->belongsTo(User::class);
    }

    public function form()
    {
        return $this->morphTo();
    }

    public function submissions()
    {
        return $this->hasMany(Submission::class);
    }

    public function documents()
    {
        return $this->hasMany(Document::class);
    }

    public function reviews()
    {
        return $this->hasManyThrough(Review::class, Submission::class);
    }

    public function requirements()
    {
        return $this->hasOne(Requirement::class);
    }

    public function scopeActive($query)
    {
        return $query->where('status', 'active');
    }

    public function scopeInactive($query)
    {
        return $query->where('status', 'inactive');
    }
}
