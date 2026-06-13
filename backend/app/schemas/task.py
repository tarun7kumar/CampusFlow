from pydantic import BaseModel
from typing import Optional


class TaskCreate(BaseModel):
    title: str
    description: Optional[str] = ""
    deadline: Optional[str] = None
    priority: str = "medium"
    source: str = "manual"


class TaskResponse(BaseModel):
    id: str
    title: str
    description: str
    deadline: Optional[str] = None
    priority: str = "medium"
    status: str = "pending"
    source: str = "manual"


class TaskUpdate(BaseModel):
    title: Optional[str] = None
    description: Optional[str] = None
    deadline: Optional[str] = None
    priority: Optional[str] = None
    status: Optional[str] = None
