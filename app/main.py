from fastapi import FastAPI
from .routes import api

APP = FastAPI()
APP.include_router(
    api.ROUTER,
    prefix='',
    tags=['api']
)
