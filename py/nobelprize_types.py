# Typed models for the NobelPrize SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Field/param types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Do not edit by hand.

from __future__ import annotations

from dataclasses import dataclass
from typing import Optional, Any


@dataclass
class Laureate:
    born: Optional[str] = None
    born_city: Optional[str] = None
    born_country: Optional[str] = None
    born_country_code: Optional[str] = None
    died: Optional[str] = None
    died_city: Optional[str] = None
    died_country: Optional[str] = None
    died_country_code: Optional[str] = None
    firstname: Optional[str] = None
    gender: Optional[str] = None
    id: Optional[str] = None
    prize: Optional[list] = None
    surname: Optional[str] = None


@dataclass
class LaureateListMatch:
    born: Optional[str] = None
    born_city: Optional[str] = None
    born_country: Optional[str] = None
    born_country_code: Optional[str] = None
    died: Optional[str] = None
    died_city: Optional[str] = None
    died_country: Optional[str] = None
    died_country_code: Optional[str] = None
    firstname: Optional[str] = None
    gender: Optional[str] = None
    id: Optional[str] = None
    prize: Optional[list] = None
    surname: Optional[str] = None


@dataclass
class Prize:
    category: Optional[str] = None
    laureate: Optional[list] = None
    overall_motivation: Optional[str] = None
    year: Optional[str] = None


@dataclass
class PrizeListMatch:
    category: Optional[str] = None
    laureate: Optional[list] = None
    overall_motivation: Optional[str] = None
    year: Optional[str] = None

