import type { Course } from "@/types";
import { coursesA } from "@/data/courses-a";
import { coursesB } from "@/data/courses-b";
import { coursesC } from "@/data/courses-c";

/**
 * The complete course catalog.
 *
 * Data is authored once here and served through
 * the repository layer (src/services) — pages and
 * components never read this module directly.
 */
export const courses: Course[] = [...coursesA, ...coursesB, ...coursesC];
