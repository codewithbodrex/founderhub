<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
    Schema::create('courses', function(Blueprint $t){
    $t->id();
    $t->string('title');
    $t->text('description')->nullable();
    $t->timestamps();
    });


    Schema::create('sections', function(Blueprint $t){
    $t->id();
    $t->foreignId('course_id')->constrained()->cascadeOnDelete();
    $t->string('title');
    $t->unsignedInteger('position')->default(0);
    $t->timestamps();
    });


    Schema::create('lectures', function(Blueprint $t){
    $t->id();
    $t->foreignId('section_id')->constrained()->cascadeOnDelete();
    $t->string('title');
    $t->string('video_url');
    $t->unsignedInteger('position')->default(0);
    $t->unsignedInteger('duration_seconds')->default(0);
    $t->timestamps();
    });
    }


    public function down(): void
    {
    Schema::dropIfExists('lectures');
    Schema::dropIfExists('sections');
    Schema::dropIfExists('courses');
}
};
