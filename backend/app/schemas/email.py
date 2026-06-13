from pydantic import BaseModel
from typing import Optional


class EmailResponse(BaseModel):
    id: str
    subject: str
    sender: str
    body: str
    summary: Optional[str] = None
    received_at: str
    is_read: bool = False
    priority: str = "medium"


class EmailSummaryResponse(BaseModel):
    email_id: str
    summary: str
    action_items: list = []
