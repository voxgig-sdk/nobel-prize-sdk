
import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { NobelPrizeSDK } from '..'


describe('exists', async () => {

  test('test-mode', async () => {
    const testsdk = await NobelPrizeSDK.test()
    equal(null !== testsdk, true)
  })

})
