import type { ResourceType } from "./shared";

export interface TimelineEvent {
  date: string;
  title: string;
  description: string;
}

export interface GlossaryEntry {
  term: string;
  definition: string;
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
  events?: TimelineEvent[];
  entries?: GlossaryEntry[];
}
