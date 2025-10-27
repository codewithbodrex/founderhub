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
        Schema::create('role_test_submissions', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->nullable()->constrained()->nullOnDelete();
            // Demographic fields (guest-friendly)
            $table->string('name');
            $table->enum('gender', ['male','female','other']);
            $table->string('age_range'); // '16-20','21-25','26-30','>=31'
            $table->string('city');


            // Scores & summary
            $table->unsignedInteger('score_hustler');
            $table->unsignedInteger('score_hacker');
            $table->unsignedInteger('score_hipster');
            $table->unsignedInteger('score_handler');
            $table->unsignedTinyInteger('percent_hustler');
            $table->unsignedTinyInteger('percent_hacker');
            $table->unsignedTinyInteger('percent_hipster');
            $table->unsignedTinyInteger('percent_handler');
            $table->string('dominant_role');            
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('role_test_submissions');
    }
};
