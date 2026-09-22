import uvicorn
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from config import settings
import database
from routes import auth, wardrobe, outfits, preferences

app = FastAPI(
    title="WearWell AI Fashion Stylist API",
    description="Backend service providing AI Recommendations, Wardrobe Management, and Outfit Curation powered by MongoDB.",
    version="1.0.0"
)

# CORS middleware for frontend connection
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Route inclusions
app.include_router(auth.router, prefix="/api")
app.include_router(wardrobe.router, prefix="/api")
app.include_router(outfits.router, prefix="/api")
app.include_router(preferences.router, prefix="/api")

@app.on_event("startup")
async def startup_db_client():
    await database.connect_to_mongo()

@app.on_event("shutdown")
async def shutdown_db_client():
    await database.close_mongo_connection()

@app.get("/")
async def root():
    return {
        "app": "WearWell AI Fashion Stylist API",
        "status": "online",
        "database_url": settings.MONGODB_URL,
        "docs": "/docs"
    }

@app.get("/api/health")
async def health_check():
    return {
        "status": "healthy",
        "mongo_connected": database.db is not None
    }

if __name__ == "__main__":
    uvicorn.run("main:app", host=settings.HOST, port=settings.PORT, reload=True)
