# CampusFlow API Specification

## Base URL
`http://localhost:8000/api`

## Authentication
All endpoints (except `/health` and `/`) require a Bearer token in the Authorization header.

---

## Endpoints

### Emails
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | /emails | Fetch summarized emails |
| GET | /emails/:id/summary | Get AI summary for specific email |

### Tasks
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | /tasks | Get all tasks |
| POST | /tasks | Create a new task |
| PUT | /tasks/:id | Update a task |
| DELETE | /tasks/:id | Delete a task |

### Assistant
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | /assistant/chat | Send message to AI assistant |
| GET | /assistant/history | Get chat history |

### Dashboard
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | /dashboard | Get aggregated dashboard data |

---

## Response Format
All responses follow:
```json
{
  "data": {},
  "message": "string",
  "status": "success | error"
}
```
