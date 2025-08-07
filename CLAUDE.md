# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a React SPA demonstrating modern layout patterns using Material-UI (MUI) v7 and Vite. The project showcases production-ready layout components and patterns that can be adopted in real-world applications. It includes a live demo and comprehensive documentation deployed to GitHub Pages.

## Development Commands

- `npm run dev` - Start development server (localhost:5173)
- `npm run build` - Build for production
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build
- `npm run deploy` - Deploy to GitHub Pages (requires build)

## Architecture

**Entry Point**: `src/main.jsx` sets up React 18 with `createRoot`, MUI theme provider, and `CssBaseline`

**Main Layout**: `src/App.jsx` implements a full-height flex layout with:
- Fixed AppBar at top
- Toolbar spacer (to account for fixed positioning)
- Flexible content area (`flexGrow: 1`)
- Footer at bottom (sticky footer pattern)

**Core Components**:
- `AppBar.jsx` - Fixed navigation bar with active page highlighting using React Router location
- `Footer.jsx` - Sticky footer component
- `PageHeader.jsx` - Breadcrumb navigation and page titles with optional right-side and bottom elements

**Page Layout Patterns**:
- **Standard Content** (Home, About, Services) - Container with PageHeader and responsive content
- **Centered Forms** (Login) - Vertically centered forms using viewport calculations
- **Two-Pane Layout** (Dashboard) - Fixed sidebar with flexible main content area
- **Documentation** (Docs) - Interactive documentation with code examples

**Technology Stack**:
- React 18.3.1 with React Router DOM v7.7.1
- Material-UI v7.3.1 (@mui/material, @mui/icons-material)
- Emotion for CSS-in-JS styling
- Vite 6 with GitHub Pages deployment configuration

**Project Structure**:
```
src/
├── components/
│   ├── AppBar.jsx          # Fixed nav with active states
│   ├── Footer.jsx          # Sticky footer
│   └── PageHeader.jsx      # Breadcrumb navigation
├── pages/
│   ├── Home.jsx            # Card grid layout
│   ├── About.jsx           # Text content in Paper containers  
│   ├── Services.jsx        # Long-form scrollable content
│   ├── Login.jsx           # Centered authentication form
│   ├── Dashboard.jsx       # Two-pane with controls + data table
│   └── Docs.jsx            # Interactive documentation
└── App.jsx                 # Main layout with routing
```

## Key Layout Patterns

**Fixed Navigation**: AppBar with `position="fixed"` requires Toolbar spacer in main layout

**Sticky Footer**: Achieved with `minHeight: '100vh'` flex container and `flexGrow: 1` content area

**Two-Pane Layout**: Uses `display: 'flex'` with fixed width sidebar (320px) and `flexGrow: 1` main area

**Responsive Design**: Container maxWidth and MUI breakpoints, mobile-friendly navigation

**PageHeader with Right Elements**: Pages can pass a `rightElement` prop to display buttons, toggles, or other controls on the right side of the header

**PageHeader with Bottom Elements**: Pages can pass a `bottomElement` prop to display tabs, navigation, or other controls below the title area

**Height Calculations**:
- Login centering: `calc(100vh - 128px)` (accounts for AppBar + Footer)  
- Dashboard two-pane: `calc(100vh - 200px)` (accounts for AppBar + PageHeader + Footer)

## Key Notes

- No TypeScript - pure JavaScript/JSX project
- No testing framework configured  
- Uses GitHub Pages deployment with base path `/layout-mui/`
- Relies entirely on MUI and Emotion for styling (no custom CSS files)
- Interactive documentation built into the app at `/docs` route