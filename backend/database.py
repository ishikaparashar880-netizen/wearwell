import asyncio
import logging
from motor.motor_asyncio import AsyncIOMotorClient
from config import settings

logger = logging.getLogger("wearwell.database")

client: AsyncIOMotorClient = None
db = None

# Initial seed dataset matching Stitch screens
INITIAL_WARDROBE = [
    {
        "id": "w1",
        "title": "Oversized Gabardine Trench",
        "category": "Outerwear",
        "imageUrl": "https://lh3.googleusercontent.com/aida-public/AB6AXuCzDi0qCr-Gw7x8C8tv_JzecCNqhJ4vebx7lbrOB0vcQRPk3ar8OrLMECYOOx21a9Dj9aGEEuEb6fLBmi2riBTqQPEADHn8mH53TkrOCqnH6KnM_WzeitOrPLUSXZVMmAIQEaOOCmpVChW7TJ3FiLrLxwZQatPZ0oXm4rZFrhOGSoAs2EAFp0F3f4H7CjWCqFFfEvcB7ECjwOI48VCsQoiVaTY5T_YCpQO1Z4USiNiB9PVVLDCnTlvm_w",
        "tags": ["Minimalist", "Formal"],
        "style": "Korean Minimal",
        "isFavorite": True,
        "color": "Beige"
    },
    {
        "id": "w2",
        "title": "Fluid Wide-Leg Trousers",
        "category": "Bottom",
        "imageUrl": "https://lh3.googleusercontent.com/aida-public/AB6AXuB-LrzIirabpv3-9pF2OUFNfbCCBxkaHaZyCcLZLTmhPXaynn5dLTXAifdmPdZtPpUepLXLumcIanZa6ij7UAJOCkPwUSQlm9Af_YSKmqYtbaLwFZcLU0Dz6hBUxrZAAvOTYfMJlYipKX0vlFeXu-pvzn_bHsw_WtVkcZnKcbXPso-aPsutE7z-Spiqcc-SzuVK-xCm8hzitlL9ZeiqLChtW_6puwLpm7aRoUrivxhyLcKpV6Swpp-doQ",
        "tags": ["Casual", "Summer"],
        "style": "Minimalist",
        "isFavorite": True,
        "color": "Cream"
    },
    {
        "id": "w3",
        "title": "Silk Classic Blouse",
        "category": "Top",
        "imageUrl": "https://lh3.googleusercontent.com/aida-public/AB6AXuDYKOQPOSaZXWyoipx2tZRi4zs1ySIVbHtFTkxs7INb_b8guIDX82pDs0Z2q0KLuWi7GxEUXVZXXuqQaILOXz7GQ_s4Q9UtZP77NtkXDzJdWRA6TLlXk3Ojem55DiywKAcRM36g3lVdj2X1oSxEPjZyFO7hj3ZnvfrELIJ2N8Dlpjlv8Rr9tb6hiJh1ckeCAfAV9IIkyTXfuCNq8RwWv2QH1sq6NoIgcMelczAMKhgFB9vA5h79CsnZ0A",
        "tags": ["Formal", "Silk"],
        "style": "Elegant",
        "isFavorite": True,
        "color": "White"
    },
    {
        "id": "w4",
        "title": "Burgundy Leather Loafers",
        "category": "Shoes",
        "imageUrl": "https://lh3.googleusercontent.com/aida-public/AB6AXuA-1fRANIqca7kh4fy52p5hWG97nyKx8nl2rp1KnyQBUPJy8IG_5Stz2T0uqhJVrpBc577dYLcJcJYJA8LxrXQtu9lGE8XnEkmbgzk-qS8PhjjIXknTgVEu1pvJePbql0OSPGGf-cmQWPG4HG87vrjTbICLHFgziEq5XkXsNoBhBcWhbB-PhMFkff6Pmt28sa-gVIDix37i5F5HpAjiKD5HnP8W-yAzTkKlp3zLJAISyeBFM1JA3GMs4Q",
        "tags": ["Smart Casual", "Leather"],
        "style": "Classic",
        "isFavorite": False,
        "color": "Burgundy"
    },
    {
        "id": "w5",
        "title": "Sage Chunky Knit Sweater",
        "category": "Top",
        "imageUrl": "https://lh3.googleusercontent.com/aida-public/AB6AXuAPkyQ-1qCV6BSytn7jTbceWfS7qaUamvSVM3zVSc1FpK30IWTFVvaLLaJ7wUHbX0fG6GA0Oa_hgCJC7eV_-rGHFcvRReHonnRE7JdQZ2d4v_N-BmH13DCq6M9HNwd-5z9QyclqcB8yCOoJeHm5fP-sv-N8nGl3oJnWTNrIqILdUjWeeRhraNrfUsdlk8nLgMVpHeveSBSCaWDgm6cASfcXFpGsmT--gQZ5GmGOFEGzirU9NEXGX9ilMg",
        "tags": ["Warm", "Cozy"],
        "style": "Soft Luxury",
        "isFavorite": True,
        "color": "Sage Green"
    },
    {
        "id": "w6",
        "title": "Crossbody Leather Bag",
        "category": "Accessories",
        "imageUrl": "https://lh3.googleusercontent.com/aida-public/AB6AXuBCfNldJK-n3_fxiww_AunA1n9FeBveoeDjn8_meAgMQx5On1gy-czkKZ0QUs29PzeuVLpbB7N1sg-cGDXR2kNnPTgCRaVPXWR_L0btwKcYK0P5z3U6mchkD_NitRSlRUWAqn2VD30e_c_quORexVoGUlpyB_Y306x0xINK5GKXyuR4ZndrVL4PfDj-FmLgGZ3XvpLjl5sH4ZbZ61bPTi1e5s0JtBNcS-Db8Rv6zjfkQsjPRgMhItUxRQ",
        "tags": ["Essential", "Leather"],
        "style": "Minimalist",
        "isFavorite": False,
        "color": "Black"
    }
]

INITIAL_OUTFITS = [
    {
        "id": "o1",
        "title": "The Structured Trench Look",
        "description": "Mindfully selected outfits based on today's crisp weather and your preference for minimal Korean aesthetics.",
        "weather": "20°C Sunny",
        "styleTag": "Korean Minimal",
        "imageUrl": "https://lh3.googleusercontent.com/aida-public/AB6AXuC27tAKzxfwa44DUDTppvuK7_wGBaTqhl5EDyI2C7vyIYGLGK1iFFz0xwtQLzc3aQv7Wv4s0_QHDOa5zvWfEdn0DZ4-GJltCiw6WTRQW3XmPO1zn3SXupPtKBOJmcnqoyjCm2-l-ecnMyYPSp6Kx4ZDsX1NAeWh3BwXud60s39F2hIV9YnopvUJK7UTL7NUq8wqlOH2W60c_ANbuQL0irxDnq-TU8NqblgL12yn_MxAuU4LcFp1xkqyMw",
        "isFavorite": True,
        "items": [
            {
                "id": "w1",
                "title": "Oversized Gabardine Trench",
                "category": "Outerwear",
                "imageUrl": "https://lh3.googleusercontent.com/aida-public/AB6AXuCzDi0qCr-Gw7x8C8tv_JzecCNqhJ4vebx7lbrOB0vcQRPk3ar8OrLMECYOOx21a9Dj9aGEEuEb6fLBmi2riBTqQPEADHn8mH53TkrOCqnH6KnM_WzeitOrPLUSXZVMmAIQEaOOCmpVChW7TJ3FiLrLxwZQatPZ0oXm4rZFrhOGSoAs2EAFp0F3f4H7CjWCqFFfEvcB7ECjwOI48VCsQoiVaTY5T_YCpQO1Z4USiNiB9PVVLDCnTlvm_w"
            },
            {
                "id": "w2",
                "title": "Fluid Wide-Leg Trousers",
                "category": "Bottom",
                "imageUrl": "https://lh3.googleusercontent.com/aida-public/AB6AXuB-LrzIirabpv3-9pF2OUFNfbCCBxkaHaZyCcLZLTmhPXaynn5dLTXAifdmPdZtPpUepLXLumcIanZa6ij7UAJOCkPwUSQlm9Af_YSKmqYtbaLwFZcLU0Dz6hBUxrZAAvOTYfMJlYipKX0vlFeXu-pvzn_bHsw_WtVkcZnKcbXPso-aPsutE7z-Spiqcc-SzuVK-xCm8hzitlL9ZeiqLChtW_6puwLpm7aRoUrivxhyLcKpV6Swpp-doQ"
            }
        ]
    },
    {
        "id": "o2",
        "title": "Cozy Volumes & Sage Knit",
        "description": "Tactile textures blended for a casual coffee meeting in an artisanal aesthetic space.",
        "weather": "18°C Breezy",
        "styleTag": "Casual Meeting",
        "imageUrl": "https://lh3.googleusercontent.com/aida-public/AB6AXuCJPQMRFEAkHeZcnZCbpaFhw9MJNkuV0fcVp8--djGgzRh_wWLYnrN6dEWPI7H52kln6Iw67LTz57gFWWa-l7fkWZlMGNbXz-NcIqH_whpcRdy1ElQUBCI0ZiXXN4W83np1-SvIVBmF8FYzgj_LiLpmobm0axacXhrgJzAHJk3m440DFL5PPSMitJZ_RJSSOO_dPAhC5M2JJiiLQ6CgGH_lyjA62lvVLmuX4noT5-SOxtg8U8UTLK-Pbw",
        "isFavorite": True,
        "items": [
            {
                "id": "w5",
                "title": "Sage Chunky Knit",
                "category": "Top",
                "imageUrl": "https://lh3.googleusercontent.com/aida-public/AB6AXuAPkyQ-1qCV6BSytn7jTbceWfS7qaUamvSVM3zVSc1FpK30IWTFVvaLLaJ7wUHbX0fG6GA0Oa_hgCJC7eV_-rGHFcvRReHonnRE7JdQZ2d4v_N-BmH13DCq6M9HNwd-5z9QyclqcB8yCOoJeHm5fP-sv-N8nGl3oJnWTNrIqILdUjWeeRhraNrfUsdlk8nLgMVpHeveSBSCaWDgm6cASfcXFpGsmT--gQZ5GmGOFEGzirU9NEXGX9ilMg"
            },
            {
                "id": "w4",
                "title": "Burgundy Loafers",
                "category": "Shoes",
                "imageUrl": "https://lh3.googleusercontent.com/aida-public/AB6AXuA-1fRANIqca7kh4fy52p5hWG97nyKx8nl2rp1KnyQBUPJy8IG_5Stz2T0uqhJVrpBc577dYLcJcJYJA8LxrXQtu9lGE8XnEkmbgzk-qS8PhjjIXknTgVEu1pvJePbql0OSPGGf-cmQWPG4HG87vrjTbICLHFgziEq5XkXsNoBhBcWhbB-PhMFkff6Pmt28sa-gVIDix37i5F5HpAjiKD5HnP8W-yAzTkKlp3zLJAISyeBFM1JA3GMs4Q"
            }
        ]
    }
]

class MemoryStore:
    def __init__(self):
        self.wardrobe = list(INITIAL_WARDROBE)
        self.outfits = list(INITIAL_OUTFITS)
        self.preferences = {
            "archetype": "Korean Minimalist",
            "colorPalettes": ["Soft Cream", "Deep Plum", "Muted Sage"],
            "favoriteBrands": ["Lemaire", "Cos", "Acne Studios"],
            "fitPreference": "Oversized & Structured"
        }

memory_store = MemoryStore()

async def connect_to_mongo():
    global client, db
    try:
        client = AsyncIOMotorClient(settings.MONGODB_URL, serverSelectionTimeoutMS=2000)
        # Verify connection
        await client.admin.command('ping')
        db = client[settings.DATABASE_NAME]
        logger.info(f"Successfully connected to MongoDB at {settings.MONGODB_URL}")
        
        # Seed MongoDB if empty
        wardrobe_count = await db.wardrobe.count_documents({})
        if wardrobe_count == 0:
            await db.wardrobe.insert_many(INITIAL_WARDROBE)
            await db.outfits.insert_many(INITIAL_OUTFITS)
            await db.preferences.insert_one(memory_store.preferences)
            logger.info("Database seeded with initial WearWell dataset.")
    except Exception as e:
        logger.warning(f"MongoDB connection attempt to {settings.MONGODB_URL} failed/timed out ({e}). Using robust memory store fallback.")
        client = None
        db = None

async def close_mongo_connection():
    global client
    if client:
        client.close()
        logger.info("MongoDB client connection closed.")
