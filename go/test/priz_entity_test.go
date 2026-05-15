package sdktest

import (
	"encoding/json"
	"os"
	"path/filepath"
	"runtime"
	"strings"
	"testing"
	"time"

	sdk "github.com/voxgig-sdk/nobel-prize-sdk"
	"github.com/voxgig-sdk/nobel-prize-sdk/core"

	vs "github.com/voxgig/struct"
)

func TestPrizEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.Priz(nil)
		if ent == nil {
			t.Fatal("expected non-nil PrizEntity")
		}
	})

	t.Run("basic", func(t *testing.T) {
		setup := prizBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"list"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "priz." + _op, _mode); _shouldSkip {
				if _reason == "" {
					_reason = "skipped via sdk-test-control.json"
				}
				t.Skip(_reason)
				return
			}
		}
		// The basic flow consumes synthetic IDs from the fixture. In live mode
		// without an *_ENTID env override, those IDs hit the live API and 4xx.
		if setup.syntheticOnly {
			t.Skip("live entity test uses synthetic IDs from fixture — set NOBELPRIZE_TEST_PRIZ_ENTID JSON to run live")
			return
		}
		client := setup.client

		// Bootstrap entity data from existing test data (no create step in flow).
		prizRef01DataRaw := vs.Items(core.ToMapAny(vs.GetPath("existing.priz", setup.data)))
		var prizRef01Data map[string]any
		if len(prizRef01DataRaw) > 0 {
			prizRef01Data = core.ToMapAny(prizRef01DataRaw[0][1])
		}
		// Discard guards against Go's unused-var check when the flow's steps
		// happen not to consume the bootstrap data (e.g. list-only flows).
		_ = prizRef01Data

		// LIST
		prizRef01Ent := client.Priz(nil)
		prizRef01Match := map[string]any{}

		prizRef01ListResult, err := prizRef01Ent.List(prizRef01Match, nil)
		if err != nil {
			t.Fatalf("list failed: %v", err)
		}
		_, prizRef01ListOk := prizRef01ListResult.([]any)
		if !prizRef01ListOk {
			t.Fatalf("expected list result to be an array, got %T", prizRef01ListResult)
		}

	})
}

func prizBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "priz", "PrizTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read priz test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse priz test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap := vs.Transform(
		[]any{"priz01", "priz02", "priz03"},
		map[string]any{
			"`$PACK`": []any{"", map[string]any{
				"`$KEY`": "`$COPY`",
				"`$VAL`": []any{"`$FORMAT`", "upper", "`$COPY`"},
			}},
		},
	)

	// Detect ENTID env override before envOverride consumes it. When live
	// mode is on without a real override, the basic test runs against synthetic
	// IDs from the fixture and 4xx's. Surface this so the test can skip.
	entidEnvRaw := os.Getenv("NOBELPRIZE_TEST_PRIZ_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"NOBELPRIZE_TEST_PRIZ_ENTID": idmap,
		"NOBELPRIZE_TEST_LIVE":      "FALSE",
		"NOBELPRIZE_TEST_EXPLAIN":   "FALSE",
		"NOBELPRIZE_APIKEY":         "NONE",
	})

	idmapResolved := core.ToMapAny(env["NOBELPRIZE_TEST_PRIZ_ENTID"])
	if idmapResolved == nil {
		idmapResolved = core.ToMapAny(idmap)
	}

	if env["NOBELPRIZE_TEST_LIVE"] == "TRUE" {
		mergedOpts := vs.Merge([]any{
			map[string]any{
				"apikey": env["NOBELPRIZE_APIKEY"],
			},
			extra,
		})
		client = sdk.NewNobelPrizeSDK(core.ToMapAny(mergedOpts))
	}

	live := env["NOBELPRIZE_TEST_LIVE"] == "TRUE"
	return &entityTestSetup{
		client:        client,
		data:          entityData,
		idmap:         idmapResolved,
		env:           env,
		explain:       env["NOBELPRIZE_TEST_EXPLAIN"] == "TRUE",
		live:          live,
		syntheticOnly: live && !idmapOverridden,
		now:           time.Now().UnixMilli(),
	}
}
