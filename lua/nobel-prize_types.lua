-- Typed models for the NobelPrize SDK (LuaLS annotations).
--
-- GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
-- params (op.<name>.points[].args.params[]). Field/param types come from the
-- canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
-- @voxgig/apidef VALID_CANON). Annotations only — no runtime effect. Do not
-- edit by hand.

---@class Laureate
---@field born? string
---@field born_city? string
---@field born_country? string
---@field born_country_code? string
---@field died? string
---@field died_city? string
---@field died_country? string
---@field died_country_code? string
---@field firstname? string
---@field gender? string
---@field id? string
---@field prize? table
---@field surname? string

---@class LaureateListMatch

---@class Prize
---@field category? string
---@field laureate? table
---@field overall_motivation? string
---@field year? string

---@class PrizeListMatch

local M = {}

return M
