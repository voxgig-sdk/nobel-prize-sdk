# NobelPrize SDK configuration


_shared_config = None


def shared_config():
    """Return the process-wide config, built once on first use.

    The SDK reads the config on every request and never writes to it, so one
    instance is shared by every client rather than rebuilt per client.

    The returned dict is shared: treat it as read-only. Callers that need to
    mutate should use make_config, which always returns a fresh copy.
    """
    global _shared_config
    if _shared_config is None:
        _shared_config = make_config()
    return _shared_config


def make_config():
    """Build a fresh, fully materialised config dict.

    Every call rebuilds the whole structure, so prefer shared_config unless
    you need a private copy you intend to mutate.
    """
    return {
        "main": {
            "name": "NobelPrize",
            "slug": "nobel-prize",
            "version": "0.0.1",
            "target": "py",
        },
        "feature": {
            "test": {
        "options": {
          "active": False,
        },
        "transport": "base",
      },
        },
        "options": {
            "base": "https://api.nobelprize.org/v1",
            "headers": {
        "content-type": "application/json",
      },
            "entity": {
                "laureate": {},
                "prize": {},
            },
        },
        "entity": {
      "laureate": {
        "fields": [
          {
            "name": "born",
            "short": "Birth date",
            "type": "`$STRING`",
          },
          {
            "name": "bornCity",
            "short": "City of birth",
            "type": "`$STRING`",
          },
          {
            "name": "bornCountry",
            "short": "Country of birth",
            "type": "`$STRING`",
          },
          {
            "name": "bornCountryCode",
            "short": "Country code of birth country",
            "type": "`$STRING`",
          },
          {
            "name": "died",
            "short": "Death date",
            "type": "`$STRING`",
          },
          {
            "name": "diedCity",
            "short": "City of death",
            "type": "`$STRING`",
          },
          {
            "name": "diedCountry",
            "short": "Country of death",
            "type": "`$STRING`",
          },
          {
            "name": "diedCountryCode",
            "short": "Country code of death country",
            "type": "`$STRING`",
          },
          {
            "name": "firstname",
            "short": "First name of the laureate",
            "type": "`$STRING`",
          },
          {
            "name": "gender",
            "short": "Gender of the laureate",
            "type": "`$STRING`",
          },
          {
            "name": "id",
            "short": "Laureate ID",
            "type": "`$STRING`",
          },
          {
            "name": "prizes",
            "type": "`$ARRAY`",
          },
          {
            "name": "surname",
            "short": "Surname of the laureate",
            "type": "`$STRING`",
          },
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
                      "type": "`$STRING`",
                    },
                    {
                      "kind": "query",
                      "name": "born_country",
                      "orig": "born_country",
                      "type": "`$STRING`",
                    },
                    {
                      "kind": "query",
                      "name": "died_city",
                      "orig": "died_city",
                      "type": "`$STRING`",
                    },
                    {
                      "kind": "query",
                      "name": "died_country",
                      "orig": "died_country",
                      "type": "`$STRING`",
                    },
                    {
                      "kind": "query",
                      "name": "firstname",
                      "orig": "firstname",
                      "type": "`$STRING`",
                    },
                    {
                      "kind": "query",
                      "name": "gender",
                      "orig": "gender",
                      "type": "`$STRING`",
                    },
                    {
                      "kind": "query",
                      "name": "id",
                      "orig": "id",
                      "type": "`$INTEGER`",
                    },
                    {
                      "kind": "query",
                      "name": "surname",
                      "orig": "surname",
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/laureate.json",
                "parts": [
                  "laureate.json",
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
                    "surname",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.laureates`",
                },
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "prize": {
        "fields": [
          {
            "name": "category",
            "short": "Category of the Nobel Prize",
            "type": "`$STRING`",
          },
          {
            "name": "laureates",
            "type": "`$ARRAY`",
          },
          {
            "name": "overallMotivation",
            "short": "Overall motivation for the prize",
            "type": "`$STRING`",
          },
          {
            "name": "year",
            "short": "Year the prize was awarded",
            "type": "`$STRING`",
          },
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
                      "type": "`$STRING`",
                    },
                    {
                      "kind": "query",
                      "name": "year",
                      "orig": "year",
                      "type": "`$INTEGER`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/prize.json",
                "parts": [
                  "prize.json",
                ],
                "select": {
                  "exist": [
                    "category",
                    "year",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.prizes`",
                },
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
    },
    }
