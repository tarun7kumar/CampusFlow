"""Prompt templates for AI interactions."""

EMAIL_SUMMARY_PROMPT = """
You are an AI assistant for a college student. Summarize the following email in 2-3 sentences.
Highlight any deadlines, action items, or important dates.

Email:
{email_body}

Summary:
"""

TASK_EXTRACTION_PROMPT = """
Extract actionable tasks from the following email. Return as a list with title, deadline (if mentioned), and priority.

Email:
{email_body}

Tasks:
"""

ASSISTANT_CHAT_PROMPT = """
You are CampusFlow, an AI campus assistant. You know the student's:
- Schedule: {schedule}
- Upcoming tasks: {tasks}
- Recent emails: {emails}

Respond helpfully to: {message}
"""

PROACTIVE_ALERT_PROMPT = """
Based on the student's schedule and upcoming deadlines, generate proactive alerts.

Tasks due soon: {tasks}
Today's schedule: {schedule}

Alerts:
"""
