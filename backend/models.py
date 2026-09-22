from pydantic import BaseModel, Field
from typing import List, Optional

class UserRegister(BaseModel):
    email: str
    password: str
    name: Optional[str] = "Fashion Enthusiast"

class UserLogin(BaseModel):
    email: str
    password: str

class UserProfile(BaseModel):
    id: str = "user_1"
    email: str
    name: str = "Sophia Chen"
    avatar: str = "https://lh3.googleusercontent.com/aida-public/AB6AXuCLVbnVHc9o_mufdVNT4NZhXysPI4IrB3KRBcTAlmsrYYQWlB_Dg0rU5SEp3tU6_thCRNqSdvlAe7cPKBZ6Qo0qNVOCJOgXaI3LVetsN1R_QWW0A0Gi5mREAPSe3971PIRn1vYMJQVNZC16cYBfaKDyvZJbZzR4mLjkEePigDAqe66r0-ZmFfrDHnBNFg7C6dGgB8RGZUTJ1auiwE4y0PxzadogrvsWbi-PNsQX0gwTcnYyPI7TUdqYXg"
    style_persona: str = "Korean Minimalist"

class WardrobeItem(BaseModel):
    id: Optional[str] = None
    title: str
    category: str  # Top, Bottom, Shoes, Accessories, Outerwear
    imageUrl: str
    tags: List[str] = []
    style: Optional[str] = "Minimalist"
    isFavorite: bool = False
    color: Optional[str] = "Neutral"

class WardrobeItemCreate(BaseModel):
    title: str
    category: str
    imageUrl: str
    tags: Optional[List[str]] = []
    style: Optional[str] = "Minimalist"
    color: Optional[str] = "Neutral"

class OutfitItem(BaseModel):
    id: str
    title: str
    category: str
    imageUrl: str

class Outfit(BaseModel):
    id: Optional[str] = None
    title: str
    description: str
    weather: Optional[str] = "20°C Sunny"
    styleTag: str
    items: List[OutfitItem]
    imageUrl: Optional[str] = None
    isFavorite: bool = False

class StylePreferenceUpdate(BaseModel):
    archetype: str
    colorPalettes: List[str] = []
    favoriteBrands: List[str] = []
    fitPreference: str = "Oversized & Fluid"
