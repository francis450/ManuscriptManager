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
use Database\Seeders\FormTemplateSeeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        User::factory(10)->create();
        
        FormTemplate::create([
            'type' => 'Project Proposal',
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

        // make Research Paper Form
        FormTemplate::create([
            'type' => 'Research Paper',
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
                    'label' => 'Authors',
                    'type' => 'text',
                    'required' => true
                ],
                [
                    'label' => 'Affiliations',
                    'type' => 'text',
                    'required' => true
                ],
                [
                    'label' => 'Introduction',
                    'type' => 'textarea',
                    'required' => true
                ],
                [
                    'label' => 'Methodology',
                    'type' => 'textarea',
                    'required' => true
                ],
                [
                    'label' => 'Results',
                    'type' => 'textarea',
                    'required' => true
                ],
                [
                    'label' => 'Discussion',
                    'type' => 'textarea',
                    'required' => true
                ],
                [
                    'label' => 'Conclusion',
                    'type' => 'textarea',
                    'required' => true
                ],
                [
                    'label' => 'References',
                    'type' => 'textarea',
                    'required' => true
                ],
            ]
        ]);

        // make Project Paper Form
        FormTemplate::create([
            'type' => 'Project Paper',
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
                    'label' => 'Authors',
                    'type' => 'text',
                    'required' => true
                ],
                [
                    'label' => 'Affiliations',
                    'type' => 'text',
                    'required' => true
                ],
                [
                    'label' => 'Introduction',
                    'type' => 'textarea',
                    'required' => true
                ],
                [
                    'label' => 'Methodology',
                    'type' => 'textarea',
                    'required' => true
                ],
                [
                    'label' => 'Results',
                    'type' => 'textarea',
                    'required' => true
                ],
                [
                    'label' => 'Discussion',
                    'type' => 'textarea',
                    'required' => true
                ],
                [
                    'label' => 'Conclusion',
                    'type' => 'textarea',
                    'required' => true
                ],
                [
                    'label' => 'References',
                    'type' => 'textarea',
                    'required' => true
                ],
            ]
        ]);

        // make Consultancy Paper Form
        FormTemplate::create([
            'type' => 'Consultancy Paper',
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
                    'label' => 'Authors',
                    'type' => 'text',
                    'required' => true
                ],
                [
                    'label' => 'Affiliations',
                    'type' => 'text',
                    'required' => true
                ],
                [
                    'label' => 'Introduction',
                    'type' => 'textarea',
                    'required' => true
                ],
                [
                    'label' => 'Methodology',
                    'type' => 'textarea',
                    'required' => true
                ],
                [
                    'label' => 'Results',
                    'type' => 'textarea',
                    'required' => true
                ],
                [
                    'label' => 'Discussion',
                    'type' => 'textarea',
                    'required' => true
                ],
                [
                    'label' => 'Conclusion',
                    'type' => 'textarea',
                    'required' => true
                ],
                [
                    'label' => 'References',
                    'type' => 'textarea',
                    'required' => true
                ],
            ]
        ]);

        // make Hackathon Project Submission Form
        FormTemplate::create([
            'type' => 'Hackathon Project Submission',
            'fields' => [
                [
                    'label' => 'Project Title',
                    'type' => 'text',
                    'required' => true
                ],
                [
                    'label' => 'Problem Statement',
                    'type' => 'textarea',
                    'required' => true
                ],
                [
                    'label' => 'Solution Overview',
                    'type' => 'textarea',
                    'required' => true
                ],
                [
                    'label' => 'Technologies Used',
                    'type' => 'text',
                    'required' => true
                ],
                [
                    'label' => 'Team Members',
                    'type' => 'text',
                    'required' => true
                ],
                [
                    'label' => 'Demo/Prototype',
                    'type' => 'file',
                    'required' => true
                ],
                [
                    'label' => 'Code Repository (e.g., GitHub link)',
                    'type' => 'text',
                    'required' => true
                ],
                [
                    'label' => 'Presentation Slides',
                    'type' => 'file',
                    'required' => true
                ],
            ]
        ]);

        // make Call for Speakers Submission
        FormTemplate::create([
            'type' => 'Call for Speakers Submission',
            'fields' => [
                [
                    'label' => 'Name',
                    'type' => 'text',
                    'required' => true
                ],
                [
                    'label' => 'Email',
                    'type' => 'email',
                    'required' => true
                ],
                [
                    'label' => 'Phone Number',
                    'type' => 'text',
                    'required' => true
                ],
                [
                    'label' => 'Title of the Talk',
                    'type' => 'text',
                    'required' => true
                ],
                [
                    'label' => 'Abstract',
                    'type' => 'textarea',
                    'required' => true
                ],
                [
                    'label' => 'Speaker Bio',
                    'type' => 'textarea',
                    'required' => true
                ],
                [
                    'label' => 'Social Media Links',
                    'type' => 'text',
                    'required' => true
                ],
                [
                    'label' => 'Profile Picture',
                    'type' => 'file',
                    'required' => true
                ],
            ]
        ]);

        // make Grant Proposal Submission Form
        FormTemplate::create([
            'type' => 'Grant Proposal Submission',
            'fields' => [
                [
                    'label' => 'Proposal Title',
                    'type' => 'text',
                    'required' => true
                ],
                [
                    'label' => 'Project Summary',
                    'type' => 'textarea',
                    'required' => true
                ],
                [
                    'label' => 'Goals/Objectives',
                    'type' => 'textarea',
                    'required' => true
                ],
                [
                    'label' => 'Budget Justification',
                    'type' => 'textarea',
                    'required' => true
                ],
                [
                    'label' => 'Impact/Outcomes',
                    'type' => 'textarea',
                    'required' => true
                ],
                [
                    'label' => 'Evaluation Plan',
                    'type' => 'textarea',
                    'required' => true
                ],
                [
                    'label' => 'Previous Work/Publications',
                    'type' => 'textarea',
                    'required' => true
                ],
                [
                    'label' => 'Collaborators/Partners',
                    'type' => 'textarea',
                    'required' => true
                ],
            ]
        ]);

        // make Contributions to Collaborative Projects Form
        // FormTemplate::create([
        //     'type' => 'Contributions to Collaborative Projects',
        //     'fields' => [
        //         [
        //             'label' => 'Contribution Title',
        //             'type' => 'text',
        //             'required' => true
        //         ],
        //         [
        //             'label' => 'Description',
        //             'type' => 'textarea',
        //             'required' => true
        //         ],
        //         [
        //             'label' => 'Code/Documentation Contribution',
        //             'type' => 'file',
        //             'required' => true
        //         ],
        //         [
        //             'label' => 'Bug Report/Feature Request',
        //             'type' => 'file',
        //             'required' => true
        //         ],
        //         [
        //             'label' => 'Project URL (if applicable)',
        //             'type' => 'text',
        //             'required' => true
        //         ],
        //         [
        //             'label' => 'Contribution Type (e.g., pull request, issue)',
        //             'type' => 'text',
        //             'required' => true
        //         ],
        //     ]
        // ]);

        SubmissionCall::factory(10)->create();

        Submission::factory(10)->create();

        Review::factory(40)->create();

        Document::factory(50)->create();

        // make Project Proposal Form
        
        
    }
}
