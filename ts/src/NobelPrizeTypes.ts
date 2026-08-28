// Typed models for the NobelPrize SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.

export interface Laureate {
  born?: string
  bornCity?: string
  bornCountry?: string
  bornCountryCode?: string
  died?: string
  diedCity?: string
  diedCountry?: string
  diedCountryCode?: string
  firstname?: string
  gender?: string
  id?: string
  prizes?: any[]
  surname?: string
}

export interface LaureateListMatch {
  born_city?: string
  born_country?: string
  died_city?: string
  died_country?: string
  firstname?: string
  gender?: string
  id?: number
  surname?: string
}

export interface Prize {
  category?: string
  laureates?: any[]
  overallMotivation?: string
  year?: string
}

export interface PrizeListMatch {
  category?: string
  year?: number
}

