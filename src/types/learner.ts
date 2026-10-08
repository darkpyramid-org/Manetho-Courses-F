export interface CourseProgress {
  courseId: string;
  completedLessons: string[];
  currentLessonId: string | null;
  percentage: number;
  startedAt: string;
  completedAt: string | null;
}

export interface Certificate {
  id: string;
  userId: string;
  studentName: string;
  courseId: string;
  courseTitle: string;
  issuedAt: string;
}

export interface AuthUser {
  id: string;
  name: string;
  email: string;
}

export type AuthStatus = "idle" | "authenticated";

export interface AuthState {
  user: AuthUser | null;
  status: AuthStatus;
  /** Demo mode: no real authentication server or account creation exists. */
  isDemo: boolean;
}

export interface LearningStats {
  coursesStarted: number;
  coursesCompleted: number;
  lessonsCompleted: number;
  totalMinutes: number;
}
