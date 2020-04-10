from motor.motor_asyncio import AsyncIOMotorClient


class DataBase:
    client: AsyncIOMotorClient = None


DB = DataBase()


async def get_database() -> AsyncIOMotorClient:
    return DB.client
