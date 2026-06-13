import axios from 'axios'

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000/api'

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
})

/**
 * Fetch recent emails from Gmail via backend.
 * GET /emails/fetch
 */
export async function fetchEmails() {
  const response = await api.get('/emails/fetch')
  return response.data
}

/**
 * Get AI-generated summary for a specific email.
 * GET /emails/{email_id}/summary
 */
export async function getEmailSummary(emailId) {
  const response = await api.get(`/emails/${emailId}/summary`)
  return response.data
}

/**
 * Send a message to the AI assistant.
 * POST /assistant/chat
 */
export async function sendAssistantMessage(message) {
  const response = await api.post('/assistant/chat', { message })
  return response.data
}

export default api
