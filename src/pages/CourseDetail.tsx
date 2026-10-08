import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Clock, Layers, User, CheckCircle2, Bookmark, BookmarkCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ImageWithFallback } from "@/components/shared/ImageWithFallback";
import { PageHeader } from "@/components/shared/PageHeader";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { LevelBadge, CategoryLabel } from "@/components/shared/LevelBadge";
import { courseService } from "@/services/courseService";
import { instructorService } from "@/services/instructorService";
import { learningPathService } from "@/services/learningPathService";
import { useProgress } from "@/features/progress/ProgressProvider";
import { useBookmarks } from "@/features/bookmarks/BookmarkProvider";
import { useCourseProgress } from "@/hooks/useCourseProgress";
import { formatDuration } from "@/lib/format";
import { cn } from "@/lib/utils";

export default function CourseDetailPage() {
  const { courseSlug } = useParams<{ courseSlug: string }>();
  const course = courseService.getBySlug(courseSlug ?? "");

  if (!course) {
    return (
      <div className="container py-12 text-center">
        <h1 className="display text-2xl mb-4">Course not found</h1>
        <Link to="/courses" className="text-gold-700 hover:underline">← Back to catalog</Link>
      </div>
    );
  }

  const instructor = instructorService.getById(course.instructorId);
  const { percentage, isStarted, isComplete, nextLessonSlug, markLessonComplete, isLessonComplete, getPercentage } = useCourseProgress(course);
  const { isSaved, toggle } = useBookmarks();
  const saved = isSaved(course.id);
  const related = courseService.getRelated(course, 4);

  // Find learning paths that include this course
  const paths = learningPathService.getAll().filter((p) => p.courseIds.includes(course.id));

  return (
    <div className="container py-8">
      <Breadcrumbs items={[
        { label: "Courses", href: "/courses" },
        { label: course.title },
      ]} />

      <div className="grid gap-8 lg:grid-cols-[1fr_380px]">
        {/* Main content */}
        <div className="space-y-8">
          {/* Hero */}
          <div className="relative rounded-sm overflow-hidden">
            <ImageWithFallback
              src={course.coverImage}
              alt=""
              className="aspect-[16/9] w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/10 to-transparent" aria-hidden="true" />
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <CategoryLabel category={course.category} />
                <LevelBadge level={course.level} />
              </div>
              <h1 className="display text-3xl sm:text-4xl text-white">{course.title}</h1>
              {course.subtitle && <p className="mt-1 text-lg text-white/80">{course.subtitle}</p>}
            </div>
          </div>

          {/* Meta & Actions */}
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-border pb-6">
            <div className="flex flex-wrap items-center gap-4">
              <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
                <Clock className="h-4 w-4" aria-hidden="true" />
                {formatDuration(course.durationMinutes)}
              </div>
              <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
                <Layers className="h-4 w-4" aria-hidden="true" />
                {course.lessonCount} lessons
              </div>
              {course.publishedAt && (
                <span className="text-sm text-muted-foreground">Published {new Date(course.publishedAt).toLocaleDateString("en-GB", { month: "long", year: "numeric" })}</span>
              )}
            </div>
            <div className="flex items-center gap-2">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => toggle(course.id)}
                aria-pressed={saved}
                aria-label={saved ? `Remove ${course.title} from saved` : `Save ${course.title}`}
              >
                {saved ? <BookmarkCheck className="h-5 w-5 text-gold-600" /> : <Bookmark className="h-5 w-5" />}
              </Button>
            </div>
          </div>

          {/* Description */}
          <div className="prose prose-neutral dark:prose-invert max-w-none reading-width">
            {course.description}
          </div>

          {/* Learning Outcomes */}
          {course.learningOutcomes.length > 0 && (
            <section className="space-y-3">
              <h2 className="display text-xl">What You'll Learn</h2>
              <ul className="space-y-2">
                {course.learningOutcomes.map((outcome, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-gold-600 dark:text-gold-300" aria-hidden="true" />
                    {outcome}
                  </li>
                ))}
              </ul>
            </section>
          )}

          {/* Requirements */}
          {course.requirements.length > 0 && (
            <section className="space-y-3">
              <h2 className="display text-xl">Requirements</h2>
              <ul className="space-y-2">
                {course.requirements.map((req, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <span className="mt-0.5 h-5 w-5 flex-shrink-0 text-gold-500/60">•</span>
                    {req}
                  </li>
                ))}
              </ul>
            </section>
          )}

          {/* Instructor */}
          {instructor && (
            <section className="space-y-3">
              <h2 className="display text-xl">Your Instructor</h2>
              <div className="flex items-start gap-4 p-4 rounded-sm border border-border bg-card">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-sm border border-gold-500/30 bg-gold-500/15 font-serif text-xl font-semibold text-gold-700 dark:text-gold-300" aria-hidden="true">
                  {instructor.initials}
                </div>
                <div>
                  <Link to={`/instructors/${instructor.slug}`} className="font-semibold text-foreground hover:text-gold-700 dark:hover:text-gold-300">
                    {instructor.name}
                  </Link>
                  <p className="text-sm text-muted-foreground">{instructor.role}</p>
                  <p className="mt-1 text-sm text-muted-foreground line-clamp-2">{instructor.biography}</p>
                </div>
              </div>
            </section>
          )}

          {/* Curriculum */}
          <section className="space-y-4">
            <h2 className="display text-xl">Curriculum</h2>
            {course.modules.map((module, moduleIndex) => (
              <Card key={module.id} className="overflow-hidden">
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-muted-foreground mb-1">
                        Module {moduleIndex + 1}
                      </p>
                      <h3 className="font-medium text-foreground">{module.title}</h3>
                    </div>
                    <span className="text-sm text-muted-foreground">
                      {module.lessons.length} lessons · {formatDuration(module.lessons.reduce((sum, l) => sum + l.durationMinutes, 0))}
                    </span>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <ul className="space-y-1" role="list">
                    {module.lessons.map((lesson) => {
                      const completed = isLessonComplete(lesson.id);
                      return (
                        <li key={lesson.id}>
                          <Link
                            to={`/learn/${course.slug}/${lesson.slug}`}
                            className={cn(
                              "flex items-center gap-3 px-2 py-2.5 rounded-sm transition-colors",
                              completed ? "bg-gold-500/5" : "hover:bg-secondary/60",
                            )}
                          >
                            <span className={cn("flex h-5 w-5 shrink-0 items-center justify-center", completed ? "text-gold-600" : "text-muted-foreground/60")} aria-hidden="true">
                              {completed ? <CheckCircle2 className="h-4 w-4" /> : <span className="h-3 w-3 rounded-full border border-border" />}
                            </span>
                            <span className={cn("flex-1 text-sm", completed ? "text-muted-foreground" : "text-foreground")}>
                              {lesson.title}
                            </span>
                            <span className="flex items-center gap-2 text-xs text-muted-foreground shrink-0">
                              <Badge variant="outline" className="text-[10px] px-2 py-0.5">{lesson.type}</Badge>
                              <span>{formatDuration(lesson.durationMinutes)}</span>
                            </span>
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </CardContent>
            </Card>
            ))}
          </section>

          {/* Related Courses */}
          {related.length > 0 && (
            <section className="space-y-4">
              <h2 className="display text-xl">Related Courses</h2>
              <div className="grid gap-4 sm:grid-cols-2">
                {related.map((c) => (
                  <Link key={c.id} to={`/courses/${c.slug}`} className="block rounded-sm border border-border bg-card hover:border-gold-500/50 transition-colors p-4">
                    <div className="flex items-start gap-3">
                      <ImageWithFallback src={c.coverImage} alt="" className="h-20 w-20 rounded-sm object-cover shrink-0" />
                      <div className="flex-1 min-w-0">
                        <p className="font-medium text-foreground truncate">{c.title}</p>
                        <p className="text-sm text-muted-foreground">{c.lessonCount} lessons · {formatDuration(c.durationMinutes)}</p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          )}

          {/* Learning Paths containing this course */}
          {paths.length > 0 && (
            <section className="space-y-4">
              <h2 className="display text-xl">Part of Learning Paths</h2>
              <div className="grid gap-4 sm:grid-cols-2">
                {paths.map((path) => (
                  <Link key={path.id} to={`/learning-paths/${path.slug}`} className="block rounded-sm border border-border bg-card hover:border-gold-500/50 transition-colors p-4">
                    <h3 className="font-medium text-foreground">{path.title}</h3>
                    <p className="text-sm text-muted-foreground mt-1">{path.courseIds.length} courses</p>
                  </Link>
                ))}
              </div>
            </section>
          )}
        </div>

        {/* Sidebar — Enroll / Continue */}
        <div className="lg:sticky lg:top-24 space-y-4">
          <Card>
            <CardContent className="p-6 space-y-4">
              {isComplete ? (
                <div className="text-center space-y-4">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gold-500/15 text-gold-600 dark:text-gold-300" aria-hidden="true">
                    <CheckCircle2 className="h-8 w-8" />
                  </div>
                  <h3 className="display text-lg">Course Completed</h3>
                  <p className="text-sm text-muted-foreground">You've finished all {course.lessonCount} lessons.</p>
                  <Link to={`/my-learning/certificates`}>
                    <Button className="w-full rounded-sm">View Certificate</Button>
                  </Link>
                  <Button variant="outline" onClick={() => markLessonComplete(course.modules[0].lessons[0].id)} className="w-full rounded-sm">
                    Review Course
                  </Button>
                </div>
              ) : isStarted ? (
                <div className="space-y-4">
                  <h3 className="display text-lg">Continue Learning</h3>
                  <Progress value={percentage} className="h-2" />
                  <div className="flex items-baseline justify-between text-sm">
                    <span className="font-medium">{percentage}% complete</span>
                    <span className="text-muted-foreground">{course.lessonCount} lessons total</span>
                  </div>
                  {nextLessonSlug && (
                    <Link to={`/learn/${course.slug}/${nextLessonSlug}`}>
                      <Button className="w-full rounded-sm">
                        Continue to Lesson {course.modules.flatMap(m => m.lessons).findIndex(l => l.slug === nextLessonSlug) + 1}
                      </Button>
                    </Link>
                  )}
                  <Link to={`/courses/${course.slug}`}>
                    <Button variant="outline" className="w-full rounded-sm">View Curriculum</Button>
                  </Link>
                </div>
              ) : (
                <div className="space-y-4 text-center">
                  <h3 className="display text-lg">Start This Course</h3>
                  <p className="text-sm text-muted-foreground">{course.lessonCount} lessons · {formatDuration(course.durationMinutes)}</p>
                  <Link to={`/learn/${course.slug}/${course.modules[0]?.lessons[0]?.slug}`}>
                    <Button className="w-full rounded-sm" size="lg">
                      Begin Course
                    </Button>
                  </Link>
                </div>
              )}

              <Separator />

              <div className="space-y-2 text-sm">
                <div className="flex items-center justify-between text-muted-foreground">
                  <span>Level</span>
                  <span className="font-medium text-foreground capitalize">{course.level}</span>
                </div>
                <div className="flex items-center justify-between text-muted-foreground">
                  <span>Language</span>
                  <span className="font-medium text-foreground">{course.language}</span>
                </div>
                <div className="flex items-center justify-between text-muted-foreground">
                  <span>Last Updated</span>
                  <span className="font-medium text-foreground">{new Date(course.updatedAt).toLocaleDateString("en-GB", { month: "short", year: "numeric" })}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}