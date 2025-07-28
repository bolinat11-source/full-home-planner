from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from typing import List
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(title="House Planner API")

# Allow local dev origins
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"]
)


class Plan(BaseModel):
    id: int
    title: str
    cover_img_url: str
    area_m2: int
    rooms: int
    floor_json: list | None = None


# Dummy in-memory plans
PLANS: list[Plan] = [
    Plan(id=1, title='בית כפרי 100 מ"ר', cover_img_url='https://picsum.photos/400/300?random=1', area_m2=100, rooms=4),
    Plan(id=2, title='בית מודרני 120 מ"ר', cover_img_url='https://picsum.photos/400/300?random=2', area_m2=120, rooms=5),
    Plan(id=3, title='דירת גג 85 מ"ר', cover_img_url='https://picsum.photos/400/300?random=3', area_m2=85, rooms=3)
]


@app.get("/plans", response_model=List[Plan])
async def list_plans():
    return PLANS


@app.get("/plans/{plan_id}", response_model=Plan)
async def get_plan(plan_id: int):
    for plan in PLANS:
        if plan.id == plan_id:
            return plan
    raise HTTPException(status_code=404, detail="Plan not found")