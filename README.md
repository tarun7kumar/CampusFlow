# CampusFlow 🎓
live link: https://campus-flow-ruddy.vercel.app/
**AI Operating System for Student Life** — Built for Amazon HackOn

> Think of it as "Alexa for your college life" — one AI that knows your timetable, reminds you about deadlines, and tells you the mess menu before you ask.

## Features

- 🧠 **Routine Understanding** — Learns your schedule and adapts
- 📧 **Update Summarization** — AI-powered email summaries with action items
- ⏰ **Smart Scheduling** — Intelligent task management and reminders
- 💬 **Instant Q&A** — Context-aware AI assistant
- 🔔 **Proactive Alerts** — Deadline reminders and schedule conflicts
- 🎯 **Personal Life Management** — Unified campus life dashboard

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | React + Vite |
| Backend | Python + FastAPI |
| Database | MongoDB |
| AI | OpenAI / AWS Bedrock |
| Auth | Google OAuth 2.0 |

## Getting Started

### Prerequisites
- Node.js 18+
- Python 3.10+
- MongoDB
- Google Cloud Console project (for OAuth + Gmail API)

### Frontend Setup
```bash
cd frontend
npm install
npm run dev
```

### Backend Setup
```bash
cd backend
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
pip install -r requirements.txt
uvicorn app.main:app --reload
```

### Environment Variables
Copy `backend/.env` and fill in your credentials:
- `MONGODB_URI` — MongoDB connection string
- `GOOGLE_CLIENT_ID` / `GOOGLE_CLIENT_SECRET` — From Google Cloud Console
- `OPENAI_API_KEY` — For AI features

## Project Structure

```
campusflow/
├── frontend/          # React + Vite
├── backend/           # FastAPI
├── docs/              # API specs, DB schema, prompts
├── sample_data/       # Testing data
├── .gitignore
├── README.md
└── LICENSE
```

## Team

Built with ☕ during Amazon HackOn 2024.
