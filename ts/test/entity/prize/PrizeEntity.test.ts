

import Path from 'node:path'
import * as Fs from 'node:fs'

import { test, describe, afterEach } from 'node:test'
import assert from 'node:assert'
import { createLiveTransport } from '../../live-runner'
import { runLiveEntity } from '../../live-entity'


import { NobelPrizeSDK, BaseFeature, stdutil } from '../../..'

import {
  envOverride,
  liveClientOptions,
  liveDelay,
  loadEnvLocal,
  makeCtrl,
  makeMatch,
  makeReqdata,
  makeStepData,
  makeValid,
  maybeSkipControl,
} from '../../utility'


// AFTER the imports on purpose: TypeScript hoists `import` above any
// statement in the emitted CommonJS, so a loader placed above them would
// run only after every imported module had already been evaluated - and
// anything reading process.env at module scope would miss these values.
loadEnvLocal(__dirname + '/../../../.env.local')


describe('PrizeEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when NOBEL_PRIZE_TEST_LIVE=TRUE.
  afterEach(liveDelay('NOBEL_PRIZE_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = NobelPrizeSDK.test()
    const ent = testsdk.Prize()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.NOBEL_PRIZE_TEST_LIVE
    for (const op of ['list']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'prize.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"category","req":false,"short":"Category of the Nobel Prize","type":"`$STRING`","index$":0},{"active":true,"name":"laureates","req":false,"type":"`$ARRAY`","index$":1},{"active":true,"name":"overallMotivation","req":false,"short":"Overall motivation for the prize","type":"`$STRING`","index$":2},{"active":true,"name":"year","req":false,"short":"Year the prize was awarded","type":"`$STRING`","index$":3}],"name":"prize","op":{"list":{"input":"data","name":"list","points":[{"active":true,"args":{"query":[{"active":true,"kind":"query","name":"category","orig":"category","reqd":false,"type":"`$STRING`","index$":0},{"active":true,"kind":"query","name":"year","orig":"year","reqd":false,"type":"`$INTEGER`","index$":1}]},"contract":{"id":"GET /prize.json","json":"{\"operationId\":\"getPrizes\",\"parameters\":[{\"description\":\"Filter prizes by year (e.g., 2020)\",\"in\":\"query\",\"name\":\"year\",\"required\":false,\"schema\":{\"minimum\":1901,\"type\":\"integer\"}},{\"description\":\"Filter prizes by category\",\"in\":\"query\",\"name\":\"category\",\"required\":false,\"schema\":{\"enum\":[\"physics\",\"chemistry\",\"medicine\",\"literature\",\"peace\",\"economics\"],\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"example\":{\"prizes\":[{\"category\":\"physics\",\"laureates\":[{\"firstname\":\"Roger\",\"id\":\"988\",\"motivation\":\"for the discovery that black hole formation is a robust prediction of the general theory of relativity\",\"share\":\"2\",\"surname\":\"Penrose\"}],\"year\":\"2020\"}]},\"schema\":{\"properties\":{\"prizes\":{\"items\":{\"properties\":{\"category\":{\"description\":\"Category of the Nobel Prize\",\"type\":\"string\"},\"laureates\":{\"items\":{\"properties\":{\"firstname\":{\"description\":\"First name of the laureate\",\"type\":\"string\"},\"id\":{\"description\":\"Laureate ID\",\"type\":\"string\"},\"motivation\":{\"description\":\"Motivation for the award\",\"type\":\"string\"},\"share\":{\"description\":\"Share of the prize\",\"type\":\"string\"},\"surname\":{\"description\":\"Surname of the laureate\",\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"},\"overallMotivation\":{\"description\":\"Overall motivation for the prize\",\"type\":\"string\"},\"year\":{\"description\":\"Year the prize was awarded\",\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"}},\"type\":\"object\"}}},\"description\":\"Successful response with prize data\"},\"400\":{\"description\":\"Bad request - invalid parameters\"},\"500\":{\"description\":\"Internal server error\"}},\"securitySource\":\"unspecified\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/prize.json","segments":[{"lit":"prize.json"}],"select":{"exist":["category","year"]},"transform":{"req":"`reqdata`","res":"`body.prizes`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[]},"key$":"prize","name__orig":"prize","Name":"Prize","name_":"prize","name-":"prize","NAME":"PRIZE","index$":1}, {"active":true,"entity":"prize","key$":"BasicPrizeFlow","kind":"basic","name":"BasicPrizeFlow","param":{},"step":[{"active":true,"data":{},"input":{},"match":{},"op":"list","spec":[],"valid":[{"apply":"ItemExists","def":{"ref":"prize_ref01"}}],"index$":0}]}, 'Prize')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let prize_ref01_data = Object.values(setup.data.existing.prize)[0] as any

    // LIST
    const prize_ref01_ent = client.Prize()
    const prize_ref01_match: any = {}

    const prize_ref01_list = (await prize_ref01_ent.list(prize_ref01_match)).map((e: any) => e.data())


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/prize/PrizeTestData.json')

  // TODO: file ready util needed?
  const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8')

  // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
  const entityData = JSON.parse(entityDataSource)

  options.entity = entityData.existing

  let client = NobelPrizeSDK.test(options, extra)
  const struct = client.utility().struct
  const merge = struct.merge
  const transform = struct.transform

  let idmap = transform(
    ['prize01','prize02','prize03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'NOBEL_PRIZE_TEST_PRIZE_ENTID': idmap,
    'NOBEL_PRIZE_TEST_LIVE': 'FALSE',
    'NOBEL_PRIZE_TEST_EXPLAIN': 'FALSE',
  })

  idmap = env['NOBEL_PRIZE_TEST_PRIZE_ENTID']

  const live = 'TRUE' === env.NOBEL_PRIZE_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['NOBEL_PRIZE_TEST_PRIZE_ENTID']
    idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {}
    if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
      throw new Error('Live ENTID must be a JSON object')
    }
    client = new NobelPrizeSDK(merge([
      // FIRST, so the generated fields below win: sdk-test-control.json's
      // test.client.options adds to the live client, it does not redirect it.
      liveClientOptions(),
      {
      },
      // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when the
      // last entry is undefined, and basicSetup is normally called with no
      // argument at all - so a bare 'extra' silently discarded the apikey
      // and server values above and handed the SDK undefined. Harmless
      // while there was nothing in that object; not harmless now.
      extra || {},
      { system: { fetch: transport.fetch } }
    ]))
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
  }

  return setup
}
  
