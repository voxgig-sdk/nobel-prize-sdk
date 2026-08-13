# frozen_string_literal: true

# Typed models for the NobelPrize SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Member types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Ruby types are unenforced; these YARD
# annotations document the shapes. Do not edit by hand.

# Laureate entity data model.
#
# @!attribute [rw] born
#   @return [String, nil]
#
# @!attribute [rw] bornCity
#   @return [String, nil]
#
# @!attribute [rw] bornCountry
#   @return [String, nil]
#
# @!attribute [rw] bornCountryCode
#   @return [String, nil]
#
# @!attribute [rw] died
#   @return [String, nil]
#
# @!attribute [rw] diedCity
#   @return [String, nil]
#
# @!attribute [rw] diedCountry
#   @return [String, nil]
#
# @!attribute [rw] diedCountryCode
#   @return [String, nil]
#
# @!attribute [rw] firstname
#   @return [String, nil]
#
# @!attribute [rw] gender
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] prizes
#   @return [Array, nil]
#
# @!attribute [rw] surname
#   @return [String, nil]
Laureate = Struct.new(
  :born,
  :bornCity,
  :bornCountry,
  :bornCountryCode,
  :died,
  :diedCity,
  :diedCountry,
  :diedCountryCode,
  :firstname,
  :gender,
  :id,
  :prizes,
  :surname,
  keyword_init: true
)

# Request payload for Laureate#list.
#
# @!attribute [rw] born
#   @return [String, nil]
#
# @!attribute [rw] bornCity
#   @return [String, nil]
#
# @!attribute [rw] bornCountry
#   @return [String, nil]
#
# @!attribute [rw] bornCountryCode
#   @return [String, nil]
#
# @!attribute [rw] died
#   @return [String, nil]
#
# @!attribute [rw] diedCity
#   @return [String, nil]
#
# @!attribute [rw] diedCountry
#   @return [String, nil]
#
# @!attribute [rw] diedCountryCode
#   @return [String, nil]
#
# @!attribute [rw] firstname
#   @return [String, nil]
#
# @!attribute [rw] gender
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] prizes
#   @return [Array, nil]
#
# @!attribute [rw] surname
#   @return [String, nil]
LaureateListMatch = Struct.new(
  :born,
  :bornCity,
  :bornCountry,
  :bornCountryCode,
  :died,
  :diedCity,
  :diedCountry,
  :diedCountryCode,
  :firstname,
  :gender,
  :id,
  :prizes,
  :surname,
  keyword_init: true
)

# Prize entity data model.
#
# @!attribute [rw] category
#   @return [String, nil]
#
# @!attribute [rw] laureates
#   @return [Array, nil]
#
# @!attribute [rw] overallMotivation
#   @return [String, nil]
#
# @!attribute [rw] year
#   @return [String, nil]
Prize = Struct.new(
  :category,
  :laureates,
  :overallMotivation,
  :year,
  keyword_init: true
)

# Request payload for Prize#list.
#
# @!attribute [rw] category
#   @return [String, nil]
#
# @!attribute [rw] laureates
#   @return [Array, nil]
#
# @!attribute [rw] overallMotivation
#   @return [String, nil]
#
# @!attribute [rw] year
#   @return [String, nil]
PrizeListMatch = Struct.new(
  :category,
  :laureates,
  :overallMotivation,
  :year,
  keyword_init: true
)

