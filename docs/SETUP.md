# Setup Guide

## Prerequisites

- Node.js (v16 or higher)
- npm or Bun package manager

## Installation

### Step 1: Install Dependencies
```bash
npm install
# or with Bun
bun install
```

### Step 2: Environment Setup
Create a `.env.local` file in the root directory (if needed for environment variables):
```bash
# Add any required environment variables here
```

### Step 3: Run Development Server
```bash
npm run dev
# or with Bun
bun run dev
```

The application will be available at `http://localhost:5173`

## Build for Production

```bash
npm run build
# or with Bun
bun run build
```

The built files will be in the `dist/` directory.

## Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm run build:dev` - Build in development mode
- `npm run preview` - Preview the production build locally
- `npm run lint` - Run ESLint
- `npm run typecheck` - Check TypeScript types
- `npm run test` - Run smoke tests

## Troubleshooting

### Port Already in Use
If port 5173 is already in use, Vite will automatically use the next available port.

### Dependency Issues
If you encounter dependency issues, try clearing node_modules and reinstalling:
```bash
rm -rf node_modules package-lock.json
npm install
```

### TypeScript Errors
Run `npm run typecheck` to check for TypeScript errors before building.
