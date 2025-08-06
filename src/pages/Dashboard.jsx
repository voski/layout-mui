import {
  Box,
  Paper,
  Typography,
  TextField,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Switch,
  FormControlLabel,
  Divider,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Chip,
  IconButton
} from '@mui/material'
import { Edit, Delete, Visibility } from '@mui/icons-material'
import PageHeader from '../components/PageHeader'
import { useState } from 'react'

function Dashboard() {
  const breadcrumbs = [
    { label: 'MUI Layout', href: '/' },
    { label: 'Dashboard' }
  ]

  const [filters, setFilters] = useState({
    search: '',
    status: 'all',
    category: 'all',
    showInactive: false
  })

  const sampleData = [
    { id: 1, name: 'Project Alpha', status: 'active', category: 'development', created: '2024-01-15', progress: 75 },
    { id: 2, name: 'Marketing Campaign', status: 'pending', category: 'marketing', created: '2024-01-20', progress: 30 },
    { id: 3, name: 'User Research', status: 'completed', category: 'research', created: '2024-01-10', progress: 100 },
    { id: 4, name: 'Database Migration', status: 'active', category: 'development', created: '2024-01-25', progress: 60 },
    { id: 5, name: 'UI Redesign', status: 'inactive', category: 'design', created: '2024-01-05', progress: 10 },
    { id: 6, name: 'API Integration', status: 'active', category: 'development', created: '2024-02-01', progress: 85 },
    { id: 7, name: 'Content Strategy', status: 'pending', category: 'marketing', created: '2024-02-03', progress: 20 },
    { id: 8, name: 'Security Audit', status: 'completed', category: 'security', created: '2024-01-30', progress: 100 }
  ]

  const handleFilterChange = (field) => (event) => {
    setFilters(prev => ({
      ...prev,
      [field]: event.target.value
    }))
  }

  const handleSwitchChange = (field) => (event) => {
    setFilters(prev => ({
      ...prev,
      [field]: event.target.checked
    }))
  }

  const getStatusColor = (status) => {
    switch (status) {
      case 'active': return 'success'
      case 'pending': return 'warning'
      case 'completed': return 'info'
      case 'inactive': return 'default'
      default: return 'default'
    }
  }

  return (
    <>
      <PageHeader breadcrumbs={breadcrumbs} title="Dashboard" />
      
      <Box sx={{ display: 'flex', height: 'calc(100vh - 200px)' }}>
        {/* Left Pane - Control Panel */}
        <Paper 
          sx={{ 
            width: 320, 
            p: 3, 
            mr: 2, 
            ml: 3,
            borderRadius: 2,
            height: 'fit-content',
            maxHeight: '100%',
            overflow: 'auto'
          }}
        >
          <Typography variant="h6" gutterBottom>
            Control Panel
          </Typography>
          
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
            <TextField
              label="Search Projects"
              variant="outlined"
              size="small"
              fullWidth
              value={filters.search}
              onChange={handleFilterChange('search')}
            />
            
            <FormControl size="small" fullWidth>
              <InputLabel>Status</InputLabel>
              <Select
                value={filters.status}
                label="Status"
                onChange={handleFilterChange('status')}
              >
                <MenuItem value="all">All Status</MenuItem>
                <MenuItem value="active">Active</MenuItem>
                <MenuItem value="pending">Pending</MenuItem>
                <MenuItem value="completed">Completed</MenuItem>
                <MenuItem value="inactive">Inactive</MenuItem>
              </Select>
            </FormControl>
            
            <FormControl size="small" fullWidth>
              <InputLabel>Category</InputLabel>
              <Select
                value={filters.category}
                label="Category"
                onChange={handleFilterChange('category')}
              >
                <MenuItem value="all">All Categories</MenuItem>
                <MenuItem value="development">Development</MenuItem>
                <MenuItem value="marketing">Marketing</MenuItem>
                <MenuItem value="research">Research</MenuItem>
                <MenuItem value="design">Design</MenuItem>
                <MenuItem value="security">Security</MenuItem>
              </Select>
            </FormControl>
            
            <FormControlLabel
              control={
                <Switch
                  checked={filters.showInactive}
                  onChange={handleSwitchChange('showInactive')}
                />
              }
              label="Show Inactive"
            />
            
            <Divider />
            
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              <Button variant="contained" size="small">
                Apply Filters
              </Button>
              <Button variant="outlined" size="small">
                Reset Filters
              </Button>
              <Button variant="outlined" size="small" color="success">
                Export Data
              </Button>
            </Box>
            
            <Divider />
            
            <Typography variant="subtitle2" color="text.secondary">
              Quick Stats
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Typography variant="body2">Total Projects:</Typography>
                <Typography variant="body2" fontWeight="bold">8</Typography>
              </Box>
              <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Typography variant="body2">Active:</Typography>
                <Typography variant="body2" fontWeight="bold">3</Typography>
              </Box>
              <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Typography variant="body2">Completed:</Typography>
                <Typography variant="body2" fontWeight="bold">2</Typography>
              </Box>
            </Box>
          </Box>
        </Paper>
        
        {/* Right Pane - Data Table */}
        <Paper 
          sx={{ 
            flexGrow: 1, 
            mr: 3, 
            borderRadius: 2,
            display: 'flex',
            flexDirection: 'column'
          }}
        >
          <Box sx={{ p: 2, borderBottom: 1, borderColor: 'divider' }}>
            <Typography variant="h6">
              Project Data
            </Typography>
          </Box>
          
          <TableContainer sx={{ flexGrow: 1 }}>
            <Table stickyHeader>
              <TableHead>
                <TableRow>
                  <TableCell>ID</TableCell>
                  <TableCell>Project Name</TableCell>
                  <TableCell>Status</TableCell>
                  <TableCell>Category</TableCell>
                  <TableCell>Created</TableCell>
                  <TableCell>Progress</TableCell>
                  <TableCell align="center">Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {sampleData.map((row) => (
                  <TableRow key={row.id} hover>
                    <TableCell>{row.id}</TableCell>
                    <TableCell>
                      <Typography variant="body2" fontWeight="medium">
                        {row.name}
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Chip 
                        label={row.status} 
                        color={getStatusColor(row.status)}
                        size="small"
                      />
                    </TableCell>
                    <TableCell sx={{ textTransform: 'capitalize' }}>
                      {row.category}
                    </TableCell>
                    <TableCell>{row.created}</TableCell>
                    <TableCell>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <Box
                          sx={{
                            width: 60,
                            height: 6,
                            bgcolor: 'grey.200',
                            borderRadius: 3,
                            overflow: 'hidden'
                          }}
                        >
                          <Box
                            sx={{
                              width: `${row.progress}%`,
                              height: '100%',
                              bgcolor: 'primary.main',
                              borderRadius: 3
                            }}
                          />
                        </Box>
                        <Typography variant="caption">
                          {row.progress}%
                        </Typography>
                      </Box>
                    </TableCell>
                    <TableCell align="center">
                      <IconButton size="small" color="primary">
                        <Visibility fontSize="small" />
                      </IconButton>
                      <IconButton size="small" color="primary">
                        <Edit fontSize="small" />
                      </IconButton>
                      <IconButton size="small" color="error">
                        <Delete fontSize="small" />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      </Box>
    </>
  )
}

export default Dashboard