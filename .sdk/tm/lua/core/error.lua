-- NobelPrize SDK error

local NobelPrizeError = {}
NobelPrizeError.__index = NobelPrizeError


function NobelPrizeError.new(code, msg, ctx)
  local self = setmetatable({}, NobelPrizeError)
  self.is_sdk_error = true
  self.sdk = "NobelPrize"
  self.code = code or ""
  self.msg = msg or ""
  self.ctx = ctx
  self.result = nil
  self.spec = nil
  return self
end


function NobelPrizeError:error()
  return self.msg
end


function NobelPrizeError:__tostring()
  return self.msg
end


return NobelPrizeError
