<?php
declare(strict_types=1);

// NobelPrize SDK feature factory

require_once __DIR__ . '/feature/BaseFeature.php';
require_once __DIR__ . '/feature/TestFeature.php';


class NobelPrizeFeatures
{
    public static function make_feature(string $name)
    {
        switch ($name) {
            case "base":
                return new NobelPrizeBaseFeature();
            case "test":
                return new NobelPrizeTestFeature();
            default:
                return new NobelPrizeBaseFeature();
        }
    }
}
