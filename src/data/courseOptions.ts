import type { CourseCategory, CourseLevel } from "@/types";

export const courseCategories: { value: CourseCategory; label: string }[] = [
  { value: "ancient-egypt", label: "Ancient Egypt" },
  { value: "pharaohs", label: "Pharaohs" },
  { value: "archaeology", label: "Archaeology" },
  { value: "mythology", label: "Mythology" },
  { value: "religion", label: "Religion" },
  { value: "hieroglyphs", label: "Hieroglyphs" },
  { value: "art-architecture", label: "Art & Architecture" },
  { value: "daily-life", label: "Daily Life" },
  { value: "egyptian-language", label: "Egyptian Language" },
  { value: "discoveries", label: "Discoveries" },
];

export const courseLevels: { value: CourseLevel; label: string }[] = [
  { value: "beginner", label: "Beginner" },
  { value: "intermediate", label: "Intermediate" },
  { value: "advanced", label: "Advanced" },
];

export const courseCategoryFilters: { value: CourseCategory | "all"; label: string }[] = [
  { value: "all", label: "All subjects" },
  ...courseCategories.map(({ value, label }) => ({ value, label })),
];

export const courseLevelFilters: { value: CourseLevel | "all"; label: string }[] = [
  { value: "all", label: "All levels" },
  ...courseLevels,
];
