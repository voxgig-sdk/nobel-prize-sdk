
import { BaseFeature } from './feature/base/BaseFeature'
import { TestFeature } from './feature/test/TestFeature'



const FEATURE_CLASS: Record<string, typeof BaseFeature> = {
   test: TestFeature,

}


class Config {

  makeFeature(this: any, fn: string) {
    const fc = FEATURE_CLASS[fn]
    const fi = new fc()
    // TODO: errors etc
    return fi
  }


  main = {
    name: 'NobelPrize',
  }


  feature = {
     test:     {
      "options": {
        "active": false
      }
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
          "type": "`$STRING`"
        },
        {
          "name": "bornCity",
          "type": "`$STRING`"
        },
        {
          "name": "bornCountry",
          "type": "`$STRING`"
        },
        {
          "name": "bornCountryCode",
          "type": "`$STRING`"
        },
        {
          "name": "died",
          "type": "`$STRING`"
        },
        {
          "name": "diedCity",
          "type": "`$STRING`"
        },
        {
          "name": "diedCountry",
          "type": "`$STRING`"
        },
        {
          "name": "diedCountryCode",
          "type": "`$STRING`"
        },
        {
          "name": "firstname",
          "type": "`$STRING`"
        },
        {
          "name": "gender",
          "type": "`$STRING`"
        },
        {
          "name": "id",
          "type": "`$STRING`"
        },
        {
          "name": "prizes",
          "type": "`$ARRAY`"
        },
        {
          "name": "surname",
          "type": "`$STRING`"
        }
      ],
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
              "parts": [
                "laureate.json"
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
              }
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
          "type": "`$STRING`"
        },
        {
          "name": "laureates",
          "type": "`$ARRAY`"
        },
        {
          "name": "overallMotivation",
          "type": "`$STRING`"
        },
        {
          "name": "year",
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
              "parts": [
                "prize.json"
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
              }
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
  config
}

