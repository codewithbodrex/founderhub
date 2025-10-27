<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Comment extends Model
{
    protected $guarded = [];
    public function user(): BelongsTo { return $this->belongsTo(User::class); }
    public function lecture(): BelongsTo { return $this->belongsTo(Lecture::class); }
    public function parent(): BelongsTo { return $this->belongsTo(Comment::class, 'parent_id'); }

}
