# Components Guide

## Component Structure

### UI Components (`src/components/ui/`)
Reusable shadcn/ui components. These are the building blocks for creating pages and layouts.

Common UI components include:
- Button
- Card
- Dialog
- Dropdown Menu
- Tabs
- Select
- Checkbox
- Radio Group
- Progress
- Avatar
- And more...

### Layout Components (`src/components/layout/`)
Components that provide page structure and organization.

Examples:
- Navigation bars
- Sidebars
- Footers
- Headers

### Custom Components

#### NavLink
Navigation link component with active state handling.

**Location**: `src/components/NavLink.tsx`

**Usage**:
```tsx
import { NavLink } from '@/components/NavLink';

<NavLink to="/courses">Courses</NavLink>
```

## Custom Hooks (`src/hooks/`)

### use-mobile
Hook to detect mobile device breakpoints.

**Usage**:
```tsx
import { useMobile } from '@/hooks/use-mobile';

function MyComponent() {
  const isMobile = useMobile();
  return <div>{isMobile ? 'Mobile' : 'Desktop'}</div>;
}
```

### use-toast
Hook for displaying toast notifications.

**Usage**:
```tsx
import { useToast } from '@/hooks/use-toast';

function MyComponent() {
  const { toast } = useToast();
  
  const handleClick = () => {
    toast({
      title: "Success",
      description: "Operation completed",
    });
  };
  
  return <button onClick={handleClick}>Show Toast</button>;
}
```

## Component Best Practices

1. **Keep components focused** - Single responsibility principle
2. **Use TypeScript** - Define prop interfaces clearly
3. **Make components reusable** - Avoid hardcoded values
4. **Use Tailwind utilities** - For styling consistency
5. **Leverage shadcn/ui** - Don't reinvent the wheel
6. **Follow naming conventions** - PascalCase for components
7. **Document complex components** - Add JSDoc comments

## Creating New Components

### Template

```tsx
import { ReactNode } from 'react';

interface MyComponentProps {
  title: string;
  children: ReactNode;
}

export function MyComponent({ title, children }: MyComponentProps) {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold">{title}</h2>
      <div>{children}</div>
    </div>
  );
}
```

### Location Rules
- **UI/Reusable**: `src/components/ui/`
- **Layout**: `src/components/layout/`
- **Feature-specific**: Create a subdirectory in `src/components/`

## Styling Components

Use Tailwind CSS for styling:

```tsx
export function Card() {
  return (
    <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
      Content
    </div>
  );
}
```

For complex styles, use CSS modules:

```tsx
import styles from './MyComponent.module.css';

export function MyComponent() {
  return <div className={styles.container}>Content</div>;
}
```
