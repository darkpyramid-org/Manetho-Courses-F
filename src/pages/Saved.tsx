import { Link } from "react-router-dom";
import { X, Clock, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { PageHeader } from "@/components/shared/PageHeader";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { ImageWithFallback } from "@/components/shared/ImageWithFallback";
import { EmptyState } from "@/components/shared/EmptyState";
import { useBookmarks } from "@/features/bookmarks/BookmarkProvider";
import { useProgress } from "@/features/progress/ProgressProvider";
import { courseService } from "@/services/courseService";
import { formatDuration } from "@/lib/format";
import { useAuth } from "@/features/auth/AuthProvider";
import { cn } from "@/lib/utils";

export default function SavedPage() {
  const { user } = useAuth();
  const { saved, remove } = useBookmarks();
  const { getPercentage } = useProgress();

  if (!user) {
    return (
      <div className="container py-12 text-center">
        <h1 className="display text-2xl mb-4">Sign in to view saved courses</h1>
        <p className="text-muted-foreground mb-6">Save courses to your profile and pick up where you left off.</p>
        <Link to="/login">
          <Button className="rounded-sm">Sign In</Button>
        </Link>
      </div>
    );
  }

  if (saved.length === 0) {
    return (
      <div className="container py-8">
        <Breadcrumbs items={[{ label: "Saved Courses" }]} />
        <EmptyState
          title="No saved courses yet"
          description="Browse the catalog and click the bookmark icon on any course to save it for later."
          actionLabel="Browse Courses"
          actionHref="/courses"
        />
      </div>
    );
  }

  return (
    <div className="container py-8">
      <Breadcrumbs items={[{ label: "Saved Courses" }]} />
      <PageHeader
        eyebrow="Your Library"
        title="Saved Courses"
        description={`${saved.length} course${saved.length !== 1 ? "s" : ""} saved for later.`}
      />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {saved.map((courseId) => {
          const course = courseService.getById(courseId);
          if (!course) return null;
          const percentage = getPercentage(course.id);
          const isStarted = percentage > 0;
          return (
            <Card key={course.id} className="relative overflow-hidden flex flex-col">
              <Link to={`/courses/${course.slug}`} className="block overflow-hidden" aria-label={course.title}>
                <ImageWithFallback
                  src={course.coverImage}
                  alt=""
                  className="aspect-[4/3] w-full object-cover"
                />
              </Link>
              <div className="flex flex-1 flex-col p-4 relative">
                <button
                  type="button"
                  onClick={() => remove(courseId)}
                  aria-label={`Remove ${course.title} from saved`}
                  className="absolute right-3 top-3 flex h-7 w-7 items-center justify-center rounded-sm border border-border/60 bg-background/80 text-muted-foreground hover:text-foreground"
                >
                  <X className="h-3.5 w-3.5" aria-hidden="true" />
                </button>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">{course.category}</span>
                  <Badge variant="outline" className={cn(
                    "text-[10px]",
                    course.level === "beginner" && "border-terracotta-500/40 text-terracotta-600 dark:text-terracotta-300",
                    course.level === "intermediate" && "border-gold-500/40 text-gold-700 dark:text-gold-300",
                    course.level === "advanced" && "border-nile-500/40 text-nile-600 dark:text-nile-300",
                  )}>
                    {course.level}
                  </Badge>
                </div>
                <h3 className="display mb-1.5 text-lg leading-snug">
                  <Link to={`/courses/${course.slug}`} className="text-foreground hover:text-gold-700 dark:hover:text-gold-300">
                    {course.title}
                  </Link>
                </h3>
                {isStarted && (
                  <div className="mb-3">
                    <div className="flex items-baseline justify-between text-xs mb-1">
                      <span className="font-medium text-foreground">{percentage}% complete</span>
                    </div>
                    <div className="h-1.5 bg-secondary/60 rounded-full overflow-hidden">
                      <div className="h-full bg-gold-500" style={{ width: `${percentage}%` }} />
                    </div>
                  </div>
                )}
                <div className="mt-auto flex items-center justify-between pt-3">
                  <div className="flex items-center gap-3 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1"><Clock className="h-3 w-3" />{formatDuration(course.durationMinutes)}</span>
                    <span className="flex items-center gap-1"><BookOpen className="h-3 w-3" />{course.lessonCount} lessons</span>
                  </div>
                  <Button
                    size="sm"
                    variant={isStarted ? "default" : "outline"}
                    asChild
                    className="rounded-sm"
                  >
                    <Link to={isStarted ? `/learn/${course.slug}/${course.modules[0]?.lessons[0]?.slug}` : `/courses/${course.slug}`}>
                      {isStarted ? "Continue" : "Start"}
                    </Link>
                  </Button>
                </div>
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
