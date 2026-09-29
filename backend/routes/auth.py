from fastapi import APIRouter, HTTPException
from models import UserLogin, UserRegister, UserProfile
import database

router = APIRouter(prefix="/auth", tags=["auth"])

@router.post("/register")
async def register(user: UserRegister):
    return {
        "message": "User registered successfully",
        "user": {
            "id": "u_" + user.email.split("@")[0],
            "email": user.email,
            "name": user.name or "Fashion Lover",
            "avatar": "https://lh3.googleusercontent.com/aida-public/AB6AXuCLVbnVHc9o_mufdVNT4NZhXysPI4IrB3KRBcTAlmsrYYQWlB_Dg0rU5SEp3tU6_thCRNqSdvlAe7cPKBZ6Qo0qNVOCJOgXaI3LVetsN1R_QWW0A0Gi5mREAPSe3971PIRn1vYMJQVNZC16cYBfaKDyvZJbZzR4mLjkEePigDAqe66r0-ZmFfrDHnBNFg7C6dGgB8RGZUTJ1auiwE4y0PxzadogrvsWbi-PNsQX0gwTcnYyPI7TUdqYXg"
        }
    }

@router.post("/login")
async def login(user: UserLogin):
    if not user.email or not user.password:
        raise HTTPException(status_code=400, detail="Email and password required")
    return {
        "message": "Login successful",
        "token": "wearwell_token_12345",
        "user": {
            "id": "u_sophia",
            "email": user.email,
            "name": "Sophia Chen",
            "avatar": "https://lh3.googleusercontent.com/aida-public/AB6AXuCLVbnVHc9o_mufdVNT4NZhXysPI4IrB3KRBcTAlmsrYYQWlB_Dg0rU5SEp3tU6_thCRNqSdvlAe7cPKBZ6Qo0qNVOCJOgXaI3LVetsN1R_QWW0A0Gi5mREAPSe3971PIRn1vYMJQVNZC16cYBfaKDyvZJbZzR4mLjkEePigDAqe66r0-ZmFfrDHnBNFg7C6dGgB8RGZUTJ1auiwE4y0PxzadogrvsWbi-PNsQX0gwTcnYyPI7TUdqYXg",
            "style_persona": "Korean Minimalist"
        }
    }

@router.get("/me", response_model=UserProfile)
async def get_current_user():
    return UserProfile(email="sophia@wearwell.ai")
