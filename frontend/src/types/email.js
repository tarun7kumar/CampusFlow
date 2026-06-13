/**
 * Email object shape
 * @typedef {Object} Email
 * @property {string} id
 * @property {string} subject
 * @property {string} sender
 * @property {string} body
 * @property {string} summary
 * @property {string} receivedAt
 * @property {boolean} isRead
 * @property {string} priority - 'high' | 'medium' | 'low'
 */

export const EmailSample = {
  id: '',
  subject: '',
  sender: '',
  body: '',
  summary: '',
  receivedAt: '',
  isRead: false,
  priority: 'medium',
}
