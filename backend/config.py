import os
from pydantic_settings import BaseSettings

class Settings(BaseSettings):
    MONGODB_URL: str = "mongodb://localhost:27017"
    DATABASE_NAME: str = "wearwell_db"
    HOST: str = "0.0.0.0"
    PORT: int = 8000
    SECRET_KEY: str = "wearwell_secret_key_2026_super_secure"

    class Config:
        env_file = os.path.join(os.path.dirname(os.path.dirname(__file__)), ".env")
        extra = "ignore"

settings = Settings()
