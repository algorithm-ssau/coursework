import os

from dotenv import load_dotenv
from databases import DatabaseURL

load_dotenv(".env")

MONGO_MIN_CONNECTIONS_COUNT = int(
    os.getenv("MONGO_MIN_CONNECTIONS_COUNT", "0")
)
MONGO_MAX_CONNECTIONS_COUNT = int(
    os.getenv("MONGO_MAX_CONNECTIONS_COUNT", "10")
)

MONGO_URL = os.getenv("MONGODB_URL", "")
if not MONGO_URL:
    MONGO_HOST = os.getenv("MONGO_HOST", "localhost")
    MONGO_PORT = int(os.getenv("MONGO_PORT", "27017"))
    MONGO_USER = os.getenv("MONGO_USER", "root")
    MONGO_PASS = os.getenv("MONGO_PASSWORD", "root")
    MONGO_DB = os.getenv("MONGO_DB", "fastapi")

    MONGO_URL = DatabaseURL(
        f"mongodb://{MONGO_USER}:{MONGO_PASS}@{MONGO_HOST}:{MONGO_PORT}/{MONGO_DB}"
    )
else:
    MONGO_URL = DatabaseURL(MONGO_URL)

DATABASE_NAME = MONGO_DB
