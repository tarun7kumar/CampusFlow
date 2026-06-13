# CampusFlow Database Schema (MongoDB)

## Collections

### users
```json
{
  "_id": "ObjectId",
  "email": "string",
  "name": "string",
  "google_id": "string",
  "avatar_url": "string",
  "created_at": "datetime",
  "last_login": "datetime"
}
```

### tasks
```json
{
  "_id": "ObjectId",
  "user_id": "ObjectId",
  "title": "string",
  "description": "string",
  "deadline": "datetime | null",
  "priority": "high | medium | low",
  "status": "pending | in_progress | completed",
  "source": "email | manual | ai_generated",
  "created_at": "datetime",
  "updated_at": "datetime"
}
```

### chat_history
```json
{
  "_id": "ObjectId",
  "user_id": "ObjectId",
  "role": "user | assistant",
  "content": "string",
  "timestamp": "datetime"
}
```

### email_cache
```json
{
  "_id": "ObjectId",
  "user_id": "ObjectId",
  "gmail_id": "string",
  "subject": "string",
  "sender": "string",
  "body": "string",
  "summary": "string | null",
  "received_at": "datetime",
  "is_read": "boolean",
  "priority": "high | medium | low"
}
```
