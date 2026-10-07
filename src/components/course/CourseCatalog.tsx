import { useMemo, useState } from "react";
import { Search, X } from "lucide-react";
import type { Course, CourseCategory, CourseLevel } from "@/types";
import {
  courseCategories,
  courseLevels,
  courseService,
} from "@/services/courseService";
import { courseService as cs } from "@/services/courseService";
import { CourseGrid } from "@/components/course/CourseCard";
import { CourseGridSkeleton } from "@/components/shared/Skeletons";
import { EmptyState } from "@/components/shared/EmptyState";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useDebounce } from "@/hooks/useDebounce";
import { cn } from "@/lib/utils";
import { useSearchParams } from "react-router-dom";

type SortKey = "title" | "duration" | "level";
type DurationKey = "any" | "short" | "medium" | "long";

const durationFilters: { value: DurationKey; label: string; test: (c: Course) => boolean }[] = [
  { value: "any", label: "Any length", test: () => true },
  { value: "short", label: "Under 3 hours", test: (c) => c.durationMinutes < 180 },
  { value: "medium", label: "3–5 hours", test: (c) => c.durationMinutes >= 180 && c.durationMinutes <= 300 },
  { value: "long", label: "Over 5 hours", test: (c) => c.durationMinutes > 300 },
];

const levelOrder: Record<CourseLevel, number> = {
  beginner: 0,
  intermediate: 1,
  advanced: 2,
};

/**
 * Course catalog with search, filters, sort,
 * progressive loading, and a polished empty state.
 */
export function CourseCatalog({ initialCategory }: { initialCategory?: CourseCategory }) {
  const [params, setParams] = useSearchParams();
  const query = params.get("q") ?? "";
  const category = (params.get("category") as CourseCategory | null) ?? initialCategory ?? "all";
  const level = (params.get("level") as CourseLevel | null) ?? "all";
  const duration = (params.get("duration") as DurationKey | null) ?? "any";
  const sort = (params.get("sort") as SortKey | null) ?? "title";
  const visibleCount = Number(params.get("show") ?? 12);

  const [searchInput, setSearchInput] = useState(query);
  const debouncedSearch = useDebounce(searchInput, 250);

  const [loading, setLoading] = useState(false);
  const [loadingKey, setLoadingKey] = useState("");

  const updateParams = (next: Record<string, string>) => {
    const merged = Object.fromEntries(params.entries());
    const finalParams = { ...merged, ...next };
    Object.keys(finalParams).forEach((k) => {
      if (
        (k === "category" && finalParams[k] === "all" && !initialCategory) ||
        (k === "level" && finalParams[k] === "all") ||
        (k === "duration" && finalParams[k] === "any") ||
        (k === "sort" && finalParams[k] === "title") ||
        (k === "show") ||
        (finalParams[k] === "" && k === "q")
      ) {
        delete finalParams[k];
      }
    });
    setParams(finalParams, { replace: true });
  };

  // Simulate a brief loading state when filters change
  // (demonstrates skeletons; data is local and instant).
  const filterKey = `${debouncedSearch}|${category}|${level}|${duration}|${sort}`;
  if (filterKey !== loadingKey) {
    setLoadingKey(filterKey);
    setLoading(true);
    window.setTimeout(() => setLoading(false), 320);
  }

  const results = useMemo(() => {
    let list = courseService.getAll();

    if (category !== "all") {
      list = cs.getByCategory(category);
    }
    if (level !== "all") {
      list = list.filter((c) => c.level === level);
    }
    if (duration !== "any") {
      const filter = durationFilters.find((d) => d.value === duration);
      if (filter) list = list.filter(filter.test);
    }
    if (debouncedSearch.trim()) {
      const searchResults = courseService.search(debouncedSearch);
      const ids = new Set(searchResults.map((c) => c.id));
      list = list.filter((c) => ids.has(c.id));
    }

    const sorted = [...list];
    switch (sort) {
      case "duration":
        sorted.sort((a, b) => a.durationMinutes - b.durationMinutes);
        break;
      case "level":
        sorted.sort((a, b) => levelOrder[a.level] - levelOrder[b.level]);
        break;
      default:
        sorted.sort((a, b) => a.title.localeCompare(b.title));
    }
    return sorted;
  }, [debouncedSearch, category, level, duration, sort]);

  const visible = results.slice(0, visibleCount);
  const hasMore = visibleCount < results.length;

  return (
    <div>
      {/* Filter bar */}
      <div className="mb-8 space-y-4 rounded-sm border border-border bg-card p-4 sm:p-5">
        <form
          role="search"
          onSubmit={(e) => {
            e.preventDefault();
            updateParams({ q: debouncedSearch });
          }}
          className="relative"
        >
          <Search
            aria-hidden="true"
            className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground"
          />
          <Input
            type="search"
            value={searchInput}
            onChange={(e) => {
              setSearchInput(e.target.value);
              updateParams({ q: e.target.value });
            }}
            placeholder="Search by title, topic, or keyword…"
            aria-label="Search the course catalog"
            className="h-11 rounded-sm border-input bg-background pl-10 pr-10"
          />
          {searchInput && (
            <button
              type="button"
              aria-label="Clear search"
              onClick={() => {
                setSearchInput("");
                updateParams({ q: "" });
              }}
              className="absolute right-3 top-1/2 flex h-6 w-6 -translate-y-1/2 items-center justify-center rounded-sm text-muted-foreground hover:text-foreground"
            >
              <X className="h-4 w-4" aria-hidden="true" />
            </button>
          )}
        </form>

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          <Select
            value={category}
            onValueChange={(value) => updateParams({ category: value })}
          >
            <SelectTrigger className="rounded-sm" aria-label="Filter by category">
              <SelectValue placeholder="Category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All categories</SelectItem>
              {courseCategories.map((c) => (
                <SelectItem key={c.value} value={c.value}>
                  {c.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Select
            value={level}
            onValueChange={(value) => updateParams({ level: value })}
          >
            <SelectTrigger className="rounded-sm" aria-label="Filter by level">
              <SelectValue placeholder="Level" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All levels</SelectItem>
              {courseLevels.map((l) => (
                <SelectItem key={l.value} value={l.value}>
                  {l.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Select
            value={duration}
            onValueChange={(value) => updateParams({ duration: value })}
          >
            <SelectTrigger className="rounded-sm" aria-label="Filter by duration">
              <SelectValue placeholder="Duration" />
            </SelectTrigger>
            <SelectContent>
              {durationFilters.map((d) => (
                <SelectItem key={d.value} value={d.value}>
                  {d.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Select
            value={sort}
            onValueChange={(value) => updateParams({ sort: value })}
          >
            <SelectTrigger className="rounded-sm" aria-label="Sort courses">
              <SelectValue placeholder="Sort" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="title">Title A–Z</SelectItem>
              <SelectItem value="duration">Shortest first</SelectItem>
              <SelectItem value="level">Level: beginner → advanced</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Result count */}
      <div className="mb-6 flex items-center justify-between">
        <p className="text-sm text-muted-foreground" role="status" aria-live="polite">
          {results.length} {results.length === 1 ? "course" : "courses"}
          {category !== "all" &&
            ` in ${courseCategories.find((c) => c.value === category)?.label}`}
          {debouncedSearch.trim() && ` for “${debouncedSearch.trim()}”`}
        </p>
      </div>

      {/* Grid */}
      {loading ? (
        <CourseGridSkeleton count={6} />
      ) : results.length === 0 ? (
        <EmptyState
          title="No courses match your filters"
          description="Try a different search term, or clear the filters to browse the full catalog."
          actionLabel="Clear all filters"
          actionHref="/courses"
        >
          <Button
            variant="outline"
            className="mt-6 rounded-sm"
            onClick={() => {
              setSearchInput("");
              setParams({}, { replace: true });
            }}
          >
            Clear filters
          </Button>
        </EmptyState>
      ) : (
        <CourseGrid courses={visible} />
      )}

      {/* Progressive loading */}
      {hasMore && !loading && (
        <div className="mt-10 text-center">
          <Button
            variant="outline"
            className="rounded-sm"
            onClick={() => updateParams({ show: String(visibleCount + 12) })}
          >
            Show more courses ({results.length - visibleCount} remaining)
          </Button>
        </div>
      )}
    </div>
  );
}

export function CategoryChip({
  active,
  label,
  onClick,
}: {
  active: boolean;
  label: string;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={cn(
        "rounded-sm border px-3.5 py-1.5 text-sm font-medium transition-colors",
        active
          ? "border-gold-500/60 bg-gold-500/15 text-gold-800 dark:text-gold-200"
          : "border-border bg-card text-muted-foreground hover:border-gold-500/40 hover:text-foreground",
      )}
    >
      {label}
    </button>
  );
}
