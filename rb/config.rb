# NobelPrize SDK configuration

module NobelPrizeConfig
  # Return the process-wide config, built once on first use. The SDK reads
  # the config on every request and never writes to it, so one instance is
  # shared by every client rather than rebuilt per client.
  #
  # The returned hash is shared: treat it as read-only. Callers that need to
  # mutate should use make_config, which always returns a fresh copy.
  def self.shared_config
    @shared_config ||= make_config
  end


  # Build a fresh, fully materialised config hash. Every call rebuilds the
  # whole structure, so prefer shared_config unless you need a private copy
  # you intend to mutate.
  def self.make_config
    {
      "main" => {
        "name" => "NobelPrize",
      },
      "feature" => {
        "test" => {
          "options" => {
            "active" => false,
          },
        },
      },
      "options" => {
        "base" => "https://api.nobelprize.org/v1",
        "headers" => {
          "content-type" => "application/json",
        },
        "entity" => {
          "laureate" => {},
          "prize" => {},
        },
      },
      "entity" => {
        "laureate" => {
          "fields" => [
            {
              "name" => "born",
              "type" => "`$STRING`",
            },
            {
              "name" => "bornCity",
              "type" => "`$STRING`",
            },
            {
              "name" => "bornCountry",
              "type" => "`$STRING`",
            },
            {
              "name" => "bornCountryCode",
              "type" => "`$STRING`",
            },
            {
              "name" => "died",
              "type" => "`$STRING`",
            },
            {
              "name" => "diedCity",
              "type" => "`$STRING`",
            },
            {
              "name" => "diedCountry",
              "type" => "`$STRING`",
            },
            {
              "name" => "diedCountryCode",
              "type" => "`$STRING`",
            },
            {
              "name" => "firstname",
              "type" => "`$STRING`",
            },
            {
              "name" => "gender",
              "type" => "`$STRING`",
            },
            {
              "name" => "id",
              "type" => "`$STRING`",
            },
            {
              "name" => "prizes",
              "type" => "`$ARRAY`",
            },
            {
              "name" => "surname",
              "type" => "`$STRING`",
            },
          ],
          "name" => "laureate",
          "op" => {
            "list" => {
              "input" => "data",
              "name" => "list",
              "points" => [
                {
                  "args" => {
                    "query" => [
                      {
                        "kind" => "query",
                        "name" => "born_city",
                        "orig" => "born_city",
                        "type" => "`$STRING`",
                      },
                      {
                        "kind" => "query",
                        "name" => "born_country",
                        "orig" => "born_country",
                        "type" => "`$STRING`",
                      },
                      {
                        "kind" => "query",
                        "name" => "died_city",
                        "orig" => "died_city",
                        "type" => "`$STRING`",
                      },
                      {
                        "kind" => "query",
                        "name" => "died_country",
                        "orig" => "died_country",
                        "type" => "`$STRING`",
                      },
                      {
                        "kind" => "query",
                        "name" => "firstname",
                        "orig" => "firstname",
                        "type" => "`$STRING`",
                      },
                      {
                        "kind" => "query",
                        "name" => "gender",
                        "orig" => "gender",
                        "type" => "`$STRING`",
                      },
                      {
                        "kind" => "query",
                        "name" => "id",
                        "orig" => "id",
                        "type" => "`$INTEGER`",
                      },
                      {
                        "kind" => "query",
                        "name" => "surname",
                        "orig" => "surname",
                        "type" => "`$STRING`",
                      },
                    ],
                  },
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/laureate.json",
                  "parts" => [
                    "laureate.json",
                  ],
                  "select" => {
                    "exist" => [
                      "born_city",
                      "born_country",
                      "died_city",
                      "died_country",
                      "firstname",
                      "gender",
                      "id",
                      "surname",
                    ],
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body.laureates`",
                  },
                },
              ],
            },
          },
          "relations" => {
            "ancestors" => [],
          },
        },
        "prize" => {
          "fields" => [
            {
              "name" => "category",
              "type" => "`$STRING`",
            },
            {
              "name" => "laureates",
              "type" => "`$ARRAY`",
            },
            {
              "name" => "overallMotivation",
              "type" => "`$STRING`",
            },
            {
              "name" => "year",
              "type" => "`$STRING`",
            },
          ],
          "name" => "prize",
          "op" => {
            "list" => {
              "input" => "data",
              "name" => "list",
              "points" => [
                {
                  "args" => {
                    "query" => [
                      {
                        "kind" => "query",
                        "name" => "category",
                        "orig" => "category",
                        "type" => "`$STRING`",
                      },
                      {
                        "kind" => "query",
                        "name" => "year",
                        "orig" => "year",
                        "type" => "`$INTEGER`",
                      },
                    ],
                  },
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/prize.json",
                  "parts" => [
                    "prize.json",
                  ],
                  "select" => {
                    "exist" => [
                      "category",
                      "year",
                    ],
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body.prizes`",
                  },
                },
              ],
            },
          },
          "relations" => {
            "ancestors" => [],
          },
        },
      },
    }
  end


  def self.make_feature(name)
    require_relative 'features'
    NobelPrizeFeatures.make_feature(name)
  end
end
