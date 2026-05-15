# NobelPrize SDK exists test

require "minitest/autorun"
require_relative "../NobelPrize_sdk"

class ExistsTest < Minitest::Test
  def test_create_test_sdk
    testsdk = NobelPrizeSDK.test(nil, nil)
    assert !testsdk.nil?
  end
end
