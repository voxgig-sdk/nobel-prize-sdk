package core

var UtilityRegistrar func(u *Utility)

var NewBaseFeatureFunc func() Feature

var NewTestFeatureFunc func() Feature

var NewLaureateEntityFunc func(client *NobelPrizeSDK, entopts map[string]any) NobelPrizeEntity

var NewPrizeEntityFunc func(client *NobelPrizeSDK, entopts map[string]any) NobelPrizeEntity

