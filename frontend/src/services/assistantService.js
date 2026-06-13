import api from './api'

export const sendMessage = async (message) => {
  // TODO: Implement actual API call
  const response = await api.post('/api/assistant/chat', { message })
  return response.data
}

export const getChatHistory = async () => {
  // TODO: Implement actual API call
  const response = await api.get('/api/assistant/history')
  return response.data
}
