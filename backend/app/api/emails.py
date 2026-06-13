from fastapi import APIRouter

router = APIRouter()


@router.get("/")
async def get_emails():
    """Fetch and return summarized emails."""
    # TODO: Implement Gmail fetch + AI summarization
    return {"emails": [], "message": "Email endpoint placeholder"}


@router.get("/{email_id}/summary")
async def get_email_summary(email_id: str):
    """Get AI-generated summary for a specific email."""
    # TODO: Implement AI summarization
    return {"email_id": email_id, "summary": "Placeholder summary"}
