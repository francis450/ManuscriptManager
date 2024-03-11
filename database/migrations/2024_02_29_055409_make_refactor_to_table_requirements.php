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
        Schema::table('requirements', function (Blueprint $table) {
            // array of file types
            $table->json('file_types')->nullable();
            // max file size in MB
            $table->integer('max_file_size')->nullable();
            

            $table->dropColumn('type');
            $table->dropColumn('name');
            $table->dropColumn('description');
            $table->dropColumn('status');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('requirements', function (Blueprint $table) {
            $table->dropColumn('file_types');
            $table->dropColumn('max_file_size');
        });
    }
};
