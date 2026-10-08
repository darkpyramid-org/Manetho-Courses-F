import { Link } from "react-router-dom";
import { ArrowRight, Award, BookOpen, Compass, GraduationCap, Landmark, Library, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CourseGrid } from "@/components/course/CourseCard";
import { PageHeader } from "@/components/shared/PageHeader";
import { courseService } from "@/services/courseService";
import { learningPathService, learningPathStats } from "@/services/learningPathService";
import { topicService } from "@/services/topicService";
import { instructorService } from "@/services/instructorService";
import { homeFeatures } from "@/data/site/home";

const featureIcons = { book: BookOpen, compass: Compass, landmark: Landmark, graduation: GraduationCap, library: Library, award: Award } as const;

export function HomePage() {
  const featured = courseService.getFeatured();
  const recent = [...courseService.getAll()]
    .sort((a, b) => (b.publishedAt ?? "").localeCompare(a.publishedAt ?? ""))
    .slice(0, 3);
  const paths = learningPathService.getAll().slice(0, 3);
  const stats = [
    { label: "Courses", value: courseService.getAll().length },
    { label: "Learning Paths", value: learningPathService.getAll().length },
    { label: "Instructors", value: instructorService.getAll().length },
    { label: "Topics", value: topicService.getAll().length },
  ];

  return (
    <div className="space-y-20">
      {/* Hero */}
      <section aria-labelledby="hero-title" className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/hero.svg')] bg-cover bg-center opacity-5" aria-hidden="true" />
        <div className="relative container py-20 lg:py-32 text-center">
          <h1 id="hero-title" className="display text-5xl sm:text-6xl lg:text-7xl leading-tight mb-6">
            Learn Ancient Egypt
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto mb-10 leading-relaxed">
            Structured courses, curated learning paths, and primary resources —
            all grounded in archaeological evidence and scholarly consensus.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link to="/courses">
              <Button size="lg" className="rounded-sm px-8 py-3 text-lg">
                Browse Courses
                <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
              </Button>
            </Link>
            <Link to="/learning-paths">
              <Button size="lg" variant="outline" className="rounded-sm px-8 py-3 text-lg">
                Start a Learning Path
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section aria-labelledby="stats-title" className="border-y border-border py-12">
        <div className="container">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {stats.map((stat) => (
              <div key={stat.label}>
                <div className="display text-4xl sm:text-5xl font-bold text-foreground">{stat.value}</div>
                <div className="mt-1 text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Courses */}
      <section aria-labelledby="featured-title" className="space-y-6">
        <div className="container">
          <div className="flex items-center justify-between mb-6">
            <div>
              <PageHeader
                eyebrow="Featured"
                title="Start Here"
                description="Hand-picked courses to begin your journey through Ancient Egypt."
              />
            </div>
            <Link to="/courses">
              <Button variant="ghost" className="rounded-sm">
                View all <ArrowRight className="ml-1.5 h-4 w-4" aria-hidden="true" />
              </Button>
            </Link>
          </div>
        </div>
        <div className="container">
          <CourseGrid courses={featured} />
        </div>
      </section>

      {/* Features */}
      <section aria-labelledby="features-title" className="space-y-6">
        <div className="container">
          <PageHeader
            eyebrow="Why Manetho"
            title="Built for Serious Study"
            description="Not a casual app — a learning platform with scholarly rigor, honest framing, and no marketing fluff."
          />
        </div>
        <div className="container">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {homeFeatures.map((feature) => {
              const Icon = featureIcons[feature.icon];
              return (
              <Card key={feature.title} className="h-full transition-colors hover:border-gold-500/50">
                <CardContent className="p-6">
                  <div className="flex h-11 w-11 items-center justify-center rounded-sm border border-gold-500/30 bg-gold-500/10 text-gold-700 dark:text-gold-300 mb-4" aria-hidden="true">
                    <Icon className="h-5.5 w-5.5" />
                  </div>
                  <h3 className="display text-lg font-semibold mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{feature.description}</p>
                  <Link to={feature.href} className="text-sm font-semibold text-gold-700 dark:text-gold-300 hover:text-gold-600 dark:hover:text-gold-400 flex items-center gap-1">
                    Explore
                    <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                  </Link>
                </CardContent>
              </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Recent Courses */}
      <section aria-labelledby="recent-title" className="space-y-6">
        <div className="container">
          <div className="flex items-center justify-between mb-6">
            <PageHeader
              eyebrow="New & Updated"
              title="Recently Published"
              description="The latest additions to the catalog."
            />
            <Link to="/courses">
              <Button variant="ghost" className="rounded-sm">
                View all <ArrowRight className="ml-1.5 h-4 w-4" aria-hidden="true" />
              </Button>
            </Link>
          </div>
        </div>
        <div className="container">
          <CourseGrid courses={recent} />
        </div>
      </section>

      {/* Learning Paths Preview */}
      <section aria-labelledby="paths-title" className="space-y-6">
        <div className="container">
          <div className="flex items-center justify-between mb-6">
            <PageHeader
              eyebrow="Guided Journeys"
              title="Learning Paths"
              description="Structured curricula that take you from beginner to advanced across a theme."
            />
            <Link to="/learning-paths">
              <Button variant="ghost" className="rounded-sm">
                View all <ArrowRight className="ml-1.5 h-4 w-4" aria-hidden="true" />
              </Button>
            </Link>
          </div>
        </div>
        <div className="container">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {paths.map((path) => {
              const stats = learningPathStats(path);
              return (
                <Card key={path.id} className="h-full flex flex-col">
                  <Link to={`/learning-paths/${path.slug}`} className="block h-full">
                    <CardContent className="p-6 flex-1 flex flex-col">
                      <Badge variant="secondary" className="text-[10px] mb-3 w-fit">{path.level}</Badge>
                      <h3 className="display text-lg font-semibold mb-2">{path.title}</h3>
                      <p className="text-sm text-muted-foreground mb-4 flex-1">{path.description}</p>
                      <div className="flex flex-wrap gap-2 text-xs text-muted-foreground">
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
      </section>

      {/* CTA */}
      <section className="border-y border-border py-16">
        <div className="container text-center">
          <h2 className="display text-3xl sm:text-4xl mb-4">Ready to Begin?</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            Create a free demo account to track your progress, save courses, and earn certificates.
            No payment, no spam — just learning.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link to="/register">
              <Button size="lg" className="rounded-sm px-8">
                Start Free
                <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
              </Button>
            </Link>
            <Link to="/courses">
              <Button size="lg" variant="outline" className="rounded-sm px-8">
                Browse Catalog
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
