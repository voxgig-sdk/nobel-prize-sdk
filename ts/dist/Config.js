"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FEATURE_PLUGINS = exports.config = void 0;
const TestFeature_1 = require("./feature/test/TestFeature");
const FEATURE_CLASS = {
    test: TestFeature_1.TestFeature,
};
// Per-feature plugin DEFINITIONS (voxgig/plugin `Definition` values), from
// the model's active plugin groups. A feature that takes a `plugins` option
// (secrets over sekreto) reads its own entry; a feature with no plugins has
// none. Named imports above make each definition statically reachable, so
// an SDK carries exactly the plugin modules its model selects — the same
// leanness the old side-effect registry imports bought, without a registry.
const FEATURE_PLUGINS = {};
exports.FEATURE_PLUGINS = FEATURE_PLUGINS;
class Config {
    makeFeature(fn) {
        const fc = FEATURE_CLASS[fn];
        const fi = new fc();
        // TODO: errors etc
        return fi;
    }
    // False for a feature added at runtime via options.extend (station's
    // adopt path) - the constructor uses this to skip makeFeature for names
    // no generated class backs.
    hasFeature(fn) {
        return null != FEATURE_CLASS[fn];
    }
    main = {
        name: 'NobelPrize',
        slug: "nobel-prize",
        version: "0.0.1",
        target: "ts",
    };
    feature = {
        test: {
            "options": {
                "active": false
            },
            "transport": "base"
        },
    };
    options = {
        base: "https://api.nobelprize.org/v1",
        headers: {
            "content-type": "application/json"
        },
        entity: {
            laureate: {},
            prize: {},
        }
    };
    entity = {
        "laureate": {
            "fields": [
                {
                    "name": "born",
                    "short": "Birth date",
                    "type": "`$STRING`"
                },
                {
                    "name": "bornCity",
                    "short": "City of birth",
                    "type": "`$STRING`"
                },
                {
                    "name": "bornCountry",
                    "short": "Country of birth",
                    "type": "`$STRING`"
                },
                {
                    "name": "bornCountryCode",
                    "short": "Country code of birth country",
                    "type": "`$STRING`"
                },
                {
                    "name": "died",
                    "short": "Death date",
                    "type": "`$STRING`"
                },
                {
                    "name": "diedCity",
                    "short": "City of death",
                    "type": "`$STRING`"
                },
                {
                    "name": "diedCountry",
                    "short": "Country of death",
                    "type": "`$STRING`"
                },
                {
                    "name": "diedCountryCode",
                    "short": "Country code of death country",
                    "type": "`$STRING`"
                },
                {
                    "name": "firstname",
                    "short": "First name of the laureate",
                    "type": "`$STRING`"
                },
                {
                    "name": "gender",
                    "short": "Gender of the laureate",
                    "type": "`$STRING`"
                },
                {
                    "name": "id",
                    "short": "Laureate ID",
                    "type": "`$STRING`"
                },
                {
                    "name": "prizes",
                    "type": "`$ARRAY`"
                },
                {
                    "name": "surname",
                    "short": "Surname of the laureate",
                    "type": "`$STRING`"
                }
            ],
            "id": {
                "field": "id",
                "name": "id"
            },
            "name": "laureate",
            "op": {
                "list": {
                    "input": "data",
                    "name": "list",
                    "points": [
                        {
                            "args": {
                                "query": [
                                    {
                                        "kind": "query",
                                        "name": "born_city",
                                        "orig": "born_city",
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "kind": "query",
                                        "name": "born_country",
                                        "orig": "born_country",
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "kind": "query",
                                        "name": "died_city",
                                        "orig": "died_city",
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "kind": "query",
                                        "name": "died_country",
                                        "orig": "died_country",
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "kind": "query",
                                        "name": "firstname",
                                        "orig": "firstname",
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "kind": "query",
                                        "name": "gender",
                                        "orig": "gender",
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "kind": "query",
                                        "name": "id",
                                        "orig": "id",
                                        "type": "`$INTEGER`"
                                    },
                                    {
                                        "kind": "query",
                                        "name": "surname",
                                        "orig": "surname",
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/laureate.json",
                            "segments": [
                                {
                                    "lit": "laureate.json"
                                }
                            ],
                            "select": {
                                "exist": [
                                    "born_city",
                                    "born_country",
                                    "died_city",
                                    "died_country",
                                    "firstname",
                                    "gender",
                                    "id",
                                    "surname"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.laureates`"
                            },
                            "parts": [
                                "laureate.json"
                            ]
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        },
        "prize": {
            "fields": [
                {
                    "name": "category",
                    "short": "Category of the Nobel Prize",
                    "type": "`$STRING`"
                },
                {
                    "name": "laureates",
                    "type": "`$ARRAY`"
                },
                {
                    "name": "overallMotivation",
                    "short": "Overall motivation for the prize",
                    "type": "`$STRING`"
                },
                {
                    "name": "year",
                    "short": "Year the prize was awarded",
                    "type": "`$STRING`"
                }
            ],
            "name": "prize",
            "op": {
                "list": {
                    "input": "data",
                    "name": "list",
                    "points": [
                        {
                            "args": {
                                "query": [
                                    {
                                        "kind": "query",
                                        "name": "category",
                                        "orig": "category",
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "kind": "query",
                                        "name": "year",
                                        "orig": "year",
                                        "type": "`$INTEGER`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/prize.json",
                            "segments": [
                                {
                                    "lit": "prize.json"
                                }
                            ],
                            "select": {
                                "exist": [
                                    "category",
                                    "year"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.prizes`"
                            },
                            "parts": [
                                "prize.json"
                            ]
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        }
    };
}
const config = new Config();
exports.config = config;
//# sourceMappingURL=Config.js.map