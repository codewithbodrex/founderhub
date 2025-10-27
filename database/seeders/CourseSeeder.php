<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\{Course, Section, Lecture, ResourceItem};

class CourseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
    $c = Course::create(['title'=>'Becoming an Entrepreneur','description'=>'...']);
    $s = Section::create(['course_id'=>$c->id,'title'=>'Getting Started','position'=>1]);
    $l1 = Lecture::create(['section_id'=>$s->id,'title'=>'Becoming an Entrepreneur','video_url'=>'/videos/entrepreneur.mp4','position'=>1,'duration_seconds'=>8130]);
    ResourceItem::create(['lecture_id'=>$l1->id,'title'=>'Material PDF','file_url'=>'/storage/material.pdf']);
    }
}
