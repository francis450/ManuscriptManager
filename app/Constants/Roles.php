<?php

namespace App\Constants;

class Roles
{
    const ADMIN = 'admin';
    const EDITOR = 'editor';
    const AUTHOR = 'author';
    const REVIEWER = 'reviewer';

    const DEFAULT = self::AUTHOR;

    public static function all()
    {
        return [
            self::ADMIN,
            self::EDITOR,
            self::AUTHOR,
            self::REVIEWER,
        ];
    }
}