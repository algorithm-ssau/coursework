from fastapi.logger import logger as fastapi_logger
from motor.motor_asyncio import AsyncIOMotorClient
from ..core.config import MONGO_URL, MONGO_MAX_CONNECTIONS_COUNT, MONGO_MIN_CONNECTIONS_COUNT
from .client import DB


async def open_connection():
    fastapi_logger.info("Connecting to database...")
    DB.client = AsyncIOMotorClient(
        str(MONGO_URL),
        maxPoolSize=MONGO_MAX_CONNECTIONS_COUNT,
        minPoolSize=MONGO_MIN_CONNECTIONS_COUNT
    )
    fastapi_logger.info("Successfully connected to the database！")


async def close_connection():
    fastapi_logger.info("Closing the database connection...")
    DB.client.close()
    fastapi_logger.info("Database connection closed！")
