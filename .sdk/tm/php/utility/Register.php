<?php
declare(strict_types=1);

// NobelPrize SDK utility registration

require_once __DIR__ . '/../core/UtilityType.php';
require_once __DIR__ . '/Clean.php';
require_once __DIR__ . '/Done.php';
require_once __DIR__ . '/MakeError.php';
require_once __DIR__ . '/FeatureAdd.php';
require_once __DIR__ . '/FeatureHook.php';
require_once __DIR__ . '/FeatureInit.php';
require_once __DIR__ . '/Fetcher.php';
require_once __DIR__ . '/MakeFetchDef.php';
require_once __DIR__ . '/MakeContext.php';
require_once __DIR__ . '/MakeOptions.php';
require_once __DIR__ . '/MakeRequest.php';
require_once __DIR__ . '/MakeResponse.php';
require_once __DIR__ . '/MakeResult.php';
require_once __DIR__ . '/MakePoint.php';
require_once __DIR__ . '/MakeSpec.php';
require_once __DIR__ . '/MakeUrl.php';
require_once __DIR__ . '/Param.php';
require_once __DIR__ . '/PrepareAuth.php';
require_once __DIR__ . '/PrepareBody.php';
require_once __DIR__ . '/PrepareHeaders.php';
require_once __DIR__ . '/PrepareMethod.php';
require_once __DIR__ . '/PrepareParams.php';
require_once __DIR__ . '/PreparePath.php';
require_once __DIR__ . '/PrepareQuery.php';
require_once __DIR__ . '/ResultBasic.php';
require_once __DIR__ . '/ResultBody.php';
require_once __DIR__ . '/ResultHeaders.php';
require_once __DIR__ . '/TransformRequest.php';
require_once __DIR__ . '/TransformResponse.php';

NobelPrizeUtility::setRegistrar(function (NobelPrizeUtility $u): void {
    $u->clean = [NobelPrizeClean::class, 'call'];
    $u->done = [NobelPrizeDone::class, 'call'];
    $u->make_error = [NobelPrizeMakeError::class, 'call'];
    $u->feature_add = [NobelPrizeFeatureAdd::class, 'call'];
    $u->feature_hook = [NobelPrizeFeatureHook::class, 'call'];
    $u->feature_init = [NobelPrizeFeatureInit::class, 'call'];
    $u->fetcher = [NobelPrizeFetcher::class, 'call'];
    $u->make_fetch_def = [NobelPrizeMakeFetchDef::class, 'call'];
    $u->make_context = [NobelPrizeMakeContext::class, 'call'];
    $u->make_options = [NobelPrizeMakeOptions::class, 'call'];
    $u->make_request = [NobelPrizeMakeRequest::class, 'call'];
    $u->make_response = [NobelPrizeMakeResponse::class, 'call'];
    $u->make_result = [NobelPrizeMakeResult::class, 'call'];
    $u->make_point = [NobelPrizeMakePoint::class, 'call'];
    $u->make_spec = [NobelPrizeMakeSpec::class, 'call'];
    $u->make_url = [NobelPrizeMakeUrl::class, 'call'];
    $u->param = [NobelPrizeParam::class, 'call'];
    $u->prepare_auth = [NobelPrizePrepareAuth::class, 'call'];
    $u->prepare_body = [NobelPrizePrepareBody::class, 'call'];
    $u->prepare_headers = [NobelPrizePrepareHeaders::class, 'call'];
    $u->prepare_method = [NobelPrizePrepareMethod::class, 'call'];
    $u->prepare_params = [NobelPrizePrepareParams::class, 'call'];
    $u->prepare_path = [NobelPrizePreparePath::class, 'call'];
    $u->prepare_query = [NobelPrizePrepareQuery::class, 'call'];
    $u->result_basic = [NobelPrizeResultBasic::class, 'call'];
    $u->result_body = [NobelPrizeResultBody::class, 'call'];
    $u->result_headers = [NobelPrizeResultHeaders::class, 'call'];
    $u->transform_request = [NobelPrizeTransformRequest::class, 'call'];
    $u->transform_response = [NobelPrizeTransformResponse::class, 'call'];
});
