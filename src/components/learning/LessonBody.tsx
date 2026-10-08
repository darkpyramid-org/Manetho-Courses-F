import { Link } from "react-router-dom";
import {
  Play,
  Puzzle,
  BookOpen,
  Clock,
  ArrowRight,
  ExternalLink,
  Calendar,
  CheckCircle2,
} from "lucide-react";
import type { Lesson, Resource } from "@/types";
import { lessonTypeIcon, lessonTypeLabel } from "@/components/learning/Curriculum";
import { resourceService } from "@/services/resourceService";
import { formatDate } from "@/lib/format";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ImageWithFallback } from "@/components/shared/ImageWithFallback";
import { cn } from "@/lib/utils";

/** Video lesson — stylized placeholder (no real video URLs in seed data). */
export function VideoLesson({ lesson }: { lesson: Lesson }) {
  const duration = lesson.durationMinutes;
  return (
    <div className="space-y-6">
      <div
        className="relative aspect-video rounded-sm border border-border bg-secondary/60 flex items-center justify-center"
        role="img"
        aria-label={`Video placeholder: ${lesson.title} (${duration} min)`}
      >
        <div className="flex flex-col items-center gap-4 text-center p-8">
          <button
            type="button"
            className="flex h-20 w-20 items-center justify-center rounded-full bg-gold-500/20 border border-gold-500/40 text-gold-700 dark:text-gold-300 transition-colors hover:bg-gold-500/30"
            aria-label="Play video (placeholder)"
            disabled
          >
            <Play className="h-8 w-8 ml-1" aria-hidden="true" />
          </button>
          <div>
            <p className="text-sm font-medium text-foreground">Video lesson</p>
            <p className="text-xs text-muted-foreground">
              {duration} minutes
            </p>
          </div>
          <p className="text-xs text-muted-foreground/70 max-w-xs">
            This is a placeholder. In a production build, this would embed
            a video player (YouTube, Vimeo, or self-hosted).
          </p>
        </div>
      </div>

      {lesson.content && (
        <div className="prose prose-neutral dark:prose-invert max-w-none">
          {lesson.content}
        </div>
      )}
    </div>
  );
}

/** Reading lesson — rendered with Tailwind typography prose. */
export function ReadingLesson({ lesson }: { lesson: Lesson }) {
  return (
    <div className="prose prose-neutral dark:prose-invert max-w-none reading-width">
      {lesson.content ? (
        lesson.content
      ) : (
        <p className="text-muted-foreground">
          Reading content not yet authored for this lesson.
        </p>
      )}
    </div>
  );
}

/** Quiz lesson — links to the quiz player page. */
export function QuizLesson({ lesson, courseSlug }: { lesson: Lesson; courseSlug: string }) {
  return (
    <div className="space-y-6">
      <div className="rounded-sm border border-gold-500/40 bg-gold-500/10 p-6">
        <div className="flex items-start gap-4">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-sm border border-gold-500/40 bg-gold-500/15 text-gold-700 dark:text-gold-300" aria-hidden="true">
            <Puzzle className="h-6 w-6" />
          </div>
          <div className="flex-1">
            <h3 className="display text-lg font-semibold">
              Knowledge Check: {lesson.title}
            </h3>
            <p className="mt-1 text-sm text-muted-foreground">
              Test your understanding of this module.
            </p>
          </div>
        </div>
      </div>

      <Link
        to={`/quiz/${courseSlug}/${lesson.slug}`}
        className="inline-flex items-center gap-2 rounded-sm bg-gold-500 px-5 py-2.5 text-sm font-semibold text-white hover:bg-gold-600 transition-colors"
      >
        Start quiz
        <ArrowRight className="h-4 w-4" aria-hidden="true" />
      </Link>
    </div>
  );
}

/** Exercise lesson — guided practice with instructions. */
export function ExerciseLesson({ lesson }: { lesson: Lesson }) {
  return (
    <div className="prose prose-neutral dark:prose-invert max-w-none reading-width">
      <div className="mb-6 rounded-sm border border-terracotta-500/40 bg-terracotta-500/10 p-4">
        <div className="flex items-start gap-3">
          <BookOpen className="mt-0.5 h-5 w-5 text-terracotta-600 dark:text-terracotta-300" aria-hidden="true" />
          <div>
            <p className="font-semibold text-terracotta-800 dark:text-terracotta-200">
              Practice Exercise
            </p>
            <p className="text-sm text-terracotta-700 dark:text-terracotta-300">
              Apply what you've learned. Work through the exercise before checking
              the suggested approach.
            </p>
          </div>
        </div>
      </div>

      {lesson.content ? (
        lesson.content
      ) : (
        <p className="text-muted-foreground">
          Exercise content not yet authored for this lesson.
        </p>
      )}
    </div>
  );
}

/** Image gallery lesson — grid of SVG images with captions. */
export function GalleryLesson({ lesson }: { lesson: Lesson }) {
  const images = lesson.gallery ?? [];

  return (
    <div className="space-y-6">
      <p className="text-sm text-muted-foreground">
        {images.length} image{images.length !== 1 ? "s" : ""} in this gallery.
      </p>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {images.map((src, index) => (
          <figure key={src} className="rounded-sm overflow-hidden border border-border bg-card">
            <ImageWithFallback
              src={src}
              alt={`Gallery image ${index + 1}`}
              className="aspect-[4/3] w-full object-cover"
            />
          </figure>
        ))}
      </div>

      {lesson.content && (
        <div className="prose prose-neutral dark:prose-invert max-w-none reading-width">
          {lesson.content}
        </div>
      )}
    </div>
  );
}

/** Timeline lesson — vertical timeline of events. */
export function TimelineLesson({ lesson }: { lesson: Lesson }) {
  const events = lesson.timeline ?? [];

  return (
    <div className="space-y-6">
      {events.length > 0 && (
        <div className="relative pl-4 border-l border-gold-500/30">
          {events.map((event, index) => (
            <div key={`${event.date}-${index}`} className="relative pb-6 last:pb-0">
              <div className="absolute -left-[9px] top-0 flex h-4 w-4 items-center justify-center">
                <span
                  className="h-2.5 w-2.5 rounded-full bg-gold-500 border-2 border-background"
                  aria-hidden="true"
                />
              </div>
              <div className="ms-4">
                <time className="text-[11px] font-semibold uppercase tracking-wider text-gold-600 dark:text-gold-300" dateTime={event.date}>
                  {event.date}
                </time>
                <h4 className="mt-1 font-medium text-foreground">{event.title}</h4>
                {event.description && (
                  <p className="mt-0.5 text-sm text-muted-foreground">{event.description}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      )}

      {lesson.content && (
        <div className="prose prose-neutral dark:prose-invert max-w-none reading-width">
          {lesson.content}
        </div>
      )}
    </div>
  );
}

/** Resource lesson — links to resources (maps, timelines, glossaries, etc.). */
export function ResourceLesson({ lesson }: { lesson: Lesson }) {
  const resources = lesson.resources
    ?.map((id) => resourceService.getById(id))
    .filter((r): r is Resource => Boolean(r)) ?? [];

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap gap-2">
        {resources.map((r) => (
          <Badge key={r.id} variant="outline" className="text-[11px]">
            {r.type.replace("-", " ")}
          </Badge>
        ))}
      </div>

      {resources.length > 0 && (
        <div className="space-y-3">
          {resources.map((resource) => (
            <div key={resource.id} className="rounded-sm border border-border bg-card p-4">
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 text-xs text-muted-foreground mb-1">
                    <span className="px-2 py-0.5 rounded-xs border border-border bg-secondary/60">
                      {resource.type.replace("-", " ")}
                    </span>
                    {resource.updatedAt && (
                      <>
                        <Calendar className="h-3 w-3" aria-hidden="true" />
                        <span>{formatDate(resource.updatedAt)}</span>
                      </>
                    )}
                  </div>
                  <Link
                    to={`/resources/${resource.slug}`}
                    className="block font-medium text-foreground hover:text-gold-700 dark:hover:text-gold-300 transition-colors"
                  >
                    {resource.title}
                  </Link>
                  {resource.description && (
                    <p className="mt-1 text-sm text-muted-foreground line-clamp-2">
                      {resource.description}
                    </p>
                  )}
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  asChild
                  className="shrink-0"
                >
                  <Link to={`/resources/${resource.slug}`}>
                    Open
                    <ExternalLink className="ml-1.5 h-3.5 w-3.5" aria-hidden="true" />
                  </Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      )}

      {lesson.content && (
        <div className="prose prose-neutral dark:prose-invert max-w-none reading-width">
          {lesson.content}
        </div>
      )}
    </div>
  );
}

/** Main lesson renderer — dispatches by lesson type. */
export function LessonBody({ lesson, courseSlug }: { lesson: Lesson; courseSlug: string }) {
  switch (lesson.type) {
    case "video":
      return <VideoLesson lesson={lesson} />;
    case "reading":
      return <ReadingLesson lesson={lesson} />;
    case "quiz":
      return <QuizLesson lesson={lesson} courseSlug={courseSlug} />;
    case "exercise":
      return <ExerciseLesson lesson={lesson} />;
    case "image-gallery":
      return <GalleryLesson lesson={lesson} />;
    case "timeline":
      return <TimelineLesson lesson={lesson} />;
    case "resource":
      return <ResourceLesson lesson={lesson} />;
    default:
      return (
        <div className="prose prose-neutral dark:prose-invert max-w-none reading-width">
          <p className="text-muted-foreground">
            Unknown lesson type: {lesson.type}
          </p>
        </div>
      );
  }
}

/** Lesson meta bar — type badge, duration, completion status. */
export function LessonMeta({ lesson, completed }: { lesson: Lesson; completed: boolean }) {
  return (
    <div className="flex flex-wrap items-center gap-2.5 mb-4">
      <Badge
        variant="outline"
        className={cn("text-[11px]", completed && "border-gold-500/50 text-gold-700 dark:text-gold-300")}
      >
        <span className="inline-flex items-center gap-1.5">
          {lessonTypeIcon(lesson.type, "h-3 w-3")}
          {lessonTypeLabel(lesson.type)}
        </span>
      </Badge>

      <span className="flex items-center gap-1 text-xs text-muted-foreground">
        <Clock className="h-3 w-3" aria-hidden="true" />
        {lesson.durationMinutes} min
      </span>

      {completed && (
        <Badge variant="secondary" className="text-[11px]">
          <CheckCircle2 className="mr-1.5 h-3 w-3" aria-hidden="true" />
          Completed
        </Badge>
      )}
    </div>
  );
}
