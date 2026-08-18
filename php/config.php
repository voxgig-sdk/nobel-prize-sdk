<?php
declare(strict_types=1);

// NobelPrize SDK configuration

class NobelPrizeConfig
{
    /** @var array<string,mixed>|null */
    private static ?array $shared_config = null;

    /**
     * Return the process-wide config, built once on first use. The SDK reads
     * the config on every request and never writes to it, so one instance is
     * shared by every client rather than rebuilt per client.
     *
     * PHP arrays are copy-on-write, so callers that do mutate the result get
     * their own copy and cannot disturb the shared one.
     */
    public static function shared_config(): array
    {
        if (self::$shared_config === null) {
            self::$shared_config = self::make_config();
        }
        return self::$shared_config;
    }

    /**
     * Build a fresh, fully materialised config array. Every call rebuilds the
     * whole structure, so prefer shared_config unless you need a private copy.
     */
    public static function make_config(): array
    {
        return [
            "main" => [
                "name" => "NobelPrize",
            ],
            "feature" => [
                "test" => [
          'options' => [
            'active' => false,
          ],
        ],
            ],
            "options" => [
                "base" => "https://api.nobelprize.org/v1",
                "headers" => [
          'content-type' => 'application/json',
        ],
                "entity" => [
                    "laureate" => [],
                    "prize" => [],
                ],
            ],
            "entity" => [
        'laureate' => [
          'fields' => [
            [
              'name' => 'born',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'bornCity',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'bornCountry',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'bornCountryCode',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'died',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'diedCity',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'diedCountry',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'diedCountryCode',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'firstname',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'gender',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'id',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'prizes',
              'type' => '`$ARRAY`',
            ],
            [
              'name' => 'surname',
              'type' => '`$STRING`',
            ],
          ],
          'name' => 'laureate',
          'op' => [
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'args' => [
                    'query' => [
                      [
                        'kind' => 'query',
                        'name' => 'born_city',
                        'orig' => 'born_city',
                        'type' => '`$STRING`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'born_country',
                        'orig' => 'born_country',
                        'type' => '`$STRING`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'died_city',
                        'orig' => 'died_city',
                        'type' => '`$STRING`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'died_country',
                        'orig' => 'died_country',
                        'type' => '`$STRING`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'firstname',
                        'orig' => 'firstname',
                        'type' => '`$STRING`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'gender',
                        'orig' => 'gender',
                        'type' => '`$STRING`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'id',
                        'orig' => 'id',
                        'type' => '`$INTEGER`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'surname',
                        'orig' => 'surname',
                        'type' => '`$STRING`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/laureate.json',
                  'parts' => [
                    'laureate.json',
                  ],
                  'select' => [
                    'exist' => [
                      'born_city',
                      'born_country',
                      'died_city',
                      'died_country',
                      'firstname',
                      'gender',
                      'id',
                      'surname',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body.laureates`',
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'prize' => [
          'fields' => [
            [
              'name' => 'category',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'laureates',
              'type' => '`$ARRAY`',
            ],
            [
              'name' => 'overallMotivation',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'year',
              'type' => '`$STRING`',
            ],
          ],
          'name' => 'prize',
          'op' => [
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'args' => [
                    'query' => [
                      [
                        'kind' => 'query',
                        'name' => 'category',
                        'orig' => 'category',
                        'type' => '`$STRING`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'year',
                        'orig' => 'year',
                        'type' => '`$INTEGER`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/prize.json',
                  'parts' => [
                    'prize.json',
                  ],
                  'select' => [
                    'exist' => [
                      'category',
                      'year',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body.prizes`',
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
      ],
        ];
    }


    public static function make_feature(string $name)
    {
        require_once __DIR__ . '/features.php';
        return NobelPrizeFeatures::make_feature($name);
    }
}
