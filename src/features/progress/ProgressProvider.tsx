import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import type { Certificate, CourseProgress, LearningStats } from "@/types";
import { courseService } from "@/services/courseService";
import { storageGet, storageRemove, storageSet } from "@/lib/storage";

/**
 * Progress + certificates.
 *
 * Stored in localStorage for the demo build.
 * The ProgressRepository interface below is the
 * seam: swap the implementation for an API client
 * and every component keeps working.
 */

interface ProgressRepository {
  getProgress(courseId: string): CourseProgress | null;
  markLessonComplete(courseId: string, lessonId: string): void;
  isLessonComplete(courseId: string, lessonId: string): boolean;
  getPercentage(courseId: string): number;
  getCurrentLessonId(courseId: string): string | null;
  setCurrentLesson(courseId: string, lessonId: string): void;
  resetCourse(courseId: string): void;
  getAllProgress(): CourseProgress[];
  getStats(): LearningStats;
  getCertificates(): Certificate[];
  issueCertificate(courseId: string, studentName: string): Certificate;
}

const PROGRESS_KEY = "progress:v1";
const CERTIFICATES_KEY = "certificates:v1";

function loadProgress(): Record<string, CourseProgress> {
  const stored = storageGet<Record<string, CourseProgress>>(PROGRESS_KEY, {});
  return Object.fromEntries(
    Object.entries(stored).map(([courseId, progress]) => [
      courseId,
      { ...progress, completedLessons: [...new Set(progress.completedLessons)] },
    ]),
  );
}

function saveProgress(map: Record<string, CourseProgress>) {
  storageSet(PROGRESS_KEY, map);
}

function loadCertificates(): Certificate[] {
  return storageGet<Certificate[]>(CERTIFICATES_KEY, []);
}

function saveCertificates(list: Certificate[]) {
  storageSet(CERTIFICATES_KEY, list);
}

function computePercentage(
  completed: string[],
  courseId: string,
): number {
  const course = courseService.getById(courseId);
  if (!course) return 0;
  const total = course.lessonCount;
  if (total === 0) return 0;
  const done = completed.filter((id) =>
    course.modules.some((m) => m.lessons.some((l) => l.id === id)),
  ).length;
  return Math.round((done / total) * 100);
}

interface ProgressContextValue extends ProgressRepository {
  /** True when the course just reached 100% on this mark. */
  lastCompletion: { courseId: string; at: string } | null;
  clearLastCompletion: () => void;
}

const ProgressContext = createContext<ProgressContextValue | null>(null);

export function ProgressProvider({ children }: { children: ReactNode }) {
  const [progressMap, setProgressMap] = useState(loadProgress);
  const [certificates, setCertificates] = useState(loadCertificates);
  const [lastCompletion, setLastCompletion] = useState<{
    courseId: string;
    at: string;
  } | null>(null);

  useEffect(() => {
    saveProgress(progressMap);
  }, [progressMap]);

  useEffect(() => {
    saveCertificates(certificates);
  }, [certificates]);

  const getProgress = useCallback(
    (courseId: string): CourseProgress | null =>
      progressMap[courseId] ?? null,
    [progressMap],
  );

  const markLessonComplete = useCallback(
    (courseId: string, lessonId: string) => {
      setProgressMap((prev) => {
        const existing = prev[courseId];
        const course = courseService.getById(courseId);
        if (!course) return prev;
        const lessonExists = course.modules.some((module) =>
          module.lessons.some((lesson) => lesson.id === lessonId),
        );
        if (!lessonExists) return prev;

        const completed = existing
          ? [...existing.completedLessons]
          : [];
        if (!completed.includes(lessonId)) completed.push(lessonId);

        const percentage = computePercentage(completed, courseId);
        const now = new Date().toISOString();
        const wasComplete = existing?.percentage === 100;
        const isComplete = percentage === 100;

        const next: CourseProgress = {
          courseId,
          completedLessons: completed,
          currentLessonId: lessonId,
          percentage,
          startedAt: existing?.startedAt ?? now,
          completedAt: isComplete ? (existing?.completedAt ?? now) : null,
        };

        if (isComplete && !wasComplete) {
          // Course finished: issue a certificate of completion.
          const certificate: Certificate = {
            id: `cert-${courseId}-${Date.now()}`,
            userId: "local-demo-user",
            studentName:
              certificates[0]?.studentName ?? "Manetho Learner",
            courseId,
            courseTitle: course.title,
            issuedAt: now,
          };
          setCertificates((certs) =>
            certs.some((c) => c.courseId === courseId)
              ? certs
              : [...certs, certificate],
          );
          setLastCompletion({ courseId, at: now });
        }

        return { ...prev, [courseId]: next };
      });
    },
    [certificates],
  );

  const isLessonComplete = useCallback(
    (courseId: string, lessonId: string) =>
      progressMap[courseId]?.completedLessons.includes(lessonId) ?? false,
    [progressMap],
  );

  const getPercentage = useCallback(
    (courseId: string) =>
      progressMap[courseId]?.percentage ?? 0,
    [progressMap],
  );

  const getCurrentLessonId = useCallback(
    (courseId: string) =>
      progressMap[courseId]?.currentLessonId ?? null,
    [progressMap],
  );

  const setCurrentLesson = useCallback(
    (courseId: string, lessonId: string) => {
      setProgressMap((prev) => {
        const existing = prev[courseId];
        const course = courseService.getById(courseId);
        if (!course) return prev;
        const now = new Date().toISOString();
        const completed = existing?.completedLessons ?? [];
        const next: CourseProgress = {
          courseId,
          completedLessons: completed,
          currentLessonId: lessonId,
          percentage: computePercentage(completed, courseId),
          startedAt: existing?.startedAt ?? now,
          completedAt: existing?.completedAt ?? null,
        };
        return { ...prev, [courseId]: next };
      });
    },
    [],
  );

  const resetCourse = useCallback((courseId: string) => {
    setProgressMap((prev) => {
      const next = { ...prev };
      delete next[courseId];
      return next;
    });
    setCertificates((certs) =>
      certs.filter((c) => c.courseId !== courseId),
    );
  }, []);

  const getAllProgress = useCallback(
    () => Object.values(progressMap),
    [progressMap],
  );

  const getStats = useCallback((): LearningStats => {
    const all = Object.values(progressMap);
    const started = all.length;
    const completed = all.filter((p) => p.percentage === 100).length;
    const lessonsCompleted = all.reduce(
      (sum, p) => sum + p.completedLessons.length,
      0,
    );
    const totalMinutes = all.reduce((sum, p) => {
      const course = courseService.getById(p.courseId);
      if (!course) return sum;
      return (
        sum +
        Math.round((p.percentage / 100) * course.durationMinutes)
      );
    }, 0);
    return {
      coursesStarted: started,
      coursesCompleted: completed,
      lessonsCompleted,
      totalMinutes,
    };
  }, [progressMap]);

  const getCertificates = useCallback(() => certificates, [certificates]);

  const issueCertificate = useCallback(
    (courseId: string, studentName: string): Certificate => {
      const course = courseService.getById(courseId);
      const now = new Date().toISOString();
      const certificate: Certificate = {
        id: `cert-${courseId}-${Date.now()}`,
        userId: "local-demo-user",
        studentName: studentName.trim(),
        courseId,
        courseTitle: course?.title ?? "Unknown course",
        issuedAt: now,
      };
      setCertificates((certs) =>
        certs.some((c) => c.courseId === courseId)
          ? certs.map((c) =>
              c.courseId === courseId ? { ...c, studentName: certificate.studentName, issuedAt: now } : c,
            )
          : [...certs, certificate],
      );
      return certificate;
    },
    [],
  );

  const clearLastCompletion = useCallback(
    () => setLastCompletion(null),
    [],
  );

  const value = useMemo<ProgressContextValue>(
    () => ({
      getProgress,
      markLessonComplete,
      isLessonComplete,
      getPercentage,
      getCurrentLessonId,
      setCurrentLesson,
      resetCourse,
      getAllProgress,
      getStats,
      getCertificates,
      issueCertificate,
      lastCompletion,
      clearLastCompletion,
    }),
    [
      getProgress,
      markLessonComplete,
      isLessonComplete,
      getPercentage,
      getCurrentLessonId,
      setCurrentLesson,
      resetCourse,
      getAllProgress,
      getStats,
      getCertificates,
      issueCertificate,
      lastCompletion,
      clearLastCompletion,
    ],
  );

  return (
    <ProgressContext.Provider value={value}>
      {children}
    </ProgressContext.Provider>
  );
}

export function useProgress(): ProgressContextValue {
  const ctx = useContext(ProgressContext);
  if (!ctx)
    throw new Error("useProgress must be used inside <ProgressProvider>");
  return ctx;
}

/** Cleanup helper (used by "reset all data" in settings). */
export function resetAllProgress(): void {
  storageRemove(PROGRESS_KEY);
  storageRemove(CERTIFICATES_KEY);
  window.location.reload();
}
