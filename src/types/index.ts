/*
 * Manetho domain models.
 *
 * These types are the boundary between the UI and the data layer.
 * The current data layer serves static seed content; the same
 * interfaces can later be backed by REST, Supabase, Firebase or a CMS.
 */

export type CourseCategory =
  | "ancient-egypt"
  | "pharaohs"
  | "archaeology"
  | "mythology"
  | "religion"
  | "hieroglyphs"
  | "art-architecture"
  | "daily-life"
  | "egyptian-language"
  | "discoveries";

export type CourseLevel = "beginner" | "intermediate" | "advanced";

export type LessonType =
  | "video"
  | "reading"
  | "quiz"
  | "exercise"
  | "resource"
  | "image-gallery"
  | "timeline";

export type ResourceType =
  | "timeline"
  | "map"
  | "glossary"
  | "reference"
  | "reading-list"
  | "guide"
  | "study-material"
  | "chart";

export type QuizQuestionType = "single" | "multiple" | "boolean";

export interface Lesson {
  id: string;
  slug: string;
  title: string;
  type: LessonType;
  durationMinutes: number;
  summary: string;
  /** Main lesson body. Paragraphs separated by a blank line. */
  content?: string;
  /** Placeholder artwork key used by the video player until a real CMS provides media. */
  videoUrl?: string;
  quizId?: string;
  /** Resource ids attached to this lesson. */
  resources?: string[];
  /** Image paths for image-gallery lessons. */
  gallery?: string[];
  /** Events for timeline lessons. */
  timeline?: TimelineEvent[];
}

export interface TimelineEvent {
  date: string;
  title: string;
  description: string;
}

export interface CourseModule {
  id: string;
  title: string;
  description?: string;
  lessons: Lesson[];
}

export interface Course {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  shortDescription: string;

  category: CourseCategory;
  level: CourseLevel;

  instructorId: string;

  coverImage: string;

  durationMinutes: number;
  lessonCount: number;

  learningOutcomes: string[];
  requirements: string[];

  modules: CourseModule[];

  tags: string[];

  featured?: boolean;

  language: string;
  publishedAt?: string;
  updatedAt?: string;
}

export interface Instructor {
  id: string;
  slug: string;
  name: string;
  role: string;
  biography: string;
  specialties: string[];
  courseIds: string[];
  /** Rendered as an initials avatar — no fabricated photographs. */
  initials: string;
}

export interface LearningPath {
  id: string;
  slug: string;
  title: string;
  description: string;
  level: CourseLevel;
  courseIds: string[];
  tags: string[];
}

export interface Topic {
  id: string;
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  courseIds: string[];
  resourceIds: string[];
  instructorIds: string[];
  image: string;
}

export interface Resource {
  id: string;
  slug: string;
  title: string;
  description: string;
  type: ResourceType;
  content?: string;
  relatedCourseIds: string[];
  updatedAt?: string;
  /** Chronology resources */
  events?: TimelineEvent[];
  /** Glossary resources */
  entries?: GlossaryEntry[];
}

export interface GlossaryEntry {
  term: string;
  definition: string;
}

export interface Quiz {
  id: string;
  courseId?: string;
  title: string;
  description: string;
  questions: QuizQuestion[];
}

export interface QuizQuestion {
  id: string;
  type: QuizQuestionType;
  prompt: string;
  options: string[];
  /** Indices into `options` that are correct. */
  correctOptions: number[];
  explanation: string;
}

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
  /**
   * Manetho currently runs in demo mode: no real authentication server
   * exists, and no account is created anywhere. The UI is
   * authentication-ready and this flag makes that explicit.
   */
  isDemo: boolean;
}

export interface LearningStats {
  coursesStarted: number;
  coursesCompleted: number;
  lessonsCompleted: number;
  totalMinutes: number;
}
