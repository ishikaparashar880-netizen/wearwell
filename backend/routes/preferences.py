from fastapi import APIRouter
from models import StylePreferenceUpdate
import database

router = APIRouter(prefix="/preferences", tags=["preferences"])

@router.get("")
async def get_preferences():
    if database.db is not None:
        pref = await database.db.preferences.find_one()
        if pref:
            pref.pop("_id", None)
            return pref
    return database.memory_store.preferences

@router.post("")
async def update_preferences(pref: StylePreferenceUpdate):
    data = pref.dict()
    if database.db is not None:
        await database.db.preferences.delete_many({})
        await database.db.preferences.insert_one(data)
    database.memory_store.preferences = data
    return {"message": "Preferences updated successfully", "preferences": data}
