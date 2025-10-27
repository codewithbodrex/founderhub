<?php

namespace App\Http\Controllers;

use Inertia\Inertia;

class CourseController extends Controller
{
    public function index()
    {
        return Inertia::render('Courses/Index', [
            'courses' => [
                [ 'id' => 1, 'slug' => 'becoming-entrepreneur', 'title' => 'Becoming an Entrepreneur' ],
                [ 'id' => 2, 'slug' => 'building-ideas-into-vision', 'title' => 'Building Ideas into Vision' ],
            ],
        ]);
    }

    public function show(string $slug)
    {
        // ===== Course dummy =====
        $course = [
            'slug'      => $slug,
            'title'     => ucwords(str_replace('-', ' ', $slug)),
            'category'  => 'BUSINESS',
            'price'     => 'FREE',
            'discount'  => ['percent' => 100, 'from' => '9.00'],
            'rating'    => 4.5,
            // optional breakdown & count (kalau kosong, komponenmu pakai dummy persentase)
            'rating_breakdown' => [5 => 12, 4 => 6, 3 => 2, 2 => 1, 1 => 0],
            'rating_count'     => 21,
            'students'  => 120,
            'level'     => 'Beginner',
            'duration'  => '2 hours',
            'language'  => 'Indonesia',
            'subtitle'  => 'Indonesia',
            'lessons_count' => 12,
            'thumbnail' => '/images/course/Trailer.svg',
            'hero'      => '/images/course/Trailer.svg',
            'teacher'   => [
                'name'   => 'Future Lestari',
                'avatar' => '/images/course/teacher1.svg',
            ],
            'whatYouLearn' => [
                'Membangun Pola Pikir Wirausaha',
                'Menemukan Ide Bisnis yang Relevan',
                'Menciptakan Usaha Berkelanjutan',
                'Validasi ide cepat',
                'Dasar-dasar model bisnis',
                'Perencanaan roadmap sederhana',
            ],
            'audience' => 'Mahasiswa, pekerja, dan calon founder yang ingin mempelajari dasar-dasar kewirausahaan dan pengembangan produk.',
        ];

        // ===== Related (5 item) =====
        $related = [
            [
                'id' => 1,
                'slug' => 'becoming-entrepreneur',
                'title' => 'Becoming an Entrepreneur',
                'category' => 'BUSINESS',
                'price' => 'FREE',
                'rating' => 0.0,
                'students' => 0,
                'thumbnail' => '/images/course/course1.svg',
            ],
            [
                'id' => 2,
                'slug' => 'building-ideas-into-vision',
                'title' => 'Building Ideas into Vision',
                'category' => 'PRODUCT',
                'price' => 'FREE',
                'rating' => 0.0,
                'students' => 0,
                'thumbnail' => '/images/course/course2.svg',
            ],
            [
                'id' => 3,
                'slug' => 'finding-the-right-customers',
                'title' => 'Finding The Right Customers',
                'category' => 'MARKETING',
                'price' => 'FREE',
                'rating' => 0.0,
                'students' => 0,
                'thumbnail' => '/images/course/course3.svg',
            ],
            [
                'id' => 4,
                'slug' => 'creating-and-managing-your-product',
                'title' => 'Creating and Managing Your Product',
                'category' => 'PRODUCT',
                'price' => 'FREE',
                'rating' => 0.0,
                'students' => 0,
                'thumbnail' => '/images/course/course4.svg',
            ],
            [
                'id' => 5,
                'slug' => 'monetizing-your-venture',
                'title' => 'Monetizing Your Venture',
                'category' => 'FINANCE',
                'price' => 'FREE',
                'rating' => 0.0,
                'students' => 0,
                'thumbnail' => '/images/course/course5.svg',
            ],
        ];

        return Inertia::render('Courses/Show', [
            'course'  => $course,
            'related' => $related, // komponen CourseRelated akan slice 5 item
        ]);
    }

    public function start(string $slug)
    {
        return redirect()->route('courses.show', $slug);
    }
}
