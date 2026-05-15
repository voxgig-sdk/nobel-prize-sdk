# NobelPrize SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/test_feature'


module NobelPrizeFeatures
  def self.make_feature(name)
    case name
    when "base"
      NobelPrizeBaseFeature.new
    when "test"
      NobelPrizeTestFeature.new
    else
      NobelPrizeBaseFeature.new
    end
  end
end
