/** Skeleton loaders — used for course grids, detail, search, and dashboard. */
export function CourseCardSkeleton() {
  return (
    <article aria-hidden="true" className="flex flex-col overflow-hidden rounded-sm border border-border bg-card">
      <div className="aspect-[4/3] animate-pulse bg-secondary/70" />
      <div className="flex flex-1 flex-col gap-3 p-5">
        <div className="h-3 w-24 animate-pulse rounded-sm bg-secondary/70" />
        <div className="h-5 w-full animate-pulse rounded-sm bg-secondary/70" />
        <div className="h-5 w-3/4 animate-pulse rounded-sm bg-secondary/70" />
        <div className="h-3.5 w-full animate-pulse rounded-sm bg-secondary/70" />
        <div className="h-3.5 w-5/6 animate-pulse rounded-sm bg-secondary/70" />
        <div className="mt-auto flex items-center justify-between pt-4">
          <div className="h-3 w-32 animate-pulse rounded-sm bg-secondary/70" />
          <div className="h-8 w-24 animate-pulse rounded-sm bg-secondary/70" />
        </div>
      </div>
    </article>
  );
}

export function CourseGridSkeleton({ count = 6 }: { count?: number }) {
  return (
    <div
      className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
      aria-label="Loading courses"
      role="status"
    >
      <span className="sr-only">Loading courses…</span>
      {Array.from({ length: count }).map((_, i) => (
        <CourseCardSkeleton key={i} />
      ))}
    </div>
  );
}

export function LessonSkeleton() {
  return (
    <div className="space-y-4" role="status" aria-label="Loading lesson">
      <span className="sr-only">Loading lesson…</span>
      <div className="h-3 w-24 animate-pulse rounded-sm bg-secondary/70" />
      <div className="h-8 w-2/3 animate-pulse rounded-sm bg-secondary/70" />
      <div className="h-3 w-40 animate-pulse rounded-sm bg-secondary/70" />
      <div className="aspect-video animate-pulse rounded-sm bg-secondary/70" />
      <div className="space-y-2 pt-4">
        <div className="h-4 w-full animate-pulse rounded-sm bg-secondary/70" />
        <div className="h-4 w-full animate-pulse rounded-sm bg-secondary/70" />
        <div className="h-4 w-5/6 animate-pulse rounded-sm bg-secondary/70" />
        <div className="h-4 w-full animate-pulse rounded-sm bg-secondary/70" />
        <div className="h-4 w-4/6 animate-pulse rounded-sm bg-secondary/70" />
      </div>
    </div>
  );
}
