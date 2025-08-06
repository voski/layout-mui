import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Box } from '@mui/material'
import NavAppBar from './components/AppBar'
import Home from './pages/Home'
import About from './pages/About'

function App() {
  return (
    <Router>
      <Box sx={{ flexGrow: 1 }}>
        <NavAppBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Box>
    </Router>
  )
}

export default App