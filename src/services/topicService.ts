import type { Topic } from "@/types";
import { topics } from "@/data/topics";

export interface TopicRepository {
  getAll(): Topic[];
  getById(id: string): Topic | undefined;
  getBySlug(slug: string): Topic | undefined;
  search(query: string): Topic[];
}

export const topicService: TopicRepository = {
  getAll: () => topics,
  getById: (id) => topics.find((t) => t.id === id),
  getBySlug: (slug) => topics.find((t) => t.slug === slug),
  search: (query) => {
    const q = query.trim().toLowerCase();
    if (!q) return [];
    return topics.filter((t) =>
      [t.title, t.description, t.longDescription]
        .join(" ")
        .toLowerCase()
        .includes(q),
    );
  },
};
