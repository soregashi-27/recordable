<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Timer extends Model
{
    protected $fillable = [
        'name', 'memo', 'category_id', 'category_name', 'category_color', 'user_id', 'stopped_at', 'started_at'
    ];

    protected $dates = ['started_at', 'stopped_at'];

    protected $with = ['user'];

    protected $hidden = ['user'];

    public function user() {
        return $this->belongsTo(User::class);
    }

    public function scopeMine($query) {
        return $query->whereUserId(auth()->user()->id);
    }

    public function scopeRunning($query) {
        return $query->whereNull('stopped_at');
    }
}