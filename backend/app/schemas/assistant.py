from pydantic import BaseModel
from typing import Optional


class ChatRequest(BaseModel):
    message: str
    context: Optional[dict] = None


class ChatResponse(BaseModel):
    response: str
    suggestions: list = []


class ChatHistoryItem(BaseModel):
    id: str
    role: str  # 'user' or 'assistant'
    content: str
    timestamp: str
