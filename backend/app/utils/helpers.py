"""Utility helper functions."""

from datetime import datetime


def format_timestamp(dt: datetime) -> str:
    """Format datetime to ISO string."""
    return dt.isoformat()


def parse_priority(text: str) -> str:
    """Determine priority level from text content."""
    # TODO: Implement smart priority detection
    high_keywords = ["urgent", "deadline", "asap", "important", "immediately"]
    text_lower = text.lower()
    for keyword in high_keywords:
        if keyword in text_lower:
            return "high"
    return "medium"
