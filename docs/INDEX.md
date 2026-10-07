# Documentation Index

Complete guide to Manetho Courses documentation.

## 📘 Start Here

### For New Developers
1. **[README.md](../README.md)** - Project overview and quick start
2. **[SETUP.md](SETUP.md)** - Installation and development setup
3. **[ARCHITECTURE.md](ARCHITECTURE.md)** - Project structure and design

### For Contributors
1. **[CONTRIBUTING.md](../CONTRIBUTING.md)** - How to contribute
2. **[CODE_OF_CONDUCT.md](../CODE_OF_CONDUCT.md)** - Community guidelines

## 📚 Documentation Files

### Getting Started
- **[SETUP.md](SETUP.md)** - Installation, prerequisites, and development server
- **[ARCHITECTURE.md](ARCHITECTURE.md)** - Project structure, tech stack, design patterns

### Development Guides
- **[COMPONENTS.md](COMPONENTS.md)** - Component organization, usage, and best practices
- **[DATA.md](DATA.md)** - Data management, file locations, usage examples
- **[STYLING.md](STYLING.md)** - Tailwind CSS usage, responsive design, color system
- **[FEATURES.md](FEATURES.md)** - Platform features and page descriptions

### Reference
- **[FAQ.md](FAQ.md)** - Frequently asked questions and troubleshooting
- **[INDEX.md](INDEX.md)** - This file

## 🔧 Root Level Documentation

### Configuration
- **[README.md](../README.md)** - Main project README
- **[CONTRIBUTING.md](../CONTRIBUTING.md)** - Contribution guidelines
- **[CODE_OF_CONDUCT.md](../CODE_OF_CONDUCT.md)** - Code of conduct

### Configuration Files
- **package.json** - Dependencies and scripts
- **tsconfig.json** - TypeScript configuration
- **tailwind.config.ts** - Tailwind CSS configuration
- **vite.config.ts** - Vite build configuration
- **eslint.config.js** - ESLint linting rules
- **components.json** - shadcn/ui configuration

## ⚙️ GitHub Configuration

### Workflows
Located in `.github/workflows/`:
- **test.yml** - Run tests on push/PR
- **build.yml** - Build project on push/PR
- **lint.yml** - Lint and type-check on push/PR

### Templates
Located in `.github/`:
- **PULL_REQUEST_TEMPLATE.md** - PR template
- **ISSUE_TEMPLATE/bug_report.md** - Bug report template
- **ISSUE_TEMPLATE/feature_request.md** - Feature request template

## 🗂️ Project Structure

```
Manetho-Courses-F/
├── README.md                 # Main project README
├── CONTRIBUTING.md           # Contribution guidelines
├── CODE_OF_CONDUCT.md        # Code of conduct
│
├── .github/
│   ├── workflows/
│   │   ├── test.yml         # Test workflow
│   │   ├── build.yml        # Build workflow
│   │   └── lint.yml         # Lint workflow
│   ├── PULL_REQUEST_TEMPLATE.md
│   └── ISSUE_TEMPLATE/
│       ├── bug_report.md
│       └── feature_request.md
│
├── docs/                     # Documentation folder
│   ├── INDEX.md             # This file
│   ├── SETUP.md             # Setup guide
│   ├── ARCHITECTURE.md      # Architecture overview
│   ├── COMPONENTS.md        # Component guide
│   ├── DATA.md              # Data management
│   ├── STYLING.md           # Styling guide
│   ├── FEATURES.md          # Features overview
│   └── FAQ.md               # FAQ & troubleshooting
│
├── src/
│   ├── components/          # React components
│   ├── pages/               # Page components
│   ├── data/                # Static data
│   ├── hooks/               # Custom hooks
│   ├── lib/                 # Utilities
│   ├── types/               # TypeScript types
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
│
├── public/                  # Static assets
├── config files             # vite, tailwind, eslint, etc.
└── package.json
```

## 🎯 Quick Links

### For Specific Tasks

**I want to...**
- Add a new page → See [ARCHITECTURE.md](ARCHITECTURE.md) & [COMPONENTS.md](COMPONENTS.md)
- Create a component → See [COMPONENTS.md](COMPONENTS.md)
- Add course data → See [DATA.md](DATA.md)
- Style something → See [STYLING.md](STYLING.md)
- Fix a bug → See [CONTRIBUTING.md](../CONTRIBUTING.md)
- Add a feature → See [CONTRIBUTING.md](../CONTRIBUTING.md)
- Deploy the app → See [FAQ.md](FAQ.md) - "How do I deploy?"
- Understand the architecture → See [ARCHITECTURE.md](ARCHITECTURE.md)

## 📖 Navigation

Each documentation file includes:
- Clear section headings
- Code examples
- Best practices
- Links to related documentation

Use the table of contents (TOC) in each file to navigate quickly.

## 🤔 Need Help?

1. Check [FAQ.md](FAQ.md) for common questions
2. Read [ARCHITECTURE.md](ARCHITECTURE.md) for project structure
3. See [COMPONENTS.md](COMPONENTS.md) for component usage
4. Review [CONTRIBUTING.md](../CONTRIBUTING.md) for contribution guidance
5. Open a [GitHub Discussion](https://github.com/darkpyramid-org/Manetho-Courses-F/discussions)

## 📝 Contributing to Docs

Documentation improvements are welcome! See [CONTRIBUTING.md](../CONTRIBUTING.md) for guidelines.

## Last Updated
This documentation structure was created to provide comprehensive, organized, and maintainable documentation for the Manetho Courses project.
