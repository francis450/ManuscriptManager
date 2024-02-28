<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;

use App\Models\Document;
use App\Models\Review;
use App\Models\Submission;
use App\Models\SubmissionCall;
use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Testing\Fakes\Fake;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        User::factory(10)->create();
        
        SubmissionCall::factory(10)->create();

        Submission::factory(10)->create();

        Review::factory(40)->create();

        Document::factory(50)->create();
    }
}
