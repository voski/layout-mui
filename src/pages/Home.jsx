import { Container, Card, CardContent, Grid, Typography, Button, Box, Switch, FormControlLabel, Tabs, Tab } from '@mui/material'
import { useState } from 'react'
import PageHeader from '../components/PageHeader'

function Home() {
  const [count, setCount] = useState(0)
  const [switchOn, setSwitchOn] = useState(false)
  const [tabValue, setTabValue] = useState(0)
  
  const breadcrumbs = [
    { label: 'MUI Layout', href: '/' },
    { label: 'Home' }
  ]

  const handleClick = () => {
    setCount(count + 1)
  }

  const handleSwitchChange = (event) => {
    setSwitchOn(event.target.checked)
  }

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue)
  }

  const rightElement = (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 1 }}>
      <Button variant="contained" onClick={handleClick}>
        Click ({count})
      </Button>
      <FormControlLabel
        control={<Switch checked={switchOn} onChange={handleSwitchChange} />}
        label="Toggle"
        labelPlacement="start"
      />
    </Box>
  )

  const bottomElement = (
    <Tabs value={tabValue} onChange={handleTabChange}>
      <Tab label="Foo" />
      <Tab label="Bar" />
    </Tabs>
  )

  return (
    <>
      <PageHeader breadcrumbs={breadcrumbs} title="Home" rightElement={rightElement} bottomElement={bottomElement} />
      <Container maxWidth="lg">

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
    </>
  )
}

export default Home