package = "voxgig-sdk-nobel-prize"
version = "0.0-1"
source = {
  url = "git://github.com/voxgig-sdk/nobel-prize-sdk.git"
}
description = {
  summary = "NobelPrize SDK for Lua",
  license = "MIT"
}
dependencies = {
  "lua >= 5.3",
  "dkjson >= 2.5",
  "dkjson >= 2.5",
}
build = {
  type = "builtin",
  modules = {
    ["nobel-prize_sdk"] = "nobel-prize_sdk.lua",
    ["config"] = "config.lua",
    ["features"] = "features.lua",
  }
}
