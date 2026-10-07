import { Badge } from "@/components/ui/badge";
import type { CourseCategory, CourseLevel } from "@/types";
import { categoryLabel, levelLabel } from "@/services/courseService";

/** Level badge with restrained palette differentiation. */
export function LevelBadge({ level }: { level: CourseLevel }) {
  const styles: Record<CourseLevel, string> = {
    beginner: "border-terracotta-500/40 bg-terracotta-500/10 text-terracotta-600 dark:text-terracotta-300",
    intermediate: "border-gold-500/40 bg-gold-500/10 text-gold-700 dark:text-gold-300",
    advanced: "border-nile-500/40 bg-nile-500/10 text-nile-600 dark:text-nile-300",
  };
  return (
    <Badge
      variant="outline"
      className={`rounded-sm text-[11px] font-semibold uppercase tracking-wider ${styles[level]}`}
    >
      {levelLabel(level)}
    </Badge>
  );
}

/** Category label used as a plain eyebrow (not a colored badge). */
export function CategoryLabel({ category }: { category: CourseCategory }) {
  return (
    <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
      {categoryLabel(category)}
    </span>
  );
}
