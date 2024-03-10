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
        Schema::table('submission_calls', function (Blueprint $table) {
            // $table->morphs('form_template');
            $table->unsignedBigInteger('form_template_id')->nullable();
            $table->string('form_template_type')->nullable();
            $table->foreign('form_template_id')->references('id')->on('form_templates');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        //
    }
};
