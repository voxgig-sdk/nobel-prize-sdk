// Typed models for the NobelPrize SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.

export interface Laureate {
  born?: string
  born_city?: string
  born_country?: string
  born_country_code?: string
  died?: string
  died_city?: string
  died_country?: string
  died_country_code?: string
  firstname?: string
  gender?: string
  id?: string
  prize?: any[]
  surname?: string
}

export interface LaureateListMatch {
  born?: string
  born_city?: string
  born_country?: string
  born_country_code?: string
  died?: string
  died_city?: string
  died_country?: string
  died_country_code?: string
  firstname?: string
  gender?: string
  id?: string
  prize?: any[]
  surname?: string
}

export interface Prize {
  category?: string
  laureate?: any[]
  overall_motivation?: string
  year?: string
}

export interface PrizeListMatch {
  category?: string
  laureate?: any[]
  overall_motivation?: string
  year?: string
}

