import type { CourseCategory, CourseLevel, LessonType } from "./shared";
import type { TimelineEvent } from "./resource";

export interface Lesson {
  id: string;
  slug: string;
  title: string;
  type: LessonType;
  durationMinutes: number;
  summary: string;
  /** Main lesson body. Paragraphs are separated by a blank line. */
  content?: string;
  /** Placeholder artwork key used until real course media is available. */
  videoUrl?: string;
  quizId?: string;
  resources?: string[];
  gallery?: string[];
  timeline?: TimelineEvent[];
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
