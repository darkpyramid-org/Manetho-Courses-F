import { useCallback, useMemo } from "react";
import type { Course, CourseProgress } from "@/types";
import { useProgress } from "@/features/progress/ProgressProvider";
import { flattenCourse } from "@/services/courseService";

/**
 * Per-course progress hook — the single entry point
 * components use to read and update course progress.
 */
export function useCourseProgress(course: Course | undefined) {
  const {
    getProgress,
    markLessonComplete,
    isLessonComplete,
    getPercentage,
    getCurrentLessonId,
    setCurrentLesson,
    resetCourse,
    lastCompletion,
    clearLastCompletion,
  } = useProgress();

  const courseId = course?.id ?? "";
  const progress: CourseProgress | null = courseId
    ? getProgress(courseId)
    : null;
  const percentage = courseId ? getPercentage(courseId) : 0;
  const completedCount = progress?.completedLessons.length ?? 0;
  const totalLessons = course?.lessonCount ?? 0;
  const isComplete = percentage === 100;
  const isStarted = percentage > 0 && percentage < 100;
  const updateCurrentLesson = useCallback(
    (lessonId: string) => {
      if (courseId) setCurrentLesson(courseId, lessonId);
    },
    [courseId, setCurrentLesson],
  );

  const currentLessonSlug = useMemo(() => {
    if (!course) return null;
    const currentId = getCurrentLessonId(course.id);
    if (!currentId) return null;
    for (const module of course.modules) {
      for (const lesson of module.lessons) {
        if (lesson.id === currentId) return lesson.slug;
      }
    }
    return null;
  }, [course, getCurrentLessonId]);

  const nextLessonSlug = useMemo(() => {
    if (!course) return null;
    const flat = flattenCourse(course);
    const currentId = getCurrentLessonId(course.id);
    const idx = flat.findIndex(
      (entry) => entry.lesson.id === currentId,
    );
    if (idx === -1) {
      // No current lesson: first incomplete lesson, else the first lesson.
      const firstIncomplete = flat.find(
        (entry) =>
          !progress?.completedLessons.includes(entry.lesson.id),
      );
      return (firstIncomplete ?? flat[0])?.lesson.slug ?? null;
    }
    return flat[idx + 1]?.lesson.slug ?? null;
  }, [course, getCurrentLessonId, progress]);

  return {
    progress,
    percentage,
    completedCount,
    totalLessons,
    isComplete,
    isStarted,
    currentLessonSlug,
    nextLessonSlug,
    markLessonComplete: (lessonId: string) => {
      if (courseId) markLessonComplete(courseId, lessonId);
    },
    isLessonComplete: (lessonId: string) =>
      courseId ? isLessonComplete(courseId, lessonId) : false,
    setCurrentLesson: updateCurrentLesson,
    resetCourse: () => {
      if (courseId) resetCourse(courseId);
    },
    lastCompletion,
    clearLastCompletion,
  };
}
