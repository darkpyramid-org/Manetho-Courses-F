import { Link, useNavigate, useParams } from "react-router-dom";
import {
  CheckCircle2,
  Circle,
  FileText,
  Image as ImageIcon,
  LayoutList,
  Puzzle,
  BookOpen,
  ArrowLeft,
  ArrowRight,
  Clock,
  X,
  Bookmark,
  BookmarkCheck,
  Play,
} from "lucide-react";
import { Sheet, SheetContent } from "@/components/ui/sheet";
import type { Course, Lesson, LessonType } from "@/types";
import { useCourseProgress } from "@/hooks/useCourseProgress";
import { useBookmarks } from "@/features/bookmarks/BookmarkProvider";
import { lessonNeighbours, lessonNumber } from "@/services/courseService";
import { instructorService } from "@/services/instructorService";
import { formatDuration } from "@/lib/format";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";

export function lessonTypeIcon(type: LessonType, className = "h-4 w-4") {
  switch (type) {
    case "video":
      return <Play className={className} aria-hidden="true" />;
    case "reading":
      return <FileText className={className} aria-hidden="true" />;
    case "quiz":
      return <Puzzle className={className} aria-hidden="true" />;
    case "exercise":
      return <BookOpen className={className} aria-hidden="true" />;
    case "image-gallery":
      return <ImageIcon className={className} aria-hidden="true" />;
    case "timeline":
      return <Clock className={className} aria-hidden="true" />;
    default:
      return <FileText className={className} aria-hidden="true" />;
  }
}

export function lessonTypeLabel(type: LessonType): string {
  switch (type) {
    case "video":
      return "Video";
    case "reading":
      return "Reading";
    case "quiz":
      return "Quiz";
    case "exercise":
      return "Exercise";
    case "image-gallery":
      return "Gallery";
    case "timeline":
      return "Timeline";
    default:
      return "Resource";
  }
}

/**
 * Curriculum — the sticky lesson list.
 * Used on desktop as a sidebar and on mobile inside a sheet.
 */
export function Curriculum({
  course,
  currentLessonSlug,
  onNavigate,
}: {
  course: Course;
  currentLessonSlug: string;
  onNavigate?: (lessonSlug: string) => void;
}) {
  const { isLessonComplete, percentage, completedCount, totalLessons } =
    useCourseProgress(course);
  const { isSaved, toggle } = useBookmarks();
  const instructor = instructorService.getById(course.instructorId);

  return (
    <div className="flex h-full flex-col">
      {/* Course summary */}
      <div className="border-b border-border p-5">
        <p className="eyebrow mb-1.5">Course curriculum</p>
        <h2 className="display text-lg leading-snug">{course.title}</h2>
        {instructor && (
          <p className="mt-1 text-xs text-muted-foreground">
            {instructor.name}
          </p>
        )}
        <div className="mt-4">
          <div className="mb-1.5 flex items-baseline justify-between text-xs">
            <span className="font-medium text-foreground">
              {completedCount} of {totalLessons} lessons
            </span>
            <span className="text-muted-foreground">{percentage}%</span>
          </div>
          <Progress
            value={percentage}
            className="h-1.5"
            aria-label={`${percentage}% of ${course.title} completed`}
          />
        </div>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => toggle(course.id)}
          aria-pressed={isSaved(course.id)}
          className="mt-4 h-8 rounded-sm px-3 text-xs text-muted-foreground"
        >
          {isSaved(course.id) ? (
            <>
              <BookmarkCheck className="mr-1.5 h-3.5 w-3.5 text-gold-600 dark:text-gold-300" aria-hidden="true" />
              Saved
            </>
          ) : (
            <>
              <Bookmark className="mr-1.5 h-3.5 w-3.5" aria-hidden="true" />
              Save course
            </>
          )}
        </Button>
      </div>

      {/* Lesson list */}
      <ScrollArea className="flex-1">
        <nav aria-label="Course lessons" className="p-4">
          {course.modules.map((module, moduleIndex) => (
            <section key={module.id} className="mb-5 last:mb-2">
              <h3 className="mb-2 px-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                Module {moduleIndex + 1}
              </h3>
              <p className="mb-2 px-2 text-sm font-medium text-foreground">
                {module.title}
              </p>
              <ul className="space-y-0.5">
                {module.lessons.map((lesson) => {
                  const active = lesson.slug === currentLessonSlug;
                  const done = isLessonComplete(lesson.id);
                  return (
                    <li key={lesson.id}>
                      <Link
                        to={`/learn/${course.slug}/${lesson.slug}`}
                        onClick={() => onNavigate?.(lesson.slug)}
                        aria-current={active ? "page" : undefined}
                        className={cn(
                          "group flex items-start gap-2.5 rounded-sm px-2 py-2 text-left transition-colors",
                          active
                            ? "bg-secondary"
                            : "hover:bg-secondary/60",
                        )}
                      >
                        <span
                          aria-hidden="true"
                          className={cn(
                            "mt-0.5 flex h-4.5 w-4.5 shrink-0 items-center justify-center",
                            done
                              ? "text-gold-600 dark:text-gold-400"
                              : "text-muted-foreground/60",
                          )}
                        >
                          {done ? (
                            <CheckCircle2 className="h-4 w-4" />
                          ) : (
                            <Circle className="h-3.5 w-3.5" />
                          )}
                        </span>
                        <span className="min-w-0 flex-1">
                          <span
                            className={cn(
                              "block text-sm leading-snug",
                              active
                                ? "font-semibold text-foreground"
                                : "text-foreground/90",
                              done && !active && "text-muted-foreground",
                            )}
                          >
                            {lesson.title}
                          </span>
                          <span className="mt-0.5 flex items-center gap-2 text-[11px] text-muted-foreground">
                            <span className="inline-flex items-center gap-1">
                              {lessonTypeIcon(lesson.type, "h-3 w-3")}
                              {lessonTypeLabel(lesson.type)}
                            </span>
                            <span aria-hidden="true">·</span>
                            <span>{formatDuration(lesson.durationMinutes)}</span>
                          </span>
                        </span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </section>
          ))}
        </nav>
      </ScrollArea>
    </div>
  );
}

/**
 * LessonHeader — the top bar inside the lesson player:
 * course name, lesson number, progress.
 */
export function LessonHeader({
  course,
  lesson,
  onOpenCurriculum,
}: {
  course: Course;
  lesson: Lesson;
  onOpenCurriculum: () => void;
}) {
  const { percentage } = useCourseProgress(course);
  const number = lessonNumber(course, lesson.slug);
  return (
    <div className="sticky top-16 z-30 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/85">
      <div className="container flex h-14 items-center justify-between gap-3">
        <div className="flex min-w-0 items-center gap-3">
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8 shrink-0 rounded-sm lg:hidden"
            onClick={onOpenCurriculum}
            aria-label="Open course curriculum"
          >
            <LayoutList className="h-4.5 w-4.5" aria-hidden="true" />
          </Button>
          <div className="min-w-0">
            <Link
              to={`/courses/${course.slug}`}
              className="block truncate text-[11px] font-semibold uppercase tracking-[0.16em] text-muted-foreground hover:text-foreground"
            >
              {course.title}
            </Link>
            <p className="truncate text-sm font-medium text-foreground">
              Lesson {String(number).padStart(2, "0")} — {lesson.title}
            </p>
          </div>
        </div>
        <div className="flex shrink-0 items-center gap-3">
          <span className="hidden text-xs text-muted-foreground sm:block">
            {percentage}% complete
          </span>
          <Progress
            value={percentage}
            className="h-1.5 w-28 sm:w-40"
            aria-label={`${percentage}% of ${course.title} completed`}
          />
          <Link to={`/courses/${course.slug}`} aria-label="Back to course">
            <ArrowLeft className="h-4 w-4 text-muted-foreground hover:text-foreground" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </div>
  );
}

/**
 * LessonNavigation — previous / next / mark complete controls.
 */
export function LessonNavigation({
  course,
  lesson,
  onPrevious,
}: {
  course: Course;
  lesson: Lesson;
  onPrevious: () => void;
}) {
  const { markLessonComplete, isLessonComplete, isComplete } =
    useCourseProgress(course);
  const neighbours = lessonNeighbours(course, lesson.slug);
  const done = isLessonComplete(lesson.id);
  const navigate = useNavigate();
  const { courseSlug } = useParams<{
    courseSlug: string;
    lessonSlug: string;
  }>();

  const handleNext = () => {
    if (!done) {
      markLessonComplete(lesson.id);
    }
    if (neighbours.next) {
      navigate(`/learn/${courseSlug}/${neighbours.next.slug}`);
    } else if (isComplete || course.lessonCount > 0) {
      // Final lesson: go to the course completion view.
      navigate(`/courses/${courseSlug}`);
    }
  };

  return (
    <nav
      aria-label="Lesson navigation"
      className="mt-12 border-t border-border pt-8"
    >
      <div className="grid gap-4 sm:grid-cols-[1fr_auto_1fr] sm:items-center">
        {neighbours.prev ? (
          <Button
            variant="outline"
            onClick={onPrevious}
            className="justify-start rounded-sm"
          >
            <ArrowLeft className="mr-2 h-4 w-4" aria-hidden="true" />
            <span className="truncate">
              <span className="block text-[11px] font-normal uppercase tracking-wider text-muted-foreground">
                Previous lesson
              </span>
              {neighbours.prev.title}
            </span>
          </Button>
        ) : (
          <span />
        )}

        <Button
          onClick={() => markLessonComplete(lesson.id)}
          disabled={done}
          className="rounded-sm px-8"
          aria-pressed={done}
        >
          {done ? (
            <>
              <CheckCircle2 className="mr-2 h-4 w-4" aria-hidden="true" />
              Completed
            </>
          ) : (
            "Mark as complete"
          )}
        </Button>

        {neighbours.next ? (
          <Button
            variant="default"
            onClick={handleNext}
            className="justify-end rounded-sm sm:justify-start"
          >
            <span className="truncate">
              <span className="block text-right text-[11px] font-normal uppercase tracking-wider opacity-80 sm:text-left">
                Next lesson
              </span>
              {neighbours.next.title}
            </span>
            <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
          </Button>
        ) : (
          <Button
            variant="default"
            onClick={handleNext}
            className="justify-end rounded-sm sm:justify-start"
          >
            <span className="block text-right text-[11px] font-normal uppercase tracking-wider opacity-80 sm:text-left">
              Finish course
            </span>
            {course.title}
            <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
          </Button>
        )}
      </div>
    </nav>
  );
}

/** Mobile curriculum sheet content wrapper. */
export function MobileCurriculumSheet({
  course,
  currentLessonSlug,
  open,
  onOpenChange,
}: {
  course: Course;
  currentLessonSlug: string;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  const navigate = useNavigate();
  const { courseSlug } = useParams<{ courseSlug: string }>();
  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent
        side="left"
        className="w-full max-w-sm rounded-none border-border bg-card p-0"
      >
        <div className="flex h-full flex-col">
          <div className="flex items-center justify-between border-b border-border p-4">
            <p className="eyebrow">Curriculum</p>
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8 rounded-sm"
              onClick={() => onOpenChange(false)}
              aria-label="Close curriculum"
            >
              <X className="h-4.5 w-4.5" aria-hidden="true" />
            </Button>
          </div>
          <div className="flex-1">
            <Curriculum
              course={course}
              currentLessonSlug={currentLessonSlug}
              onNavigate={() => {
                onOpenChange(false);
                navigate(`/learn/${courseSlug}/${currentLessonSlug}`);
              }}
            />
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
