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

#### `Prize(data?: object)`

Create a new `Prize` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `PrizeEntity` instance.

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
| `born` | `string` | No | Birth date |
| `bornCity` | `string` | No | City of birth |
| `bornCountry` | `string` | No | Country of birth |
| `bornCountryCode` | `string` | No | Country code of birth country |
| `died` | `string` | No | Death date |
| `diedCity` | `string` | No | City of death |
| `diedCountry` | `string` | No | Country of death |
| `diedCountryCode` | `string` | No | Country code of death country |
| `firstname` | `string` | No | First name of the laureate |
| `gender` | `string` | No | Gender of the laureate |
| `id` | `string` | No | Laureate ID |
| `prizes` | `any[]` | No |  |
| `surname` | `string` | No | Surname of the laureate |

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

## PrizeEntity

```ts
const prize = client.Prize()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `category` | `string` | No | Category of the Nobel Prize |
| `laureates` | `any[]` | No |  |
| `overallMotivation` | `string` | No | Overall motivation for the prize |
| `year` | `string` | No | Year the prize was awarded |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Prize().list()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `PrizeEntity` instance with the same client and
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

