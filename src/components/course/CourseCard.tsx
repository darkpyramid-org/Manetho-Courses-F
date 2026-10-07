import { Link } from "react-router-dom";
import { ArrowRight, Bookmark, BookmarkCheck, Clock, Layers } from "lucide-react";
import type { Course } from "@/types";
import { instructorService } from "@/services/instructorService";
import { formatDuration } from "@/lib/format";
import { useCourseProgress } from "@/hooks/useCourseProgress";
import { useBookmarks } from "@/features/bookmarks/BookmarkProvider";
import { LevelBadge, CategoryLabel } from "@/components/shared/LevelBadge";
import { ImageWithFallback } from "@/components/shared/ImageWithFallback";
import { Progress } from "@/components/ui/progress";

/**
 * CourseCard — the standard course tile.
 *
 * Shows cover, category, level, title, description,
 * instructor, duration and lesson count; progress
 * and a "Continue" action when the learner has started.
 */
export function CourseCard({ course }: { course: Course }) {
  const instructor = instructorService.getById(course.instructorId);
  const { percentage, isStarted, isComplete, nextLessonSlug } =
    useCourseProgress(course);
  const { isSaved, toggle } = useBookmarks();
  const saved = isSaved(course.id);

  return (
    <article className="group relative flex flex-col overflow-hidden rounded-sm border border-border bg-card transition-colors hover:border-gold-500/50">
      <Link
        to={`/courses/${course.slug}`}
        className="block overflow-hidden"
        aria-label={`Open course: ${course.title}`}
      >
        <ImageWithFallback
          src={course.coverImage}
          alt=""
          className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />
      </Link>

      <div className="flex flex-1 flex-col p-5">
        <div className="mb-2.5 flex items-center justify-between gap-2">
          <CategoryLabel category={course.category} />
          <LevelBadge level={course.level} />
        </div>

        <h3 className="display mb-1.5 text-xl leading-snug">
          <Link
            to={`/courses/${course.slug}`}
            className="transition-colors group-hover:text-gold-700 dark:group-hover:text-gold-300"
          >
            {course.title}
          </Link>
        </h3>

        <p className="mb-4 line-clamp-2 text-sm leading-relaxed text-muted-foreground">
          {course.shortDescription}
        </p>

        <div className="flex items-center gap-4 text-xs text-muted-foreground">
          <span className="inline-flex items-center gap-1.5">
            <Clock className="h-3.5 w-3.5" aria-hidden="true" />
            {formatDuration(course.durationMinutes)}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Layers className="h-3.5 w-3.5" aria-hidden="true" />
            {course.lessonCount} lessons
          </span>
        </div>

        {instructor && (
          <p className="mt-3 text-xs text-muted-foreground">
            <span className="text-muted-foreground/70">Instructor</span>{" "}
            <Link
              to={`/instructors/${instructor.slug}`}
              className="font-medium text-foreground/90 hover:text-foreground hover:underline"
            >
              {instructor.name}
            </Link>
          </p>
        )}

        <div className="mt-auto pt-5">
          {isStarted || isComplete ? (
            <div>
              <div className="mb-2 flex items-baseline justify-between text-xs">
                <span className="font-medium text-foreground">
                  {isComplete
                    ? "Completed"
                    : `${percentage}% complete`}
                </span>
                <span className="text-muted-foreground">
                  {course.lessonCount} lessons
                </span>
              </div>
              <Progress
                value={percentage}
                className="h-1.5"
                aria-label={`${percentage}% of ${course.title} completed`}
              />
              <Link
                to={
                  isComplete
                    ? `/courses/${course.slug}`
                    : nextLessonSlug
                      ? `/learn/${course.slug}/${nextLessonSlug}`
                      : `/courses/${course.slug}`
                }
                className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-gold-700 transition-colors hover:text-gold-600 dark:text-gold-300 dark:hover:text-gold-400"
              >
                {isComplete ? "Review course" : "Continue learning"}
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          ) : (
            <Link
              to={`/courses/${course.slug}`}
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-foreground transition-colors hover:text-gold-700 dark:hover:text-gold-300"
            >
              View course
              <ArrowRight
                aria-hidden="true"
                className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
              />
            </Link>
          )}
        </div>
      </div>

      <button
        type="button"
        onClick={() => toggle(course.id)}
        aria-pressed={saved}
        aria-label={saved ? `Remove ${course.title} from saved courses` : `Save ${course.title}`}
        title={saved ? "Remove from saved" : "Save course"}
        className={`absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-sm border backdrop-blur transition-colors ${
          saved
            ? "border-gold-500/50 bg-gold-500/90 text-white"
            : "border-border/60 bg-background/80 text-muted-foreground hover:text-foreground"
        }`}
      >
        {saved ? (
          <BookmarkCheck className="h-4 w-4" aria-hidden="true" />
        ) : (
          <Bookmark className="h-4 w-4" aria-hidden="true" />
        )}
      </button>
    </article>
  );
}

export function CourseGrid({ courses }: { courses: Course[] }) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {courses.map((course) => (
        <CourseCard key={course.id} course={course} />
      ))}
    </div>
  );
}
