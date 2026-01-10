import { useState, useMemo } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Search,
  Clock,
  Users,
  Star,
  BookOpen,
  Code2,
  Database,
  Palette,
  Shield,
  Zap,
  BarChart3,
} from "lucide-react";

type Difficulty = "beginner" | "intermediate" | "advanced";
type Category = "all" | "frontend" | "backend" | "design" | "devops" | "data";

interface Course {
  id: string;
  title: string;
  description: string;
  instructor: string;
  duration: string;
  students: number;
  rating: number;
  reviews: number;
  difficulty: Difficulty;
  category: Category;
  icon: typeof Code2;
  tags: string[];
  progress?: number;
}

const courses: Course[] = [
  {
    id: "1",
    title: "React Fundamentals",
    description:
      "Master React from the ground up. Learn components, hooks, state management, and build real applications.",
    instructor: "Sarah Chen",
    duration: "12 hours",
    students: 15420,
    rating: 4.9,
    reviews: 2341,
    difficulty: "beginner",
    category: "frontend",
    icon: Code2,
    tags: ["React", "JavaScript", "Hooks"],
    progress: 65,
  },
  {
    id: "2",
    title: "Advanced TypeScript Patterns",
    description:
      "Deep dive into TypeScript's type system. Generics, conditional types, and enterprise patterns.",
    instructor: "Marcus Johnson",
    duration: "8 hours",
    students: 8932,
    rating: 4.8,
    reviews: 1205,
    difficulty: "advanced",
    category: "frontend",
    icon: Code2,
    tags: ["TypeScript", "Patterns", "Types"],
  },
  {
    id: "3",
    title: "Node.js API Development",
    description:
      "Build scalable REST APIs with Node.js, Express, and MongoDB. Authentication, testing, and deployment.",
    instructor: "Alex Rivera",
    duration: "16 hours",
    students: 12100,
    rating: 4.7,
    reviews: 1876,
    difficulty: "intermediate",
    category: "backend",
    icon: Database,
    tags: ["Node.js", "Express", "MongoDB"],
    progress: 30,
  },
  {
    id: "4",
    title: "UI/UX Design Systems",
    description:
      "Create cohesive design systems from scratch. Figma, tokens, components, and documentation.",
    instructor: "Emma Wilson",
    duration: "10 hours",
    students: 6540,
    rating: 4.9,
    reviews: 892,
    difficulty: "intermediate",
    category: "design",
    icon: Palette,
    tags: ["Figma", "Design Systems", "UI"],
  },
  {
    id: "5",
    title: "Docker & Kubernetes",
    description:
      "Containerize applications and orchestrate with Kubernetes. From basics to production deployments.",
    instructor: "James Park",
    duration: "14 hours",
    students: 9870,
    rating: 4.8,
    reviews: 1432,
    difficulty: "advanced",
    category: "devops",
    icon: Shield,
    tags: ["Docker", "Kubernetes", "DevOps"],
  },
  {
    id: "6",
    title: "Python for Data Science",
    description:
      "Learn Python, pandas, NumPy, and visualization. Analyze real datasets and build ML models.",
    instructor: "Dr. Lisa Zhang",
    duration: "20 hours",
    students: 18650,
    rating: 4.9,
    reviews: 3102,
    difficulty: "beginner",
    category: "data",
    icon: BarChart3,
    tags: ["Python", "Pandas", "ML"],
  },
  {
    id: "7",
    title: "Next.js Full Stack",
    description:
      "Build production apps with Next.js 14. Server components, API routes, and deployment strategies.",
    instructor: "Sarah Chen",
    duration: "15 hours",
    students: 11200,
    rating: 4.8,
    reviews: 1654,
    difficulty: "intermediate",
    category: "frontend",
    icon: Zap,
    tags: ["Next.js", "React", "Full Stack"],
  },
  {
    id: "8",
    title: "PostgreSQL Mastery",
    description:
      "Advanced SQL, query optimization, indexing strategies, and database design patterns.",
    instructor: "Michael Torres",
    duration: "11 hours",
    students: 7320,
    rating: 4.7,
    reviews: 987,
    difficulty: "advanced",
    category: "backend",
    icon: Database,
    tags: ["PostgreSQL", "SQL", "Database"],
  },
];

const categories = [
  { value: "all", label: "All Categories" },
  { value: "frontend", label: "Frontend" },
  { value: "backend", label: "Backend" },
  { value: "design", label: "Design" },
  { value: "devops", label: "DevOps" },
  { value: "data", label: "Data Science" },
];

const difficulties = [
  { value: "all", label: "All Levels" },
  { value: "beginner", label: "Beginner" },
  { value: "intermediate", label: "Intermediate" },
  { value: "advanced", label: "Advanced" },
];

const difficultyColors: Record<Difficulty, string> = {
  beginner: "bg-fern-500/20 text-fern-400 border-fern-500/30",
  intermediate: "bg-amber-500/20 text-amber-400 border-amber-500/30",
  advanced: "bg-rose-500/20 text-rose-400 border-rose-500/30",
};

function CourseCard({ course }: { course: Course }) {
  const Icon = course.icon;

  return (
    <article className="group relative flex flex-col rounded-2xl border border-border bg-card/50 p-6 transition-smooth hover:border-primary/50 hover:bg-card">
      {/* Hover glow */}
      <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-radial from-primary/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />

      <div className="relative flex flex-1 flex-col">
        {/* Header */}
        <div className="mb-4 flex items-start justify-between">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-smooth group-hover:bg-primary group-hover:text-primary-foreground">
            <Icon className="h-6 w-6" />
          </div>
          <Badge
            variant="outline"
            className={difficultyColors[course.difficulty]}
          >
            {course.difficulty}
          </Badge>
        </div>

        {/* Content */}
        <h3 className="mb-2 text-lg font-semibold text-foreground group-hover:text-primary transition-colors-smooth">
          {course.title}
        </h3>
        <p className="mb-4 flex-1 text-sm leading-relaxed text-muted-foreground">
          {course.description}
        </p>

        {/* Tags */}
        <div className="mb-4 flex flex-wrap gap-2">
          {course.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-md bg-secondary px-2 py-1 text-xs text-muted-foreground"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Progress bar */}
        {course.progress !== undefined && (
          <div className="mb-4">
            <div className="mb-1 flex justify-between text-xs">
              <span className="text-muted-foreground">Progress</span>
              <span className="text-primary">{course.progress}%</span>
            </div>
            <div className="h-1.5 rounded-full bg-secondary">
              <div
                className="h-full rounded-full bg-primary transition-all"
                style={{ width: `${course.progress}%` }}
              />
            </div>
          </div>
        )}

        {/* Meta */}
        <div className="flex items-center justify-between border-t border-border pt-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              {course.duration}
            </span>
            <span className="flex items-center gap-1">
              <Users className="h-4 w-4" />
              {course.students.toLocaleString()}
            </span>
          </div>
          <span className="flex items-center gap-1">
            <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
            {course.rating}
          </span>
        </div>

        {/* Instructor */}
        <p className="mt-3 text-xs text-muted-foreground">
          by <span className="text-foreground">{course.instructor}</span>
        </p>
      </div>
    </article>
  );
}

export default function Courses() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState<string>("all");
  const [difficulty, setDifficulty] = useState<string>("all");

  const filteredCourses = useMemo(() => {
    return courses.filter((course) => {
      const matchesSearch =
        course.title.toLowerCase().includes(search.toLowerCase()) ||
        course.description.toLowerCase().includes(search.toLowerCase()) ||
        course.tags.some((tag) =>
          tag.toLowerCase().includes(search.toLowerCase())
        );
      const matchesCategory =
        category === "all" || course.category === category;
      const matchesDifficulty =
        difficulty === "all" || course.difficulty === difficulty;
      return matchesSearch && matchesCategory && matchesDifficulty;
    });
  }, [search, category, difficulty]);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <h1 className="mb-4 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              Course <span className="text-gradient">Catalog</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Explore our library of expert-led courses. Learn at your own pace
              with hands-on projects.
            </p>
          </div>

          {/* Filters */}
          <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="relative flex-1 sm:max-w-md">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search courses..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="h-11 bg-card/50 pl-10"
              />
            </div>
            <div className="flex gap-3">
              <Select value={category} onValueChange={setCategory}>
                <SelectTrigger className="w-[160px] bg-card/50">
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((cat) => (
                    <SelectItem key={cat.value} value={cat.value}>
                      {cat.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Select value={difficulty} onValueChange={setDifficulty}>
                <SelectTrigger className="w-[140px] bg-card/50">
                  <SelectValue placeholder="Level" />
                </SelectTrigger>
                <SelectContent>
                  {difficulties.map((diff) => (
                    <SelectItem key={diff.value} value={diff.value}>
                      {diff.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Results count */}
          <p className="mb-6 text-sm text-muted-foreground">
            Showing {filteredCourses.length} of {courses.length} courses
          </p>

          {/* Course grid */}
          {filteredCourses.length > 0 ? (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {filteredCourses.map((course) => (
                <CourseCard key={course.id} course={course} />
              ))}
            </div>
          ) : (
            <div className="py-20 text-center">
              <BookOpen className="mx-auto mb-4 h-12 w-12 text-muted-foreground" />
              <h3 className="mb-2 text-lg font-semibold text-foreground">
                No courses found
              </h3>
              <p className="text-muted-foreground">
                Try adjusting your search or filters
              </p>
              <Button
                variant="outline"
                className="mt-4"
                onClick={() => {
                  setSearch("");
                  setCategory("all");
                  setDifficulty("all");
                }}
              >
                Clear filters
              </Button>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}
