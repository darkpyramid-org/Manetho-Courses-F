import { Link } from "react-router-dom";
import { GraduationCap, BookOpen, Award, User, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { PageHeader } from "@/components/shared/PageHeader";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { ImageWithFallback } from "@/components/shared/ImageWithFallback";
import { instructorService } from "@/services/instructorService";
import { courseService } from "@/services/courseService";
import { formatDuration } from "@/lib/format";
import { useParams } from "react-router-dom";

export default function InstructorsPage() {
  const instructors = instructorService.getAll();

  return (
    <div className="container py-8">
      <Breadcrumbs items={[{ label: "Instructors" }]} />
      <PageHeader
        eyebrow="Meet the Experts"
        title="Instructors"
        description="Scholars, archaeologists, and educators specializing in Ancient Egypt. Each brings deep expertise in their field."
      />
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {instructors.map((instructor) => {
          const courses = instructor.courseIds.map((id) => courseService.getById(id)).filter((c): c is NonNullable<typeof c> => Boolean(c));
          return (
            <Card key={instructor.id} className="h-full flex flex-col" asChild>
              <Link to={`/instructors/${instructor.slug}`}>
                <CardContent className="p-6 flex-1 flex flex-col">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-sm border border-gold-500/30 bg-gold-500/15 font-serif text-xl font-semibold text-gold-700 dark:text-gold-300" aria-hidden="true">
                      {instructor.initials}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="display text-lg font-semibold">{instructor.name}</h3>
                      <p className="text-sm text-muted-foreground">{instructor.role}</p>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4 flex-1">{instructor.biography}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {instructor.specialties.slice(0, 4).map((s) => (
                      <Badge key={s} variant="outline" className="text-[10px] h-5 px-2">{s}</Badge>
                    ))}
                    {instructor.specialties.length > 4 && (
                      <Badge variant="secondary" className="text-[10px] h-5 px-2">+{instructor.specialties.length - 4} more</Badge>
                    )}
                  </div>
                  <Button variant="outline" className="w-full rounded-sm" asChild>
                    <Link to={`/instructors/${instructor.slug}`}>View Profile</Link>
                  </Button>
                </CardContent>
              </Link>
            </Card>
          );
        })}
      </div>
    </div>
  );
}

export default function InstructorDetailPage() {
  const { instructorSlug } = useParams<{ instructorSlug: string }>();
  const instructor = instructorService.getBySlug(instructorSlug ?? "");

  if (!instructor) {
    return (
      <div className="container py-12 text-center">
        <h1 className="display text-2xl mb-4">Instructor not found</h1>
        <Link to="/instructors" className="text-gold-700 hover:underline">← Back to instructors</Link>
      </div>
    );
  }

  const courses = instructor.courseIds.map((id) => courseService.getById(id)).filter((c): c is NonNullable<typeof c> => Boolean(c));
  const totalLessons = courses.reduce((sum, c) => sum + c.lessonCount, 0);
  const totalMinutes = courses.reduce((sum, c) => sum + c.durationMinutes, 0);

  return (
    <div className="container py-8">
      <Breadcrumbs items={[
        { label: "Instructors", href: "/instructors" },
        { label: instructor.name },
      ]} />

      <div className="grid gap-8 lg:grid-cols-[1fr_380px]">
        <div className="space-y-8">
          <div className="flex items-start gap-6">
            <div className="flex h-24 w-24 shrink-0 items-center justify-center rounded-sm border border-gold-500/30 bg-gold-500/15 font-serif text-2xl font-semibold text-gold-700 dark:text-gold-300" aria-hidden="true">
              {instructor.initials}
            </div>
            <div>
              <h1 className="display text-3xl">{instructor.name}</h1>
              <p className="mt-1 text-lg text-muted-foreground">{instructor.role}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {instructor.specialties.map((s) => (
                  <Badge key={s} variant="outline" className="text-[10px]">{s}</Badge>
                ))}
              </div>
            </div>
          </div>

          <div className="prose prose-neutral dark:prose-invert max-w-none reading-width">
            {instructor.biography}
          </div>

          {courses.length > 0 && (
            <section>
              <h2 className="display text-xl mb-4">Courses</h2>
              <div className="grid gap-4 sm:grid-cols-2">
                {courses.map((course) => (
                  <Link key={course.id} to={`/courses/${course.slug}`} className="block rounded-sm border border-border bg-card hover:border-gold-500/50 transition-colors p-4">
                    <div className="flex items-start gap-3">
                      <ImageWithFallback src={course.coverImage} alt="" className="h-20 w-20 rounded-sm object-cover shrink-0" />
                      <div className="flex-1 min-w-0">
                        <p className="font-medium text-foreground truncate">{course.title}</p>
                        <p className="text-sm text-muted-foreground">{course.lessonCount} lessons · {formatDuration(course.durationMinutes)}</p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          )}
        </div>

        <aside className="lg:sticky lg:top-24 space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="display text-lg">At a Glance</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Courses</span>
                <span className="font-medium">{courses.length}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Total Lessons</span>
                <span className="font-medium">{totalLessons}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Total Duration</span>
                <span className="font-medium">{formatDuration(totalMinutes)}</span>
              </div>
            </CardContent>
          </Card>

          {instructor.credentials.length > 0 && (
            <Card>
              <CardHeader>
                <CardTitle className="display text-lg">Credentials</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {instructor.credentials.map((cred, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Award className="mt-0.5 h-4 w-4 flex-shrink-0 text-gold-500" aria-hidden="true" />
                      {cred}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          )}
        </aside>
      </div>
    </div>
  );
}