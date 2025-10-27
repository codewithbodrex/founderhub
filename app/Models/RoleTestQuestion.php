<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class RoleTestQuestion extends Model
{
    use HasFactory;
    protected $fillable = ['role','text','order'];
}
