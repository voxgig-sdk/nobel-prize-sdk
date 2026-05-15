# NobelPrize Python SDK Reference

Complete API reference for the NobelPrize Python SDK.


## NobelPrizeSDK

### Constructor

```python
from nobel-prize_sdk import NobelPrizeSDK

client = NobelPrizeSDK(options)
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `dict` | SDK configuration options. |
| `options["apikey"]` | `str` | API key for authentication. |
| `options["base"]` | `str` | Base URL for API requests. |
| `options["prefix"]` | `str` | URL prefix appended after base. |
| `options["suffix"]` | `str` | URL suffix appended after path. |
| `options["headers"]` | `dict` | Custom headers for all requests. |
| `options["feature"]` | `dict` | Feature configuration. |
| `options["system"]` | `dict` | System overrides (e.g. custom fetch). |


### Static Methods

#### `NobelPrizeSDK.test(testopts=None, sdkopts=None)`

Create a test client with mock features active. Both arguments may be `None`.

```python
client = NobelPrizeSDK.test()
```


### Instance Methods

#### `Laureate(data=None)`

Create a new `LaureateEntity` instance. Pass `None` for no initial data.

#### `Priz(data=None)`

Create a new `PrizEntity` instance. Pass `None` for no initial data.

#### `options_map() -> dict`

Return a deep copy of the current SDK options.

#### `get_utility() -> Utility`

Return a copy of the SDK utility object.

#### `direct(fetchargs=None) -> tuple`

Make a direct HTTP request to any API endpoint. Returns `(result, err)`.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs["path"]` | `str` | URL path with optional `{param}` placeholders. |
| `fetchargs["method"]` | `str` | HTTP method (default: `"GET"`). |
| `fetchargs["params"]` | `dict` | Path parameter values. |
| `fetchargs["query"]` | `dict` | Query string parameters. |
| `fetchargs["headers"]` | `dict` | Request headers (merged with defaults). |
| `fetchargs["body"]` | `any` | Request body (dicts are JSON-serialized). |

**Returns:** `(result_dict, err)`

#### `prepare(fetchargs=None) -> tuple`

Prepare a fetch definition without sending. Returns `(fetchdef, err)`.


---

## LaureateEntity

```python
laureate = client.Laureate()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `born` | ``$STRING`` | No |  |
| `born_city` | ``$STRING`` | No |  |
| `born_country` | ``$STRING`` | No |  |
| `born_country_code` | ``$STRING`` | No |  |
| `died` | ``$STRING`` | No |  |
| `died_city` | ``$STRING`` | No |  |
| `died_country` | ``$STRING`` | No |  |
| `died_country_code` | ``$STRING`` | No |  |
| `firstname` | ``$STRING`` | No |  |
| `gender` | ``$STRING`` | No |  |
| `id` | ``$STRING`` | No |  |
| `priz` | ``$ARRAY`` | No |  |
| `surname` | ``$STRING`` | No |  |

### Operations

#### `list(reqmatch, ctrl=None) -> tuple`

List entities matching the given criteria. Returns an array.

```python
results, err = client.Laureate().list({})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `LaureateEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## PrizEntity

```python
priz = client.Priz()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `category` | ``$STRING`` | No |  |
| `laureate` | ``$ARRAY`` | No |  |
| `overall_motivation` | ``$STRING`` | No |  |
| `year` | ``$STRING`` | No |  |

### Operations

#### `list(reqmatch, ctrl=None) -> tuple`

List entities matching the given criteria. Returns an array.

```python
results, err = client.Priz().list({})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `PrizEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | In-memory mock transport for testing without a live server |


Features are activated via the `feature` option:

```python
client = NobelPrizeSDK({
    "feature": {
        "test": {"active": True},
    },
})
```

