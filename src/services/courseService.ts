import type { Course, CourseCategory, CourseLevel } from "@/types";
import { courses } from "@/data/courses";
import { courseCategories, courseLevels } from "@/data/courseOptions";

/**
 * Course repository.
 *
 * Static implementation over the seed catalog.
 * Replace this module's internals with API calls
 * to serve the UI unchanged from a backend.
 */
export interface CourseRepository {
  getAll(): Course[];
  getById(id: string): Course | undefined;
  getBySlug(slug: string): Course | undefined;
  getFeatured(): Course[];
  getByCategory(category: CourseCategory): Course[];
  getByLevel(level: CourseLevel): Course[];
  search(query: string): Course[];
  getByInstructor(instructorId: string): Course[];
  getRelated(course: Course, limit?: number): Course[];
}

function matchesQuery(course: Course, query: string): boolean {
  const q = query.trim().toLowerCase();
  if (!q) return false;
  const haystack = [
    course.title,
    course.subtitle,
    course.description,
    course.shortDescription,
    course.tags.join(" "),
  ]
    .join(" ")
    .toLowerCase();
  return q.split(/\s+/).every((word) => haystack.includes(word));
}

export const courseService: CourseRepository = {
  getAll: () => courses,
  getById: (id) => courses.find((c) => c.id === id),
  getBySlug: (slug) => courses.find((c) => c.slug === slug),
  getFeatured: () => courses.filter((c) => c.featured),
  getByCategory: (category) => courses.filter((c) => c.category === category),
  getByLevel: (level) => courses.filter((c) => c.level === level),
  search: (query) => courses.filter((c) => matchesQuery(c, query)),
  getByInstructor: (instructorId) =>
    courses.filter((c) => c.instructorId === instructorId),
  getRelated: (course, limit = 4) =>
    courses
      .filter(
        (c) =>
          c.id !== course.id &&
          (c.category === course.category ||
            c.tags.some((t) => course.tags.includes(t))),
      )
      .slice(0, limit),
};

export { courseCategories, courseLevels };

export function categoryLabel(category: CourseCategory): string {
  return (
    courseCategories.find((c) => c.value === category)?.label ?? category
  );
}

export function levelLabel(level: CourseLevel): string {
  return courseLevels.find((l) => l.value === level)?.label ?? level;
}

/** Flatten a course's modules into ordered lessons with their module index. */
export function flattenCourse(course: Course) {
  return course.modules.flatMap((module, moduleIndex) =>
    module.lessons.map((lesson, lessonIndex) => ({
      module,
      moduleIndex,
      lesson,
      lessonIndex,
    })),
  );
}

export function findLesson(
  course: Course,
  lessonSlug: string,
): { moduleIndex: number; lessonIndex: number; moduleId: string; lessonId: string } | undefined {
  for (let m = 0; m < course.modules.length; m++) {
    for (let l = 0; l < course.modules[m].lessons.length; l++) {
      if (course.modules[m].lessons[l].slug === lessonSlug) {
        return {
          moduleIndex: m,
          lessonIndex: l,
          moduleId: course.modules[m].id,
          lessonId: course.modules[m].lessons[l].id,
        };
      }
    }
  }
  return undefined;
}

export function lessonNumber(course: Course, lessonSlug: string): number {
  let n = 0;
  for (const module of course.modules) {
    for (const lesson of module.lessons) {
      n += 1;
      if (lesson.slug === lessonSlug) return n;
    }
  }
  return 0;
}

/** Neighbouring lessons for the lesson player navigation. */
export function lessonNeighbours(
  course: Course,
  lessonSlug: string,
): { prev: { slug: string; title: string } | null; next: { slug: string; title: string } | null } {
  const flat = flattenCourse(course);
  const idx = flat.findIndex((entry) => entry.lesson.slug === lessonSlug);
  if (idx === -1) return { prev: null, next: null };
  return {
    prev: idx > 0 ? { slug: flat[idx - 1].lesson.slug, title: flat[idx - 1].lesson.title } : null,
    next:
      idx < flat.length - 1
        ? { slug: flat[idx + 1].lesson.slug, title: flat[idx + 1].lesson.title }
        : null,
  };
}
