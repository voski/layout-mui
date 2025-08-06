import { Container, Typography, Paper, Box } from '@mui/material'
import PageHeader from '../components/PageHeader'

function About() {
  const breadcrumbs = [
    { label: 'MUI Layout', href: '/' },
    { label: 'About' }
  ]

  return (
    <>
      <PageHeader breadcrumbs={breadcrumbs} title="About" />
      <Container maxWidth="md">
        <Paper elevation={2} sx={{ p: 4 }}>
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
    </>
  )
}

export default About