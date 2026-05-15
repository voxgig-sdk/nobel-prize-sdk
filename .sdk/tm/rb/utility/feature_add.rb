# NobelPrize SDK utility: feature_add
module NobelPrizeUtilities
  FeatureAdd = ->(ctx, f) {
    ctx.client.features << f
  }
end
