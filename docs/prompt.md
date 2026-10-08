# MANETHO — COMPLETE COURSE PLATFORM REFACTOR

You are a senior frontend architect, React/TypeScript engineer, product designer, UX architect, and educational-platform engineer.

Repository:

https://github.com/darkpyramid-org/Manetho-Courses-F

The existing repository is a React + Vite + TypeScript + Tailwind CSS + shadcn/ui application.

The repository currently contains a partially built learning platform called **LearnFlow**, mixed with Lovable-generated structure and generic SaaS/developer-learning content.

I want you to **deeply audit and refactor the entire repository into a clean, production-quality educational platform called MANETHO**, focused entirely on learning about Ancient Egypt.

This is a **full product transformation**, not a visual rebrand.

Do not simply replace "LearnFlow" with "Manetho".

The old product architecture, old content, old navigation, old design language, fake data, unnecessary pages, and unrelated features must be removed or replaced.

---

# 1. PRODUCT VISION

## Brand

# Manetho

Manetho is a serious digital learning platform dedicated to Ancient Egypt.

The platform should allow people to:

* discover courses
* study Ancient Egyptian history
* learn about pharaohs
* study archaeology
* understand Egyptian mythology
* explore temples and archaeological sites
* learn about hieroglyphs
* study Egyptian religion
* follow structured learning paths
* complete lessons
* track learning progress
* take quizzes
* save courses
* continue learning
* earn certificates
* explore educational resources

The product should feel like a combination of:

* a premium museum education platform
* an academic learning environment
* a modern online course platform
* a digital archaeological institute

It should NOT feel like:

* a generic coding bootcamp
* a SaaS landing page
* a startup template
* a tourism website
* a fantasy Egypt website
* a generic Udemy clone

---

# 2. DEEPLY AUDIT THE CURRENT REPOSITORY FIRST

Before writing new code, inspect the entire repository.

Review:

* package.json
* Vite configuration
* Tailwind configuration
* TypeScript configuration
* App.tsx
* routing
* every page
* every layout component
* every UI component
* hooks
* utilities
* assets
* public files
* CSS
* metadata
* responsive behavior
* existing dependencies
* duplicated code
* fake content
* unused files
* dead routes
* unnecessary abstractions

Identify:

1. What is reusable.
2. What should be refactored.
3. What should be deleted.
4. What should be replaced.
5. What architecture is missing.

Do not preserve existing architecture merely because it already exists.

---

# 3. CURRENT LEGACY CONTENT MUST BE REMOVED

Remove all LearnFlow-specific concepts.

Remove:

* LearnFlow
* developer education
* React courses
* TypeScript courses
* Node.js
* Docker
* Kubernetes
* Python for Data Science
* GitHub integrations
* VS Code integrations
* Slack integrations
* Notion integrations
* developer career content
* coding bootcamp language
* fake technology instructors
* fake student counts
* fake course ratings
* fake course reviews
* fake testimonials
* fake companies
* fake SaaS metrics

Do not rename these into Egyptian equivalents.

Replace them with real Manetho educational concepts.

---

# 4. REMOVE UNNECESSARY MARKETING PAGES

The current application contains pages such as:

* Pricing
* Product
* Features
* Careers
* Changelog
* Docs

These should NOT remain simply because they existed in the original template.

Delete or replace them according to the new information architecture.

The primary product is the **learning platform**, not a SaaS marketing site.

---

# 5. NEW INFORMATION ARCHITECTURE

Create a strong educational-platform architecture.

Primary navigation:

* Home
* Courses
* Learning Paths
* Topics
* Instructors
* Resources
* About

Utility navigation:

* Search
* My Learning
* Saved
* Profile

If authentication is not connected yet, create the UI and architecture as authentication-ready without pretending authentication actually exists.

---

# 6. ROUTING ARCHITECTURE

Create clean routes.

Recommended:

```text
/
 /courses
 /courses/:slug

 /learning-paths
 /learning-paths/:slug

 /topics
 /topics/:slug

 /instructors
 /instructors/:slug

 /resources
 /resources/:slug

 /search

 /my-learning
 /my-learning/courses
 /my-learning/certificates
 /saved

 /about

 /login
 /register

 /learn/:courseSlug/:lessonSlug

 /quiz/:courseSlug/:lessonSlug

 /certificate/:id

 /profile
```

Do not create routes unless they have a clear product purpose.

---

# 7. HOMEPAGE

The homepage should immediately communicate:

**Learn Ancient Egypt. Understand its civilization. Explore its evidence.**

Create a premium educational homepage.

Structure:

## Hero

Headline:

> Learn Ancient Egypt from the ground up.

Supporting message:

> Structured courses, historical context, archaeological evidence, and guided learning paths for anyone who wants to understand one of history's greatest civilizations.

Primary CTA:

**Explore Courses**

Secondary CTA:

**Start Learning**

Hero imagery should use:

* Egyptian artifacts
* temples
* papyrus
* inscriptions
* statues
* archaeological sites

Avoid generic pyramid stock photography.

---

# 8. FEATURED COURSES

Show selected courses.

Each course card should contain:

* cover image
* category
* level
* title
* short description
* instructor
* duration
* number of lessons
* rating only if real data exists
* progress if the user is enrolled
* CTA

Example:

### Introduction to Ancient Egypt

Beginner

8 lessons · 2h 40m

---

### The Pharaohs of Ancient Egypt

Intermediate

12 lessons · 4h 15m

---

### Egyptian Mythology

Beginner

10 lessons · 3h 20m

---

### Reading Egyptian Hieroglyphs

Intermediate

14 lessons · 5h 10m

---

### Archaeology of the Nile Valley

Intermediate

9 lessons · 3h 45m

---

### Temples, Tombs & Sacred Architecture

Advanced

11 lessons · 4h 30m

---

# 9. COURSE CATALOG

Create a professional `/courses` page.

Features:

* search
* category filter
* difficulty filter
* duration filter
* sort
* featured courses
* course grid
* empty state
* pagination or progressive loading

Categories should include:

```text
Ancient Egypt
Pharaohs
Archaeology
Mythology
Religion
Hieroglyphs
Art & Architecture
Daily Life
Egyptian Language
Discoveries
```

Difficulty:

```text
Beginner
Intermediate
Advanced
```

Do not use fake numbers simply to make cards look impressive.

---

# 10. COURSE DETAIL PAGE

Create a serious course landing page.

Route:

```text
/courses/:slug
```

Example:

```text
/courses/introduction-to-ancient-egypt
```

Page structure:

## Course header

* category
* title
* subtitle
* instructor
* level
* duration
* lessons
* language
* last updated
* cover image

## Course description

Explain exactly what students will learn.

## Learning outcomes

Example:

Students will be able to:

* explain the major periods of Egyptian history
* identify major dynasties
* understand the role of the Nile
* explain Egyptian religious concepts
* recognize major archaeological sites

## Curriculum

Display:

```text
Module 1 — Before the Pharaohs
  Lesson 1
  Lesson 2
  Lesson 3

Module 2 — The Old Kingdom
  Lesson 4
  Lesson 5
  Lesson 6

Module 3 — The Middle Kingdom
  ...
```

Each lesson should show:

* lesson number
* title
* duration
* type
* completed state

Types:

* Video
* Reading
* Quiz
* Exercise
* Resource

## Instructor

Show instructor profile.

## Requirements

Example:

> No prior knowledge required.

## Resources

Show downloadable/reference materials.

## Start course CTA

---

# 11. LEARNING EXPERIENCE

Create the actual course-player experience.

Route:

```text
/learn/:courseSlug/:lessonSlug
```

This is one of the most important parts of the application.

Layout:

### Desktop

Left:

Course curriculum.

Center:

Lesson content.

Right:

Optional lesson information/resources.

### Mobile

Use an accessible drawer/sheet for curriculum.

---

# 12. LESSON PLAYER

Support lesson types:

```text
video
article
quiz
image-gallery
timeline
resource
```

The interface should show:

* course name
* module
* lesson title
* progress
* content
* previous lesson
* next lesson
* mark as complete

Example:

```text
Lesson 04
The Unification of Egypt

15 min

[lesson content]

[ Mark as complete ]

← Previous     Next →
```

---

# 13. COURSE PROGRESS

Create a reusable progress system.

Progress should support:

```ts
CourseProgress {
  courseId
  completedLessons
  currentLesson
  percentage
  startedAt
  completedAt
}
```

If there is no backend yet:

Use localStorage cleanly.

Do not pretend that data is persisted to a server.

Structure the system so it can later be replaced by an API.

---

# 14. MY LEARNING

Create:

```text
/my-learning
```

Dashboard sections:

### Continue Learning

Show courses currently in progress.

### Recently Started

### Completed Courses

### Saved Courses

### Certificates

### Learning Statistics

Possible statistics:

* courses started
* courses completed
* lessons completed
* learning time

Only show values based on actual local/user state.

Do not invent global statistics.

---

# 15. SAVED COURSES

Create:

```text
/saved
```

Users can bookmark courses.

Use localStorage until authentication/backend exists.

Include:

* saved courses
* remove bookmark
* empty state
* open course

---

# 16. LEARNING PATHS

Create structured curriculum collections.

Example:

## Discover Ancient Egypt

Courses:

1. Introduction to Ancient Egypt
2. The Old Kingdom
3. The Middle Kingdom
4. The New Kingdom
5. Egyptian Religion
6. Archaeology of Ancient Egypt

---

## The Pharaohs

Courses:

1. Understanding Egyptian Kingship
2. The Early Dynasties
3. Old Kingdom Pharaohs
4. Hatshepsut
5. Akhenaten
6. Tutankhamun
7. Ramses II
8. Cleopatra VII

---

## Egyptian Archaeology

Courses:

1. Archaeology Fundamentals
2. Giza
3. Saqqara
4. Valley of the Kings
5. Temples and Tombs
6. Archaeological Discovery

Learning paths should show:

* number of courses
* estimated duration
* completion progress
* difficulty
* description

---

# 17. TOPICS

Create:

```text
/topics
/topics/:slug
```

Topic pages should aggregate relevant courses and resources.

Example:

```text
/topics/pharaohs
/topics/archaeology
/topics/mythology
/topics/hieroglyphs
```

Each topic should have:

* description
* featured course
* course list
* related resources
* related instructors

---

# 18. INSTRUCTORS

Create:

```text
/instructors
/instructors/:slug
```

Instructor profile:

* name
* photo
* role
* biography
* specialization
* courses
* publications/resources
* credentials

Do not fabricate academic credentials.

If content is fictional/demo content, clearly structure it as seed content rather than presenting it as real-world expertise.

---

# 19. QUIZZES

Create a reusable quiz engine.

Question types:

* multiple choice
* true/false
* multiple answer

Quiz should show:

* question number
* progress
* answers
* submit
* score
* explanations
* retry

Example:

> Which period is generally associated with the construction of the Great Pyramid at Giza?

After answering, show an educational explanation.

---

# 20. CERTIFICATES

Create certificate UI.

When a course is completed:

Show:

```text
Certificate of Completion

[Student Name]

has completed

Introduction to Ancient Egypt

Manetho

Date
```

Do not claim certificates are officially accredited unless that is actually true.

Certificate data model:

```ts
Certificate {
  id
  userId
  courseId
  courseTitle
  issuedAt
}
```

---

# 21. SEARCH

Create a global search system.

Search across:

* courses
* learning paths
* topics
* instructors
* resources

Search should support:

* instant filtering
* category tabs
* result count
* empty state
* keyboard navigation

Example:

Search:

`Tutankhamun`

Could return:

* course
* learning path
* instructor
* resource

---

# 22. RESOURCES

Create an educational resource library.

Examples:

* historical timelines
* maps
* glossaries
* hieroglyph references
* dynastic charts
* reading lists
* archaeological site guides
* downloadable study materials

Route:

```text
/resources
/resources/:slug
```

---

# 23. CONTENT MODEL

Do not keep large course arrays directly inside page components.

Create a proper domain model.

Suggested:

```text
src/
├── app/
│
├── components/
│
├── features/
│   ├── courses/
│   ├── learning-paths/
│   ├── lessons/
│   ├── quizzes/
│   ├── progress/
│   ├── search/
│   ├── instructors/
│   ├── resources/
│   └── certificates/
│
├── data/
│   ├── courses.ts
│   ├── lessons.ts
│   ├── learningPaths.ts
│   ├── topics.ts
│   ├── instructors.ts
│   ├── resources.ts
│   └── quizzes.ts
│
├── hooks/
│
├── lib/
│
├── types/
│
├── pages/
│
└── components/
```

You may improve this structure if you have a stronger architecture.

---

# 24. DATA MODELS

Create strong TypeScript models.

Example:

```ts
export interface Course {
  id: string;
  slug: string;
  title: string;
  description: string;
  shortDescription: string;

  category: CourseCategory;
  level: CourseLevel;

  instructorId: string;

  coverImage: string;

  durationMinutes: number;
  lessonCount: number;

  learningOutcomes: string[];

  modules: CourseModule[];

  tags: string[];

  featured?: boolean;

  publishedAt?: string;
  updatedAt?: string;
}
```

Module:

```ts
export interface CourseModule {
  id: string;
  title: string;
  description?: string;
  lessons: Lesson[];
}
```

Lesson:

```ts
export interface Lesson {
  id: string;
  slug: string;
  title: string;
  type: LessonType;
  durationMinutes: number;
  content?: string;
  videoUrl?: string;
  resources?: Resource[];
  quizId?: string;
}
```

Instructor:

```ts
export interface Instructor {
  id: string;
  slug: string;
  name: string;
  role: string;
  biography: string;
  image?: string;
  specialties: string[];
  courseIds: string[];
}
```

---

# 25. SERVICES / REPOSITORY LAYER

Do not let components directly manipulate raw arrays everywhere.

Create clean service/repository functions.

For example:

```ts
courseService.getAll()
courseService.getBySlug()
courseService.getFeatured()
courseService.search()
courseService.getByCategory()

learningPathService.getAll()
learningPathService.getBySlug()

progressService.getCourseProgress()
progressService.markLessonComplete()

bookmarkService.toggle()
bookmarkService.isSaved()
```

The first implementation can use local static data.

Design it so the data layer can later be replaced with:

* REST API
* Supabase
* Firebase
* custom backend
* CMS

without rewriting the UI.

---

# 26. AUTHENTICATION-READY ARCHITECTURE

If authentication is not currently connected, do not fake a real authentication backend.

Create an authentication boundary such as:

```ts
AuthUser
AuthState
useAuth()
```

The application should be ready for future:

* login
* registration
* logout
* profile
* enrollment
* progress sync
* certificates

For now, use a clear demo/local state implementation if necessary.

---

# 27. DESIGN SYSTEM

Completely remove the current Fern green learning-platform theme.

The visual identity should belong to Manetho.

Suggested palette:

```text
Obsidian       #171512
Papyrus        #F4EFE5
Sandstone      #D7C19A
Ancient Gold   #B08A3C
Egyptian Blue  #245B67
Terracotta     #9A5A3A
Ink            #28231E
```

Do not turn the interface into an overloaded "Egyptian theme".

The design should be sophisticated and restrained.

---

# 28. VISUAL STYLE

Think:

**British Museum education × modern editorial platform × premium online learning**

Use:

* strong typography
* large photography
* restrained borders
* subtle shadows
* warm surfaces
* editorial spacing
* clean cards
* clear hierarchy
* subtle archaeological details

Avoid:

* neon green
* excessive glassmorphism
* glowing cards
* futuristic gradients
* excessive rounded cards
* startup-style hero sections
* decorative pyramids everywhere

---

# 29. TYPOGRAPHY

Use:

### Display / headings

A refined serif such as:

* Cormorant Garamond
* Libre Baskerville
* Source Serif
* Playfair Display

### UI

Clean sans-serif:

* Inter
* Geist
* IBM Plex Sans

Use serif typography selectively.

Course dashboards should remain highly readable.

---

# 30. COURSE CARD DESIGN

Course cards should feel educational and premium.

Structure:

```text
[IMAGE]

ARCHAEOLOGY

The Archaeology of Ancient Egypt

Understand excavation, evidence,
sites and archaeological interpretation.

Intermediate
9 lessons · 3h 45m

Instructor Name

[View Course]
```

If enrolled:

```text
68% complete
██████████░░░░
Continue Learning →
```

---

# 31. LESSON UI DESIGN

The learning interface must prioritize concentration.

Avoid unnecessary decoration.

Use:

* wide content area
* readable text
* sticky curriculum
* clear progress
* keyboard-friendly controls
* accessible video controls
* clear completion state

For reading lessons:

Maximum reading width:

```text
680–760px
```

For video:

Use an appropriate wider aspect ratio.

---

# 32. RESPONSIVE DESIGN

Design mobile-first.

Test at:

```text
320px
360px
390px
430px
768px
1024px
1280px
1440px
1920px
```

Mobile learning must be excellent.

The course curriculum should become a drawer/sheet.

Cards should not become cramped.

Typography should remain readable.

---

# 33. ACCESSIBILITY

Implement:

* semantic HTML
* keyboard navigation
* focus states
* ARIA labels
* accessible dialogs
* accessible dropdowns
* accessible tabs
* accessible progress indicators
* proper heading hierarchy
* sufficient contrast
* reduced motion
* screen-reader-friendly lesson state

Use shadcn/Radix primitives correctly.

---

# 34. PERFORMANCE

Keep the application lightweight.

Remove unnecessary dependencies where possible.

Avoid introducing a large state-management library unless justified.

Use:

* lazy routes
* optimized images
* memoization only where useful
* clean rendering
* code splitting
* reusable components

---

# 35. DELETE LEGACY FILES

After migration, remove files that are no longer relevant.

Especially evaluate:

```text
Pricing.tsx
Product.tsx
Features.tsx
Careers.tsx
Changelog.tsx
Docs.tsx
```

Do not leave dead legacy pages in the project simply because deleting them feels risky.

Also remove:

* LearnFlow copy
* Fern CSS
* old marketing utilities
* fake integrations
* fake pricing data
* developer course data
* irrelevant page components
* unused imports
* unused dependencies where practical

---

# 36. COMPONENT ARCHITECTURE

Create reusable components.

Examples:

```text
layout/
  AppShell
  Navbar
  Footer
  MobileNavigation

course/
  CourseCard
  CourseGrid
  CourseHeader
  CourseCurriculum
  CourseProgress
  CourseMeta
  CourseInstructor

learning/
  LessonPlayer
  LessonSidebar
  LessonHeader
  LessonNavigation
  LessonCompletion
  VideoLesson
  ReadingLesson
  QuizLesson

dashboard/
  ContinueLearning
  ProgressCard
  SavedCourses
  CertificateCard

search/
  SearchInput
  SearchResults
  SearchFilters

shared/
  EmptyState
  LoadingState
  Breadcrumbs
  Pagination
  ImageWithFallback
```

Keep domain logic out of giant page components.

---

# 37. HOME PAGE SECTIONS

Final homepage should contain approximately:

1. Navigation
2. Hero
3. Featured Course
4. Explore Topics
5. Popular Learning Paths
6. Featured Courses
7. How Manetho Learning Works
8. Educational Resources
9. Continue Learning for returning users
10. Editorial/history feature
11. Final CTA
12. Footer

Do not copy a SaaS landing-page structure.

---

# 38. "HOW MANETHO WORKS"

Instead of generic SaaS features, explain the educational process:

### 01 — Choose a subject

Start with a topic that interests you.

### 02 — Follow a structured course

Learn through organized lessons.

### 03 — Test your understanding

Complete quizzes and activities.

### 04 — Build your knowledge

Continue through related courses and learning paths.

### 05 — Complete the journey

Earn a certificate of completion where applicable.

---

# 39. COURSE CONTENT QUALITY

Seed the platform with realistic Ancient Egypt content.

Minimum:

### 15+ courses

### 5+ learning paths

### 10+ instructors

### 10+ topics

### 30+ lessons

### 10+ quizzes

### 20+ resources

Content should be internally consistent.

Do not fabricate academic credentials.

Do not invent fake universities or institutions.

Do not make unsupported historical claims.

---

# 40. COURSE EXAMPLES

Use courses such as:

### Foundations of Ancient Egypt

### Egyptian Dynasties Explained

### The Pharaohs of Egypt

### The Old Kingdom

### The Middle Kingdom

### The New Kingdom

### Hatshepsut and Female Kingship

### Akhenaten and the Amarna Period

### Tutankhamun and His World

### Ramses II

### Egyptian Mythology

### Gods of Ancient Egypt

### Egyptian Religion and the Afterlife

### Reading Egyptian Hieroglyphs

### Egyptian Art and Symbolism

### Temples of Ancient Egypt

### Tombs and Burial Practices

### Archaeology of the Nile Valley

### The Valley of the Kings

### The Discovery of Tutankhamun's Tomb

---

# 41. HISTORICAL ACCURACY

This is extremely important.

Manetho is an educational history platform.

Never present uncertain information as absolute fact.

Distinguish:

* archaeological evidence
* primary sources
* later historical accounts
* modern scholarly interpretation
* traditional mythology
* unresolved questions

Use phrases such as:

> Archaeological evidence suggests...

> The exact date remains debated...

> Later Egyptian tradition describes...

> Scholars generally interpret this as...

Do not manufacture citations.

---

# 42. SEO

Replace all LearnFlow metadata.

Create:

Title:

> Manetho — Learn Ancient Egypt

Description:

> Explore Ancient Egypt through structured courses in history, archaeology, pharaohs, mythology, hieroglyphs, religion, art, and discovery.

Open Graph metadata should be Manetho-specific.

Remove:

* LearnFlow
* Lovable OpenGraph image
* @LearnFlow
* developer-learning metadata

Use meaningful page titles:

```text
Manetho — Learn Ancient Egypt

Courses — Manetho

Introduction to Ancient Egypt — Manetho

Learning Paths — Manetho

Egyptian Mythology — Manetho
```

---

# 43. URL / SEO STRUCTURE

Use clean slugs:

```text
/courses/ancient-egypt-foundations

/courses/egyptian-mythology

/courses/reading-hieroglyphs

/learning-paths/discover-ancient-egypt

/topics/pharaohs

/topics/archaeology

/instructors/name

/resources/egyptian-dynasties-timeline
```

Avoid:

```text
/course?id=123
/page?id=123
/product/123
```

---

# 44. ERROR AND EMPTY STATES

Create polished states for:

* course not found
* lesson not found
* no search results
* no saved courses
* no learning progress
* no certificates
* empty course catalog
* failed content loading

Never leave blank screens.

---

# 45. LOADING STATES

Use skeleton loaders for:

* courses
* course detail
* lesson content
* search
* dashboard

Do not overuse spinners.

---

# 46. DARK / LIGHT MODE

Support both.

Light mode:

* ivory
* parchment
* warm white
* charcoal
* muted gold

Dark mode:

* obsidian
* charcoal
* muted sandstone
* restrained gold
* Egyptian blue accents

The dark mode should not simply invert the colors.

---

# 47. STATE MANAGEMENT

Do not introduce global state unnecessarily.

Use:

* React state
* context where appropriate
* React Query only when asynchronous server data exists
* localStorage for demo progress/bookmarks

Keep state boundaries clear.

---

# 48. TYPESCRIPT QUALITY

Use strict TypeScript.

Avoid:

```ts
any
```

unless genuinely unavoidable.

Use:

* discriminated unions
* explicit models
* typed service methods
* reusable types
* typed route parameters

---

# 49. CODE QUALITY

No:

* giant components
* duplicated course data
* hardcoded navigation everywhere
* inline business logic repeated across pages
* unused imports
* dead components
* fake API functions
* misleading "production-ready" claims

Use clear naming.

Prefer composition.

Keep files focused.

---

# 50. DEPENDENCY CLEANUP

Review package.json.

Remove dependencies that are no longer needed.

Do not install libraries simply because they are popular.

Keep:

* React
* React Router
* Tailwind
* shadcn/Radix components that are actually used
* Lucide icons
* React Query if useful

Evaluate everything else.

---

# 51. README

Rewrite the README completely.

It should explain:

```text
Manetho

Ancient Egypt Learning Platform

Tech stack
Architecture
Development
Build
Project structure
Content model
Future backend integration
```

Remove all Lovable boilerplate.

Remove:

> Welcome to your Lovable project

Remove fake project URLs.

---

# 52. PROJECT STRUCTURE

Target something close to:

```text
src/

├── components/
│   ├── layout/
│   ├── course/
│   ├── learning/
│   ├── dashboard/
│   ├── search/
│   └── shared/
│
├── data/
│   ├── courses.ts
│   ├── lessons.ts
│   ├── instructors.ts
│   ├── topics.ts
│   ├── learningPaths.ts
│   ├── resources.ts
│   └── quizzes.ts
│
├── features/
│   ├── courses/
│   ├── learning/
│   ├── progress/
│   ├── bookmarks/
│   ├── quizzes/
│   └── auth/
│
├── hooks/
│   ├── useCourseProgress.ts
│   ├── useBookmarks.ts
│   └── useAuth.ts
│
├── lib/
│   ├── utils.ts
│   ├── storage.ts
│   └── seo.ts
│
├── pages/
│
├── types/
│
├── App.tsx
├── main.tsx
└── index.css
```

Improve this structure if necessary, but preserve clear domain boundaries.

---

# 53. IMPORTANT: DO NOT OVERENGINEER

This is currently a frontend repository.

Do not create:

* fake backend
* fake database
* fake authentication server
* fake payment system
* fake API endpoints

Instead:

Build a high-quality frontend architecture that is ready for backend integration.

Clearly separate:

```text
UI
↓
Domain logic
↓
Data/service layer
↓
Future API
```

---

# 54. FUTURE BACKEND READINESS

Design interfaces so a backend can later provide:

```text
Users
Courses
Enrollments
Lessons
Progress
Bookmarks
Quiz Attempts
Certificates
Reviews
Instructors
Resources
```

For example:

```ts
courseRepository
lessonRepository
progressRepository
userRepository
```

The current implementation can use static/mock/local data behind those interfaces.

---

# 55. SECURITY / TRUST

Never store sensitive authentication data in unsafe localStorage merely to simulate a backend.

LocalStorage is acceptable for:

* demo progress
* bookmarks
* UI preferences

It is NOT a substitute for secure authentication.

---

# 56. FINAL QA

After the refactor:

Run:

```bash
npm install
npm run lint
npm run build
```

Fix every error.

Check:

* TypeScript
* React warnings
* routing
* responsive layout
* accessibility
* broken links
* empty states
* image failures
* console errors

---

# 57. TEST THE MAIN USER JOURNEY

Verify this exact journey:

```text
Home
 ↓
Courses
 ↓
Course detail
 ↓
Start course
 ↓
Lesson
 ↓
Complete lesson
 ↓
Next lesson
 ↓
Quiz
 ↓
Course progress
 ↓
Course completion
 ↓
Certificate
```

Also verify:

```text
Search
 ↓
Course result
 ↓
Course detail
```

And:

```text
Learning Paths
 ↓
Learning Path
 ↓
Course
 ↓
Lesson
```

And:

```text
Save Course
 ↓
Saved
 ↓
Open Course
```

---

# 58. RESPONSIVE QA

Verify the complete experience on:

```text
360px
390px
430px
768px
1024px
1280px
1440px
1920px
```

Pay special attention to:

* navbar
* course cards
* filters
* course curriculum
* lesson player
* quiz
* dashboard
* tables/lists
* mobile navigation

---

# 59. FINAL PRODUCT STANDARD

The result must look and behave like a serious product.

A user should immediately understand:

> Manetho is a place where I can systematically learn Ancient Egypt.

The application should feel:

* calm
* authoritative
* educational
* premium
* focused
* trustworthy
* modern

Not:

* flashy
* generic
* template-like
* SaaS-heavy
* gamified for no reason

---

# 60. ABSOLUTE RULES

Follow these rules throughout the implementation:

### RULE 1

Do not simply rename LearnFlow.

### RULE 2

Delete irrelevant legacy pages.

### RULE 3

Do not preserve fake developer content.

### RULE 4

Do not fabricate statistics.

### RULE 5

Do not fabricate academic credentials.

### RULE 6

Do not fabricate citations.

### RULE 7

Do not create fake backend functionality.

### RULE 8

Do not put all data inside page components.

### RULE 9

Do not create giant components.

### RULE 10

Do not add unnecessary dependencies.

### RULE 11

Do not sacrifice usability for visual effects.

### RULE 12

Make the course-learning experience the core of the application.

---

# 61. IMPLEMENTATION ORDER

Work in this order:

## Phase 1 — Audit

Understand the existing repository completely.

## Phase 2 — Cleanup

Remove LearnFlow/SaaS legacy.

## Phase 3 — Architecture

Create models, data layer, feature structure, and routing.

## Phase 4 — Design system

Replace Fern theme with Manetho design system.

## Phase 5 — Core product

Build:

* navbar
* homepage
* courses
* course detail
* lesson player

## Phase 6 — Learning features

Build:

* progress
* bookmarks
* quizzes
* learning paths
* dashboard
* certificates

## Phase 7 — Discovery

Build:

* search
* topics
* instructors
* resources

## Phase 8 — SEO/accessibility

Implement metadata, semantic structure, accessibility, and responsive behavior.

## Phase 9 — Cleanup

Remove dead code and unnecessary dependencies.

## Phase 10 — QA

Run build/lint and manually verify the complete user journey.

---

# 62. FINAL COMMAND

Do not stop after changing the homepage.

Do not stop after changing the colors.

Do not stop after changing the course cards.

Complete the refactor across the entire application.

The final result should be a **clean, scalable, production-quality Manetho Ancient Egypt learning platform**, with a strong foundation for a future backend.

The existing repository is only the starting point.

Use what is technically valuable.

Delete what is obsolete.

Rebuild what is weak.

Organize the application around the actual product:

**LEARN → PRACTICE → PROGRESS → COMPLETE → EXPLORE MORE**

Start with a complete repository audit, then execute the refactor end-to-end.
