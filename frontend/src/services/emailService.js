import api from './api'

export const getEmails = async () => {
  // TODO: Implement actual API call
  const response = await api.get('/api/emails')
  return response.data
}

export const getEmailSummary = async (emailId) => {
  // TODO: Implement actual API call
  const response = await api.get(`/api/emails/${emailId}/summary`)
  return response.data
}
