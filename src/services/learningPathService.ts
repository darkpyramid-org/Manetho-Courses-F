import type { LearningPath } from "@/types";
import { learningPaths } from "@/data/learningPaths";
import { courseService } from "@/services/courseService";
import { formatDuration } from "@/lib/format";

export interface LearningPathRepository {
  getAll(): LearningPath[];
  getById(id: string): LearningPath | undefined;
  getBySlug(slug: string): LearningPath | undefined;
  search(query: string): LearningPath[];
}

export const learningPathService: LearningPathRepository = {
  getAll: () => learningPaths,
  getById: (id) => learningPaths.find((p) => p.id === id),
  getBySlug: (slug) => learningPaths.find((p) => p.slug === slug),
  search: (query) => {
    const q = query.trim().toLowerCase();
    if (!q) return [];
    return learningPaths.filter((p) =>
      [p.title, p.description, p.tags.join(" ")]
        .join(" ")
        .toLowerCase()
        .includes(q),
    );
  },
};

/** Derived stats for a learning path, computed from the catalog. */
export function learningPathStats(path: LearningPath) {
  const resolved = path.courseIds
    .map((id) => courseService.getById(id))
    .filter((c): c is NonNullable<typeof c> => Boolean(c));
  const totalMinutes = resolved.reduce((sum, c) => sum + c.durationMinutes, 0);
  const totalLessons = resolved.reduce((sum, c) => sum + c.lessonCount, 0);
  return {
    courseCount: resolved.length,
    totalMinutes,
    durationLabel: formatDuration(totalMinutes),
    totalLessons,
    courses: resolved,
  };
}
