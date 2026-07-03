
const envlocal = __dirname + '/../../../.env.local'
require('dotenv').config({ quiet: true, path: [envlocal] })

import { test, describe, afterEach } from 'node:test'
import assert from 'node:assert'


import { NobelPrizeSDK } from '../../..'

import {
  envOverride,
  liveDelay,
  maybeSkipControl,
  skipIfMissingIds,
} from '../../utility'


describe('LaureateDirect', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when NOBELPRIZE_TEST_LIVE=TRUE.
  afterEach(liveDelay('NOBELPRIZE_TEST_LIVE'))

  test('direct-exists', async () => {
    const sdk = new NobelPrizeSDK({
      system: { fetch: async () => ({}) }
    })
    assert('function' === typeof sdk.direct)
    assert('function' === typeof sdk.prepare)
  })


  test('direct-list-laureate', async (t: any) => {
    const setup = directSetup([{ id: 'direct01' }, { id: 'direct02' }])
    if (maybeSkipControl(t, 'direct', 'direct-list-laureate', setup.live)) return
    const { client, calls } = setup

    const params: any = {}
    const query: any = {}

    const result: any = await client.direct({
      path: 'laureate.json',
      method: 'GET',
      params,
      query,
    })

    if (setup.live) {
      // Live mode is lenient: synthetic IDs frequently 4xx and the list-
      // response shape varies wildly across public APIs. Skip rather than
      // fail when the call doesn't return a usable list.
      if (!result.ok || result.status < 200 || result.status >= 300) {
        return
      }
      const listArr = unwrapListData(result.data)
      if (!Array.isArray(listArr)) {
        return
      }
    } else {
      assert(result.ok === true)
      assert(result.status === 200)
      assert(null != result.data)
      const listArr = unwrapListData(result.data)
      assert(Array.isArray(listArr))
      assert(listArr!.length === 2)
      assert(calls.length === 1)
      assert(calls[0].init.method === 'GET')
    }
  })

})



function directSetup(mockres?: any) {
  const calls: any[] = []

  const env = envOverride({
    'NOBELPRIZE_TEST_LAUREATE_ENTID': {},
    'NOBELPRIZE_TEST_LIVE': 'FALSE',
    'NOBELPRIZE_APIKEY': 'NONE',
  })

  const live = 'TRUE' === env.NOBELPRIZE_TEST_LIVE

  if (live) {
    const client = new NobelPrizeSDK({
      apikey: env.NOBELPRIZE_APIKEY,
    })

    let idmap: any = env['NOBELPRIZE_TEST_LAUREATE_ENTID']
    if ('string' === typeof idmap && idmap.startsWith('{')) {
      idmap = JSON.parse(idmap)
    }

    return { client, calls, live, idmap }
  }

  const mockFetch = async (url: string, init: any) => {
    calls.push({ url, init })
    return {
      status: 200,
      statusText: 'OK',
      headers: {},
      json: async () => (null != mockres ? mockres : { id: 'direct01' }),
    }
  }

  const client = new NobelPrizeSDK({
    base: 'http://localhost:8080',
    system: { fetch: mockFetch },
  })

  return { client, calls, live, idmap: {} as any }
}

// direct() returns the raw response body. List endpoints often wrap the
// array in an envelope (e.g. { data: [...] }, { entities: [...] },
// { pagination, data: [...] }). The test transforms the raw body to
// extract the first array — either the body itself or the first array
// property of an envelope object.
function unwrapListData(data: any): any[] | null {
  if (Array.isArray(data)) return data
  if (data && 'object' === typeof data) {
    for (const v of Object.values(data)) {
      if (Array.isArray(v)) return v as any[]
    }
  }
  return null
}
  
