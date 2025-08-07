import { Box, Breadcrumbs, Typography, Link } from '@mui/material'
import { Link as RouterLink } from 'react-router-dom'

function PageHeader({ breadcrumbs, title, rightElement, bottomElement }) {
  return (
    <Box sx={{ py: 3, px: 3, borderBottom: 1, borderColor: 'divider' }}>
      <Breadcrumbs aria-label="breadcrumb" sx={{ mb: 1 }}>
        {breadcrumbs.map((crumb, index) => {
          if (crumb.href && index < breadcrumbs.length - 1) {
            return (
              <Link
                key={index}
                component={RouterLink}
                to={crumb.href}
                color="inherit"
                underline="hover"
              >
                {crumb.label}
              </Link>
            )
          } else {
            return (
              <Typography key={index} color="text.primary">
                {crumb.label}
              </Typography>
            )
          }
        })}
      </Breadcrumbs>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Typography variant="h4" component="h1">
          {title}
        </Typography>
        {rightElement && (
          <Box>
            {rightElement}
          </Box>
        )}
      </Box>
      {bottomElement && (
        <Box sx={{ mt: 2 }}>
          {bottomElement}
        </Box>
      )}
    </Box>
  )
}

export default PageHeader