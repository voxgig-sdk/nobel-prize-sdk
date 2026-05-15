package voxgignobelprizesdk

import (
	"github.com/voxgig-sdk/nobel-prize-sdk/core"
	"github.com/voxgig-sdk/nobel-prize-sdk/entity"
	"github.com/voxgig-sdk/nobel-prize-sdk/feature"
	_ "github.com/voxgig-sdk/nobel-prize-sdk/utility"
)

// Type aliases preserve external API.
type NobelPrizeSDK = core.NobelPrizeSDK
type Context = core.Context
type Utility = core.Utility
type Feature = core.Feature
type Entity = core.Entity
type NobelPrizeEntity = core.NobelPrizeEntity
type FetcherFunc = core.FetcherFunc
type Spec = core.Spec
type Result = core.Result
type Response = core.Response
type Operation = core.Operation
type Control = core.Control
type NobelPrizeError = core.NobelPrizeError

// BaseFeature from feature package.
type BaseFeature = feature.BaseFeature

func init() {
	core.NewBaseFeatureFunc = func() core.Feature {
		return feature.NewBaseFeature()
	}
	core.NewTestFeatureFunc = func() core.Feature {
		return feature.NewTestFeature()
	}
	core.NewLaureateEntityFunc = func(client *core.NobelPrizeSDK, entopts map[string]any) core.NobelPrizeEntity {
		return entity.NewLaureateEntity(client, entopts)
	}
	core.NewPrizEntityFunc = func(client *core.NobelPrizeSDK, entopts map[string]any) core.NobelPrizeEntity {
		return entity.NewPrizEntity(client, entopts)
	}
}

// Constructor re-exports.
var NewNobelPrizeSDK = core.NewNobelPrizeSDK
var TestSDK = core.TestSDK
var NewContext = core.NewContext
var NewSpec = core.NewSpec
var NewResult = core.NewResult
var NewResponse = core.NewResponse
var NewOperation = core.NewOperation
var MakeConfig = core.MakeConfig
var NewBaseFeature = feature.NewBaseFeature
var NewTestFeature = feature.NewTestFeature
