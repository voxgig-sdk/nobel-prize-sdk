// Typed models for the NobelPrize SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
package entity

import "encoding/json"

// Laureate is the typed data model for the laureate entity.
type Laureate struct {
	Born *string `json:"born,omitempty"`
	BornCity *string `json:"born_city,omitempty"`
	BornCountry *string `json:"born_country,omitempty"`
	BornCountryCode *string `json:"born_country_code,omitempty"`
	Died *string `json:"died,omitempty"`
	DiedCity *string `json:"died_city,omitempty"`
	DiedCountry *string `json:"died_country,omitempty"`
	DiedCountryCode *string `json:"died_country_code,omitempty"`
	Firstname *string `json:"firstname,omitempty"`
	Gender *string `json:"gender,omitempty"`
	Id *string `json:"id,omitempty"`
	Prize *[]any `json:"prize,omitempty"`
	Surname *string `json:"surname,omitempty"`
}

// LaureateListMatch is the typed request payload for Laureate.ListTyped.
type LaureateListMatch struct {
	Born *string `json:"born,omitempty"`
	BornCity *string `json:"born_city,omitempty"`
	BornCountry *string `json:"born_country,omitempty"`
	BornCountryCode *string `json:"born_country_code,omitempty"`
	Died *string `json:"died,omitempty"`
	DiedCity *string `json:"died_city,omitempty"`
	DiedCountry *string `json:"died_country,omitempty"`
	DiedCountryCode *string `json:"died_country_code,omitempty"`
	Firstname *string `json:"firstname,omitempty"`
	Gender *string `json:"gender,omitempty"`
	Id *string `json:"id,omitempty"`
	Prize *[]any `json:"prize,omitempty"`
	Surname *string `json:"surname,omitempty"`
}

// Prize is the typed data model for the prize entity.
type Prize struct {
	Category *string `json:"category,omitempty"`
	Laureate *[]any `json:"laureate,omitempty"`
	OverallMotivation *string `json:"overall_motivation,omitempty"`
	Year *string `json:"year,omitempty"`
}

// PrizeListMatch is the typed request payload for Prize.ListTyped.
type PrizeListMatch struct {
	Category *string `json:"category,omitempty"`
	Laureate *[]any `json:"laureate,omitempty"`
	OverallMotivation *string `json:"overall_motivation,omitempty"`
	Year *string `json:"year,omitempty"`
}

// asMap turns a typed request/data struct into the map[string]any the
// runtime op pipeline consumes, honouring the json tags above.
func asMap(v any) map[string]any {
	out := map[string]any{}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}

// typedFrom decodes a runtime value (a map[string]any produced by the op
// pipeline) into a typed model T via a JSON round-trip. On any error it
// returns the zero value of T; the op's own (value, error) tuple carries the
// real error.
func typedFrom[T any](v any) T {
	var out T
	if v == nil {
		return out
	}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}

// typedSliceFrom decodes a runtime list value ([]any of maps) into a typed
// slice []T via a JSON round-trip, for list ops.
func typedSliceFrom[T any](v any) []T {
	var out []T
	if v == nil {
		return out
	}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}
