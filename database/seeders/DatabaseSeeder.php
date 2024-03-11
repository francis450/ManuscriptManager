<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;

use App\Models\Document;
use App\Models\FormTemplate;
use App\Models\ProjectProposalForm;
use App\Models\Review;
use App\Models\Submission;
use App\Models\SubmissionCall;
use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Testing\Fakes\Fake;
use SebastianBergmann\Template\Template;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        User::factory(10)->create();
        
        FormTemplate::create([
            'type' => 'project_proposal',
            'fields' => [
                [
                    'label' => 'Title',
                    'type' => 'text',
                    'required' => true
                ],
                [
                    'label' => 'Abstract',
                    'type' => 'textarea',
                    'required' => true
                ],
                [
                    'label' => 'Keywords',
                    'type' => 'text',
                    'required' => true
                ],
                [
                    'label' => 'Project Type',
                    'type' => 'select',
                    'required' => true,
                    'options' => [
                        'Research',
                        'Development',
                        'Consultancy',
                    ]
                ],
                [
                    'label' => 'Project Duration',
                    'type' => 'text',
                    'required' => true
                ],
            ]
        ]);
        
        SubmissionCall::factory(10)->create();

        Submission::factory(10)->create();

        Review::factory(40)->create();

        Document::factory(50)->create();

        ProjectProposalForm::factory(1)->create();

        
    }
}
