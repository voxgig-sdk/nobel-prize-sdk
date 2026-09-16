"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_path_1 = __importDefault(require("node:path"));
const Fs = __importStar(require("node:fs"));
const node_test_1 = require("node:test");
const node_assert_1 = __importDefault(require("node:assert"));
const live_runner_1 = require("../../live-runner");
const live_entity_1 = require("../../live-entity");
const __1 = require("../../..");
const utility_1 = require("../../utility");
// AFTER the imports on purpose: TypeScript hoists `import` above any
// statement in the emitted CommonJS, so a loader placed above them would
// run only after every imported module had already been evaluated - and
// anything reading process.env at module scope would miss these values.
(0, utility_1.loadEnvLocal)(__dirname + '/../../../.env.local');
(0, node_test_1.describe)('LaureateEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when NOBEL_PRIZE_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('NOBEL_PRIZE_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.NobelPrizeSDK.test();
        const ent = testsdk.Laureate();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.NOBEL_PRIZE_TEST_LIVE;
        for (const op of ['list']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'laureate.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": [{ "active": true, "name": "born", "req": false, "short": "Birth date", "type": "`$STRING`", "index$": 0 }, { "active": true, "name": "bornCity", "req": false, "short": "City of birth", "type": "`$STRING`", "index$": 1 }, { "active": true, "name": "bornCountry", "req": false, "short": "Country of birth", "type": "`$STRING`", "index$": 2 }, { "active": true, "name": "bornCountryCode", "req": false, "short": "Country code of birth country", "type": "`$STRING`", "index$": 3 }, { "active": true, "name": "died", "req": false, "short": "Death date", "type": "`$STRING`", "index$": 4 }, { "active": true, "name": "diedCity", "req": false, "short": "City of death", "type": "`$STRING`", "index$": 5 }, { "active": true, "name": "diedCountry", "req": false, "short": "Country of death", "type": "`$STRING`", "index$": 6 }, { "active": true, "name": "diedCountryCode", "req": false, "short": "Country code of death country", "type": "`$STRING`", "index$": 7 }, { "active": true, "name": "firstname", "req": false, "short": "First name of the laureate", "type": "`$STRING`", "index$": 8 }, { "active": true, "name": "gender", "req": false, "short": "Gender of the laureate", "type": "`$STRING`", "index$": 9 }, { "active": true, "name": "id", "req": false, "short": "Laureate ID", "type": "`$STRING`", "index$": 10 }, { "active": true, "name": "prizes", "req": false, "type": "`$ARRAY`", "index$": 11 }, { "active": true, "name": "surname", "req": false, "short": "Surname of the laureate", "type": "`$STRING`", "index$": 12 }], "id": { "field": "id", "name": "id" }, "name": "laureate", "op": { "list": { "input": "data", "name": "list", "points": [{ "active": true, "args": { "query": [{ "active": true, "kind": "query", "name": "born_city", "orig": "born_city", "reqd": false, "type": "`$STRING`", "index$": 0 }, { "active": true, "kind": "query", "name": "born_country", "orig": "born_country", "reqd": false, "type": "`$STRING`", "index$": 1 }, { "active": true, "kind": "query", "name": "died_city", "orig": "died_city", "reqd": false, "type": "`$STRING`", "index$": 2 }, { "active": true, "kind": "query", "name": "died_country", "orig": "died_country", "reqd": false, "type": "`$STRING`", "index$": 3 }, { "active": true, "kind": "query", "name": "firstname", "orig": "firstname", "reqd": false, "type": "`$STRING`", "index$": 4 }, { "active": true, "kind": "query", "name": "gender", "orig": "gender", "reqd": false, "type": "`$STRING`", "index$": 5 }, { "active": true, "kind": "query", "name": "id", "orig": "id", "reqd": false, "type": "`$INTEGER`", "index$": 6 }, { "active": true, "kind": "query", "name": "surname", "orig": "surname", "reqd": false, "type": "`$STRING`", "index$": 7 }] }, "contract": { "id": "GET /laureate.json", "json": "{\"operationId\":\"getLaureates\",\"parameters\":[{\"description\":\"Filter laureates by ID\",\"in\":\"query\",\"name\":\"id\",\"required\":false,\"schema\":{\"type\":\"integer\"}},{\"description\":\"Filter laureates by first name\",\"in\":\"query\",\"name\":\"firstname\",\"required\":false,\"schema\":{\"type\":\"string\"}},{\"description\":\"Filter laureates by surname\",\"in\":\"query\",\"name\":\"surname\",\"required\":false,\"schema\":{\"type\":\"string\"}},{\"description\":\"Filter laureates by gender\",\"in\":\"query\",\"name\":\"gender\",\"required\":false,\"schema\":{\"enum\":[\"male\",\"female\",\"org\"],\"type\":\"string\"}},{\"description\":\"Filter laureates by birth country\",\"in\":\"query\",\"name\":\"bornCountry\",\"required\":false,\"schema\":{\"type\":\"string\"}},{\"description\":\"Filter laureates by country of death\",\"in\":\"query\",\"name\":\"diedCountry\",\"required\":false,\"schema\":{\"type\":\"string\"}},{\"description\":\"Filter laureates by birth city\",\"in\":\"query\",\"name\":\"bornCity\",\"required\":false,\"schema\":{\"type\":\"string\"}},{\"description\":\"Filter laureates by city of death\",\"in\":\"query\",\"name\":\"diedCity\",\"required\":false,\"schema\":{\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"example\":{\"laureates\":[{\"born\":\"1931-08-08\",\"bornCity\":\"Colchester\",\"bornCountry\":\"United Kingdom\",\"bornCountryCode\":\"GB\",\"firstname\":\"Roger\",\"gender\":\"male\",\"id\":\"988\",\"prizes\":[{\"affiliations\":[{\"city\":\"Oxford\",\"country\":\"United Kingdom\",\"name\":\"University of Oxford\"}],\"category\":\"physics\",\"motivation\":\"for the discovery that black hole formation is a robust prediction of the general theory of relativity\",\"share\":\"2\",\"year\":\"2020\"}],\"surname\":\"Penrose\"}]},\"schema\":{\"properties\":{\"laureates\":{\"items\":{\"properties\":{\"born\":{\"description\":\"Birth date\",\"type\":\"string\"},\"bornCity\":{\"description\":\"City of birth\",\"type\":\"string\"},\"bornCountry\":{\"description\":\"Country of birth\",\"type\":\"string\"},\"bornCountryCode\":{\"description\":\"Country code of birth country\",\"type\":\"string\"},\"died\":{\"description\":\"Death date\",\"type\":\"string\"},\"diedCity\":{\"description\":\"City of death\",\"type\":\"string\"},\"diedCountry\":{\"description\":\"Country of death\",\"type\":\"string\"},\"diedCountryCode\":{\"description\":\"Country code of death country\",\"type\":\"string\"},\"firstname\":{\"description\":\"First name of the laureate\",\"type\":\"string\"},\"gender\":{\"description\":\"Gender of the laureate\",\"type\":\"string\"},\"id\":{\"description\":\"Laureate ID\",\"type\":\"string\"},\"prizes\":{\"items\":{\"properties\":{\"affiliations\":{\"items\":{\"properties\":{\"city\":{\"description\":\"City of the affiliation\",\"type\":\"string\"},\"country\":{\"description\":\"Country of the affiliation\",\"type\":\"string\"},\"name\":{\"description\":\"Name of the affiliation\",\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"},\"category\":{\"description\":\"Category of the Nobel Prize\",\"type\":\"string\"},\"motivation\":{\"description\":\"Motivation for the award\",\"type\":\"string\"},\"share\":{\"description\":\"Share of the prize\",\"type\":\"string\"},\"year\":{\"description\":\"Year the prize was awarded\",\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"},\"surname\":{\"description\":\"Surname of the laureate\",\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"}},\"type\":\"object\"}}},\"description\":\"Successful response with laureate data\"},\"400\":{\"description\":\"Bad request - invalid parameters\"},\"500\":{\"description\":\"Internal server error\"}},\"securitySource\":\"unspecified\"}", "source": "openapi3", "version": 1 }, "kind": "http", "method": "GET", "orig": "/laureate.json", "segments": [{ "lit": "laureate.json" }], "select": { "exist": ["born_city", "born_country", "died_city", "died_country", "firstname", "gender", "id", "surname"] }, "transform": { "req": "`reqdata`", "res": "`body.laureates`" }, "index$": 0 }], "key$": "list" } }, "relations": { "ancestors": [] }, "key$": "laureate", "name__orig": "laureate", "Name": "Laureate", "name_": "laureate", "name-": "laureate", "NAME": "LAUREATE", "index$": 0 }, { "active": true, "entity": "laureate", "key$": "BasicLaureateFlow", "kind": "basic", "name": "BasicLaureateFlow", "param": {}, "step": [{ "active": true, "data": {}, "input": {}, "match": {}, "op": "list", "spec": [], "valid": [{ "apply": "ItemExists", "def": { "ref": "laureate_ref01" } }], "index$": 0 }] }, 'Laureate');
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let laureate_ref01_data = Object.values(setup.data.existing.laureate)[0];
        // LIST
        const laureate_ref01_ent = client.Laureate();
        const laureate_ref01_match = {};
        const laureate_ref01_list = (await laureate_ref01_ent.list(laureate_ref01_match)).map((e) => e.data());
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/laureate/LaureateTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.NobelPrizeSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['laureate01', 'laureate02', 'laureate03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'NOBEL_PRIZE_TEST_LAUREATE_ENTID': idmap,
        'NOBEL_PRIZE_TEST_LIVE': 'FALSE',
        'NOBEL_PRIZE_TEST_EXPLAIN': 'FALSE',
    });
    idmap = env['NOBEL_PRIZE_TEST_LAUREATE_ENTID'];
    const live = 'TRUE' === env.NOBEL_PRIZE_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['NOBEL_PRIZE_TEST_LAUREATE_ENTID'];
        idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {};
        if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
            throw new Error('Live ENTID must be a JSON object');
        }
        client = new __1.NobelPrizeSDK(merge([
            // FIRST, so the generated fields below win: sdk-test-control.json's
            // test.client.options adds to the live client, it does not redirect it.
            (0, utility_1.liveClientOptions)(),
            {},
            // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when the
            // last entry is undefined, and basicSetup is normally called with no
            // argument at all - so a bare 'extra' silently discarded the apikey
            // and server values above and handed the SDK undefined. Harmless
            // while there was nothing in that object; not harmless now.
            extra || {},
            { system: { fetch: transport.fetch } }
        ]));
    }
    const setup = {
        idmap,
        env,
        options,
        client,
        struct,
        data: entityData,
        explain: 'TRUE' === env.NOBEL_PRIZE_TEST_EXPLAIN,
        live,
        transport,
        now: Date.now(),
    };
    return setup;
}
//# sourceMappingURL=LaureateEntity.test.js.map