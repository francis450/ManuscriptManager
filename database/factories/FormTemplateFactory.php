<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\FormTemplate>
 */
class FormTemplateFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'type' => $this->faker()->randomElement(['project_proposal']),
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
        ];
    }
}
