# NobelPrize SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/ratelimit_feature'
require_relative 'feature/retry_feature'
require_relative 'feature/test_feature'
require_relative 'feature/timeout_feature'


module NobelPrizeFeatures
  def self.make_feature(name)
    case name
    when "base"
      NobelPrizeBaseFeature.new
    when "ratelimit"
      NobelPrizeRatelimitFeature.new
    when "retry"
      NobelPrizeRetryFeature.new
    when "test"
      NobelPrizeTestFeature.new
    when "timeout"
      NobelPrizeTimeoutFeature.new
    else
      NobelPrizeBaseFeature.new
    end
  end
end
