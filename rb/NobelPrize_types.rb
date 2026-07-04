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
# @!attribute [rw] born_city
#   @return [String, nil]
#
# @!attribute [rw] born_country
#   @return [String, nil]
#
# @!attribute [rw] born_country_code
#   @return [String, nil]
#
# @!attribute [rw] died
#   @return [String, nil]
#
# @!attribute [rw] died_city
#   @return [String, nil]
#
# @!attribute [rw] died_country
#   @return [String, nil]
#
# @!attribute [rw] died_country_code
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
# @!attribute [rw] prize
#   @return [Array, nil]
#
# @!attribute [rw] surname
#   @return [String, nil]
Laureate = Struct.new(
  :born,
  :born_city,
  :born_country,
  :born_country_code,
  :died,
  :died_city,
  :died_country,
  :died_country_code,
  :firstname,
  :gender,
  :id,
  :prize,
  :surname,
  keyword_init: true
)

# Match filter for Laureate#list (any subset of Laureate fields).
#
# @!attribute [rw] born
#   @return [String, nil]
#
# @!attribute [rw] born_city
#   @return [String, nil]
#
# @!attribute [rw] born_country
#   @return [String, nil]
#
# @!attribute [rw] born_country_code
#   @return [String, nil]
#
# @!attribute [rw] died
#   @return [String, nil]
#
# @!attribute [rw] died_city
#   @return [String, nil]
#
# @!attribute [rw] died_country
#   @return [String, nil]
#
# @!attribute [rw] died_country_code
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
# @!attribute [rw] prize
#   @return [Array, nil]
#
# @!attribute [rw] surname
#   @return [String, nil]
LaureateListMatch = Struct.new(
  :born,
  :born_city,
  :born_country,
  :born_country_code,
  :died,
  :died_city,
  :died_country,
  :died_country_code,
  :firstname,
  :gender,
  :id,
  :prize,
  :surname,
  keyword_init: true
)

# Prize entity data model.
#
# @!attribute [rw] category
#   @return [String, nil]
#
# @!attribute [rw] laureate
#   @return [Array, nil]
#
# @!attribute [rw] overall_motivation
#   @return [String, nil]
#
# @!attribute [rw] year
#   @return [String, nil]
Prize = Struct.new(
  :category,
  :laureate,
  :overall_motivation,
  :year,
  keyword_init: true
)

# Match filter for Prize#list (any subset of Prize fields).
#
# @!attribute [rw] category
#   @return [String, nil]
#
# @!attribute [rw] laureate
#   @return [Array, nil]
#
# @!attribute [rw] overall_motivation
#   @return [String, nil]
#
# @!attribute [rw] year
#   @return [String, nil]
PrizeListMatch = Struct.new(
  :category,
  :laureate,
  :overall_motivation,
  :year,
  keyword_init: true
)

