import { useMemo, useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Search, Clock, BookOpen } from "lucide-react";
import { courseService } from "@/services/courseService";
import { instructorService } from "@/services/instructorService";
import { formatDuration } from "@/lib/format";
import type { Course, CourseCategory, CourseLevel } from "@/types";
import { courseCategoryFilters, courseLevelFilters } from "@/data/courseOptions";

type CategoryFilter = "all" | CourseCategory;
type LevelFilter = "all" | CourseLevel;

const categories: { value: CategoryFilter; label: string }[] = courseCategoryFilters;
const levels: { value: LevelFilter; label: string }[] = courseLevelFilters;

const levelStyles: Record<CourseLevel, string> = {
  beginner: "border-fern-500/30 bg-fern-500/20 text-fern-400",
  intermediate: "border-amber-500/30 bg-amber-500/20 text-amber-400",
  advanced: "border-rose-500/30 bg-rose-500/20 text-rose-400",
};

function CourseCard({ course }: { course: Course }) {
  const instructor = instructorService.getById(course.instructorId);

  return (
    <article className="group flex min-w-0 flex-col rounded-2xl border border-border bg-card/50 p-5 transition-colors hover:border-primary/50 hover:bg-card sm:p-6">
      <div className="mb-5 flex items-start justify-between gap-3">
        <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary" aria-hidden="true">
          <BookOpen className="size-5" />
        </div>
        <Badge variant="outline" className={levelStyles[course.level]}>
          {course.level}
        </Badge>
      </div>
      <h2 className="text-lg font-semibold text-foreground transition-colors group-hover:text-primary">
        {course.title}
      </h2>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
        {course.shortDescription}
      </p>
      <div className="mt-4 flex flex-wrap gap-2">
        {course.tags.slice(0, 3).map((tag) => (
          <span key={tag} className="rounded-md bg-secondary px-2 py-1 text-xs text-muted-foreground">
            {tag}
          </span>
        ))}
      </div>
      <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-2 border-t border-border pt-4 text-xs text-muted-foreground">
        <span className="flex items-center gap-1"><Clock className="size-3.5" />{formatDuration(course.durationMinutes)}</span>
        <span>{course.lessonCount} lessons</span>
      </div>
      {instructor && <p className="mt-3 text-xs text-muted-foreground">By <span className="text-foreground">{instructor.name}</span></p>}
    </article>
  );
}

export default function Courses() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState<CategoryFilter>("all");
  const [level, setLevel] = useState<LevelFilter>("all");
  const courses = courseService.getAll();

  const filteredCourses = useMemo(() => {
    const query = search.trim().toLowerCase();
    return courses.filter((course) => {
      const matchesSearch = !query || [course.title, course.description, ...course.tags].some((value) => value.toLowerCase().includes(query));
      return matchesSearch && (category === "all" || course.category === category) && (level === "all" || course.level === level);
    });
  }, [courses, search, category, level]);

  return (
    <div className="container py-12">
          <header className="mx-auto mb-10 max-w-3xl text-center sm:mb-12">
            <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-primary">Manetho curriculum</p>
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">Course <span className="text-gradient">catalog</span></h1>
            <p className="mt-4 text-base text-muted-foreground sm:text-lg">Study ancient Egypt through carefully sourced courses built around evidence, context, and clear chronology.</p>
          </header>
          <div className="mb-8 flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
            <label className="relative min-w-0 flex-1 lg:max-w-md">
              <span className="sr-only">Search courses</span>
              <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
              <Input type="search" placeholder="Search the Manetho catalog" value={search} onChange={(event) => setSearch(event.target.value)} className="h-11 pl-10" />
            </label>
            <div className="grid grid-cols-2 gap-3">
              <label>
                <span className="sr-only">Filter by subject</span>
                <select className="h-11 w-full rounded-md border border-input bg-background px-3 text-sm text-foreground" value={category} onChange={(event) => setCategory(event.target.value as CategoryFilter)}>
                  {categories.map((item) => <option key={item.value} value={item.value}>{item.label}</option>)}
                </select>
              </label>
              <label>
                <span className="sr-only">Filter by level</span>
                <select className="h-11 w-full rounded-md border border-input bg-background px-3 text-sm text-foreground" value={level} onChange={(event) => setLevel(event.target.value as LevelFilter)}>
                  {levels.map((item) => <option key={item.value} value={item.value}>{item.label}</option>)}
                </select>
              </label>
            </div>
          </div>
          <p className="mb-6 text-sm text-muted-foreground">Showing {filteredCourses.length} of {courses.length} courses</p>
          {filteredCourses.length > 0 ? (
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">{filteredCourses.map((course) => <CourseCard key={course.id} course={course} />)}</div>
          ) : (
            <div className="py-20 text-center"><BookOpen className="mx-auto mb-4 size-12 text-muted-foreground" /><h2 className="text-lg font-semibold">No courses found</h2><p className="mt-2 text-muted-foreground">Try adjusting your search or filters.</p><Button variant="outline" className="mt-4" onClick={() => { setSearch(""); setCategory("all"); setLevel("all"); }}>Clear filters</Button></div>
          )}
    </div>
  );
}
