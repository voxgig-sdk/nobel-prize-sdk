-- Typed models for the NobelPrize SDK (LuaLS annotations).
--
-- GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
-- params (op.<name>.points[].args.params[]). Field/param types come from the
-- canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
-- @voxgig/apidef VALID_CANON). Annotations only — no runtime effect. Do not
-- edit by hand.

---@class Laureate
---@field born? string
---@field bornCity? string
---@field bornCountry? string
---@field bornCountryCode? string
---@field died? string
---@field diedCity? string
---@field diedCountry? string
---@field diedCountryCode? string
---@field firstname? string
---@field gender? string
---@field id? string
---@field prizes? table
---@field surname? string

---@class LaureateListMatch
---@field born_city? string
---@field born_country? string
---@field died_city? string
---@field died_country? string
---@field firstname? string
---@field gender? string
---@field id? number
---@field surname? string

---@class Prize
---@field category? string
---@field laureates? table
---@field overallMotivation? string
---@field year? string

---@class PrizeListMatch
---@field category? string
---@field year? number

local M = {}

return M
