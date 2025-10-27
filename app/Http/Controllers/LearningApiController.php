<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\{Course, Lecture, UserLectureProgress, Note, ResourceItem};
use Illuminate\Support\Facades\DB;


class LearningApiController extends Controller
{
public function courseData(Request $request, Course $course)
{
    $user = $request->user();

    $course->load([
        'sections' => fn ($q) => $q->orderBy('position'),
        'sections.lectures' => fn ($q) => $q->orderBy('position'),
    ]);

    // flatten lectures safely
    $lectures = $course->sections->flatMap(function ($sec) {
        return $sec->lectures ?? collect();
    });
    $lectureIds = $lectures->pluck('id');

    $progress = UserLectureProgress::where('user_id', $user->id)
        ->whereIn('lecture_id', $lectureIds->all() ?: [0])
        ->get()
        ->keyBy('lecture_id');

    $firstLecture = $lectures->first();

    return response()->json([
        'course'           => $course,
        'progress'         => $progress,
        'currentLectureId' => optional($firstLecture)->id,
    ]);
}


    public function saveProgress(Request $request, Lecture $lecture)
    {
    $data = $request->validate([
    'current_time' => 'required|numeric|min:0',
    'duration' => 'required|numeric|min:1',
    ]);


    $percent = min(100, round(($data['current_time'] / $data['duration']) * 100));


    $row = UserLectureProgress::updateOrCreate([
    'user_id' => $request->user()->id,
    'lecture_id' => $lecture->id,
    ], [
    'current_time' => $data['current_time'],
    'duration' => $data['duration'],
    'percent' => $percent,
    'completed_at' => null,
    ]);


    return response()->json($row);
    }


    public function markComplete(Request $request, Lecture $lecture)
    {
    $row = UserLectureProgress::updateOrCreate([
    'user_id' => $request->user()->id,
    'lecture_id' => $lecture->id,
    ], [
    'percent' => 100,
    'current_time' => DB::raw('duration'),
    'completed_at' => now(),
    ]);
    return response()->json($row);
    }


    public function getNotes(Request $request, Lecture $lecture)
    {
    $note = Note::firstOrCreate([
    'user_id' => $request->user()->id,
    'lecture_id' => $lecture->id,
    ], ['content' => '']);
    return response()->json($note);
    }


    public function saveNotes(Request $request, Lecture $lecture)
    {
    $data = $request->validate(['content' => 'nullable|string']);
    $note = Note::updateOrCreate([
    'user_id' => $request->user()->id,
    'lecture_id' => $lecture->id,
    ], ['content' => $data['content'] ?? '']);
    return response()->json($note);
    }
    
    public function resources(Request $request, Lecture $lecture)
    {
    $resources = ResourceItem::where('lecture_id', $lecture->id)->get();
    return response()->json($resources);
    }    
}
