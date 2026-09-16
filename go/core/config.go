package core

import (
	"sync"
)

// MakeConfig builds a fresh, fully materialised config map. Every call
// rebuilds the whole structure, so prefer SharedConfig unless you need a
// private copy you intend to mutate.
func MakeConfig() map[string]any {
	return map[string]any{
		"main": map[string]any{
			"name": "NobelPrize",
			"slug": "nobel-prize",
			"version": "0.0.1",
			"target": "go",
		},
		"feature": map[string]any{
			"ratelimit": map[string]any{
				"options": map[string]any{
					"active": false,
					"burst": 5,
					"rate": 5,
				},
				"optspec": map[string]any{
					"now": "`$FUNCTION`",
					"sleep": "`$FUNCTION`",
				},
				"strict": false,
				"transport": "wrap",
			},
			"retry": map[string]any{
				"options": map[string]any{
					"active": false,
					"factor": 2,
					"maxDelay": 2000,
					"minDelay": 50,
					"retries": 2,
					"statuses": []any{
						408,
						425,
						429,
						500,
						502,
						503,
						504,
					},
				},
				"optspec": map[string]any{
					"jitter": "`$BOOLEAN`",
					"sleep": "`$FUNCTION`",
				},
				"strict": false,
				"transport": "wrap",
			},
			"test": map[string]any{
				"options": map[string]any{
					"active": false,
				},
				"optspec": map[string]any{
					"entity": "`$MAP`",
					"net": "`$MAP`",
				},
				"strict": false,
				"transport": "base",
			},
			"timeout": map[string]any{
				"options": map[string]any{
					"active": false,
					"ms": 30000,
				},
				"optspec": map[string]any{
					"clearTimer": "`$FUNCTION`",
					"setTimer": "`$FUNCTION`",
				},
				"strict": false,
				"transport": "wrap",
			},
		},
		"options": map[string]any{
			"base": "https://api.nobelprize.org/v1",
			"headers": map[string]any{
				"content-type": "application/json",
			},
			"entity": map[string]any{
				"laureate": map[string]any{},
				"prize": map[string]any{},
			},
		},
		"entity": map[string]any{
			"laureate": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "born",
						"short": "Birth date",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "bornCity",
						"short": "City of birth",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "bornCountry",
						"short": "Country of birth",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "bornCountryCode",
						"short": "Country code of birth country",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "died",
						"short": "Death date",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "diedCity",
						"short": "City of death",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "diedCountry",
						"short": "Country of death",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "diedCountryCode",
						"short": "Country code of death country",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "firstname",
						"short": "First name of the laureate",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "gender",
						"short": "Gender of the laureate",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "id",
						"short": "Laureate ID",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "prizes",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "surname",
						"short": "Surname of the laureate",
						"type": "`$STRING`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "laureate",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "born_city",
											"orig": "born_city",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "born_country",
											"orig": "born_country",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "died_city",
											"orig": "died_city",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "died_country",
											"orig": "died_country",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "firstname",
											"orig": "firstname",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "gender",
											"orig": "gender",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "id",
											"orig": "id",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "query",
											"name": "surname",
											"orig": "surname",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/laureate.json",
								"segments": []any{
									map[string]any{
										"lit": "laureate.json",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"born_city",
										"born_country",
										"died_city",
										"died_country",
										"firstname",
										"gender",
										"id",
										"surname",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.laureates`",
								},
								"parts": []any{
									"laureate.json",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"prize": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "category",
						"short": "Category of the Nobel Prize",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "laureates",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "overallMotivation",
						"short": "Overall motivation for the prize",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "year",
						"short": "Year the prize was awarded",
						"type": "`$STRING`",
					},
				},
				"name": "prize",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "category",
											"orig": "category",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "year",
											"orig": "year",
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/prize.json",
								"segments": []any{
									map[string]any{
										"lit": "prize.json",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"category",
										"year",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.prizes`",
								},
								"parts": []any{
									"prize.json",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
		},
	}
}

// The plugin definitions the model selected per feature, as []any so a
// feature package can consume them without core naming its types. Empty
// when no active feature declares active plugin groups for this target.
var featurePlugins = map[string][]any{
}

// FeaturePlugins is the definitions list for one feature's chain.
func FeaturePlugins(name string) []any {
	return featurePlugins[name]
}

var (
	sharedConfigOnce sync.Once
	sharedConfigVal  map[string]any
)

// SharedConfig returns the process-wide config, built once on first use.
// The SDK reads the config on every request and never writes to it, so one
// instance is shared by every client rather than rebuilt per client.
//
// The returned map is shared: treat it as read-only. Callers that need to
// mutate should use MakeConfig, which always returns a fresh copy.
func SharedConfig() map[string]any {
	sharedConfigOnce.Do(func() {
		sharedConfigVal = MakeConfig()
	})
	return sharedConfigVal
}

func makeFeature(name string) Feature {
	switch name {
	case "ratelimit":
		if NewRatelimitFeatureFunc != nil {
			return NewRatelimitFeatureFunc()
		}
	case "retry":
		if NewRetryFeatureFunc != nil {
			return NewRetryFeatureFunc()
		}
	case "test":
		if NewTestFeatureFunc != nil {
			return NewTestFeatureFunc()
		}
	case "timeout":
		if NewTimeoutFeatureFunc != nil {
			return NewTimeoutFeatureFunc()
		}
	default:
		if NewBaseFeatureFunc != nil {
			return NewBaseFeatureFunc()
		}
	}
	return nil
}
