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
		},
		"feature": map[string]any{
			"test": map[string]any{
				"options": map[string]any{
					"active": false,
				},
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
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "bornCity",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "bornCountry",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "bornCountryCode",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "died",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "diedCity",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "diedCountry",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "diedCountryCode",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "firstname",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "gender",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "id",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "prizes",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "surname",
						"type": "`$STRING`",
					},
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
								"parts": []any{
									"laureate.json",
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
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "laureates",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "overallMotivation",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "year",
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
								"parts": []any{
									"prize.json",
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
	case "test":
		if NewTestFeatureFunc != nil {
			return NewTestFeatureFunc()
		}
	default:
		if NewBaseFeatureFunc != nil {
			return NewBaseFeatureFunc()
		}
	}
	return nil
}
