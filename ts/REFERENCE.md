# NobelPrize TypeScript SDK Reference

Complete API reference for the NobelPrize TypeScript SDK.


## NobelPrizeSDK

### Constructor

```ts
new NobelPrizeSDK(options?: object)
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `object` | SDK configuration options. |
| `options.apikey` | `string` | API key for authentication. |
| `options.base` | `string` | Base URL for API requests. |
| `options.prefix` | `string` | URL prefix appended after base. |
| `options.suffix` | `string` | URL suffix appended after path. |
| `options.headers` | `object` | Custom headers for all requests. |
| `options.feature` | `object` | Feature configuration. |
| `options.system` | `object` | System overrides (e.g. custom fetch). |


### Static Methods

#### `NobelPrizeSDK.test(testopts?, sdkopts?)`

Create a test client with mock features active.

```ts
const client = NobelPrizeSDK.test()
```

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `testopts` | `object` | Test feature options. |
| `sdkopts` | `object` | Additional SDK options merged with test defaults. |

**Returns:** `NobelPrizeSDK` instance in test mode.


### Instance Methods

#### `Laureate(data?: object)`

Create a new `Laureate` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `LaureateEntity` instance.

#### `Priz(data?: object)`

Create a new `Priz` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `PrizEntity` instance.

#### `options()`

Return a deep copy of the current SDK options.

**Returns:** `object`

#### `utility()`

Return a copy of the SDK utility object.

**Returns:** `object`

#### `direct(fetchargs?: object)`

Make a direct HTTP request to any API endpoint.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs.path` | `string` | URL path with optional `{param}` placeholders. |
| `fetchargs.method` | `string` | HTTP method (default: `GET`). |
| `fetchargs.params` | `object` | Path parameter values for `{param}` substitution. |
| `fetchargs.query` | `object` | Query string parameters. |
| `fetchargs.headers` | `object` | Request headers (merged with defaults). |
| `fetchargs.body` | `any` | Request body (objects are JSON-serialized). |
| `fetchargs.ctrl` | `object` | Control options (e.g. `{ explain: true }`). |

**Returns:** `Promise<{ ok, status, headers, data } | Error>`

#### `prepare(fetchargs?: object)`

Prepare a fetch definition without sending the request. Accepts the
same parameters as `direct()`.

**Returns:** `Promise<{ url, method, headers, body } | Error>`

#### `tester(testopts?, sdkopts?)`

Alias for `NobelPrizeSDK.test()`.

**Returns:** `NobelPrizeSDK` instance in test mode.


---

## LaureateEntity

```ts
const laureate = client.Laureate()
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

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Laureate().list()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `LaureateEntity` instance with the same client and
options.

#### `client()`

Return the parent `NobelPrizeSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## PrizEntity

```ts
const priz = client.Priz()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `category` | ``$STRING`` | No |  |
| `laureate` | ``$ARRAY`` | No |  |
| `overall_motivation` | ``$STRING`` | No |  |
| `year` | ``$STRING`` | No |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Priz().list()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `PrizEntity` instance with the same client and
options.

#### `client()`

Return the parent `NobelPrizeSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | In-memory mock transport for testing without a live server |


Features are activated via the `feature` option:

```ts
const client = new NobelPrizeSDK({
  feature: {
    test: { active: true },
  }
})
```

