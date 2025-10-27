<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Lecture extends Model
{
    protected $guarded = [];
    public function section(){ return $this->belongsTo(Section::class); }
    public function resources(){ return $this->hasMany(ResourceItem::class); }
}
