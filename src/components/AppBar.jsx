import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material'
import { Link, useLocation } from 'react-router-dom'

function NavAppBar() {
  const location = useLocation()

  return (
    <AppBar position="fixed">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          MUI Layout
        </Typography>
        <Box sx={{ display: 'flex', gap: 1 }}>
          <Button 
            color="inherit" 
            component={Link} 
            to="/"
            variant={location.pathname === '/' ? 'outlined' : 'text'}
          >
            Home
          </Button>
          <Button 
            color="inherit" 
            component={Link} 
            to="/about"
            variant={location.pathname === '/about' ? 'outlined' : 'text'}
          >
            About
          </Button>
          <Button 
            color="inherit" 
            component={Link} 
            to="/services"
            variant={location.pathname === '/services' ? 'outlined' : 'text'}
          >
            Services
          </Button>
          <Button 
            color="inherit" 
            component={Link} 
            to="/dashboard"
            variant={location.pathname === '/dashboard' ? 'outlined' : 'text'}
          >
            Dashboard
          </Button>
          <Button 
            color="inherit" 
            component={Link} 
            to="/login"
            variant={location.pathname === '/login' ? 'outlined' : 'text'}
          >
            Login
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  )
}

export default NavAppBar