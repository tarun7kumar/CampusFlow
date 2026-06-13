import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import DashboardPage from './pages/DashboardPage'
import UpdatesPage from './pages/UpdatesPage'
import AssistantPage from './pages/AssistantPage'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/updates" element={<UpdatesPage />} />
        <Route path="/assistant" element={<AssistantPage />} />
      </Routes>
    </BrowserRouter>
  )
}
