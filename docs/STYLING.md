# Styling Guide

## Approach

This project uses **Tailwind CSS** for all styling with a utility-first approach.

## Tailwind CSS

### Configuration
- **Config**: `tailwind.config.ts`
- **CSS**: `src/index.css`
- **Base Color**: Slate

### Using Tailwind

```tsx
function Card() {
  return (
    <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
      <h3 className="text-lg font-semibold text-slate-900">Title</h3>
      <p className="text-sm text-slate-600">Description</p>
    </div>
  );
}
```

### Responsive Design

Use breakpoints for responsive styling:

```tsx
function ResponsiveLayout() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <div>Item 1</div>
      <div>Item 2</div>
      <div>Item 3</div>
    </div>
  );
}
```

**Breakpoints**:
- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px
- `2xl`: 1536px

### Common Patterns

**Button Styles**:
```tsx
<button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
  Click me
</button>
```

**Card Layout**:
```tsx
<div className="bg-white rounded-lg border border-slate-200 shadow-sm p-6">
  Content
</div>
```

**Text Hierarchy**:
```tsx
<h1 className="text-3xl font-bold text-slate-900">Heading</h1>
<p className="text-slate-600">Paragraph</p>
```

**Spacing**:
```tsx
<div className="space-y-4">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>
```

## CSS Modules

For component-specific styles, use CSS modules:

```tsx
// MyComponent.module.css
.container {
  @apply rounded-lg border border-slate-200 bg-white p-6 shadow-sm;
}

.title {
  @apply text-lg font-semibold text-slate-900;
}
```

```tsx
// MyComponent.tsx
import styles from './MyComponent.module.css';

export function MyComponent() {
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Title</h3>
    </div>
  );
}
```

## Global Styles

Global styles are defined in `src/index.css`:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

/* Custom global styles */
@layer components {
  .btn-primary {
    @apply px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors;
  }
}
```

## Color System

Using Slate as base color with extensions:

- **Primary**: Blue
- **Secondary**: Slate
- **Success**: Green
- **Warning**: Yellow
- **Error**: Red

```tsx
<div className="bg-blue-600">Primary action</div>
<div className="bg-green-600">Success</div>
<div className="bg-yellow-500">Warning</div>
<div className="bg-red-600">Error</div>
```

## Best Practices

1. **Use Tailwind classes** - Don't write custom CSS unless necessary
2. **Extract repeated patterns** - Use CSS modules or custom components
3. **Maintain consistency** - Stick to spacing scale and colors
4. **Mobile-first** - Start with mobile design, then add larger breakpoints
5. **Accessibility** - Ensure sufficient color contrast
6. **Performance** - Tailwind removes unused CSS automatically

## Typography

Configure in `tailwind.config.ts`:

```tsx
@tailwindcss/typography
```

Use for prose content:

```tsx
<article className="prose prose-sm md:prose-lg">
  <h1>Title</h1>
  <p>Paragraph</p>
</article>
```

## Dark Mode

Dark mode can be enabled in `tailwind.config.ts`:

```tsx
export default {
  darkMode: 'class',
  // ...
}
```

Then use `dark:` prefix:

```tsx
<div className="bg-white dark:bg-slate-900 text-slate-900 dark:text-white">
  Content
</div>
```

## Animations

Tailwind includes animation utilities:

```tsx
<div className="animate-spin">Loading...</div>
<div className="animate-bounce">Attention</div>
<div className="transition-all duration-300 hover:scale-105">Hover me</div>
```

Additional animations via `tailwindcss-animate`:

```tsx
<div className="animate-in fade-in slide-in-from-top">
  Animate in
</div>
```
