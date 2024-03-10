<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\ProjectProposalForm>
 */
class ProjectProposalFormFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'fields' => [
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
            ]
        ];
    }
}
