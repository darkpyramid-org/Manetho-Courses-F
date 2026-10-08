import { Link } from "react-router-dom";
import { Landmark, BookOpen, GraduationCap, Library, ArrowRight, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { PageHeader } from "@/components/shared/PageHeader";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { ImageWithFallback } from "@/components/shared/ImageWithFallback";
import { topicService } from "@/services/topicService";
import { courseService } from "@/services/courseService";
import { resourceService } from "@/services/resourceService";
import { instructorService } from "@/services/instructorService";
import { useParams } from "react-router-dom";

export default function TopicsPage() {
  const topics = topicService.getAll();

  return (
    <div className="container py-8">
      <Breadcrumbs items={[{ label: "Topics" }]} />
      <PageHeader
        eyebrow="Explore by Theme"
        title="Topics"
        description="Thematic collections that gather related courses, resources, and instructors. Start with a topic that interests you."
      />
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {topics.map((topic) => (
          <Card key={topic.id} className="h-full flex flex-col overflow-hidden" asChild>
            <Link to={`/topics/${topic.slug}`}>
              <div className="aspect-[4/3] relative overflow-hidden">
                <ImageWithFallback
                  src={topic.image}
                  alt=""
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <CardHeader>
                <CardTitle className="display text-lg">{topic.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col pt-0">
                <p className="text-sm text-muted-foreground mb-4 flex-1">{topic.description}</p>
                <div className="flex flex-wrap gap-2 text-[11px] text-muted-foreground mb-4">
                  <Badge variant="outline" className="h-5 px-2">{topic.courseIds.length} courses</Badge>
                  <Badge variant="outline" className="h-5 px-2">{topic.resourceIds.length} resources</Badge>
                  <Badge variant="outline" className="h-5 px-2">{topic.instructorIds.length} instructors</Badge>
                </div>
                <Button variant="outline" className="w-full rounded-sm" asChild>
                  <Link to={`/topics/${topic.slug}`}>Explore</Link>
                </Button>
              </CardContent>
            </Link>
          </Card>
        ))}
      </div>
    </div>
  );
}

export function TopicDetailPage() {
  const { topicSlug } = useParams<{ topicSlug: string }>();
  const topic = topicService.getBySlug(topicSlug ?? "");

  if (!topic) {
    return (
      <div className="container py-12 text-center">
        <h1 className="display text-2xl mb-4">Topic not found</h1>
        <Link to="/topics" className="text-gold-700 hover:underline">← Back to topics</Link>
      </div>
    );
  }

  const courses = topic.courseIds.map((id) => courseService.getById(id)).filter((c): c is NonNullable<typeof c> => Boolean(c));
  const resources = topic.resourceIds.map((id) => resourceService.getById(id)).filter((r): r is NonNullable<typeof r> => Boolean(r));
  const instructors = topic.instructorIds.map((id) => instructorService.getById(id)).filter((i): i is NonNullable<typeof i> => Boolean(i));

  return (
    <div className="container py-8">
      <Breadcrumbs items={[
        { label: "Topics", href: "/topics" },
        { label: topic.title },
      ]} />

      <div className="mb-8">
        <div className="aspect-[16/9] rounded-sm overflow-hidden mb-6">
          <ImageWithFallback src={topic.image} alt="" className="w-full h-full object-cover" />
        </div>
        <h1 className="display text-3xl sm:text-4xl">{topic.title}</h1>
        {topic.longDescription && <p className="mt-4 text-lg text-muted-foreground">{topic.longDescription}</p>}
      </div>

      <div className="grid gap-8 lg:grid-cols-[1fr_380px]">
        <div className="space-y-10">
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
                        <p className="text-sm text-muted-foreground">{course.lessonCount} lessons · {course.level}</p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          )}

          {resources.length > 0 && (
            <section>
              <h2 className="display text-xl mb-4">Resources</h2>
              <div className="space-y-3">
                {resources.map((resource) => (
                  <Link key={resource.id} to={`/resources/${resource.slug}`} className="block rounded-sm border border-border bg-card hover:border-gold-500/50 transition-colors p-4">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 text-xs text-muted-foreground mb-1">
                          <Badge variant="outline" className="text-[10px]">{resource.type.replace("-", " ")}</Badge>
                        </div>
                        <p className="font-medium text-foreground">{resource.title}</p>
                        <p className="text-sm text-muted-foreground line-clamp-2">{resource.description}</p>
                      </div>
                      <ArrowRight className="h-5 w-5 text-muted-foreground shrink-0" aria-hidden="true" />
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          )}

          {instructors.length > 0 && (
            <section>
              <h2 className="display text-xl mb-4">Instructors</h2>
              <div className="grid gap-4 sm:grid-cols-2">
                {instructors.map((instructor) => (
                  <Link key={instructor.id} to={`/instructors/${instructor.slug}`} className="block rounded-sm border border-border bg-card hover:border-gold-500/50 transition-colors p-4">
                    <div className="flex items-center gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-sm border border-gold-500/30 bg-gold-500/15 font-serif text-lg font-semibold text-gold-700 dark:text-gold-300" aria-hidden="true">
                        {instructor.initials}
                      </div>
                      <div>
                        <p className="font-medium text-foreground">{instructor.name}</p>
                        <p className="text-sm text-muted-foreground">{instructor.role}</p>
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
              <CardTitle className="display text-lg">Topic Overview</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Courses</span>
                <span className="font-medium">{courses.length}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Resources</span>
                <span className="font-medium">{resources.length}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Instructors</span>
                <span className="font-medium">{instructors.length}</span>
              </div>
            </CardContent>
          </Card>
        </aside>
      </div>
    </div>
  );
}