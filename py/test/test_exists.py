# ProjectName SDK exists test

import pytest
from nobelprize_sdk import NobelPrizeSDK


class TestExists:

    def test_should_create_test_sdk(self):
        testsdk = NobelPrizeSDK.test(None, None)
        assert testsdk is not None
