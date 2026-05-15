<?php
declare(strict_types=1);

// NobelPrize SDK utility: result_headers

class NobelPrizeResultHeaders
{
    public static function call(NobelPrizeContext $ctx): ?NobelPrizeResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result) {
            if ($response && is_array($response->headers)) {
                $result->headers = $response->headers;
            } else {
                $result->headers = [];
            }
        }
        return $result;
    }
}
