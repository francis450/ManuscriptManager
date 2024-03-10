<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\SubmissionCall>
 */
class SubmissionCallFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'title' => $this->faker->sentence,
            'description' => $this->faker->paragraph,
            'deadline' => $this->faker->dateTimeBetween('now', '+1 year'),
            'status' => 'active',
            'user_id' => $this->faker->numberBetween(1, 10),
            'form_template_id' => 1,
            'form_template_type' => $this->faker->randomElement(['project_proposal', 'event_proposal', 'research_proposal']),                
        ];
    }
}
