# NobelPrize SDK

Browse Nobel Prizes and the laureates who received them, from 1901 to the present

> TypeScript, Python, PHP, Golang, Ruby, Lua SDKs, a CLI, an interactive REPL, and an MCP server for AI agents — all generated from one OpenAPI spec by [@voxgig/sdkgen](https://github.com/voxgig/sdkgen).

## About Nobel Prize API

The Nobel Prize API is published by the [Nobel Foundation](https://www.nobelprize.org/) and exposes data about the Nobel Prizes and the laureates who have received them, going back to the first awards in 1901.

What you get from the API:

- A list/search endpoint for **laureates** — the people and organisations awarded a Nobel Prize.
- A list/search endpoint for **Nobel Prizes** themselves — one record per prize, linking back to the relevant laureates.
- Responses available in JSON or CSV.

The API does not require an API key. CORS is enabled on the laureates endpoint. This SDK targets the `v1` server (`https://api.nobelprize.org/v1`); the Foundation also publishes newer versions (2.0, 2.1) and a SPARQL-based Linked Data endpoint at `data.nobelprize.org` for more advanced querying.

## Try it

**TypeScript**
```bash
npm install nobel-prize
```

**Python**
```bash
pip install nobel-prize-sdk
```

**PHP**
```bash
composer require voxgig/nobel-prize-sdk
```

**Golang**
```bash
go get github.com/voxgig-sdk/nobel-prize-sdk/go
```

**Ruby**
```bash
gem install nobel-prize-sdk
```

**Lua**
```bash
luarocks install nobel-prize-sdk
```

## 30-second quickstart

### TypeScript

```ts
import { NobelPrizeSDK } from 'nobel-prize'

const client = new NobelPrizeSDK({})

// List all laureates
const laureates = await client.Laureate().list()
```

See the [TypeScript README](ts/README.md) for the
full guide, or scroll down for the same example in other languages.

## What's in the box

| Surface | Use it for | Path |
| --- | --- | --- |
| **SDK** (TypeScript, Python, PHP, Golang, Ruby, Lua) | App integration | `ts/` `py/` `php/` `go/` `rb/` `lua/` |
| **CLI** | Scripts, CI, ops, one-off API calls | `go-cli/` |
| **MCP server** | AI agents (Claude, Cursor, Cline) | `go-mcp/` |

## Use it from an AI agent (MCP)

The generated MCP server exposes every operation in this SDK as an
[MCP](https://modelcontextprotocol.io) tool that Claude, Cursor or Cline
can call directly. Build and register it:

```bash
cd go-mcp && go build -o nobel-prize-mcp .
```

Then add it to your agent's MCP config (Claude Desktop, Cursor, etc.):

```json
{
  "mcpServers": {
    "nobel-prize": {
      "command": "/abs/path/to/nobel-prize-mcp"
    }
  }
}
```

## Entities

The API exposes 2 entities:

| Entity | Description | API path |
| --- | --- | --- |
| **Laureate** | A person or organisation awarded a Nobel Prize, exposed via the `/laureates` endpoint. | `/laureate.json` |
| **Prize** |  | `/prize.json` |

Each entity supports the following operations where available: **load**,
**list**, **create**, **update**, and **remove**.

## Quickstart in other languages

### Python

```python
from nobelprize_sdk import NobelPrizeSDK

client = NobelPrizeSDK({})

# List all laureates
laureates, err = client.Laureate(None).list(None, None)
```

### PHP

```php
<?php
require_once 'nobelprize_sdk.php';

$client = new NobelPrizeSDK([]);

// List all laureates
[$laureates, $err] = $client->Laureate(null)->list(null, null);
```

### Golang

```go
import sdk "github.com/voxgig-sdk/nobel-prize-sdk/go"

client := sdk.NewNobelPrizeSDK(map[string]any{})

// List all laureates
laureates, err := client.Laureate(nil).List(nil, nil)
```

### Ruby

```ruby
require_relative "NobelPrize_sdk"

client = NobelPrizeSDK.new({})

# List all laureates
laureates, err = client.Laureate(nil).list(nil, nil)
```

### Lua

```lua
local sdk = require("nobel-prize_sdk")

local client = sdk.new({})

-- List all laureates
local laureates, err = client:Laureate(nil):list(nil, nil)
```

## Unit testing in offline mode

Every SDK ships a test mode that swaps the HTTP transport for an
in-memory mock, so unit tests run offline.

### TypeScript

```ts
const client = NobelPrizeSDK.test()
const result = await client.Laureate().load({ id: 'test01' })
// result.ok === true, result.data contains mock data
```

### Python

```python
client = NobelPrizeSDK.test(None, None)
result, err = client.Laureate(None).load(
    {"id": "test01"}, None
)
```

### PHP

```php
$client = NobelPrizeSDK::test(null, null);
[$result, $err] = $client->Laureate(null)->load(
    ["id" => "test01"], null
);
```

### Golang

```go
client := sdk.TestSDK(nil, nil)
result, err := client.Laureate(nil).Load(
    map[string]any{"id": "test01"}, nil,
)
```

### Ruby

```ruby
client = NobelPrizeSDK.test(nil, nil)
result, err = client.Laureate(nil).load(
  { "id" => "test01" }, nil
)
```

### Lua

```lua
local client = sdk.test(nil, nil)
local result, err = client:Laureate(nil):load(
  { id = "test01" }, nil
)
```

## How it works

Every SDK call runs the same five-stage pipeline:

1. **Point** — resolve the API endpoint from the operation definition.
2. **Spec** — build the HTTP specification (URL, method, headers, body).
3. **Request** — send the HTTP request.
4. **Response** — receive and parse the response.
5. **Result** — extract the result data for the caller.

A feature hook fires at each stage (e.g. `PrePoint`, `PreSpec`,
`PreRequest`), so features can inspect or modify the pipeline without
forking the SDK.

### Features

| Feature | Purpose |
| --- | --- |
| **TestFeature** | In-memory mock transport for testing without a live server |

Pass custom features via the `extend` option at construction time.

### Direct and Prepare

For endpoints the entity model doesn't cover, use the low-level methods:

- **`direct(fetchargs)`** — build and send an HTTP request in one step.
- **`prepare(fetchargs)`** — build the request without sending it.

Both accept a map with `path`, `method`, `params`, `query`,
`headers`, and `body`. See the [How-to guides](#how-to-guides) below.

## How-to guides

### Make a direct API call

When the entity interface does not cover an endpoint, use `direct`:

**TypeScript:**
```ts
const result = await client.direct({
  path: '/api/resource/{id}',
  method: 'GET',
  params: { id: 'example' },
})
console.log(result.data)
```

**Python:**
```python
result, err = client.direct({
    "path": "/api/resource/{id}",
    "method": "GET",
    "params": {"id": "example"},
})
```

**PHP:**
```php
[$result, $err] = $client->direct([
    "path" => "/api/resource/{id}",
    "method" => "GET",
    "params" => ["id" => "example"],
]);
```

**Go:**
```go
result, err := client.Direct(map[string]any{
    "path":   "/api/resource/{id}",
    "method": "GET",
    "params": map[string]any{"id": "example"},
})
```

**Ruby:**
```ruby
result, err = client.direct({
  "path" => "/api/resource/{id}",
  "method" => "GET",
  "params" => { "id" => "example" },
})
```

**Lua:**
```lua
local result, err = client:direct({
  path = "/api/resource/{id}",
  method = "GET",
  params = { id = "example" },
})
```

## Per-language documentation

- [TypeScript](ts/README.md)
- [Python](py/README.md)
- [PHP](php/README.md)
- [Golang](go/README.md)
- [Ruby](rb/README.md)
- [Lua](lua/README.md)

## Using the Nobel Prize API

- Upstream: [https://www.nobelprize.org/about/developer-zone-2/](https://www.nobelprize.org/about/developer-zone-2/)

- Free to access; no API key or registration required.
- Use is governed by the [Nobel Prize API terms of use](https://www.nobelprize.org/about/terms-of-use-for-api-nobelprize-org-and-data-nobelprize-org/) — review before integrating.
- The Nobel Foundation strongly encourages subscribing to their developer newsletter for change notifications.

---

Generated from the Nobel Prize API OpenAPI spec by [@voxgig/sdkgen](https://github.com/voxgig/sdkgen).
