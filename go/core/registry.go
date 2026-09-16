package core

var UtilityRegistrar func(u *Utility)

var NewBaseFeatureFunc func() Feature

var NewRatelimitFeatureFunc func() Feature

var NewRetryFeatureFunc func() Feature

var NewTestFeatureFunc func() Feature

var NewTimeoutFeatureFunc func() Feature

var NewLaureateEntityFunc func(client *NobelPrizeSDK, entopts map[string]any) NobelPrizeEntity

var NewPrizeEntityFunc func(client *NobelPrizeSDK, entopts map[string]any) NobelPrizeEntity

