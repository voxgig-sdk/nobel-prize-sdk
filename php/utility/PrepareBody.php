<?php
declare(strict_types=1);

// NobelPrize SDK utility: prepare_body

class NobelPrizePrepareBody
{
    public static function call(NobelPrizeContext $ctx): mixed
    {
        if ($ctx->op->input === 'data') {
            return ($ctx->utility->transform_request)($ctx);
        }
        return null;
    }
}
