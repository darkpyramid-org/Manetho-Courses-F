import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { BookOpen } from "lucide-react";

/** Polished empty state with optional action. */
export function EmptyState({
  title,
  description,
  actionLabel,
  actionHref,
  icon,
  children,
}: {
  title: string;
  description: string;
  actionLabel?: string;
  actionHref?: string;
  icon?: ReactNode;
  children?: ReactNode;
}) {
  return (
    <section
      aria-label={title}
      className="flex flex-col items-center justify-center rounded-sm border border-dashed border-border bg-card/50 px-6 py-16 text-center"
    >
      <span
        aria-hidden="true"
        className="mb-4 flex h-14 w-14 items-center justify-center rounded-sm border border-border bg-secondary/60 text-muted-foreground"
      >
        {icon ?? <BookOpen className="h-6 w-6" />}
      </span>
      <h2 className="display mb-2 text-2xl">{title}</h2>
      <p className="max-w-md text-sm leading-relaxed text-muted-foreground">
        {description}
      </p>
      {actionLabel && actionHref && (
        <Button asChild className="mt-6 rounded-sm">
          <Link to={actionHref}>{actionLabel}</Link>
        </Button>
      )}
      {children}
    </section>
  );
}
