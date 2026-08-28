# Typed models for the NobelPrize SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Field/param types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Do not edit by hand.
#
# These are TypedDicts, not dataclasses: the SDK ops return/accept plain dicts
# at runtime, and a TypedDict IS a dict shape, so the types match the runtime.
# Optional (req:false) keys are modelled as TypedDict key-optionality
# (total=False), split into a required base + total=False subclass when a type
# has both required and optional keys.

from __future__ import annotations

from typing import TypedDict, Any


class Laureate(TypedDict, total=False):
    born: str
    bornCity: str
    bornCountry: str
    bornCountryCode: str
    died: str
    diedCity: str
    diedCountry: str
    diedCountryCode: str
    firstname: str
    gender: str
    id: str
    prizes: list
    surname: str


class LaureateListMatch(TypedDict, total=False):
    born_city: str
    born_country: str
    died_city: str
    died_country: str
    firstname: str
    gender: str
    id: int
    surname: str


class Prize(TypedDict, total=False):
    category: str
    laureates: list
    overallMotivation: str
    year: str


class PrizeListMatch(TypedDict, total=False):
    category: str
    year: int
