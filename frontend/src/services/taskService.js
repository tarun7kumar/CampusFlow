import api from './api'

export const getTasks = async () => {
  // TODO: Implement actual API call
  const response = await api.get('/api/tasks')
  return response.data
}

export const createTask = async (taskData) => {
  // TODO: Implement actual API call
  const response = await api.post('/api/tasks', taskData)
  return response.data
}

export const updateTask = async (taskId, taskData) => {
  // TODO: Implement actual API call
  const response = await api.put(`/api/tasks/${taskId}`, taskData)
  return response.data
}
