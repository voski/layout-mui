import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Box } from '@mui/material'
import NavAppBar from './components/AppBar'
import Home from './pages/Home'
import About from './pages/About'
import Login from './pages/Login'

function App() {
  return (
    <Router>
      <Box sx={{ flexGrow: 1 }}>
        <NavAppBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Box>
    </Router>
  )
}

export default App