<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up(): void
    {
        Schema::table('users', function (Blueprint $table) {
            $table->string('provider')->nullable()->after('remember_token');
            $table->string('provider_id')->nullable()->after('provider');
            $table->string('avatar')->nullable()->after('provider_id');

            // supaya cepat dicari & tidak duplikat per provider
            $table->index(['provider', 'provider_id']);
            // kalau ingin benar-benar mencegah duplikat:
            // $table->unique(['provider', 'provider_id']);
        });
    }

    public function down(): void
    {
        Schema::table('users', function (Blueprint $table) {
            $table->dropIndex(['provider', 'provider_id']);
            // $table->dropUnique(['users_provider_provider_id_unique']); // kalau pakai unique
            $table->dropColumn(['provider', 'provider_id', 'avatar']);
        });
    }
};
