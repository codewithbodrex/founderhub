<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class UserLectureProgress extends Model
{
    protected $guarded = [];
    protected $casts = [ 'completed_at' => 'datetime' ];
}
