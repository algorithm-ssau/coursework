from fastapi import FastAPI

from .routes import api

app = FastAPI()

app.include_router(
    api.router,
    prefix="/api",
    tags=["api"]
)
