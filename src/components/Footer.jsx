import { Box, Typography, Container } from '@mui/material'

function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        py: 3,
        px: 2,
        mt: 'auto',
        backgroundColor: 'primary.dark',
        color: 'primary.contrastText'
      }}
    >
      <Container maxWidth="lg">
        <Typography variant="body2" align="center">
          © 2024 MUI Layout Experiment. All rights reserved.
        </Typography>
      </Container>
    </Box>
  )
}

export default Footer