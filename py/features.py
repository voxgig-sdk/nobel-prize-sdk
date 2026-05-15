# NobelPrize SDK feature factory

from feature.base_feature import NobelPrizeBaseFeature
from feature.test_feature import NobelPrizeTestFeature


def _make_feature(name):
    features = {
        "base": lambda: NobelPrizeBaseFeature(),
        "test": lambda: NobelPrizeTestFeature(),
    }
    factory = features.get(name)
    if factory is not None:
        return factory()
    return features["base"]()
