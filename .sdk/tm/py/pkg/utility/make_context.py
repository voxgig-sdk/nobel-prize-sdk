# NobelPrize SDK utility: make_context

from projectname_sdk.core.context import NobelPrizeContext


def make_context_util(ctxmap, basectx):
    return NobelPrizeContext(ctxmap, basectx)
