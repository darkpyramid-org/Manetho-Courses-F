import type { Instructor } from "@/types";
import { instructors } from "@/data/instructors";

export interface InstructorRepository {
  getAll(): Instructor[];
  getById(id: string): Instructor | undefined;
  getBySlug(slug: string): Instructor | undefined;
  getBySpecialty(specialty: string): Instructor[];
  search(query: string): Instructor[];
}

export const instructorService: InstructorRepository = {
  getAll: () => instructors,
  getById: (id) => instructors.find((i) => i.id === id),
  getBySlug: (slug) => instructors.find((i) => i.slug === slug),
  getBySpecialty: (specialty) =>
    instructors.filter((i) =>
      i.specialties.some((s) => s.toLowerCase() === specialty.toLowerCase()),
    ),
  search: (query) => {
    const q = query.trim().toLowerCase();
    if (!q) return [];
    return instructors.filter((i) =>
      [i.name, i.role, i.biography, i.specialties.join(" ")]
        .join(" ")
        .toLowerCase()
        .includes(q),
    );
  },
};

export function allSpecialties(): string[] {
  const set = new Set<string>();
  instructors.forEach((i) => i.specialties.forEach((s) => set.add(s)));
  return [...set].sort();
}
