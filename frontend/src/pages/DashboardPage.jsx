import { useState, useEffect } from 'react'
import {
  User,
  CalendarDays,
  Briefcase,
  CheckSquare,
  AlertCircle,
  Clock,
  Mail,
  Sparkles,
  MessageCircle,
  Send,
  ArrowRight,
  X,
  Loader2,
  RefreshCw,
  Lightbulb,
  CheckCircle2,
  Plus,
  Calendar,
} from 'lucide-react'
import { fetchEmails, getEmailSummary, sendAssistantMessage } from '../services/api'

/* ─── Category color mapping ─── */
const CATEGORY_COLORS = {
  Placements: { text: 'text-terracotta', bg: 'bg-terracotta/10', border: 'border-terracotta/20' },
  Assignments: { text: 'text-sage', bg: 'bg-sage/10', border: 'border-sage/20' },
  Events: { text: 'text-gold', bg: 'bg-gold/10', border: 'border-gold/20' },
  General: { text: 'text-text-muted', bg: 'bg-surface-secondary', border: 'border-surface-secondary' },
  Exams: { text: 'text-dusty-red', bg: 'bg-dusty-red/10', border: 'border-dusty-red/20' },
}

function getCategoryStyle(category) {
  return CATEGORY_COLORS[category] || CATEGORY_COLORS.General
}

/* ─── Top Navigation ─── */
function DashboardNav() {
  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm shadow-card">
      <div className="max-w-[1400px] mx-auto px-5 h-14 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src="/logo.png" alt="CampusFlow" className="w-8 h-8 p-0.5 object-contain mix-blend-multiply" />
          <span className="text-lg font-semibold text-text-primary tracking-tight">
            Campus<span className="text-terracotta">Flow</span>
          </span>
        </div>

        <div className="flex items-center gap-3">
          <span className="hidden sm:block text-sm text-text-secondary">Tarun</span>
          <div className="w-8 h-8 rounded-full bg-surface-secondary flex items-center justify-center">
            <User size={15} className="text-text-muted" />
          </div>
        </div>
      </div>
    </nav>
  )
}

/* ─── Greeting ─── */
function Greeting() {
  return (
    <div className="mb-6">
      <h1 className="text-[24px] md:text-[28px] font-bold text-text-primary">
        Hello Tarun 👋
      </h1>
      <p className="text-sm text-text-secondary mt-0.5">
        Here's what needs your attention today.
      </p>
    </div>
  )
}

/* ═══════════════════════════════════════════
   LEFT COLUMN — Status & Planning
   ═══════════════════════════════════════════ */

function OverviewCards() {
  const cards = [
    { label: 'Deadlines', value: '2', icon: CalendarDays, color: 'text-dusty-red', bg: 'bg-dusty-red/10' },
    { label: 'Placements', value: '3', icon: Briefcase, color: 'text-gold', bg: 'bg-gold/10' },
    { label: 'Tasks', value: '4', icon: CheckSquare, color: 'text-sage', bg: 'bg-sage/10' },
  ]

  return (
    <div className="space-y-3">
      {cards.map((c) => (
        <div key={c.label} className="bg-white rounded-[12px] px-4 py-3.5 shadow-card flex items-center gap-3">
          <div className={`w-8 h-8 ${c.bg} rounded-[6px] flex items-center justify-center shrink-0`}>
            <c.icon size={16} className={c.color} />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-xs text-text-muted">{c.label}</p>
          </div>
          <p className="text-xl font-bold text-text-primary">{c.value}</p>
        </div>
      ))}
    </div>
  )
}

function TodaySchedule() {
  const schedule = [
    { time: '9:00 AM', activity: 'Classes', color: 'bg-terracotta' },
    { time: '2:00 PM', activity: 'Assignment Work', color: 'bg-sage' },
    { time: '6:00 PM', activity: 'Placement Preparation', color: 'bg-gold' },
  ]

  return (
    <div className="bg-white rounded-[12px] p-4 shadow-card flex-1 flex flex-col">
      <h3 className="text-xs font-medium text-text-muted uppercase tracking-wide mb-3 flex items-center gap-1.5">
        <Clock size={12} />
        Today's Schedule
      </h3>
      <div className="space-y-0 flex-1">
        {schedule.map((s, i) => (
          <div key={i} className="flex items-stretch gap-3">
            <div className="flex flex-col items-center">
              <div className={`w-2.5 h-2.5 rounded-full ${s.color} shrink-0 mt-0.5`}></div>
              {i < schedule.length - 1 && <div className="w-px flex-1 bg-surface-secondary my-1"></div>}
            </div>
            <div className={`${i < schedule.length - 1 ? 'pb-5' : ''}`}>
              <p className="text-[11px] font-medium text-text-muted">{s.time}</p>
              <p className="text-sm text-text-primary mt-0.5">{s.activity}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

/* ═══════════════════════════════════════════
   MIDDLE COLUMN — Information & Action
   ═══════════════════════════════════════════ */

function TodayPriorities() {
  const priorities = [
    { text: 'Nokia Assessment', deadline: 'Tomorrow', priority: 'high' },
    { text: 'Assignment 3 Due', deadline: 'Tonight', priority: 'high' },
    { text: 'Amazon Registration Closing', deadline: 'This week', priority: 'medium' },
  ]

  const styles = {
    high: 'text-dusty-red bg-dusty-red/10',
    medium: 'text-gold bg-gold/10',
  }

  return (
    <div className="bg-white rounded-[16px] p-5 shadow-card">
      <h2 className="text-sm font-semibold text-text-primary mb-3.5 flex items-center gap-2">
        <AlertCircle size={15} className="text-dusty-red" />
        Today's Priorities
      </h2>
      <div className="space-y-2">
        {priorities.map((p, i) => (
          <div key={i} className="flex items-center justify-between bg-surface-card rounded-[8px] px-3.5 py-2.5">
            <div className="flex items-center gap-2.5">
              <div className={`w-1.5 h-1.5 rounded-full ${p.priority === 'high' ? 'bg-dusty-red' : 'bg-gold'}`}></div>
              <span className="text-sm text-text-primary">{p.text}</span>
            </div>
            <span className={`text-[11px] font-medium px-2 py-0.5 rounded-full ${styles[p.priority]}`}>
              {p.deadline}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

/* ─── Skeleton Loader ─── */
function UpdateSkeleton() {
  return (
    <div className="space-y-3">
      {[1, 2, 3].map((i) => (
        <div key={i} className="border border-surface-secondary rounded-[10px] p-3.5 animate-pulse">
          <div className="flex items-start justify-between mb-2">
            <div className="h-4 bg-surface-secondary rounded w-3/4"></div>
            <div className="h-4 bg-surface-secondary rounded-full w-16"></div>
          </div>
          <div className="h-3 bg-surface-secondary rounded w-full mb-1.5"></div>
          <div className="h-3 bg-surface-secondary rounded w-2/3"></div>
          <div className="flex justify-between mt-3">
            <div className="h-3 bg-surface-secondary rounded w-20"></div>
            <div className="h-3 bg-surface-secondary rounded w-16"></div>
          </div>
        </div>
      ))}
    </div>
  )
}

/* ─── Important Updates (API-integrated) ─── */
function ImportantUpdates({ emails, loading, error, onRetry, onViewDetails }) {
  return (
    <div className="bg-white rounded-[16px] p-5 shadow-card">
      <h2 className="text-sm font-semibold text-text-primary mb-3.5 flex items-center gap-2">
        <Mail size={15} className="text-sage" />
        Important Updates
      </h2>

      {loading && <UpdateSkeleton />}

      {error && (
        <div className="text-center py-6">
          <p className="text-sm text-text-secondary mb-3">Unable to load updates.</p>
          <button
            onClick={onRetry}
            className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-medium text-terracotta border border-terracotta/30 rounded-[8px] hover:bg-terracotta/5 transition-colors duration-200"
          >
            <RefreshCw size={12} />
            Retry
          </button>
        </div>
      )}

      {!loading && !error && emails.length === 0 && (
        <p className="text-sm text-text-muted text-center py-4">No updates found.</p>
      )}

      {!loading && !error && emails.length > 0 && (
        <div className="space-y-3">
          {emails.slice(0, 5).map((email) => {
            const catStyle = getCategoryStyle(email.category)
            return (
              <div key={email.id} className="border border-surface-secondary rounded-[10px] p-3.5 hover:shadow-hover transition-shadow duration-200">
                <div className="flex items-start justify-between mb-1">
                  <h3 className="text-sm font-semibold text-text-primary line-clamp-1">{email.subject}</h3>
                  <span className={`text-[10px] font-medium ${catStyle.text} ${catStyle.bg} px-2 py-0.5 rounded-full shrink-0 ml-2`}>
                    {email.category || 'General'}
                  </span>
                </div>
                <p className="text-[13px] text-text-secondary leading-relaxed line-clamp-2">{email.snippet}</p>
                <div className="flex items-center justify-between mt-2.5">
                  <span className="text-[11px] text-text-muted">{email.date}</span>
                  <button
                    onClick={() => onViewDetails(email.id)}
                    className="text-[11px] font-medium text-terracotta hover:text-terracotta-dark transition-colors duration-200 flex items-center gap-0.5"
                  >
                    View Details
                    <ArrowRight size={11} />
                  </button>
                </div>
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}

/* ─── Why This Matters helper ─── */
function getWhyMatters(summary) {
  const hasDates = summary.important_dates && summary.important_dates.length > 0
  const hasActions = summary.action_items && summary.action_items.length > 0

  if (summary.priority === 'high' && hasDates) {
    return 'This email contains important deadlines requiring immediate attention. Taking action soon can help avoid missing critical windows.'
  }
  if (summary.priority === 'high') {
    return 'Marked as high priority — this requires your prompt action to stay on track.'
  }
  if (hasDates && hasActions) {
    return 'Contains upcoming dates and action items that directly impact your academic schedule.'
  }
  if (hasActions) {
    return 'Contains action items that need to be completed soon to maintain your progress.'
  }
  if (hasDates) {
    return 'Includes upcoming dates relevant to your academic or placement schedule.'
  }
  return 'Relevant to your current academic activities and campus life.'
}

/* ─── Date card parser ─── */
function parseDateCard(dateStr) {
  const parsed = new Date(dateStr)
  if (!isNaN(parsed.getTime())) {
    const months = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC']
    return { month: months[parsed.getMonth()], day: parsed.getDate().toString() }
  }
  // Fallback: try to extract something meaningful
  const monthMatch = dateStr.match(/(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)/i)
  const dayMatch = dateStr.match(/\d{1,2}/)
  return {
    month: monthMatch ? monthMatch[0].toUpperCase().slice(0, 3) : '—',
    day: dayMatch ? dayMatch[0] : '—',
  }
}

/* ─── AI Insights Drawer ─── */
function SummaryDrawer({ isOpen, onClose, summary, loading }) {
  if (!isOpen) return null

  const priorityColor = {
    high: 'text-dusty-red bg-dusty-red/10',
    medium: 'text-gold bg-gold/10',
    low: 'text-sage bg-sage/10',
  }

  return (
    <>
      <div
        className="fixed inset-0 bg-black/20 z-[60] transition-opacity duration-200"
        onClick={onClose}
      />

      <div className="fixed top-0 right-0 h-full w-full max-w-md bg-white shadow-xl z-[70] overflow-y-auto animate-slide-in">
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-surface-secondary px-6 py-4 flex items-center justify-between">
          <div>
            <h2 className="text-base font-semibold text-text-primary">Cora's Insights</h2>
            <p className="text-[11px] text-text-muted mt-0.5">Powered by Gemini</p>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-[6px] bg-surface-secondary flex items-center justify-center hover:bg-surface-secondary/80 transition-colors"
            aria-label="Close drawer"
          >
            <X size={16} className="text-text-secondary" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {loading && (
            <div className="flex flex-col items-center justify-center py-12">
              <Loader2 size={24} className="text-terracotta animate-spin mb-3" />
              <p className="text-sm text-text-muted">Cora is generating insights...</p>
            </div>
          )}

          {!loading && summary && (
            <div className="space-y-5">
              {/* Subject */}
              <div>
                <p className="text-xs text-text-muted uppercase tracking-wide mb-1">Subject</p>
                <h3 className="text-base font-semibold text-text-primary">{summary.subject}</h3>
              </div>

              {/* Priority */}
              {summary.priority && (
                <div>
                  <p className="text-xs text-text-muted uppercase tracking-wide mb-1.5">Priority</p>
                  <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${priorityColor[summary.priority] || priorityColor.medium}`}>
                    {summary.priority.charAt(0).toUpperCase() + summary.priority.slice(1)}
                  </span>
                </div>
              )}

              {/* AI Summary */}
              {summary.summary && (
                <div>
                  <p className="text-xs text-text-muted uppercase tracking-wide mb-1.5">AI Summary</p>
                  <p className="text-sm text-text-primary leading-relaxed bg-surface-card rounded-[8px] p-3.5">
                    {summary.summary}
                  </p>
                </div>
              )}

              {/* Why This Matters */}
              {summary.summary && (
                <div>
                  <p className="text-xs text-text-muted uppercase tracking-wide mb-1.5">Why This Matters</p>
                  <div className="bg-gold/10 border border-gold/25 rounded-[10px] px-4 py-3 flex items-start gap-2.5">
                    <Lightbulb size={15} className="text-gold shrink-0 mt-0.5" />
                    <p className="text-sm text-text-primary leading-relaxed">
                      {getWhyMatters(summary)}
                    </p>
                  </div>
                </div>
              )}

              {/* Important Dates — Card Style */}
              {summary.important_dates && summary.important_dates.length > 0 && (
                <div>
                  <p className="text-xs text-text-muted uppercase tracking-wide mb-2">Important Dates</p>
                  <div className="space-y-2">
                    {summary.important_dates.map((date, i) => {
                      const { month, day } = parseDateCard(date)
                      return (
                        <div key={i} className="flex items-center gap-3">
                          <div className="w-12 h-14 bg-surface-card border border-surface-secondary rounded-[8px] flex flex-col items-center justify-center shrink-0">
                            <span className="text-[10px] font-semibold text-terracotta uppercase leading-none">{month}</span>
                            <span className="text-lg font-bold text-text-primary leading-tight">{day}</span>
                          </div>
                          <span className="text-sm text-text-primary">{date}</span>
                        </div>
                      )
                    })}
                  </div>
                </div>
              )}

              {/* Enhanced Action Items */}
              {summary.action_items && summary.action_items.length > 0 && (
                <div>
                  <p className="text-xs text-text-muted uppercase tracking-wide mb-2">Action Items</p>
                  <div className="space-y-2">
                    {summary.action_items.map((item, i) => (
                      <div key={i} className="border border-surface-secondary rounded-[10px] p-3">
                        <div className="flex items-start gap-2.5 mb-2">
                          <CheckCircle2 size={14} className="text-sage shrink-0 mt-0.5" />
                          <span className="text-sm text-text-primary leading-relaxed">{item}</span>
                        </div>
                        <div className="flex items-center gap-2 ml-6">
                          <button className="inline-flex items-center gap-1 text-[10px] font-medium text-text-secondary border border-surface-secondary rounded-[6px] px-2 py-1 hover:border-terracotta/30 hover:text-terracotta transition-colors duration-200">
                            <Plus size={10} />
                            Add to Tasks
                          </button>
                          <button className="inline-flex items-center gap-1 text-[10px] font-medium text-text-secondary border border-surface-secondary rounded-[6px] px-2 py-1 hover:border-terracotta/30 hover:text-terracotta transition-colors duration-200">
                            <Calendar size={10} />
                            Add to Calendar
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {!loading && !summary && (
            <p className="text-sm text-text-muted text-center py-8">Unable to load insights.</p>
          )}
        </div>
      </div>
    </>
  )
}

/* ═══════════════════════════════════════════
   RIGHT COLUMN — AI Copilot
   ═══════════════════════════════════════════ */

function AISuggestions() {
  const suggestions = [
    'Begin Assignment 3 today.',
    'Prepare for Nokia Assessment.',
    'Use free slot for revision.',
  ]

  return (
    <div className="bg-white rounded-[12px] p-4 shadow-card">
      <h3 className="text-xs font-medium text-text-muted uppercase tracking-wide mb-3 flex items-center gap-1.5">
        <Sparkles size={12} className="text-gold" />
        Cora's Suggestions
      </h3>
      <div className="space-y-2">
        {suggestions.map((s, i) => (
          <div key={i} className="bg-sage/5 border border-sage/15 rounded-[8px] px-3 py-2.5">
            <span className="text-[13px] text-text-primary leading-relaxed">{s}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

function QuickAsk() {
  const [messages, setMessages] = useState([
    { role: 'user', text: 'What should I focus on today?' },
    { role: 'assistant', text: 'Complete Assignment 3 and prepare for Nokia Assessment.' },
  ])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSend = async () => {
    const trimmed = input.trim()
    if (!trimmed || loading) return

    setMessages((prev) => [...prev, { role: 'user', text: trimmed }])
    setInput('')
    setLoading(true)

    try {
      const data = await sendAssistantMessage(trimmed)
      setMessages((prev) => [...prev, { role: 'assistant', text: data.response }])
    } catch (err) {
      const status = err.response?.status
      const detail = err.response?.data?.detail
      let errorMsg = 'Sorry, I couldn\'t process that. Please try again.'
      if (status === 429) {
        errorMsg = 'AI rate limit reached. Please wait a minute and try again.'
      } else if (detail) {
        errorMsg = detail
      }
      setMessages((prev) => [...prev, { role: 'assistant', text: errorMsg }])
    } finally {
      setLoading(false)
    }
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }

  return (
    <div className="bg-white rounded-[12px] p-4 shadow-card flex-1 flex flex-col">
      <h3 className="text-xs font-medium text-text-muted uppercase tracking-wide mb-3 flex items-center gap-1.5">
        <MessageCircle size={12} className="text-terracotta" />
        Ask Cora
      </h3>

      {/* Chat messages */}
      <div className="space-y-2 mb-4 flex-1 overflow-y-auto max-h-60">
        {messages.map((msg, i) => (
          <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`text-xs px-3 py-2 max-w-[85%] ${
              msg.role === 'user'
                ? 'bg-terracotta text-white rounded-[8px] rounded-br-none'
                : 'bg-surface-card text-text-primary rounded-[8px] rounded-bl-none border border-surface-secondary leading-relaxed'
            }`}>
              {msg.text}
            </div>
          </div>
        ))}
        {loading && (
          <div className="flex justify-start">
            <div className="bg-surface-card text-text-muted text-xs px-3 py-2 rounded-[8px] rounded-bl-none border border-surface-secondary">
              <Loader2 size={12} className="animate-spin inline mr-1" />
              Cora is thinking...
            </div>
          </div>
        )}
      </div>

      {/* Input */}
      <div className="flex items-center gap-2 bg-surface-secondary rounded-[8px] px-3 py-2.5 mt-auto">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Ask Cora..."
          className="text-sm text-text-primary placeholder:text-text-muted bg-transparent outline-none flex-1 min-w-0"
        />
        <button
          onClick={handleSend}
          disabled={loading || !input.trim()}
          className="w-7 h-7 bg-terracotta rounded-[6px] flex items-center justify-center shrink-0 disabled:opacity-50 transition-opacity"
        >
          <Send size={12} className="text-white" />
        </button>
      </div>
    </div>
  )
}

/* ═══════════════════════════════════════════
   DASHBOARD PAGE
   ═══════════════════════════════════════════ */

export default function DashboardPage() {
  const [emails, setEmails] = useState([])
  const [emailsLoading, setEmailsLoading] = useState(true)
  const [emailsError, setEmailsError] = useState(false)

  const [drawerOpen, setDrawerOpen] = useState(false)
  const [summary, setSummary] = useState(null)
  const [summaryLoading, setSummaryLoading] = useState(false)

  const loadEmails = async () => {
    setEmailsLoading(true)
    setEmailsError(false)
    try {
      const data = await fetchEmails()
      setEmails(data)
    } catch (err) {
      setEmailsError(true)
    } finally {
      setEmailsLoading(false)
    }
  }

  useEffect(() => {
    loadEmails()
  }, [])

  const handleViewDetails = async (emailId) => {
    setDrawerOpen(true)
    setSummary(null)
    setSummaryLoading(true)
    try {
      const data = await getEmailSummary(emailId)
      setSummary(data)
    } catch (err) {
      setSummary(null)
    } finally {
      setSummaryLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-background font-sans">
      <DashboardNav />

      <main className="max-w-[1400px] mx-auto px-5 py-6 animate-fade-in">
        <Greeting />

        <div className="grid grid-cols-1 lg:grid-cols-[22%_48%_30%] gap-5 lg:items-start">

          {/* LEFT — Status & Planning */}
          <div className="lg:sticky lg:top-20 flex flex-col gap-4 lg:h-[calc(100vh-8rem)]">
            <OverviewCards />
            <TodaySchedule />
          </div>

          {/* MIDDLE — Information & Action */}
          <div className="space-y-5 lg:min-h-[calc(100vh-8rem)]">
            <TodayPriorities />
            <ImportantUpdates
              emails={emails}
              loading={emailsLoading}
              error={emailsError}
              onRetry={loadEmails}
              onViewDetails={handleViewDetails}
            />
          </div>

          {/* RIGHT — AI Copilot */}
          <div className="lg:sticky lg:top-20 flex flex-col gap-4 lg:h-[calc(100vh-8rem)]">
            <AISuggestions />
            <QuickAsk />
          </div>

        </div>
      </main>

      <SummaryDrawer
        isOpen={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        summary={summary}
        loading={summaryLoading}
      />
    </div>
  )
}
