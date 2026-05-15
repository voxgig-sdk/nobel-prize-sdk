# NobelPrize SDK utility: make_context
require_relative '../core/context'
module NobelPrizeUtilities
  MakeContext = ->(ctxmap, basectx) {
    NobelPrizeContext.new(ctxmap, basectx)
  }
end
