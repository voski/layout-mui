import { Container, Typography, Paper, Box } from '@mui/material'

function About() {
  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Paper elevation={2} sx={{ p: 4 }}>
        <Typography variant="h2" component="h1" gutterBottom>
          About
        </Typography>
        <Box sx={{ mt: 2 }}>
          <Typography variant="body1" paragraph>
            This is an experimental React application built with Material-UI v7 
            and Vite. The project focuses on exploring different layout patterns 
            and component compositions using MUI components.
          </Typography>
          <Typography variant="body1" paragraph>
            The application demonstrates modern React development practices 
            including routing with React Router DOM and responsive design 
            with Material-UI's component system.
          </Typography>
        </Box>
      </Paper>
    </Container>
  )
}

export default About