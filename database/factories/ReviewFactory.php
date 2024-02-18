<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Review>
 */
class ReviewFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'submission_id' => $this->faker->numberBetween(1, 10),
            'rating' => $this->faker->numberBetween(1, 5),
            'date_reviewed' => $this->faker->dateTimeThisYear(),
            'reviewer' => $this->faker->numberBetween(1, 10),
            'status' => $this->faker->randomElement(['accepted', 'rejected', 'pending']),
            'comment' => $this->faker->text(),
        ];
    }
}
