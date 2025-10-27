<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Course;
use Inertia\Inertia;
class CourseLearningController extends Controller
{

    public function start(Request $request, Course $course)
    {
        
        $course->load([
            'sections' => fn($q) => $q->orderBy('position'),
            'sections.lectures' => fn($q) => $q->orderBy('position')
        ]);

        return Inertia::render('Courses/StartLearningPage', [
            'course' => $course,
            'authUser' => $request->user(),
        ]);
    }


}
