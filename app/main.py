from fastapi import FastAPI
from .db.utils import close_connection, open_connection
from .routes import api


APP = FastAPI()

APP.add_event_handler("startup", open_connection)
APP.add_event_handler("shutdown", close_connection)

APP.include_router(
    api.ROUTER,
    prefix='',
    tags=['api']
)
