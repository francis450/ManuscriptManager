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
        Schema::create('submissions', function (Blueprint $table) {
            $table->id();
            $table->foreignId('submission_call_id')->constrained('submission_calls');
            $table->foreignId('user_id')->constrained('users');
            $table->string('title');
            $table->text('description');
            $table->string('path');
            $table->enum('status', ['pending', 'approved', 'rejected']);
            $table->dateTime('date_submitted');
            $table->softDeletes();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('submissions');
    }
};
