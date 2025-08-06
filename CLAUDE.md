# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a React SPA using Material-UI (MUI) v7 and Vite as the build tool. The project is focused on layout experiments using MUI components.

## Development Commands

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build

## Architecture

**Entry Point**: `src/main.jsx` sets up React 18 with `createRoot`, MUI theme provider, and `CssBaseline`

**Technology Stack**:
- React 18.3.1 with Vite 6.3.5
- Material-UI v7.3.1 (@mui/material)
- Emotion for CSS-in-JS (required for MUI v7)
- ESLint 9 with React plugins

**Project Structure**:
- `src/main.jsx` - Application entry point with MUI setup
- `src/App.jsx` - Main component using MUI Container and Typography
- `vite.config.js` - Minimal Vite configuration with React plugin
- Uses ES modules (`"type": "module"` in package.json)

## Key Notes

- No TypeScript - pure JavaScript/JSX project
- No testing framework configured
- Relies entirely on MUI and Emotion for styling (no custom CSS files)
- Project is at early experimental stage (version 0.0.0)