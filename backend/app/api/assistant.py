import time
import traceback

from fastapi import APIRouter, HTTPException
from pydantic import BaseModel
from google import genai
from google.genai import errors as genai_errors

from app.config import settings
from app.services.gmail_service import get_gmail_service
from app.services.classifier import classify_email

router = APIRouter(
    prefix="/assistant",
    tags=["Assistant"]
)

ASSISTANT_PROMPT = """You are CampusFlow, an AI campus assistant helping students prioritize tasks and understand important updates.

Recent Emails:
{email_context}

Student Question: {user_message}

Provide concise and actionable advice. Be direct, helpful, and specific. Format your response in short paragraphs or bullet points when listing items."""


class ChatRequest(BaseModel):
    message: str


@router.post("/chat")
async def chat(request: ChatRequest):
    """Send a message to the AI assistant and get a context-aware response."""

    print("\n=== ASSISTANT CHAT REQUEST ===")
    print(f"User message: {request.message}")

    try:
        # Step 1: Fetch email context
        print("[1] Fetching email context...")
        email_context = _get_email_context()
        print(f"[1] Email context: {len(email_context)} chars")

        # Step 2: Build prompt
        print("[2] Building prompt...")
        prompt = ASSISTANT_PROMPT.format(
            email_context=email_context,
            user_message=request.message
        )

        # Step 3: Call Gemini with retry on rate limit
        print("[3] Calling Gemini...")
        response_text = _call_gemini_with_retry(prompt)
        print(f"[3] Response received: {response_text[:80]}...")

        return {"response": response_text}

    except genai_errors.ClientError as e:
        print("\n=== GEMINI API ERROR ===")
        print(f"Status: {e.code if hasattr(e, 'code') else 'unknown'}")
        print(f"Message: {str(e)}")

        if "429" in str(e) or "RESOURCE_EXHAUSTED" in str(e):
            raise HTTPException(
                status_code=429,
                detail="AI rate limit reached. Please wait a minute and try again."
            )
        raise HTTPException(status_code=500, detail=f"AI service error: {str(e)}")

    except Exception as e:
        print("\n=== ASSISTANT CHAT ERROR ===")
        print(f"Error type: {type(e).__name__}")
        print(f"Error: {str(e)}")
        traceback.print_exc()
        raise HTTPException(status_code=500, detail=str(e))


def _call_gemini_with_retry(prompt: str, max_retries: int = 2) -> str:
    """Call Gemini with basic retry on rate limit errors."""
    client = genai.Client(api_key=settings.GEMINI_API_KEY)

    for attempt in range(max_retries + 1):
        try:
            response = client.models.generate_content(
                model="gemini-2.0-flash",
                contents=prompt
            )
            return response.text.strip()

        except genai_errors.ClientError as e:
            if "429" in str(e) or "RESOURCE_EXHAUSTED" in str(e):
                if attempt < max_retries:
                    wait_time = 10 * (attempt + 1)  # 10s, 20s
                    print(f"  Rate limited. Retrying in {wait_time}s (attempt {attempt + 1}/{max_retries})...")
                    time.sleep(wait_time)
                    continue
            raise

    raise Exception("Gemini API unavailable after retries")


def _get_email_context() -> str:
    """Fetch recent emails and format them as context for the assistant."""
    try:
        service = get_gmail_service()

        results = service.users().messages().list(
            userId="me",
            maxResults=10
        ).execute()

        messages = results.get("messages", [])
        print(f"  Fetched {len(messages)} email IDs")
        context_lines = []

        for msg in messages:
            message = service.users().messages().get(
                userId="me",
                id=msg["id"]
            ).execute()

            headers = message["payload"]["headers"]
            subject = ""
            for header in headers:
                if header["name"] == "Subject":
                    subject = header["value"]
                    break

            snippet = message.get("snippet", "")
            category = classify_email(subject, snippet)

            context_lines.append(f"- [{category}] {subject}: {snippet[:100]}")

        return "\n".join(context_lines) if context_lines else "No recent emails available."

    except Exception as e:
        print(f"  Email fetch error: {type(e).__name__}: {str(e)}")
        return "Unable to fetch emails — provide general student advice."


@router.get("/history")
async def get_chat_history():
    """Retrieve chat history placeholder."""
    return {"history": [], "message": "Chat history placeholder"}
