import { Link } from "react-router-dom";
import {
  BookOpen,
  Award,
  Bookmark,
  Clock,
  ArrowRight,
  CheckCircle2,
  X,
} from "lucide-react";
import type { Course, CourseProgress, Certificate } from "@/types";
import { courseService } from "@/services/courseService";
import { useProgress } from "@/features/progress/ProgressProvider";
import { useBookmarks } from "@/features/bookmarks/BookmarkProvider";
import { formatDuration } from "@/lib/format";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { Separator } from "@/components/ui/separator";
import { ImageWithFallback } from "@/components/shared/ImageWithFallback";
import { LevelBadge, CategoryLabel } from "@/components/shared/LevelBadge";
import { cn } from "@/lib/utils";

/** ContinueLearning — shows the top in-progress course with a Continue button. */
export function ContinueLearning() {
  const { getAllProgress, getPercentage, getCurrentLessonId } = useProgress();
  const progresses = getAllProgress();

  if (progresses.length === 0) return null;

  // Sort by most recent activity (startedAt)
  const sorted = [...progresses].sort(
    (a, b) => new Date(b.startedAt).getTime() - new Date(a.startedAt).getTime(),
  );

  const current = sorted[0];
  const course = courseService.getById(current.courseId);
  if (!course) return null;

  const percentage = getPercentage(course.id);
  const currentLessonId = getCurrentLessonId(course.id);
  let nextLessonSlug: string | null = null;

  if (currentLessonId) {
    for (const module of course.modules) {
      for (const lesson of module.lessons) {
        if (lesson.id === currentLessonId) {
          const flat = course.modules.flatMap((m) => m.lessons);
          const idx = flat.findIndex((l) => l.id === currentLessonId);
          if (idx >= 0 && idx < flat.length - 1) {
            nextLessonSlug = flat[idx + 1].slug;
          }
          break;
        }
      }
    }
  } else {
    // No current lesson — find first incomplete
    for (const module of course.modules) {
      for (const lesson of module.lessons) {
        if (!current.completedLessons.includes(lesson.id)) {
          nextLessonSlug = lesson.slug;
          break;
        }
      }
      if (nextLessonSlug) break;
    }
  }

  return (
    <Card className="border-gold-500/30 bg-gold-500/5">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between gap-4">
          <div className="min-w-0">
            <div className="flex items-center gap-2 mb-1">
              <Badge variant="secondary" className="text-[10px]">
                In Progress
              </Badge>
              <CategoryLabel category={course.category} />
            </div>
            <Link
              to={`/courses/${course.slug}`}
              className="display text-lg font-semibold text-foreground hover:text-gold-700 dark:hover:text-gold-300"
            >
              {course.title}
            </Link>
          </div>
          <div className="text-right">
            <div className="text-sm font-medium text-foreground">{percentage}%</div>
            <div className="text-xs text-muted-foreground">
              {current.completedLessons.length} of {course.lessonCount} lessons
            </div>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <Progress value={percentage} className="h-1.5 mb-4" />
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-3 text-xs text-muted-foreground">
            <span className="flex items-center gap-1">
              <Clock className="h-3 w-3" aria-hidden="true" />
              {formatDuration(course.durationMinutes)}
            </span>
            <span className="flex items-center gap-1">
              <BookOpen className="h-3 w-3" aria-hidden="true" />
              {course.lessonCount} lessons
            </span>
          </div>
          {nextLessonSlug && (
            <Link to={`/learn/${course.slug}/${nextLessonSlug}`}>
              <Button size="sm" className="rounded-sm">
                <ArrowRight className="mr-1.5 h-3.5 w-3.5" aria-hidden="true" />
                Continue
              </Button>
            </Link>
          )}
        </div>
      </CardContent>
    </Card>
  );
}

/** StatCard — a single stat in the dashboard grid. */
export function StatCard({
  label,
  value,
  icon,
  trend,
}: {
  label: string;
  value: string | number;
  icon: React.ReactNode;
  trend?: string;
}) {
  return (
    <Card className="text-center py-5">
      <CardContent className="pt-0">
        <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-sm border border-border bg-secondary/60 text-muted-foreground">
          {icon}
        </div>
        <div className="display text-3xl font-bold text-foreground">{value}</div>
        <div className="mt-1 text-xs text-muted-foreground">{label}</div>
        {trend && (
          <div className="mt-1 text-[11px] text-gold-600 dark:text-gold-300">
            {trend}
          </div>
        )}
      </CardContent>
    </Card>
  );
}

/** CertificateCard — displays an earned certificate. */
export function CertificateCard({
  certificate,
  onVerify,
}: {
  certificate: Certificate;
  onVerify?: () => void;
}) {
  const course = courseService.getById(certificate.courseId);

  return (
    <Card className="relative overflow-hidden border-gold-500/30">
      <div className="absolute inset-0 bg-gradient-to-br from-gold-500/10 via-transparent to-transparent" aria-hidden="true" />
      <CardHeader className="relative">
        <div className="flex items-start justify-between">
          <div>
            <Badge variant="secondary" className="text-[10px] mb-2">
              Certificate of Completion
            </Badge>
            <p className="display text-xl font-semibold">{certificate.courseTitle}</p>
            <p className="text-sm text-muted-foreground mt-1">
              Issued {new Date(certificate.issuedAt).toLocaleDateString("en-GB", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>
          </div>
          <Award className="h-10 w-10 text-gold-500/50" aria-hidden="true" />
        </div>
      </CardHeader>
      <CardContent className="relative">
        <div className="flex items-center justify-between text-xs text-muted-foreground mb-3">
          <span>Student: {certificate.studentName}</span>
          <span>ID: {certificate.id.slice(0, 12)}…</span>
        </div>
        <div className="flex flex-wrap gap-2">
          <Button variant="outline" size="sm" onClick={onVerify} className="rounded-sm">
            <Award className="mr-1.5 h-3.5 w-3.5" aria-hidden="true" />
            Verify
          </Button>
          {course && (
            <Link to={`/courses/${course.slug}`}>
              <Button variant="ghost" size="sm" className="rounded-sm">
                <BookOpen className="mr-1.5 h-3.5 w-3.5" aria-hidden="true" />
                Review Course
              </Button>
            </Link>
          )}
        </div>
        <p className="mt-3 text-[11px] text-muted-foreground/70">
          This certificate demonstrates completion of the course. It is not an accredited
          qualification.
        </p>
      </CardContent>
    </Card>
  );
}

/** InProgressCourseCard — card for a course in the "In Progress" tab. */
export function InProgressCourseCard({ progress }: { progress: CourseProgress }) {
  const course = courseService.getById(progress.courseId);
  if (!course) return null;

  const { isLessonComplete } = useProgress(course);
  const completedCount = progress.completedLessons.length;

  return (
    <article className="flex flex-col overflow-hidden rounded-sm border border-border bg-card">
      <Link to={`/courses/${course.slug}`} className="block overflow-hidden" aria-label={course.title}>
        <ImageWithFallback
          src={course.coverImage}
          alt=""
          className="aspect-[4/3] w-full object-cover"
        />
      </Link>
      <div className="flex flex-1 flex-col p-4">
        <div className="flex items-center gap-2 mb-2">
          <CategoryLabel category={course.category} />
          <LevelBadge level={course.level} />
        </div>
        <h3 className="display mb-1.5 text-lg leading-snug">
          <Link to={`/courses/${course.slug}`} className="text-foreground hover:text-gold-700 dark:hover:text-gold-300">
            {course.title}
          </Link>
        </h3>
        <div className="mb-3">
          <div className="flex items-baseline justify-between text-xs mb-1">
            <span className="font-medium text-foreground">{progress.percentage}% complete</span>
            <span className="text-muted-foreground">{completedCount} of {course.lessonCount}</span>
          </div>
          <Progress value={progress.percentage} className="h-1.5" />
        </div>
        <Link
          to={`/learn/${course.slug}/${findNextLessonSlug(course, progress.completedLessons)}`}
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-gold-700 dark:text-gold-300 hover:text-gold-600 dark:hover:text-gold-400"
        >
          Continue
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </Link>
      </div>
    </article>
  );
}

function findNextLessonSlug(course: Course, completed: string[]): string {
  for (const module of course.modules) {
    for (const lesson of module.lessons) {
      if (!completed.includes(lesson.id)) return lesson.slug;
    }
  }
  return course.modules[0]?.lessons[0]?.slug ?? "";
}

/** SavedCourseCard — card for a bookmarked course in the "Saved" tab. */
export function SavedCourseCard({ courseId }: { courseId: string }) {
  const course = courseService.getById(courseId);
  if (!course) return null;

  const { getPercentage } = useProgress(course);
  const percentage = getPercentage(course.id);
  const { remove } = useBookmarks();
  const isStarted = percentage > 0;

  return (
    <article className="flex flex-col overflow-hidden rounded-sm border border-border bg-card">
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
          <CategoryLabel category={course.category} />
          <LevelBadge level={course.level} />
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
            <Progress value={percentage} className="h-1.5" />
          </div>
        )}
        <div className="mt-auto flex items-center justify-between pt-3">
          <div className="flex items-center gap-3 text-xs text-muted-foreground">
            <span className="flex items-center gap-1">
              <Clock className="h-3 w-3" aria-hidden="true" />
              {formatDuration(course.durationMinutes)}
            </span>
            <span className="flex items-center gap-1">
              <BookOpen className="h-3 w-3" aria-hidden="true" />
              {course.lessonCount} lessons
            </span>
          </div>
          <Button
            size="sm"
            variant={isStarted ? "default" : "outline"}
            asChild
            className="rounded-sm"
          >
            <Link to={isStarted ? `/learn/${course.slug}/${findNextLessonSlug(course, [])}` : `/courses/${course.slug}`}>
              {isStarted ? "Continue" : "Start"}
            </Link>
          </Button>
        </div>
      </div>
    </article>
  );
}

/** CompletedCourseCard — card for a finished course in the "Completed" tab. */
export function CompletedCourseCard({ progress }: { progress: CourseProgress }) {
  const course = courseService.getById(progress.courseId);
  if (!course) return null;

  return (
    <article className="flex flex-col overflow-hidden rounded-sm border border-border bg-card">
      <Link to={`/courses/${course.slug}`} className="block overflow-hidden" aria-label={course.title}>
        <ImageWithFallback
          src={course.coverImage}
          alt=""
          className="aspect-[4/3] w-full object-cover"
        />
      </Link>
      <div className="flex flex-1 flex-col p-4">
        <div className="flex items-center gap-2 mb-2">
          <CategoryLabel category={course.category} />
          <LevelBadge level={course.level} />
        </div>
        <h3 className="display mb-1.5 text-lg leading-snug">
          <Link to={`/courses/${course.slug}`} className="text-foreground hover:text-gold-700 dark:hover:text-gold-300">
            {course.title}
          </Link>
        </h3>
        <div className="flex items-center gap-2 mb-3 text-sm text-gold-600 dark:text-gold-300">
          <CheckCircle2 className="h-4 w-4" aria-hidden="true" />
          <span className="font-medium">Completed</span>
        </div>
        <div className="mt-auto flex items-center justify-between pt-3">
          <div className="flex items-center gap-3 text-xs text-muted-foreground">
            <span className="flex items-center gap-1">
              <Clock className="h-3 w-3" aria-hidden="true" />
              {formatDuration(course.durationMinutes)}
            </span>
            <span className="flex items-center gap-1">
              <BookOpen className="h-3 w-3" aria-hidden="true" />
              {course.lessonCount} lessons
            </span>
          </div>
          <Button variant="ghost" size="sm" asChild className="rounded-sm">
            <Link to={`/courses/${course.slug}`}>
              Review
            </Link>
          </Button>
        </div>
      </div>
    </article>
  );
}

/** LearningPathsCard — card for a learning path in the "Paths" tab. */
export function LearningPathCard({ path }: { path: { id: string; slug: string; title: string; description: string; courseIds: string[]; level: string } }) {
  const courses = path.courseIds.map((id) => courseService.getById(id)).filter((c): c is Course => Boolean(c));
  const totalLessons = courses.reduce((sum, c) => sum + c.lessonCount, 0);
  const totalMinutes = courses.reduce((sum, c) => sum + c.durationMinutes, 0);

  return (
    <article className="flex flex-col overflow-hidden rounded-sm border border-border bg-card">
      <div className="aspect-[16/9] bg-secondary/60 flex items-center justify-center">
        <BookOpen className="h-12 w-12 text-muted-foreground/40" aria-hidden="true" />
      </div>
      <div className="flex flex-1 flex-col p-4">
        <Badge variant="secondary" className="text-[10px] mb-2 w-fit">
          {path.level}
        </Badge>
        <h3 className="display mb-1.5 text-lg leading-snug">
          <Link to={`/learning-paths/${path.slug}`} className="text-foreground hover:text-gold-700 dark:hover:text-gold-300">
            {path.title}
          </Link>
        </h3>
        <p className="mb-3 text-sm text-muted-foreground line-clamp-2">{path.description}</p>
        <div className="mb-3 flex items-center gap-3 text-xs text-muted-foreground">
          <span className="flex items-center gap-1">{courses.length} courses</span>
          <span className="flex items-center gap-1">{totalLessons} lessons</span>
          <span className="flex items-center gap-1">{formatDuration(totalMinutes)}</span>
        </div>
        <Button variant="outline" asChild className="mt-auto rounded-sm w-full">
          <Link to={`/learning-paths/${path.slug}`}>View Path</Link>
        </Button>
      </div>
    </article>
  );
}