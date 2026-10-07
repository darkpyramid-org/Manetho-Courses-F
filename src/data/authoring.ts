import type {
  CourseModule,
  Lesson,
  LessonType,
  TimelineEvent,
} from "@/types";

/*
 * Compact authoring helpers so the course data stays
 * readable and maintainable. Each helper produces a fully
 * typed Lesson / CourseModule.
 */

function base(
  slug: string,
  title: string,
  type: LessonType,
  durationMinutes: number,
  summary: string,
): Lesson {
  return {
    id: `les-${slug}`,
    slug,
    title,
    type,
    durationMinutes,
    summary,
  };
}

/** A narrated video lesson (placeholder player until a CMS provides media). */
export const video = (
  slug: string,
  title: string,
  durationMinutes: number,
  summary: string,
  content?: string,
): Lesson => ({ ...base(slug, title, "video", durationMinutes, summary), content });

/** A written lesson — the backbone of the curriculum. */
export const reading = (
  slug: string,
  title: string,
  durationMinutes: number,
  summary: string,
  content?: string,
): Lesson => ({ ...base(slug, title, "reading", durationMinutes, summary), content });

/** A lesson that links an attached quiz. */
export const quiz = (
  slug: string,
  title: string,
  durationMinutes: number,
  summary: string,
  quizId: string,
): Lesson => ({
  ...base(slug, title, "quiz", durationMinutes, summary),
  quizId,
});

/** A hands-on exercise lesson. */
export const exercise = (
  slug: string,
  title: string,
  durationMinutes: number,
  summary: string,
  content?: string,
): Lesson => ({ ...base(slug, title, "exercise", durationMinutes, summary), content });

/** A lesson pointing at reference resources. */
export const resourceLesson = (
  slug: string,
  title: string,
  durationMinutes: number,
  summary: string,
  resources: string[],
): Lesson => ({
  ...base(slug, title, "resource", durationMinutes, summary),
  resources,
});

/** An image-gallery lesson. */
export const gallery = (
  slug: string,
  title: string,
  durationMinutes: number,
  summary: string,
  images: string[],
  content?: string,
): Lesson => ({
  ...base(slug, title, "image-gallery", durationMinutes, summary),
  gallery: images,
  content,
});

/** A timeline lesson. */
export const timeline = (
  slug: string,
  title: string,
  durationMinutes: number,
  summary: string,
  events: TimelineEvent[],
): Lesson => ({
  ...base(slug, title, "timeline", durationMinutes, summary),
  timeline: events,
});

/** A curriculum module. */
export const module = (
  slug: string,
  title: string,
  description: string | undefined,
  lessons: Lesson[],
): CourseModule => ({
  id: `mod-${slug}`,
  title,
  description,
  lessons,
});
