<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\{Comment, Lecture};

class CommentController extends Controller
{
    public function index(Request $request, Lecture $lecture)
    {
    $comments = Comment::with('user')
    ->where('lecture_id', $lecture->id)
    ->latest()
    ->paginate(20);
    return response()->json($comments);
    }


    public function store(Request $request, Lecture $lecture)
    {
    $data = $request->validate([
    'body' => 'required|string|max:3000',
    'parent_id' => 'nullable|exists:comments,id'
    ]);


    $comment = Comment::create([
    'lecture_id' => $lecture->id,
    'user_id' => $request->user()->id,
    'body' => $data['body'],
    'parent_id' => $data['parent_id'] ?? null,
    ]);


    return response()->json($comment->load('user'));
    }
}
