<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Document>
 */
class DocumentFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            "submission_id" => $this->faker->numberBetween(1, 10),
            "name" => $this->faker->word(),
            "extension" => $this->faker->fileExtension(),
            "size" => $this->faker->numberBetween(1000, 9000),
            "path" => $this->faker->word(),
            "status" => $this->faker->randomElement(["active", "inactive"]),
        ];
    }
}
