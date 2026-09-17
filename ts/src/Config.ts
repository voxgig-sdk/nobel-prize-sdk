
import { BaseFeature } from './feature/base/BaseFeature'
import { RatelimitFeature } from './feature/ratelimit/RatelimitFeature'
import { RetryFeature } from './feature/retry/RetryFeature'
import { TestFeature } from './feature/test/TestFeature'
import { TimeoutFeature } from './feature/timeout/TimeoutFeature'



const FEATURE_CLASS: Record<string, typeof BaseFeature> = {
   ratelimit: RatelimitFeature,
 retry: RetryFeature,
 test: TestFeature,
 timeout: TimeoutFeature,

}


// Per-feature plugin DEFINITIONS (voxgig/plugin `Definition` values), from
// the model's active plugin groups. A feature that takes a `plugins` option
// (secrets over sekreto) reads its own entry; a feature with no plugins has
// none. Named imports above make each definition statically reachable, so
// an SDK carries exactly the plugin modules its model selects — the same
// leanness the old side-effect registry imports bought, without a registry.
const FEATURE_PLUGINS: Record<string, any[]> = {
  
}


class Config {

  makeFeature(this: any, fn: string) {
    const fc = FEATURE_CLASS[fn]
    const fi = new fc()
    // TODO: errors etc
    return fi
  }

  // False for a feature added at runtime via options.extend (station's
  // adopt path) - the constructor uses this to skip makeFeature for names
  // no generated class backs.
  hasFeature(this: any, fn: string) {
    return null != FEATURE_CLASS[fn]
  }


  main = {
    name: 'NobelPrize',
        slug: "nobel-prize",
    version: "0.0.1",
    target: "ts",

  }


  feature = {
     ratelimit:     {
      "options": {
        "active": false,
        "burst": 5,
        "rate": 5
      },
      "optspec": {
        "now": "`$FUNCTION`",
        "sleep": "`$FUNCTION`"
      },
      "strict": false,
      "transport": "wrap"
    },
 retry:     {
      "options": {
        "active": false,
        "factor": 2,
        "maxDelay": 2000,
        "minDelay": 50,
        "retries": 2,
        "statuses": [
          408,
          425,
          429,
          500,
          502,
          503,
          504
        ]
      },
      "optspec": {
        "jitter": "`$BOOLEAN`",
        "sleep": "`$FUNCTION`"
      },
      "strict": false,
      "transport": "wrap"
    },
 test:     {
      "options": {
        "active": false
      },
      "optspec": {
        "entity": "`$MAP`",
        "net": "`$MAP`"
      },
      "strict": false,
      "transport": "base"
    },
 timeout:     {
      "options": {
        "active": false,
        "ms": 30000
      },
      "optspec": {
        "clearTimer": "`$FUNCTION`",
        "setTimer": "`$FUNCTION`"
      },
      "strict": false,
      "transport": "wrap"
    },

  }


  options = {
    base: "https://api.nobelprize.org/v1",

    headers: {
      "content-type": "application/json"
    },

    entity: {
      
        laureate: {
        },
  
        prize: {
        },
  
    }
  }


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
  }
}


const config = new Config()

export {
  config,
  FEATURE_PLUGINS,
}

