<?php
declare(strict_types=1);

// Typed models for the NobelPrize SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
//
// These are documentation-grade value objects (PHP 8 typed properties),
// registered on the composer classmap autoload. The SDK boundary exchanges
// assoc-arrays; these classes name the shapes for tooling and typed callers.

/** Laureate entity data model. */
class Laureate
{
    public ?string $born = null;
    public ?string $bornCity = null;
    public ?string $bornCountry = null;
    public ?string $bornCountryCode = null;
    public ?string $died = null;
    public ?string $diedCity = null;
    public ?string $diedCountry = null;
    public ?string $diedCountryCode = null;
    public ?string $firstname = null;
    public ?string $gender = null;
    public ?string $id = null;
    public ?array $prizes = null;
    public ?string $surname = null;
}

/** Request payload for Laureate#list. */
class LaureateListMatch
{
    public ?string $born_city = null;
    public ?string $born_country = null;
    public ?string $died_city = null;
    public ?string $died_country = null;
    public ?string $firstname = null;
    public ?string $gender = null;
    public ?int $id = null;
    public ?string $surname = null;
}

/** Prize entity data model. */
class Prize
{
    public ?string $category = null;
    public ?array $laureates = null;
    public ?string $overallMotivation = null;
    public ?string $year = null;
}

/** Request payload for Prize#list. */
class PrizeListMatch
{
    public ?string $category = null;
    public ?int $year = null;
}

