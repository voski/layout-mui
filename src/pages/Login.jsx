import {
  Container,
  Paper,
  TextField,
  Button,
  Typography,
  Box,
  Stack
} from '@mui/material'

function Login() {
  return (
    <Box
      sx={{
        minHeight: 'calc(100vh - 128px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <Container maxWidth="sm">
        <Paper elevation={2} sx={{ p: 4 }}>
          <Typography variant="h4" component="h1" gutterBottom align="center">
            Login
          </Typography>
          
          <Box component="form" sx={{ mt: 3 }}>
            <Stack spacing={3}>
              <TextField
                fullWidth
                label="Email"
                type="email"
                variant="outlined"
                required
              />
              
              <TextField
                fullWidth
                label="Password"
                type="password"
                variant="outlined"
                required
              />
              
              <Button
                type="submit"
                fullWidth
                variant="contained"
                size="large"
                sx={{ mt: 3 }}
              >
                Sign In
              </Button>
            </Stack>
          </Box>
        </Paper>
      </Container>
    </Box>
  )
}

export default Login