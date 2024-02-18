<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Submission>
 */
class SubmissionFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            "submission_call_id" => $this->faker->numberBetween(1, 10),
            "user_id" => $this->faker->numberBetween(1, 5),
            "description" => $this->faker->paragraph,
            "path" => $this->faker->word,
            "status" => $this->faker->randomElement(["pending", "approved", "rejected"]),
            "date_submitted" => $this->faker->dateTimeBetween("-1 month", "now"),
            "title" => $this->faker->sentence,
        ];
    }
}
