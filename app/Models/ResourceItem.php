<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ResourceItem extends Model
{
    protected $guarded = [];
    public function lecture(){ return $this->belongsTo(Lecture::class); }
}
