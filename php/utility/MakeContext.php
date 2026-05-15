<?php
declare(strict_types=1);

// NobelPrize SDK utility: make_context

require_once __DIR__ . '/../core/Context.php';

class NobelPrizeMakeContext
{
    public static function call(array $ctxmap, ?NobelPrizeContext $basectx): NobelPrizeContext
    {
        return new NobelPrizeContext($ctxmap, $basectx);
    }
}
