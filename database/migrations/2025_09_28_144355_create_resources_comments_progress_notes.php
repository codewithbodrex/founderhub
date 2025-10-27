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
    Schema::create('resource_items', function(Blueprint $t){
    $t->id();
    $t->foreignId('lecture_id')->constrained()->cascadeOnDelete();
    $t->string('title');
    $t->string('file_url');
    $t->timestamps();
    });


    Schema::create('comments', function(Blueprint $t){
    $t->id();
    $t->foreignId('lecture_id')->constrained()->cascadeOnDelete();
    $t->foreignId('user_id')->constrained()->cascadeOnDelete();
    $t->foreignId('parent_id')->nullable()->constrained('comments')->cascadeOnDelete();
    $t->text('body');
    $t->timestamps();
    });


    Schema::create('user_lecture_progresses', function(Blueprint $t){
    $t->id();
    $t->foreignId('lecture_id')->constrained()->cascadeOnDelete();
    $t->foreignId('user_id')->constrained()->cascadeOnDelete();
    $t->unsignedInteger('percent')->default(0);
    $t->unsignedInteger('duration')->default(0); // seconds
    $t->unsignedInteger('current_time')->default(0); // seconds
    $t->timestamp('completed_at')->nullable();
    $t->timestamps();
    $t->unique(['lecture_id','user_id']);
    });


    Schema::create('notes', function(Blueprint $t){
    $t->id();
    $t->foreignId('lecture_id')->constrained()->cascadeOnDelete();
    $t->foreignId('user_id')->constrained()->cascadeOnDelete();
    $t->longText('content')->nullable();
    $t->timestamps();
    $t->unique(['lecture_id','user_id']);
    });
    }


    public function down(): void
    {
    Schema::dropIfExists('notes');
    Schema::dropIfExists('user_lecture_progresses');
    Schema::dropIfExists('comments');
    Schema::dropIfExists('resource_items');
    }
};
