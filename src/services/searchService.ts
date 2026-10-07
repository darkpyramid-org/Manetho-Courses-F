import type { Course, Instructor, LearningPath, Resource, Topic } from "@/types";
import { courseService } from "@/services/courseService";
import { instructorService } from "@/services/instructorService";
import { learningPathService } from "@/services/learningPathService";
import { resourceService } from "@/services/resourceService";
import { topicService } from "@/services/topicService";

/**
 * Global search across courses, learning paths,
 * topics, instructors, and resources.
 */

export type SearchResultType =
  | "course"
  | "learning-path"
  | "topic"
  | "instructor"
  | "resource";

export interface SearchResult {
  type: SearchResultType;
  id: string;
  slug: string;
  title: string;
  description: string;
  meta?: string;
  href: string;
}

export type SearchTab = "all" | SearchResultType;

interface Searchable {
  courses: Course[];
  paths: LearningPath[];
  topics: Topic[];
  instructors: Instructor[];
  resources: Resource[];
}

function searchAll(query: string): Searchable {
  return {
    courses: courseService.search(query),
    paths: learningPathService.search(query),
    topics: topicService.search(query),
    instructors: instructorService.search(query),
    resources: resourceService.search(query),
  };
}

function toResults(query: string, tab: SearchTab): SearchResult[] {
  const found = searchAll(query);
  const results: SearchResult[] = [];

  const includeCourse = tab === "all" || tab === "course";
  const includePath = tab === "all" || tab === "learning-path";
  const includeTopic = tab === "all" || tab === "topic";
  const includeInstructor = tab === "all" || tab === "instructor";
  const includeResource = tab === "all" || tab === "resource";

  if (includeCourse) {
    for (const c of found.courses) {
      results.push({
        type: "course",
        id: c.id,
        slug: c.slug,
        title: c.title,
        description: c.shortDescription,
        meta: `${c.level} · ${c.lessonCount} lessons`,
        href: `/courses/${c.slug}`,
      });
    }
  }
  if (includePath) {
    for (const p of found.paths) {
      results.push({
        type: "learning-path",
        id: p.id,
        slug: p.slug,
        title: p.title,
        description: p.description,
        meta: `${p.courseIds.length} courses`,
        href: `/learning-paths/${p.slug}`,
      });
    }
  }
  if (includeTopic) {
    for (const t of found.topics) {
      results.push({
        type: "topic",
        id: t.id,
        slug: t.slug,
        title: t.title,
        description: t.description,
        meta: `${t.courseIds.length} courses`,
        href: `/topics/${t.slug}`,
      });
    }
  }
  if (includeInstructor) {
    for (const i of found.instructors) {
      results.push({
        type: "instructor",
        id: i.id,
        slug: i.slug,
        title: i.name,
        description: i.role,
        meta: i.specialties.slice(0, 3).join(" · "),
        href: `/instructors/${i.slug}`,
      });
    }
  }
  if (includeResource) {
    for (const r of found.resources) {
      results.push({
        type: "resource",
        id: r.id,
        slug: r.slug,
        title: r.title,
        description: r.description,
        meta: r.type.replace("-", " "),
        href: `/resources/${r.slug}`,
      });
    }
  }

  return results;
}

export function searchCatalog(
  query: string,
  tab: SearchTab = "all",
): SearchResult[] {
  if (!query.trim()) return [];
  return toResults(query, tab);
}

export function searchCounts(query: string) {
  const found = searchAll(query);
  return {
    course: found.courses.length,
    "learning-path": found.paths.length,
    topic: found.topics.length,
    instructor: found.instructors.length,
    resource: found.resources.length,
  };
}
