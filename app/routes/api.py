from fastapi import APIRouter

ROUTER = APIRouter()


@ROUTER.post('/')
async def api():
    return ''
