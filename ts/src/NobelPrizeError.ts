
import { Context } from './Context'


class NobelPrizeError extends Error {

  isNobelPrizeError = true

  sdk = 'NobelPrize'

  code: string
  ctx: Context

  constructor(code: string, msg: string, ctx: Context) {
    super(msg)
    this.code = code
    this.ctx = ctx
  }

}

export {
  NobelPrizeError
}

