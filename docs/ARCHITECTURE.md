# Architecture Overview

## Project Structure

```
Manetho-Courses-F/
├── src/
│   ├── components/          # Reusable React components
│   │   ├── layout/         # Layout-related components
│   │   ├── ui/             # shadcn/ui components
│   │   └── NavLink.tsx
│   ├── pages/              # Page components (routes)
│   │   ├── About.tsx
│   │   ├── Blog.tsx
│   │   ├── Careers.tsx
│   │   ├── Changelog.tsx
│   │   ├── Contact.tsx
│   │   ├── Courses.tsx
│   │   ├── Docs.tsx
│   │   ├── Features.tsx
│   │   ├── Index.tsx
│   │   ├── NotFound.tsx
│   │   ├── Pricing.tsx
│   │   └── Product.tsx
│   ├── data/               # Static data and definitions
│   │   ├── authoring.ts
│   │   ├── courses-a.ts
│   │   ├── defineCourse.ts
│   │   ├── instructors.ts
│   │   ├── quizzes.ts
│   │   ├── resources.ts
│   │   └── topics.ts
│   ├── hooks/              # Custom React hooks
│   │   ├── use-mobile.tsx
│   │   └── use-toast.ts
│   ├── lib/                # Utility functions and helpers
│   ├── types/              # TypeScript type definitions
│   ├── App.tsx             # Main App component
│   ├── App.css
│   ├── index.css           # Global styles
│   ├── main.tsx            # Application entry point
│   └── vite-env.d.ts
├── public/                 # Static assets
├── docs/                   # Documentation
├── .github/                # GitHub workflows and templates
├── index.html              # HTML entry point
├── vite.config.ts          # Vite configuration
├── tailwind.config.ts      # Tailwind CSS configuration
├── tsconfig.json           # TypeScript configuration
├── components.json         # shadcn/ui configuration
├── postcss.config.js       # PostCSS configuration
├── eslint.config.js        # ESLint configuration
└── package.json            # Project dependencies
```

## Technology Stack

### Frontend Framework
- **React 18.3** - UI library
- **Vite 5.4** - Fast build tool and dev server
- **TypeScript 5.8** - Type-safe JavaScript

### UI & Styling
- **shadcn/ui** - High-quality React components
- **Tailwind CSS 3.4** - Utility-first CSS framework
- **Radix UI** - Unstyled, accessible components (base for shadcn/ui)
- **Lucide React** - Beautiful icon library

### Routing & State
- **React Router DOM 6.30** - Client-side routing

### Development Tools
- **ESLint 9.32** - Code linting
- **TypeScript 5.8** - Static type checking
- **PostCSS 8.5** - CSS transformation
- **Autoprefixer** - CSS vendor prefixes

## Design Patterns

### Component Organization
- **UI Components**: Reusable, standalone components in `src/components/ui/`
- **Layout Components**: Layout-specific components in `src/components/layout/`
- **Page Components**: Full page components in `src/pages/`

### Data Management
- Static data files in `src/data/` for courses, instructors, topics, quizzes, etc.
- Type-safe data definitions using TypeScript

### Styling Approach
- Tailwind CSS for utility-first styling
- CSS modules where component-specific styles are needed
- Global styles in `src/index.css`

### Type Safety
- Full TypeScript coverage
- Type definitions in `src/types/`
- Strict tsconfig settings

## Key Features

- **Modern React** - Functional components with hooks
- **Fast Development** - Vite with instant HMR (Hot Module Replacement)
- **Accessible UI** - Built on Radix UI primitives
- **Responsive Design** - Mobile-first Tailwind CSS approach
- **Type Safe** - Full TypeScript coverage
- **Well-Structured** - Clear separation of concerns
