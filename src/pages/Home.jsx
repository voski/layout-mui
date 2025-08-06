import { Container, Typography, Card, CardContent, Grid } from '@mui/material'

function Home() {
  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      <Typography variant="h2" component="h1" gutterBottom>
        React + MUI Layout Experiment
      </Typography>
      
      <Grid container spacing={3} sx={{ mt: 2 }}>
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h5" component="h2" gutterBottom>
                Components
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Exploring Material-UI components and their composition patterns.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h5" component="h2" gutterBottom>
                Layout System
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Testing responsive layouts using MUI's standard Grid system.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  )
}

export default Home