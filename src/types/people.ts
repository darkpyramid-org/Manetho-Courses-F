export interface Instructor {
  id: string;
  slug: string;
  name: string;
  role: string;
  biography: string;
  specialties: string[];
  courseIds: string[];
  /** Displayed as an initials avatar; no fabricated photographs. */
  initials: string;
}
