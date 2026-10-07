# Data Management Guide

## Data Files Location

All static data is stored in `src/data/` directory.

## Data Files Overview

### authoring.ts
Contains data related to course authoring and authors.

### courses-a.ts
Main courses data file with course definitions and metadata.

### defineCourse.ts
Helper functions and utilities for defining course structures.

**Example usage**:
```tsx
import { defineCourse } from '@/data/defineCourse';
import { COURSES } from '@/data/courses-a';

const courseData = defineCourse(COURSES[0]);
```

### instructors.ts
Instructor/teacher profiles and information.

**Structure**:
```tsx
export const INSTRUCTORS = [
  {
    id: string;
    name: string;
    bio: string;
    image: string;
    // ... other fields
  }
];
```

### quizzes.ts
Quiz questions and answers data.

**Structure**:
```tsx
export const QUIZZES = [
  {
    id: string;
    courseId: string;
    questions: Question[];
    // ... other fields
  }
];
```

### resources.ts
Educational resources, links, and reference materials.

**Structure**:
```tsx
export const RESOURCES = [
  {
    id: string;
    title: string;
    url: string;
    type: string;
    // ... other fields
  }
];
```

### topics.ts
Course topics and curriculum structure.

**Structure**:
```tsx
export const TOPICS = [
  {
    id: string;
    courseId: string;
    name: string;
    description: string;
    lessons: Lesson[];
  }
];
```

## Using Data in Components

### Import Example

```tsx
import { COURSES } from '@/data/courses-a';
import { INSTRUCTORS } from '@/data/instructors';
import { TOPICS } from '@/data/topics';

function CourseList() {
  return (
    <div>
      {COURSES.map(course => (
        <div key={course.id}>
          <h3>{course.title}</h3>
          <p>{course.description}</p>
        </div>
      ))}
    </div>
  );
}
```

## Data Best Practices

1. **Keep data files organized** - One concept per file
2. **Use TypeScript interfaces** - Define clear data structures
3. **Export as constants** - Use `export const`
4. **Document data structure** - Add comments for complex types
5. **Use unique IDs** - Ensure data referential integrity
6. **Avoid hardcoded values** - Extract to data files

## TypeScript Interfaces

Define interfaces in `src/types/` for type safety:

```tsx
// src/types/index.ts
export interface Course {
  id: string;
  title: string;
  description: string;
  instructor: string;
  duration: number;
  level: 'beginner' | 'intermediate' | 'advanced';
}

export interface Topic {
  id: string;
  courseId: string;
  title: string;
  content: string;
}
```

Then use in data files:

```tsx
// src/data/courses-a.ts
import type { Course } from '@/types';

export const COURSES: Course[] = [
  {
    id: '1',
    title: 'Course Title',
    // ...
  }
];
```

## Performance Considerations

- Data is loaded at build time (no runtime API calls)
- Use `useMemo` for computed data in components
- Filter/sort data at the component level when necessary
- Consider pagination for large datasets

## Updating Data

When updating data files:
1. Update the data file in `src/data/`
2. Update corresponding TypeScript types in `src/types/` if needed
3. Test components that use the data
4. Rebuild if necessary
