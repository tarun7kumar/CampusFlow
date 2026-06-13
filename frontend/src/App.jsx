import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Dashboard from './pages/Dashboard'
import Emails from './pages/Emails'
import Assistant from './pages/Assistant'
import Login from './pages/Login'

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/emails" element={<Emails />} />
        <Route path="/assistant" element={<Assistant />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  )
}

export default App
