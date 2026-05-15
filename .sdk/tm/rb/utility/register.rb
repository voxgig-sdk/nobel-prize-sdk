# NobelPrize SDK utility registration
require_relative '../core/utility_type'
require_relative 'clean'
require_relative 'done'
require_relative 'make_error'
require_relative 'feature_add'
require_relative 'feature_hook'
require_relative 'feature_init'
require_relative 'fetcher'
require_relative 'make_fetch_def'
require_relative 'make_context'
require_relative 'make_options'
require_relative 'make_request'
require_relative 'make_response'
require_relative 'make_result'
require_relative 'make_point'
require_relative 'make_spec'
require_relative 'make_url'
require_relative 'param'
require_relative 'prepare_auth'
require_relative 'prepare_body'
require_relative 'prepare_headers'
require_relative 'prepare_method'
require_relative 'prepare_params'
require_relative 'prepare_path'
require_relative 'prepare_query'
require_relative 'result_basic'
require_relative 'result_body'
require_relative 'result_headers'
require_relative 'transform_request'
require_relative 'transform_response'

NobelPrizeUtility.registrar = ->(u) {
  u.clean = NobelPrizeUtilities::Clean
  u.done = NobelPrizeUtilities::Done
  u.make_error = NobelPrizeUtilities::MakeError
  u.feature_add = NobelPrizeUtilities::FeatureAdd
  u.feature_hook = NobelPrizeUtilities::FeatureHook
  u.feature_init = NobelPrizeUtilities::FeatureInit
  u.fetcher = NobelPrizeUtilities::Fetcher
  u.make_fetch_def = NobelPrizeUtilities::MakeFetchDef
  u.make_context = NobelPrizeUtilities::MakeContext
  u.make_options = NobelPrizeUtilities::MakeOptions
  u.make_request = NobelPrizeUtilities::MakeRequest
  u.make_response = NobelPrizeUtilities::MakeResponse
  u.make_result = NobelPrizeUtilities::MakeResult
  u.make_point = NobelPrizeUtilities::MakePoint
  u.make_spec = NobelPrizeUtilities::MakeSpec
  u.make_url = NobelPrizeUtilities::MakeUrl
  u.param = NobelPrizeUtilities::Param
  u.prepare_auth = NobelPrizeUtilities::PrepareAuth
  u.prepare_body = NobelPrizeUtilities::PrepareBody
  u.prepare_headers = NobelPrizeUtilities::PrepareHeaders
  u.prepare_method = NobelPrizeUtilities::PrepareMethod
  u.prepare_params = NobelPrizeUtilities::PrepareParams
  u.prepare_path = NobelPrizeUtilities::PreparePath
  u.prepare_query = NobelPrizeUtilities::PrepareQuery
  u.result_basic = NobelPrizeUtilities::ResultBasic
  u.result_body = NobelPrizeUtilities::ResultBody
  u.result_headers = NobelPrizeUtilities::ResultHeaders
  u.transform_request = NobelPrizeUtilities::TransformRequest
  u.transform_response = NobelPrizeUtilities::TransformResponse
}
