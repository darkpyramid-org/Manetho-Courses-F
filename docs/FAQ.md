# Frequently Asked Questions

## Getting Started

### Q: How do I install the project?
A: See [`SETUP.md`](SETUP.md) for detailed installation instructions.

```bash
git clone https://github.com/darkpyramid-org/Manetho-Courses-F
cd Manetho-Courses-F
npm install
npm run dev
```

### Q: What Node.js version is required?
A: Node.js v16 or higher is required.

### Q: Can I use Bun instead of npm?
A: Yes, Bun is supported. Replace `npm` with `bun` in all commands:
```bash
bun install
bun run dev
```

## Development

### Q: How do I create a new component?
A: Create a new file in `src/components/`:
```tsx
export function MyComponent() {
  return <div>Content</div>;
}
```

See [`COMPONENTS.md`](COMPONENTS.md) for detailed guidance.

### Q: How do I add styling?
A: Use Tailwind CSS classes. See [`STYLING.md`](STYLING.md) for examples.

### Q: How do I add a new page?
A: Create a component in `src/pages/` and add a route in `src/App.tsx`.

### Q: How do I use React Router?
A: Routes are defined in `src/App.tsx`. Use the `NavLink` component for navigation:
```tsx
import { NavLink } from '@/components/NavLink';

<NavLink to="/courses">Courses</NavLink>
```

## Data Management

### Q: Where do I add course data?
A: Add course data to `src/data/courses-a.ts`. See [`DATA.md`](DATA.md).

### Q: How do I add a new instructor?
A: Add to `src/data/instructors.ts`.

### Q: How do I structure quiz data?
A: Define quizzes in `src/data/quizzes.ts` following the Quiz type.

### Q: Can I use an external API?
A: Currently, the project uses static data files. To integrate an API, modify the data fetching in components.

## Components

### Q: What is shadcn/ui?
A: shadcn/ui provides high-quality, copy-paste React components built on Radix UI and Tailwind CSS.

### Q: How do I add a shadcn/ui component?
A: Use the CLI (if configured) or copy components from https://ui.shadcn.com

### Q: Can I customize components?
A: Yes, components are yours to customize. Modify styling and structure as needed.

## Build & Deployment

### Q: How do I build for production?
A: Run `npm run build`. Output is in the `dist/` directory.

### Q: How do I preview the production build?
A: Run `npm run preview` after building.

### Q: Can I deploy to different platforms?
A: Yes, the `dist/` folder can be deployed to any static hosting service (Vercel, Netlify, GitHub Pages, etc.).

## Troubleshooting

### Q: Port 5173 is already in use. What do I do?
A: Vite automatically uses the next available port. Check the terminal output.

### Q: I get TypeScript errors. How do I fix them?
A: Run `npm run typecheck` to see all errors. Fix them in your editor or use the provided type definitions.

### Q: My changes aren't showing up. What should I do?
A: 1. Check that the dev server is running
2. Try hard-refreshing your browser (Ctrl+Shift+R or Cmd+Shift+R)
3. Check the browser console for errors
4. Restart the dev server

### Q: How do I fix dependency conflicts?
A: Delete `node_modules` and `package-lock.json`, then reinstall:
```bash
rm -rf node_modules package-lock.json
npm install
```

## Contributing

### Q: How do I contribute?
A: See [`CONTRIBUTING.md`](../CONTRIBUTING.md) for contribution guidelines.

### Q: What's the code style?
A: Follow ESLint configuration. Run `npm run lint` to check.

### Q: Do I need to add tests?
A: Not required for small changes, but appreciated for bug fixes and features.

## Performance & Optimization

### Q: How can I improve performance?
A: 1. Use React.memo for expensive components
2. Optimize images
3. Use code splitting with React Router
4. Check performance with browser DevTools

### Q: Does the build include unused CSS?
A: No, Tailwind CSS removes unused utilities automatically.

## Other

### Q: Where can I find the documentation?
A: See the `docs/` folder. Main guide: [`ARCHITECTURE.md`](ARCHITECTURE.md)

### Q: How do I report a bug?
A: Open an issue on [GitHub Issues](https://github.com/darkpyramid-org/Manetho-Courses-F/issues)

### Q: How do I request a feature?
A: Open a discussion on [GitHub Discussions](https://github.com/darkpyramid-org/Manetho-Courses-F/discussions)

### Q: Who maintains this project?
A: See the repository for maintainer information.
