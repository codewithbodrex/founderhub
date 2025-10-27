<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class RoleTestSubmission extends Model
{
    use HasFactory;
    protected $fillable = [
    'user_id','name','gender','age_range','city',
    'score_hustler','score_hacker','score_hipster','score_handler',
    'percent_hustler','percent_hacker','percent_hipster','percent_handler',
    'dominant_role',
    ];


    public function user()
    {
    return $this->belongsTo(User::class);
    }    
}
