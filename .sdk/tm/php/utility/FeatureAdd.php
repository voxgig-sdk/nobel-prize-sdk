<?php
declare(strict_types=1);

// NobelPrize SDK utility: feature_add

class NobelPrizeFeatureAdd
{
    public static function call(NobelPrizeContext $ctx, mixed $f): void
    {
        $ctx->client->features[] = $f;
    }
}
