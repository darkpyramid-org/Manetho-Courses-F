import type { Resource, ResourceType } from "@/types";
import { resources, resourceTypes } from "@/data/resources";

export interface ResourceRepository {
  getAll(): Resource[];
  getById(id: string): Resource | undefined;
  getBySlug(slug: string): Resource | undefined;
  getByType(type: ResourceType): Resource[];
  search(query: string): Resource[];
}

export const resourceService: ResourceRepository = {
  getAll: () => resources,
  getById: (id) => resources.find((r) => r.id === id),
  getBySlug: (slug) => resources.find((r) => r.slug === slug),
  getByType: (type) => resources.filter((r) => r.type === type),
  search: (query) => {
    const q = query.trim().toLowerCase();
    if (!q) return [];
    return resources.filter((r) =>
      [r.title, r.description, r.content ?? ""]
        .join(" ")
        .toLowerCase()
        .includes(q),
    );
  },
};

export { resourceTypes };

export function resourceTypeLabel(type: ResourceType): string {
  return resourceTypes[type] ?? type;
}
