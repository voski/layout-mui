import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Box, Toolbar } from '@mui/material'
import NavAppBar from './components/AppBar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Dashboard from './pages/Dashboard'
import Docs from './pages/Docs'
import Login from './pages/Login'

function App() {
  return (
    <Router>
      <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <NavAppBar />
        <Toolbar />
        <Box sx={{ flexGrow: 1 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/docs" element={<Docs />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </Box>
        <Footer />
      </Box>
    </Router>
  )
}

export default App