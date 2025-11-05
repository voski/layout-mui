import { useState } from 'react'
import {
  Container,
  Typography,
  Paper,
  Box,
  Divider,
  Card,
  CardContent,
  Grid,
  Chip,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Alert,
  Accordion,
  AccordionSummary,
  AccordionDetails
} from '@mui/material'
import {
  ExpandMore,
  Navigation,
  ViewColumn,
  Login,
  Home,
  Article,
  FilterAlt
} from '@mui/icons-material'
import PageHeader from '../components/PageHeader'
import ChipSelect from '../components/ChipSelect'

function Docs() {
  const breadcrumbs = [
    { label: 'MUI Layout', href: '/' },
    { label: 'Documentation' }
  ]

  // ChipSelect demo state
  const [category, setCategory] = useState('design')
  const [status, setStatus] = useState('active')
  const [priority, setPriority] = useState('high')
  const [singleValue, setSingleValue] = useState('only-option')

  const categoryOptions = [
    { value: 'design', label: 'Design' },
    { value: 'development', label: 'Development' },
    { value: 'marketing', label: 'Marketing' }
  ]

  const statusOptions = [
    { value: 'active', label: 'Active' },
    { value: 'pending', label: 'Pending' },
    { value: 'completed', label: 'Completed' },
    { value: 'archived', label: 'Archived' }
  ]

  const priorityOptions = [
    { value: 'low', label: 'Low Priority' },
    { value: 'medium', label: 'Medium Priority' },
    { value: 'high', label: 'High Priority' },
    { value: 'urgent', label: 'Urgent' }
  ]

  const singleOption = [
    { value: 'only-option', label: 'Only Option' }
  ]

  const codeExample = (code) => (
    <Paper 
      sx={{ 
        p: 2, 
        bgcolor: 'grey.100', 
        fontFamily: 'monospace',
        fontSize: '0.875rem',
        overflow: 'auto',
        mt: 1
      }}
    >
      <pre style={{ margin: 0, whiteSpace: 'pre-wrap' }}>{code}</pre>
    </Paper>
  )

  return (
    <>
      <PageHeader breadcrumbs={breadcrumbs} title="Layout Documentation" />
      <Container maxWidth="lg" sx={{ py: 4 }}>
        
        <Typography variant="body1" paragraph sx={{ mb: 4 }}>
          This documentation covers all the layout patterns and components used in this MUI layout system.
          Each pattern is demonstrated with working examples and code snippets.
        </Typography>

        {/* Header Section */}
        <Box id="header" sx={{ mb: 6 }}>
          <Typography variant="h4" component="h2" gutterBottom>
            Header Components
          </Typography>
          
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <Card>
                <CardContent>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <Navigation sx={{ mr: 1 }} />
                    <Typography variant="h6">AppBar Navigation</Typography>
                  </Box>
                  <Typography variant="body2" paragraph>
                    Fixed navigation bar that stays at the top during scrolling. 
                    Includes active state highlighting and responsive navigation links.
                  </Typography>
                  <Box sx={{ mb: 2 }}>
                    <Chip label="Fixed Position" size="small" sx={{ mr: 1 }} />
                    <Chip label="Active States" size="small" sx={{ mr: 1 }} />
                    <Chip label="Responsive" size="small" />
                  </Box>
                  {codeExample(`<AppBar position="fixed">
  <Toolbar>
    <Typography variant="h6" sx={{ flexGrow: 1 }}>
      App Name
    </Typography>
    <Button component={Link} to="/">Home</Button>
  </Toolbar>
</AppBar>`)}
                </CardContent>
              </Card>
            </Grid>
            
            <Grid item xs={12} md={6}>
              <Card>
                <CardContent>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <Article sx={{ mr: 1 }} />
                    <Typography variant="h6">PageHeader</Typography>
                  </Box>
                  <Typography variant="body2" paragraph>
                    Page-level header with breadcrumb navigation and page title. 
                    Supports optional right-side elements (buttons, toggles) and bottom elements (tabs, navigation).
                    Uses subtle border for clean visual separation.
                  </Typography>
                  <Box sx={{ mb: 2 }}>
                    <Chip label="Breadcrumbs" size="small" sx={{ mr: 1 }} />
                    <Chip label="Right Elements" size="small" sx={{ mr: 1 }} />
                    <Chip label="Bottom Elements" size="small" />
                  </Box>
                  {codeExample(`// Basic PageHeader
<PageHeader 
  breadcrumbs={[
    { label: 'Home', href: '/' },
    { label: 'Current Page' }
  ]} 
  title="Page Title" 
/>

// With right-side elements
const rightElement = (
  <Button variant="contained">Action</Button>
)

<PageHeader 
  breadcrumbs={breadcrumbs} 
  title="Page Title"
  rightElement={rightElement}
/>

// With bottom elements (tabs)
const bottomElement = (
  <Tabs value={tabValue} onChange={handleTabChange}>
    <Tab label="Tab 1" />
    <Tab label="Tab 2" />
  </Tabs>
)

<PageHeader 
  breadcrumbs={breadcrumbs} 
  title="Page Title"
  rightElement={rightElement}
  bottomElement={bottomElement}
/>`)}
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>

        <Divider sx={{ my: 4 }} />

        {/* Footer Section */}
        <Box id="footer" sx={{ mb: 6 }}>
          <Typography variant="h4" component="h2" gutterBottom>
            Footer Component
          </Typography>
          
          <Card>
            <CardContent>
              <Typography variant="body2" paragraph>
                Sticky footer that remains at the bottom of the viewport. Uses flexbox layout 
                to push the footer down even on pages with minimal content.
              </Typography>
              
              <Alert severity="info" sx={{ mb: 2 }}>
                The footer uses <code>mt: 'auto'</code> within a flex container to create the sticky effect.
              </Alert>

              <Box sx={{ mb: 2 }}>
                <Chip label="Sticky Layout" size="small" sx={{ mr: 1 }} />
                <Chip label="Dark Theme" size="small" sx={{ mr: 1 }} />
                <Chip label="Contrast Text" size="small" />
              </Box>

              {codeExample(`// App Layout Structure
<Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
  <NavAppBar />
  <Toolbar /> {/* Spacer for fixed header */}
  <Box sx={{ flexGrow: 1 }}>
    {/* Page content */}
  </Box>
  <Footer /> {/* Sticky footer */}
</Box>

// Footer Component
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
      © 2024 Your App. All rights reserved.
    </Typography>
  </Container>
</Box>`)}
            </CardContent>
          </Card>
        </Box>

        <Divider sx={{ my: 4 }} />

        {/* Page Layouts Section */}
        <Box id="page-layouts" sx={{ mb: 6 }}>
          <Typography variant="h4" component="h2" gutterBottom>
            Page Layout Types
          </Typography>
          
          <Typography variant="body1" paragraph>
            Different layout patterns optimized for specific content types and use cases.
          </Typography>

          <Box sx={{ mt: 3 }}>
            <Accordion>
              <AccordionSummary expandIcon={<ExpandMore />}>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <Home sx={{ mr: 2 }} />
                  <Box>
                    <Typography variant="h6">Standard Content Pages</Typography>
                    <Typography variant="body2" color="text.secondary">
                      Home, About, Services - Traditional content layout
                    </Typography>
                  </Box>
                </Box>
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant="body2" paragraph>
                  Standard pages use PageHeader with breadcrumbs, followed by a Container 
                  with content. Suitable for marketing pages, documentation, and general content.
                </Typography>
                
                <Box sx={{ mb: 2 }}>
                  <Chip label="PageHeader" size="small" sx={{ mr: 1 }} />
                  <Chip label="Container" size="small" sx={{ mr: 1 }} />
                  <Chip label="Responsive" size="small" />
                </Box>

                <Typography variant="subtitle2" gutterBottom>Example: Home Page</Typography>
                {codeExample(`function HomePage() {
  const breadcrumbs = [
    { label: 'App Name', href: '/' },
    { label: 'Home' }
  ]

  return (
    <>
      <PageHeader breadcrumbs={breadcrumbs} title="Home" />
      <Container maxWidth="lg" sx={{ py: 4 }}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Card>
              <CardContent>
                {/* Your content */}
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </>
  )
}`)}
                
                <List dense>
                  <ListItem>
                    <ListItemIcon><Home fontSize="small" /></ListItemIcon>
                    <ListItemText primary="Home Page" secondary="Cards in responsive grid" />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon><Article fontSize="small" /></ListItemIcon>
                    <ListItemText primary="About Page" secondary="Text content in Paper container" />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon><Article fontSize="small" /></ListItemIcon>
                    <ListItemText primary="Services Page" secondary="Long scrollable content with sections" />
                  </ListItem>
                </List>
              </AccordionDetails>
            </Accordion>

            <Accordion>
              <AccordionSummary expandIcon={<ExpandMore />}>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <Login sx={{ mr: 2 }} />
                  <Box>
                    <Typography variant="h6">Centered Form Pages</Typography>
                    <Typography variant="body2" color="text.secondary">
                      Login, Authentication - Vertically centered forms
                    </Typography>
                  </Box>
                </Box>
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant="body2" paragraph>
                  Form pages that need to be centered both horizontally and vertically. 
                  No PageHeader is used to maintain focus on the form.
                </Typography>
                
                <Box sx={{ mb: 2 }}>
                  <Chip label="No PageHeader" size="small" sx={{ mr: 1 }} />
                  <Chip label="Vertical Centering" size="small" sx={{ mr: 1 }} />
                  <Chip label="Form Focus" size="small" />
                </Box>

                <Alert severity="warning" sx={{ mb: 2 }}>
                  Height calculation accounts for fixed AppBar: <code>calc(100vh - 128px)</code>
                </Alert>

                {codeExample(`function LoginPage() {
  return (
    <Box sx={{
      minHeight: 'calc(100vh - 128px)', // Account for AppBar + Footer
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <Container maxWidth="sm">
        <Paper elevation={2} sx={{ p: 4 }}>
          <Typography variant="h4" align="center" gutterBottom>
            Login
          </Typography>
          
          <Box component="form" sx={{ mt: 3 }}>
            <TextField label="Email" fullWidth />
            <TextField label="Password" type="password" fullWidth />
            <Button variant="contained" fullWidth>
              Sign In
            </Button>
          </Box>
        </Paper>
      </Container>
    </Box>
  )
}`)}
              </AccordionDetails>
            </Accordion>

            <Accordion>
              <AccordionSummary expandIcon={<ExpandMore />}>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <ViewColumn sx={{ mr: 2 }} />
                  <Box>
                    <Typography variant="h6">Two-Pane Layouts</Typography>
                    <Typography variant="body2" color="text.secondary">
                      Dashboard, Admin - Side panel with main content
                    </Typography>
                  </Box>
                </Box>
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant="body2" paragraph>
                  Split layout with fixed-width sidebar and flexible main content area. 
                  Perfect for dashboards, admin panels, and data management interfaces.
                </Typography>
                
                <Box sx={{ mb: 2 }}>
                  <Chip label="Fixed + Flexible" size="small" sx={{ mr: 1 }} />
                  <Chip label="Independent Scrolling" size="small" sx={{ mr: 1 }} />
                  <Chip label="Controls + Data" size="small" />
                </Box>

                {codeExample(`function DashboardPage() {
  return (
    <>
      <PageHeader breadcrumbs={breadcrumbs} title="Dashboard" />
      
      <Box sx={{ display: 'flex', height: 'calc(100vh - 200px)' }}>
        {/* Left Pane - Fixed Width */}
        <Paper sx={{ 
          width: 320, 
          p: 3, 
          mr: 2, 
          ml: 3,
          height: 'fit-content',
          maxHeight: '100%',
          overflow: 'auto'
        }}>
          <Typography variant="h6">Control Panel</Typography>
          {/* Filters, controls, etc. */}
        </Paper>
        
        {/* Right Pane - Flexible Width */}
        <Paper sx={{ 
          flexGrow: 1, 
          mr: 3,
          display: 'flex',
          flexDirection: 'column'
        }}>
          <TableContainer sx={{ flexGrow: 1 }}>
            <Table stickyHeader>
              {/* Data table */}
            </Table>
          </TableContainer>
        </Paper>
      </Box>
    </>
  )
}`)}

                <Typography variant="subtitle2" gutterBottom sx={{ mt: 2 }}>
                  Key Features:
                </Typography>
                <List dense>
                  <ListItem>
                    <ListItemText primary="Left panel: 320px fixed width" />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="Right panel: flexGrow: 1 (remaining space)" />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="Independent scrolling for each pane" />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="Sticky table headers in right pane" />
                  </ListItem>
                </List>
              </AccordionDetails>
            </Accordion>

          </Box>
        </Box>

        <Divider sx={{ my: 4 }} />

        {/* Interactive Components */}
        <Box id="interactive-components" sx={{ mb: 6 }}>
          <Typography variant="h4" component="h2" gutterBottom>
            Interactive Components
          </Typography>

          <Typography variant="body1" paragraph>
            Custom interactive components that combine MUI primitives for specific use cases.
          </Typography>

          <Card sx={{ mb: 3 }}>
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <FilterAlt sx={{ mr: 1 }} />
                <Typography variant="h6">ChipSelect Component</Typography>
              </Box>

              <Typography variant="body2" paragraph>
                A clickable chip that opens a dropdown menu for single-selection.
                Combines the visual simplicity of a Chip with the functionality of a Select.
                Perfect for filters, category selectors, and compact selection controls.
              </Typography>

              <Box sx={{ mb: 2 }}>
                <Chip label="Chip + Menu" size="small" sx={{ mr: 1 }} />
                <Chip label="Single Select" size="small" sx={{ mr: 1 }} />
                <Chip label="Position Indicator" size="small" sx={{ mr: 1 }} />
                <Chip label="Custom Icons" size="small" />
              </Box>

              <Alert severity="info" sx={{ mb: 3 }}>
                The ChipSelect component shows the currently selected value, optional position indicator
                (e.g., &quot;(1/3)&quot;), and includes visual feedback when open.
              </Alert>

              {/* Live Demo */}
              <Paper sx={{ p: 3, bgcolor: 'grey.50', mb: 3 }}>
                <Typography variant="subtitle2" gutterBottom>
                  Live Demo - Try clicking these:
                </Typography>
                <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', mt: 2 }}>
                  <ChipSelect
                    options={categoryOptions}
                    value={category}
                    onChange={setCategory}
                    label="Category"
                  />
                  <ChipSelect
                    options={statusOptions}
                    value={status}
                    onChange={setStatus}
                    showPosition
                  />
                  <ChipSelect
                    options={priorityOptions}
                    value={priority}
                    onChange={setPriority}
                    showPosition
                    size="small"
                  />
                  <ChipSelect
                    options={singleOption}
                    value={singleValue}
                    onChange={setSingleValue}
                    showPosition
                  />
                </Box>
                <Typography variant="caption" color="text.secondary" sx={{ mt: 2, display: 'block' }}>
                  Selected: Category={category}, Status={status}, Priority={priority}
                </Typography>
                <Alert severity="info" sx={{ mt: 2 }}>
                  Notice: The last chip has only 1 option, so it&apos;s not clickable, shows no dropdown arrow, and ignores the position indicator.
                </Alert>
              </Paper>

              {/* Features */}
              <Typography variant="subtitle2" gutterBottom>
                Key Features:
              </Typography>
              <List dense sx={{ mb: 2 }}>
                <ListItem>
                  <ListItemText
                    primary="Custom left icon (default: AltRoute)"
                    secondary="Pass any icon via the icon prop"
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary="Dropdown chevron with rotation animation"
                    secondary="Visual indicator that rotates when menu opens"
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary="Optional position indicator"
                    secondary="Show (1/3) style prefix with showPosition prop"
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary="Visual state changes"
                    secondary="Color and elevation changes when menu is open"
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary="Keyboard accessible"
                    secondary="Full keyboard navigation via MUI Menu component"
                  />
                </ListItem>
              </List>

              {/* Basic Usage */}
              <Typography variant="subtitle2" gutterBottom sx={{ mt: 3 }}>
                Basic Usage:
              </Typography>
              {codeExample(`import { useState } from 'react'
import ChipSelect from '../components/ChipSelect'

function MyComponent() {
  const [value, setValue] = useState('option1')

  const options = [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' }
  ]

  return (
    <ChipSelect
      options={options}
      value={value}
      onChange={setValue}
      label="Select Option"
    />
  )
}`)}

              {/* With Position Indicator */}
              <Typography variant="subtitle2" gutterBottom sx={{ mt: 3 }}>
                With Position Indicator:
              </Typography>
              {codeExample(`<ChipSelect
  options={statusOptions}
  value={status}
  onChange={setStatus}
  showPosition  // Shows "(1/4) Active"
/>`)}

              {/* Custom Icon and Size */}
              <Typography variant="subtitle2" gutterBottom sx={{ mt: 3 }}>
                Custom Icon and Size:
              </Typography>
              {codeExample(`import { Category } from '@mui/icons-material'

<ChipSelect
  options={options}
  value={value}
  onChange={setValue}
  icon={<Category />}  // Custom left icon
  size="small"         // small | medium
  label="Categories"
/>`)}

              {/* Props */}
              <Typography variant="subtitle2" gutterBottom sx={{ mt: 3 }}>
                Props:
              </Typography>
              <List dense>
                <ListItem>
                  <ListItemText
                    primary={<code>options</code>}
                    secondary="Array of {value, label} objects (required)"
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary={<code>value</code>}
                    secondary="Currently selected value (required)"
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary={<code>onChange</code>}
                    secondary="Callback function (newValue) => void (required)"
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary={<code>showPosition</code>}
                    secondary="Boolean - show (1/3) indicator (default: false)"
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary={<code>label</code>}
                    secondary="Static label shown when no selection (default: 'Select')"
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary={<code>icon</code>}
                    secondary="Left icon element (default: <AltRoute />)"
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary={<code>size</code>}
                    secondary="'small' | 'medium' (default: 'medium')"
                  />
                </ListItem>
              </List>

              {/* Use Cases */}
              <Typography variant="subtitle2" gutterBottom sx={{ mt: 3 }}>
                Common Use Cases:
              </Typography>
              <List dense>
                <ListItem>
                  <ListItemIcon><FilterAlt fontSize="small" /></ListItemIcon>
                  <ListItemText primary="Filter controls in dashboards and data tables" />
                </ListItem>
                <ListItem>
                  <ListItemIcon><FilterAlt fontSize="small" /></ListItemIcon>
                  <ListItemText primary="Category/tag selectors in content management" />
                </ListItem>
                <ListItem>
                  <ListItemIcon><FilterAlt fontSize="small" /></ListItemIcon>
                  <ListItemText primary="Status toggles in project management" />
                </ListItem>
                <ListItem>
                  <ListItemIcon><FilterAlt fontSize="small" /></ListItemIcon>
                  <ListItemText primary="Compact selection controls in toolbars" />
                </ListItem>
                <ListItem>
                  <ListItemIcon><FilterAlt fontSize="small" /></ListItemIcon>
                  <ListItemText primary="PageHeader right elements for view controls" />
                </ListItem>
              </List>
            </CardContent>
          </Card>
        </Box>

        <Divider sx={{ my: 4 }} />

        {/* Migration Guide */}
        <Box id="migration" sx={{ mb: 6 }}>
          <Typography variant="h4" component="h2" gutterBottom>
            Migration Guide
          </Typography>
          
          <Typography variant="body1" paragraph>
            Step-by-step guide to transition your existing React application to use this MUI layout system.
          </Typography>

          <Alert severity="info" sx={{ mb: 3 }}>
            <Typography variant="body2">
              This migration can be done gradually - you don't need to convert everything at once. 
              Start with the main layout and migrate pages one by one.
            </Typography>
          </Alert>

          <Accordion defaultExpanded>
            <AccordionSummary expandIcon={<ExpandMore />}>
              <Typography variant="h6">Phase 1: Foundation Setup</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="subtitle1" gutterBottom>Step 1: Install Dependencies</Typography>
              {codeExample(`npm install @mui/material @emotion/react @emotion/styled @mui/icons-material react-router-dom`)}

              <Typography variant="subtitle1" gutterBottom sx={{ mt: 3 }}>Step 2: Copy Core Components</Typography>
              <Typography variant="body2" paragraph>
                Copy these files from this project to your app:
              </Typography>
              <List>
                <ListItem>
                  <ListItemText primary="src/components/AppBar.jsx → Your components folder" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="src/components/Footer.jsx → Your components folder" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="src/components/PageHeader.jsx → Your components folder" />
                </ListItem>
              </List>

              <Typography variant="subtitle1" gutterBottom sx={{ mt: 3 }}>Step 3: Update Main App Component</Typography>
              {codeExample(`// App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Box, Toolbar } from '@mui/material'
import NavAppBar from './components/AppBar'
import Footer from './components/Footer'

function App() {
  return (
    <Router>
      <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <NavAppBar />
        <Toolbar /> {/* Spacer for fixed AppBar */}
        <Box sx={{ flexGrow: 1 }}>
          <Routes>
            <Route path="/" element={<YourHomePage />} />
            {/* Add your other routes */}
          </Routes>
        </Box>
        <Footer />
      </Box>
    </Router>
  )
}`)}

              <Typography variant="subtitle1" gutterBottom sx={{ mt: 3 }}>Step 4: Setup MUI Theme Provider</Typography>
              {codeExample(`// main.jsx or index.js
import { createRoot } from 'react-dom/client'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import App from './App.jsx'

const theme = createTheme()

createRoot(document.getElementById('root')).render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <App />
  </ThemeProvider>
)`)}
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary expandIcon={<ExpandMore />}>
              <Typography variant="h6">Phase 2: Navigation Setup</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="subtitle1" gutterBottom>Step 5: Update AppBar Navigation</Typography>
              <Typography variant="body2" paragraph>
                Edit components/AppBar.jsx to match your app's navigation. Replace our links with your actual pages:
              </Typography>
              {codeExample(`// Update the navigation buttons in AppBar.jsx
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
  to="/settings"
  variant={location.pathname === '/settings' ? 'outlined' : 'text'}
>
  Settings
</Button>`)}

              <Typography variant="subtitle1" gutterBottom sx={{ mt: 3 }}>Step 6: Update Route Definitions</Typography>
              <Typography variant="body2" paragraph>
                In your App.jsx, replace our routes with your actual pages:
              </Typography>
              {codeExample(`<Routes>
  <Route path="/" element={<YourHomePage />} />
  <Route path="/dashboard" element={<YourDashboard />} />
  <Route path="/settings" element={<YourSettings />} />
  <Route path="/login" element={<YourLogin />} />
</Routes>`)}
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary expandIcon={<ExpandMore />}>
              <Typography variant="h6">Phase 3: Page Migration</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="subtitle1" gutterBottom>Step 7: Convert Standard Content Pages</Typography>
              <Typography variant="body2" paragraph>
                For pages that need breadcrumbs and titles (marketing pages, content pages):
              </Typography>
              {codeExample(`import PageHeader from '../components/PageHeader'
import { Container, Button, Tabs, Tab } from '@mui/material'

function YourPage() {
  const breadcrumbs = [
    { label: 'Your App', href: '/' },
    { label: 'Current Page' }
  ]

  // Optional: Add right-side elements
  const rightElement = (
    <Button variant="contained">Action</Button>
  )

  // Optional: Add bottom elements
  const bottomElement = (
    <Tabs value={tabValue} onChange={handleTabChange}>
      <Tab label="Tab 1" />
      <Tab label="Tab 2" />
    </Tabs>
  )

  return (
    <>
      <PageHeader 
        breadcrumbs={breadcrumbs} 
        title="Page Title"
        rightElement={rightElement}    // Optional
        bottomElement={bottomElement}  // Optional
      />
      <Container maxWidth="lg" sx={{ py: 4 }}>
        {/* Your existing page content */}
      </Container>
    </>
  )
}`)}

              <Typography variant="subtitle1" gutterBottom sx={{ mt: 3 }}>Step 8: Convert Login/Auth Pages</Typography>
              <Typography variant="body2" paragraph>
                For centered form pages (no PageHeader needed):
              </Typography>
              {codeExample(`function LoginPage() {
  return (
    <Box sx={{
      minHeight: 'calc(100vh - 128px)', // Account for AppBar + Footer
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <Container maxWidth="sm">
        <Paper elevation={2} sx={{ p: 4 }}>
          {/* Your login form */}
        </Paper>
      </Container>
    </Box>
  )
}`)}

              <Typography variant="subtitle1" gutterBottom sx={{ mt: 3 }}>Step 9: Convert Dashboard/Admin Pages</Typography>
              <Typography variant="body2" paragraph>
                For two-pane layouts with controls and data:
              </Typography>
              {codeExample(`function Dashboard() {
  return (
    <>
      <PageHeader breadcrumbs={breadcrumbs} title="Dashboard" />
      <Box sx={{ display: 'flex', height: 'calc(100vh - 200px)' }}>
        {/* Left Panel - Fixed Width */}
        <Paper sx={{ width: 320, p: 3, mr: 2, ml: 3 }}>
          {/* Control panel content */}
        </Paper>
        
        {/* Right Panel - Flexible Width */}
        <Paper sx={{ flexGrow: 1, mr: 3 }}>
          {/* Data table or main content */}
        </Paper>
      </Box>
    </>
  )
}`)}
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary expandIcon={<ExpandMore />}>
              <Typography variant="h6">Phase 4: Migration Strategies</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="subtitle1" gutterBottom>Gradual Migration (Recommended)</Typography>
              <List>
                <ListItem>
                  <ListItemText 
                    primary="Start with main layout (App.jsx)" 
                    secondary="Get the AppBar, Footer, and routing working first"
                  />
                </ListItem>
                <ListItem>
                  <ListItemText 
                    primary="Migrate most important page first" 
                    secondary="Usually your home page or main dashboard"
                  />
                </ListItem>
                <ListItem>
                  <ListItemText 
                    primary="One page at a time" 
                    secondary="Convert one page per day/week to avoid breaking existing functionality"
                  />
                </ListItem>
                <ListItem>
                  <ListItemText 
                    primary="Keep old components during transition" 
                    secondary="Don't delete until all pages are migrated"
                  />
                </ListItem>
              </List>

              <Typography variant="subtitle1" gutterBottom sx={{ mt: 3 }}>All-at-Once Migration</Typography>
              <Alert severity="warning" sx={{ mb: 2 }}>
                Higher risk but faster completion. Only recommended for smaller applications.
              </Alert>
              <List>
                <ListItem>
                  <ListItemText 
                    primary="Replace all pages simultaneously" 
                    secondary="Requires more testing but gets you converted quickly"
                  />
                </ListItem>
                <ListItem>
                  <ListItemText 
                    primary="Have rollback plan ready" 
                    secondary="Keep backups of your current implementation"
                  />
                </ListItem>
              </List>

              <Typography variant="subtitle1" gutterBottom sx={{ mt: 3 }}>Component Handling</Typography>
              <List>
                <ListItem>
                  <ListItemText 
                    primary="Keep working components" 
                    secondary="Don't fix what isn't broken - focus on layout first"
                  />
                </ListItem>
                <ListItem>
                  <ListItemText 
                    primary="Gradually adopt MUI components" 
                    secondary="Replace with MUI components over time for consistency"
                  />
                </ListItem>
                <ListItem>
                  <ListItemText 
                    primary="Use sx prop for styling" 
                    secondary="Consistent with MUI patterns and easier to maintain"
                  />
                </ListItem>
              </List>
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary expandIcon={<ExpandMore />}>
              <Typography variant="h6">Phase 5: Customization & Polish</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="subtitle1" gutterBottom>Step 10: Customize Theme</Typography>
              {codeExample(`const theme = createTheme({
  palette: {
    primary: {
      main: '#your-brand-color',
    },
    secondary: {
      main: '#your-secondary-color',
    }
  },
  typography: {
    h1: {
      fontSize: '2.5rem',
      // Your custom typography
    }
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          // Custom button styles
        }
      }
    }
  }
})`)}

              <Typography variant="subtitle1" gutterBottom sx={{ mt: 3 }}>Step 11: Add Responsive Design</Typography>
              {codeExample(`// Use MUI's responsive breakpoints
<Grid container spacing={{ xs: 2, md: 3 }}>
  <Grid item xs={12} md={6} lg={4}>
    <Card>
      {/* Responsive card layout */}
    </Card>
  </Grid>
</Grid>

// Responsive sx props
<Box sx={{
  p: { xs: 2, md: 3 }, // Padding changes at breakpoints
  display: { xs: 'block', md: 'flex' } // Layout changes
}}>
  {/* Content */}
</Box>`)}

              <Typography variant="subtitle1" gutterBottom sx={{ mt: 3 }}>Step 12: Testing Checklist</Typography>
              <List>
                <ListItem>
                  <ListItemText primary="✅ All routes navigate correctly" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="✅ AppBar shows active page highlighting" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="✅ Footer stays at bottom on short pages" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="✅ PageHeader breadcrumbs work on all pages" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="✅ Mobile responsiveness works" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="✅ Login page centers properly" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="✅ Two-pane layouts scroll independently" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="✅ All existing functionality still works" />
                </ListItem>
              </List>
            </AccordionDetails>
          </Accordion>
        </Box>

        <Divider sx={{ my: 4 }} />

        {/* Quick Reference */}
        <Box sx={{ mb: 4 }}>
          <Typography variant="h4" component="h2" gutterBottom>
            Quick Reference
          </Typography>
          
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <Paper sx={{ p: 3 }}>
                <Typography variant="h6" gutterBottom>Layout Heights</Typography>
                <List dense>
                  <ListItem>
                    <ListItemText 
                      primary="AppBar: 64px (standard MUI Toolbar)" 
                      secondary="Fixed at top of viewport" 
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemText 
                      primary="Login centering: calc(100vh - 128px)" 
                      secondary="Accounts for AppBar + Footer space" 
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemText 
                      primary="Two-pane: calc(100vh - 200px)" 
                      secondary="Accounts for AppBar + PageHeader + Footer" 
                    />
                  </ListItem>
                </List>
              </Paper>
            </Grid>
            
            <Grid item xs={12} md={6}>
              <Paper sx={{ p: 3 }}>
                <Typography variant="h6" gutterBottom>Common Patterns</Typography>
                <List dense>
                  <ListItem>
                    <ListItemText 
                      primary="Container maxWidth='lg'" 
                      secondary="Standard content width" 
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemText 
                      primary="Paper elevation={2}" 
                      secondary="Consistent card elevation" 
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemText 
                      primary="sx={{ py: 4 }}" 
                      secondary="Standard vertical padding" 
                    />
                  </ListItem>
                </List>
              </Paper>
            </Grid>
          </Grid>
        </Box>

      </Container>
    </>
  )
}

export default Docs