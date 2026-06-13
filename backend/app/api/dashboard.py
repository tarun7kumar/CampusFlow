from fastapi import APIRouter

router = APIRouter()


@router.get("/")
async def get_dashboard():
    """Get dashboard data — summary of emails, tasks, and schedule."""
    # TODO: Aggregate data from services
    return {
        "email_summary": [],
        "upcoming_tasks": [],
        "schedule_today": [],
        "alerts": [],
        "message": "Dashboard endpoint placeholder",
    }
