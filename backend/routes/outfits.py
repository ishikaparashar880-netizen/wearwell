import uuid
from fastapi import APIRouter, HTTPException
from typing import List
from models import Outfit
import database

router = APIRouter(prefix="/outfits", tags=["outfits"])

@router.get("/recommendations", response_model=List[Outfit])
async def get_recommendations():
    if database.db is not None:
        outfits = await database.db.outfits.find().to_list(length=50)
        for o in outfits:
            if "_id" in o:
                o["id"] = str(o["_id"])
        return outfits
    return database.memory_store.outfits

@router.post("/build", response_model=Outfit)
async def build_outfit(outfit: Outfit):
    new_outfit = outfit.dict()
    if not new_outfit.get("id"):
        new_outfit["id"] = "o_" + uuid.uuid4().hex[:8]
    if database.db is not None:
        await database.db.outfits.insert_one(new_outfit)
    else:
        database.memory_store.outfits.append(new_outfit)
    return new_outfit

@router.patch("/{outfit_id}/favorite")
async def toggle_outfit_favorite(outfit_id: str):
    if database.db is not None:
        outfit = await database.db.outfits.find_one({"id": outfit_id})
        if outfit:
            new_val = not outfit.get("isFavorite", False)
            await database.db.outfits.update_one({"_id": outfit["_id"]}, {"$set": {"isFavorite": new_val}})
            return {"id": outfit_id, "isFavorite": new_val}
    for o in database.memory_store.outfits:
        if o["id"] == outfit_id:
            o["isFavorite"] = not o.get("isFavorite", False)
            return {"id": outfit_id, "isFavorite": o["isFavorite"]}
    raise HTTPException(status_code=404, detail="Outfit not found")
