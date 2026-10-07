import type { Course } from "@/types";

/** Sum a course's modules into derived totals at authoring time. */
function defineCourse(course: Omit<Course, "durationMinutes" | "lessonCount">): Course {
  const lessons = course.modules.flatMap((module) => module.lessons);
  return {
    ...course,
    lessonCount: lessons.length,
    durationMinutes: lessons.reduce((total, lesson) => total + lesson.durationMinutes, 0),
  };
}

export { defineCourse };
