from fastapi import APIRouter

from ..mock.products import MOCK_SALE, MOCK_EXPLORE

ROUTER = APIRouter()


@ROUTER.get('/new')
async def api_new():
    return MOCK_EXPLORE[:3]


@ROUTER.get('/related')
async def api_related():
    return MOCK_EXPLORE[:3]


@ROUTER.get('/sale')
async def api_sale():
    return MOCK_SALE


@ROUTER.get('/explore')
async def api_explore():
    return MOCK_EXPLORE


@ROUTER.get('/product/{product_id}')
async def api_product(product_id: int):
    return next(filter(lambda product: product.get("id") ==
                       product_id, MOCK_EXPLORE), None)
