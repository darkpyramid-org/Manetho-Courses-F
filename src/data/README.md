# Data and type organization

This folder owns static catalog records and page configuration. UI components render these values; they should not define duplicate catalogs, navigation lists, or fixed catalog counts.

## Where to add data

- Courses and lesson content: `courses-a.ts`, `courses-b.ts`, `courses-c.ts`, with authoring helpers in this folder.
- Catalog lookups and filter options: `courseOptions.ts`.
- Instructors, paths, quizzes, resources, and topics: their matching files in this folder.
- Site navigation and footer links: `site/navigation.ts`.
- Home page cards: `site/home.ts`.
- About page copy: `site/about.ts`.

Services in `src/services` expose lookups and derived values. They should not become a second source of seed content. Keep derived counts based on the catalog so the UI stays correct when records change.

## Type organization

Definitions live in `src/types` by domain (`course`, `learning`, `people`, `quiz`, `resource`, `learner`, and `shared`). `src/types/index.ts` only re-exports those definitions for compatibility with existing `@/types` imports. Add a definition to its owning domain module instead of expanding the barrel with new inline interfaces.
