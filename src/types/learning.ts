import type { CourseLevel } from "./shared";

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
