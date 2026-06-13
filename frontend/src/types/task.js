/**
 * Task object shape
 * @typedef {Object} Task
 * @property {string} id
 * @property {string} title
 * @property {string} description
 * @property {string} deadline
 * @property {string} priority - 'high' | 'medium' | 'low'
 * @property {string} status - 'pending' | 'in_progress' | 'completed'
 * @property {string} source - 'email' | 'manual' | 'ai_generated'
 */

export const TaskSample = {
  id: '',
  title: '',
  description: '',
  deadline: '',
  priority: 'medium',
  status: 'pending',
  source: 'manual',
}
