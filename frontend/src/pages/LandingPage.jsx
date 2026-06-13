import { useState } from 'react'
import {
  Mail,
  CalendarDays,
  Bell,
  MessageCircle,
  LayoutDashboard,
  Brain,
  ArrowRight,
  CheckCircle2,
  XCircle,
  ExternalLink,
  Menu,
  X,
  Target,
} from 'lucide-react'

/* ─── Navbar ─── */
function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm shadow-card">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img src="/logo.png" alt="CampusFlow" className="w-8 h-8 mix-blend-multiply" />
          <span className="text-xl font-semibold text-text-primary tracking-tight">
            Campus<span className="text-terracotta">Flow</span>
          </span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-sm text-text-secondary hover:text-text-primary transition-colors duration-200">
            Features
          </a>
          <a href="#how-it-works" className="text-sm text-text-secondary hover:text-text-primary transition-colors duration-200">
            How It Works
          </a>
          <a href="#demo" className="text-sm text-text-secondary hover:text-text-primary transition-colors duration-200">
            Demo
          </a>
        </div>

        <div className="hidden md:flex items-center gap-3">
          <button className="px-4 py-2 text-sm font-medium text-text-secondary hover:text-text-primary transition-colors duration-200">
            Login
          </button>
          <button className="px-5 py-2.5 text-sm font-medium text-white bg-terracotta hover:bg-terracotta-dark rounded-[8px] transition-colors duration-200">
            Get Started
          </button>
        </div>

        <button
          className="md:hidden text-text-secondary"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle navigation menu"
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-surface-secondary px-6 py-4 space-y-3">
          <a href="#features" className="block text-sm text-text-secondary py-2">Features</a>
          <a href="#how-it-works" className="block text-sm text-text-secondary py-2">How It Works</a>
          <a href="#demo" className="block text-sm text-text-secondary py-2">Demo</a>
          <div className="pt-3 border-t border-surface-secondary flex gap-3">
            <button className="px-4 py-2 text-sm text-text-secondary">Login</button>
            <button className="px-4 py-2 text-sm text-white bg-terracotta rounded-[8px]">Get Started</button>
          </div>
        </div>
      )}
    </nav>
  )
}

/* ─── Hero Section ─── */
function HeroSection() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-10 md:py-16 grid md:grid-cols-2 gap-10 items-center animate-fade-in">
      <div>
        <h1 className="text-4xl md:text-[48px] font-bold text-text-primary leading-tight">
          Your AI-Powered Campus Assistant
        </h1>
        <p className="mt-5 text-lg text-text-secondary leading-relaxed max-w-lg">
          Never miss important placements, deadlines, or campus updates again. CampusFlow transforms scattered information into actionable plans.
        </p>
        <div className="mt-7 flex flex-wrap gap-4">
          <button className="px-6 py-3 bg-terracotta hover:bg-terracotta-dark hover:shadow-hover text-white font-medium rounded-[8px] transition-all duration-200 flex items-center gap-2">
            <Mail size={18} />
            Connect Gmail
          </button>
          <button className="px-6 py-3 border border-terracotta text-terracotta hover:bg-terracotta hover:text-white hover:shadow-hover font-medium rounded-[8px] transition-all duration-200">
            View Demo
          </button>
        </div>

        {/* Value Proposition Pills */}
        <div className="mt-6 flex flex-wrap gap-3">
          {['Gmail Integration', 'AI Summaries', 'Smart Planning'].map((label) => (
            <span
              key={label}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-medium text-terracotta bg-white border border-terracotta/30 rounded-full hover:border-terracotta/60 transition-colors duration-200"
            >
              <CheckCircle2 size={12} className="shrink-0" />
              {label}
            </span>
          ))}
        </div>
      </div>

      {/* Device Mockup Placeholder */}
      <div className="flex flex-col items-center">
        <div className="w-full max-w-md">
          {/* MacBook-style frame */}
          <div className="bg-text-primary rounded-t-[12px] px-3 pt-3 pb-0">
            {/* Browser dots */}
            <div className="flex items-center gap-1.5 mb-2.5">
              <div className="w-2.5 h-2.5 rounded-full bg-dusty-red/70"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-gold/70"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-sage/70"></div>
            </div>
            {/* Screen area */}
            <div className="bg-surface-secondary rounded-t-[4px] aspect-[4/3] flex flex-col items-center justify-center px-6">
              <LayoutDashboard size={32} className="text-text-muted mb-3" />
              <p className="text-base font-semibold text-text-primary text-center">Dashboard Preview</p>
              <p className="text-sm text-text-muted mt-1 text-center">Real CampusFlow dashboard coming soon</p>
            </div>
          </div>
          {/* MacBook base */}
          <div className="bg-text-primary/90 rounded-b-[4px] h-3 mx-8"></div>
          <div className="bg-text-primary/70 rounded-b-[8px] h-1.5 mx-16"></div>
        </div>
        <p className="text-xs text-text-muted mt-4 text-center italic">
          During the demo, this section will showcase the live CampusFlow dashboard.
        </p>
      </div>
    </section>
  )
}

/* ─── Problem → Solution Section ─── */
function ProblemSolutionSection() {
  const problems = [
    'Important emails get buried.',
    'Deadlines get missed.',
    'Managing academics becomes stressful.',
  ]

  const solutions = [
    { icon: Mail, text: 'Summarizing important emails.' },
    { icon: CalendarDays, text: 'Extracting deadlines automatically.' },
    { icon: Target, text: 'Organizing priorities intelligently.' },
  ]

  return (
    <section className="bg-surface-secondary py-20">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-[32px] font-semibold text-text-primary text-center mb-14">
          Student Life is Overwhelming
        </h2>

        <div className="grid md:grid-cols-2 gap-12 md:gap-16">
          {/* Problems */}
          <div>
            <p className="text-xs font-medium text-text-muted uppercase tracking-wide mb-5">The Problem</p>
            <div className="space-y-3">
              {problems.map((p, i) => (
                <div key={i} className="flex items-start gap-3 bg-white rounded-[12px] px-5 py-4 shadow-card">
                  <XCircle size={18} className="text-dusty-red mt-0.5 shrink-0" />
                  <span className="text-[15px] text-text-primary">{p}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Solutions */}
          <div>
            <p className="text-xs font-medium text-text-muted uppercase tracking-wide mb-5">CampusFlow Helps By</p>
            <div className="space-y-3">
              {solutions.map((s, i) => (
                <div key={i} className="flex items-start gap-3 bg-white rounded-[12px] px-5 py-4 shadow-card">
                  <s.icon size={18} className="text-sage mt-0.5 shrink-0" />
                  <span className="text-[15px] text-text-primary">{s.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─── Features Section ─── */
function FeaturesSection() {
  const features = [
    { icon: Mail, title: 'Email Intelligence', desc: 'Summarize lengthy emails into actionable insights.' },
    { icon: CalendarDays, title: 'Smart Planner', desc: 'Generate daily and weekly plans automatically.' },
    { icon: Brain, title: 'Routine Understanding', desc: 'Adapt recommendations to student habits.' },
    { icon: Bell, title: 'Proactive Alerts', desc: 'Never miss important deadlines.' },
    { icon: MessageCircle, title: 'AI Campus Assistant', desc: 'Ask questions and get personalized guidance.' },
    { icon: LayoutDashboard, title: 'Unified Dashboard', desc: 'Manage everything from one place.' },
  ]

  return (
    <section id="features" className="max-w-6xl mx-auto px-6 py-20">
      <h2 className="text-[32px] font-semibold text-text-primary text-center mb-3">
        Features
      </h2>
      <p className="text-center text-text-secondary mb-12 max-w-md mx-auto">
        Everything you need to stay on top of campus life.
      </p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((f, i) => (
          <div
            key={i}
            className="bg-white rounded-[16px] p-6 shadow-card hover:shadow-hover transition-shadow duration-200"
          >
            <div className="w-10 h-10 bg-surface-secondary rounded-[8px] flex items-center justify-center mb-4">
              <f.icon size={20} className="text-terracotta" />
            </div>
            <h3 className="text-[20px] font-semibold text-text-primary mb-2">{f.title}</h3>
            <p className="text-sm text-text-secondary leading-relaxed">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

/* ─── How It Works Section ─── */
function HowItWorksSection() {
  const steps = [
    { num: '1', title: 'Connect Gmail', desc: 'Link your college email securely.' },
    { num: '2', title: 'AI Extracts Updates', desc: 'Important information is identified.' },
    { num: '3', title: 'Organizes Priorities', desc: 'Tasks and schedules are structured.' },
    { num: '4', title: 'Stay Ahead', desc: 'Proactive reminders keep you on track.' },
  ]

  return (
    <section id="how-it-works" className="bg-surface-secondary py-20">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-[32px] font-semibold text-text-primary text-center mb-14">
          How It Works
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s, i) => (
            <div key={i} className="relative">
              <div className="bg-white rounded-[16px] p-6 shadow-card h-full">
                <div className="w-9 h-9 bg-terracotta text-white text-sm font-semibold rounded-full flex items-center justify-center mb-4">
                  {s.num}
                </div>
                <h3 className="font-semibold text-text-primary mb-2">{s.title}</h3>
                <p className="text-sm text-text-secondary leading-relaxed">{s.desc}</p>
              </div>
              {i < steps.length - 1 && (
                <div className="hidden lg:flex absolute top-1/2 -right-3 transform -translate-y-1/2 text-text-muted">
                  <ArrowRight size={16} />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── Demo Preview Section ─── */
function DemoSection() {
  return (
    <section id="demo" className="max-w-6xl mx-auto px-6 py-20">
      <h2 className="text-[32px] font-semibold text-text-primary text-center mb-3">
        Meet Your AI Campus Assistant
      </h2>
      <p className="text-center text-text-secondary mb-12">
        Ask anything about your academic life.
      </p>

      <div className="max-w-lg mx-auto bg-white rounded-[16px] shadow-card overflow-hidden">
        {/* Chat header */}
        <div className="bg-surface-secondary px-6 py-3.5 border-b border-surface-secondary">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-sage"></div>
            <span className="text-sm font-medium text-text-secondary">CampusFlow Assistant</span>
          </div>
        </div>

        {/* Chat body */}
        <div className="p-6 space-y-4">
          {/* User message */}
          <div className="flex justify-end">
            <div className="bg-terracotta text-white text-sm px-4 py-3 rounded-[12px] rounded-br-none max-w-xs">
              What should I focus on today?
            </div>
          </div>

          {/* Assistant response */}
          <div className="flex justify-start">
            <div className="bg-surface-card text-text-primary text-sm px-4 py-4 rounded-[12px] rounded-bl-none max-w-sm border border-surface-secondary">
              <p className="mb-3 text-text-secondary">Here's your priority list for today:</p>
              <div className="space-y-2.5">
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 size={15} className="text-dusty-red shrink-0" />
                  <span>Finish Assignment 3</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 size={15} className="text-gold shrink-0" />
                  <span>Register for Nokia Assessment</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 size={15} className="text-sage shrink-0" />
                  <span>Revise for tomorrow's quiz</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─── Footer ─── */
function Footer() {
  return (
    <footer className="bg-surface-secondary border-t border-surface-secondary/80 py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <div className="flex items-center gap-2">
              <img src="/logo.png" alt="CampusFlow" className="w-6 h-6 mix-blend-multiply" />
              <span className="text-lg font-semibold text-text-primary">
                Campus<span className="text-terracotta">Flow</span>
              </span>
            </div>
            <p className="text-sm text-text-muted mt-1">Built for Amazon HackOn 2024</p>
          </div>

          <div className="flex items-center gap-6">
            <span className="text-sm text-text-secondary">Team CampusFlow</span>
            <a
              href="#"
              className="text-text-secondary hover:text-terracotta transition-colors duration-200 flex items-center gap-1.5 text-sm"
              aria-label="GitHub repository"
            >
              <ExternalLink size={16} />
              GitHub
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

/* ─── Landing Page ─── */
export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background font-sans">
      <Navbar />
      <HeroSection />
      <ProblemSolutionSection />
      <FeaturesSection />
      <HowItWorksSection />
      <DemoSection />
      <Footer />
    </div>
  )
}
