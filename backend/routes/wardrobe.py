import uuid
from fastapi import APIRouter, HTTPException, Query
from typing import List, Optional
from models import WardrobeItem, WardrobeItemCreate
import database

router = APIRouter(prefix="/wardrobe", tags=["wardrobe"])

@router.get("", response_model=List[WardrobeItem])
async def get_wardrobe(category: Optional[str] = None):
    if database.db is not None:
        query = {}
        if category and category.lower() != "all":
            query["category"] = {"$regex": f"^{category}$", "$options": "i"}
        items = await database.db.wardrobe.find(query).to_list(length=100)
        # Normalize MongoDB _id to string
        for item in items:
            if "_id" in item:
                item["id"] = str(item["_id"])
        return items
    else:
        items = database.memory_store.wardrobe
        if category and category.lower() != "all":
            items = [i for i in items if i["category"].lower() == category.lower()]
        return items

@router.post("", response_model=WardrobeItem)
async def add_item(item_data: WardrobeItemCreate):
    new_item = {
        "id": "w_" + uuid.uuid4().hex[:8],
        "title": item_data.title,
        "category": item_data.category,
        "imageUrl": item_data.imageUrl,
        "tags": item_data.tags or ["New"],
        "style": item_data.style or "Minimalist",
        "isFavorite": False,
        "color": item_data.color or "Neutral"
    }
    if database.db is not None:
        res = await database.db.wardrobe.insert_one(new_item)
        new_item["id"] = str(res.inserted_id)
    else:
        database.memory_store.wardrobe.append(new_item)
    return new_item

@router.patch("/{item_id}/favorite")
async def toggle_favorite(item_id: str):
    if database.db is not None:
        item = await database.db.wardrobe.find_one({"id": item_id})
        if not item:
            item = await database.db.wardrobe.find_one({"_id": item_id})
        if not item:
            raise HTTPException(status_code=404, detail="Item not found")
        new_status = not item.get("isFavorite", False)
        await database.db.wardrobe.update_one({"_id": item["_id"]}, {"$set": {"isFavorite": new_status}})
        return {"id": item_id, "isFavorite": new_status}
    else:
        for item in database.memory_store.wardrobe:
            if item["id"] == item_id:
                item["isFavorite"] = not item.get("isFavorite", False)
                return {"id": item_id, "isFavorite": item["isFavorite"]}
        raise HTTPException(status_code=404, detail="Item not found")

@router.delete("/{item_id}")
async def delete_item(item_id: str):
    if database.db is not None:
        await database.db.wardrobe.delete_one({"id": item_id})
    else:
        database.memory_store.wardrobe = [i for i in database.memory_store.wardrobe if i["id"] != item_id]
    return {"message": "Item deleted", "id": item_id}
