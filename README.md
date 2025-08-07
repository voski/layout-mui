# MUI Layout Demo

A comprehensive demonstration of modern React application layouts built with Material-UI v7 and Vite. This project showcases production-ready layout patterns and components that can be easily adopted in real-world applications.

## 🚀 Live Demo

**[View Live Demo →](https://voski.github.io/layout-mui/)**

## 📖 Documentation

**[Complete Documentation →](https://voski.github.io/layout-mui/docs)**

The built-in documentation includes:
- Component usage examples with code snippets
- All layout patterns demonstrated
- Step-by-step migration guide for existing projects
- Quick reference for common patterns and measurements

## ✨ Features

- **Fixed Navigation Bar** - Sticky AppBar that stays visible during scrolling with active page highlighting
- **Flexible Page Headers** - Breadcrumb navigation with support for custom right-side and bottom elements  
- **Sticky Footer** - Footer that stays at bottom of viewport using flexbox layout
- **Multiple Layout Patterns** - Standard content pages, centered forms, and two-pane dashboards
- **Responsive Design** - Mobile-friendly layouts using MUI's responsive system
- **Interactive Documentation** - Built-in docs with migration guide and copy-paste examples

## 🎯 Layout Types Demonstrated

### Standard Content Pages
- **Home** - Card-based responsive grid layout
- **About** - Text content in Paper containers
- **Services** - Long-form scrollable content with sections

### Specialized Layouts
- **Login** - Vertically centered authentication forms
- **Dashboard** - Two-pane layout with fixed control panel and flexible data table
- **Documentation** - Comprehensive layout guide with interactive examples

## 🛠 Technology Stack

- **React 18.3.1** with modern hooks and patterns
- **Material-UI v7.3.1** for consistent design system
- **React Router DOM** for client-side navigation
- **Emotion** for CSS-in-JS styling
- **Vite 6** for fast development and optimized builds

## 🏗 Project Structure

```
src/
├── components/
│   ├── AppBar.jsx          # Fixed navigation with active states
│   ├── Footer.jsx          # Sticky footer component
│   └── PageHeader.jsx      # Breadcrumb navigation with optional right/bottom elements
├── pages/
│   ├── Home.jsx            # Card grid layout
│   ├── About.jsx           # Text content layout
│   ├── Services.jsx        # Long-form content
│   ├── Login.jsx           # Centered form layout
│   ├── Dashboard.jsx       # Two-pane layout
│   └── Docs.jsx            # Interactive documentation
└── App.jsx                 # Main layout with routing
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/voski/layout-mui.git
   cd layout-mui
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   ```
   http://localhost:5173
   ```

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run deploy` - Deploy to GitHub Pages

## 📋 Migration Guide

Want to use these patterns in your existing project? Check out the [complete migration guide](https://voski.github.io/layout-mui/docs) which includes:

1. **Foundation Setup** - Installing dependencies and copying components
2. **Navigation Setup** - Updating routes and AppBar links
3. **Page Migration** - Converting different page types with specific patterns
4. **Migration Strategies** - Gradual vs all-at-once approaches
5. **Customization & Polish** - Theme customization and testing checklist

## 💡 Key Patterns

### App Layout Structure
```jsx
<Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
  <AppBar position="fixed" />
  <Toolbar /> {/* Spacer for fixed AppBar */}
  <Box sx={{ flexGrow: 1 }}>
    {/* Page content */}
  </Box>
  <Footer /> {/* Sticky footer */}
</Box>
```

### Standard Page Pattern
```jsx
<>
  <PageHeader breadcrumbs={breadcrumbs} title="Page Title" />
  <Container maxWidth="lg" sx={{ py: 4 }}>
    {/* Page content */}
  </Container>
</>
```

### PageHeader with Custom Elements
```jsx
// Right-side elements (buttons, toggles, etc.)
const rightElement = (
  <Button variant="contained" onClick={handleAction}>
    Action
  </Button>
)

// Bottom elements (tabs, navigation, etc.)
const bottomElement = (
  <Tabs value={tabValue} onChange={handleTabChange}>
    <Tab label="Tab 1" />
    <Tab label="Tab 2" />
  </Tabs>
)

<PageHeader 
  breadcrumbs={breadcrumbs} 
  title="Page Title"
  rightElement={rightElement}    // Optional
  bottomElement={bottomElement}  // Optional
/>
```

### Two-Pane Layout Pattern
```jsx
<Box sx={{ display: 'flex', height: 'calc(100vh - 200px)' }}>
  <Paper sx={{ width: 320, p: 3 }}>{/* Controls */}</Paper>
  <Paper sx={{ flexGrow: 1 }}>{/* Data */}</Paper>
</Box>
```

## 🎨 Customization

### Theme Customization
The project uses MUI's default theme. To customize:

1. Update `src/main.jsx` with your theme
2. Modify component styles using the `sx` prop
3. Override MUI component defaults in theme configuration

### Layout Adjustments
Key measurements used throughout:
- **AppBar height**: 64px (standard MUI Toolbar)
- **Login centering**: `calc(100vh - 128px)` (accounts for AppBar + Footer)
- **Two-pane height**: `calc(100vh - 200px)` (accounts for AppBar + PageHeader + Footer)

## 🤝 Contributing

This is a demonstration project, but improvements are welcome:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🔗 Links

- **[Live Demo](https://voski.github.io/layout-mui/)** - See all layouts in action
- **[Documentation](https://voski.github.io/layout-mui/docs)** - Complete usage guide
- **[Material-UI](https://mui.com/)** - Component library documentation
- **[React Router](https://reactrouter.com/)** - Navigation library documentation

---

**Perfect for developers who want clean, professional React layouts without starting from scratch.**