import { Link } from "react-router-dom";
import { BookOpen, Clock, Award, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { PageHeader } from "@/components/shared/PageHeader";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { ImageWithFallback } from "@/components/shared/ImageWithFallback";
import { learningPathService, learningPathStats } from "@/services/learningPathService";
import { courseService } from "@/services/courseService";
import { formatDuration } from "@/lib/format";
import { useParams } from "react-router-dom";

export default function LearningPathsPage() {
  const paths = learningPathService.getAll();

  return (
    <div className="container py-8">
      <Breadcrumbs items={[{ label: "Learning Paths" }]} />
      <PageHeader
        eyebrow="Guided Journeys"
        title="Learning Paths"
        description="Structured curricula that take you from beginner to advanced across a theme. Each path is an ordered sequence of courses with derived progress tracking."
      />
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {paths.map((path) => {
          const stats = learningPathStats(path);
          return (
            <Card key={path.id} className="h-full flex flex-col">
              <Link to={`/learning-paths/${path.slug}`} className="block h-full">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary" className="text-[10px]">{path.level}</Badge>
                    <span className="text-xs text-muted-foreground">{path.courseIds.length} courses</span>
                  </div>
                  <CardTitle className="display text-lg">{path.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col pt-0">
                  <p className="text-sm text-muted-foreground mb-4 flex-1">{path.description}</p>
                  <div className="flex flex-wrap gap-3 text-xs text-muted-foreground mb-4">
                    <span className="flex items-center gap-1"><BookOpen className="h-3 w-3" />{stats.totalLessons} lessons</span>
                    <span className="flex items-center gap-1"><Clock className="h-3 w-3" />{stats.durationLabel}</span>
                    <span className="flex items-center gap-1"><Award className="h-3 w-3" />{stats.courseCount} courses</span>
                  </div>
                </CardContent>
              </Link>
            </Card>
          );
        })}
      </div>
    </div>
  );
}

export function LearningPathDetailPage() {
  const { pathSlug } = useParams<{ pathSlug: string }>();
  const path = learningPathService.getBySlug(pathSlug ?? "");

  if (!path) {
    return (
      <div className="container py-12 text-center">
        <h1 className="display text-2xl mb-4">Learning path not found</h1>
        <Link to="/learning-paths" className="text-gold-700 hover:underline">← Back to paths</Link>
      </div>
    );
  }

  const stats = learningPathStats(path);
  const courses = stats.courses;

  return (
    <div className="container py-8">
      <Breadcrumbs items={[
        { label: "Learning Paths", href: "/learning-paths" },
        { label: path.title },
      ]} />

      <div className="grid gap-8 lg:grid-cols-[1fr_380px]">
        <div className="space-y-8">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Badge variant="secondary" className="text-[10px]">{path.level}</Badge>
            </div>
            <h1 className="display text-3xl sm:text-4xl">{path.title}</h1>
            <p className="mt-2 text-lg text-muted-foreground">{path.description}</p>
          </div>

          <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
            <span className="flex items-center gap-1"><BookOpen className="h-4 w-4" />{stats.totalLessons} lessons</span>
            <span className="flex items-center gap-1"><Clock className="h-4 w-4" />{stats.durationLabel}</span>
            <span className="flex items-center gap-1"><Award className="h-4 w-4" />{stats.courseCount} courses</span>
          </div>

          <section className="space-y-4">
            <h2 className="display text-xl">Courses in this Path</h2>
            <div className="space-y-3">
              {path.courseIds.map((courseId, index) => {
                const course = courseService.getById(courseId);
                if (!course) return null;
                return (
                  <Link key={course.id} to={`/courses/${course.slug}`} className="block rounded-sm border border-border bg-card hover:border-gold-500/50 transition-colors p-4">
                    <div className="flex items-center gap-4">
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-sm border border-gold-500/30 bg-gold-500/15 font-serif text-sm font-semibold text-gold-700 dark:text-gold-300" aria-hidden="true">
                        {index + 1}
                      </span>
                      <ImageWithFallback src={course.coverImage} alt="" className="h-16 w-16 rounded-sm object-cover shrink-0" />
                      <div className="flex-1 min-w-0">
                        <p className="font-medium text-foreground truncate">{course.title}</p>
                        <p className="text-sm text-muted-foreground">{course.lessonCount} lessons · {formatDuration(course.durationMinutes)}</p>
                      </div>
                      <ArrowRight className="h-5 w-5 text-muted-foreground shrink-0" aria-hidden="true" />
                    </div>
                  </Link>
                );
              })}
            </div>
          </section>
        </div>

        <div className="lg:sticky lg:top-24">
          <Card>
            <CardHeader>
              <CardTitle className="display text-lg">Path Progress</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="text-center">
                <div className="display text-4xl font-bold text-foreground">0%</div>
                <p className="text-sm text-muted-foreground mt-1">Complete</p>
              </div>
              <Button className="w-full rounded-sm" asChild>
                <Link to={`/courses/${courses[0]?.slug}`}>Start Path</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
