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
        Schema::table('documents', function (Blueprint $table) {
            $table->foreignId('submission_call_id')->nullable()->after('submission_id')->constrained('submission_calls', 'id');
            $table->foreignId('submission_id')->nullable()->change();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('documents', function (Blueprint $table) {
            $table->dropForeign(['submission_call_id']);
            $table->dropColumn('submission_call_id');
            $table->foreignId('submission_id')->change();
        });
    }
};
