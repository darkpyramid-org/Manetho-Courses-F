import { useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import {
  Search,
  X,
  BookOpen,
  Compass,
  Landmark,
  GraduationCap,
  Library,
  FileText,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { EmptyState } from "@/components/shared/EmptyState";
import { searchCatalog, searchCounts, SearchResult, SearchTab } from "@/services/searchService";
import { useDebounce } from "@/hooks/useDebounce";

const tabConfig: { value: SearchTab; label: string; icon: React.ReactNode }[] = [
  { value: "all", label: "All", icon: <Search className="h-4 w-4" /> },
  { value: "course", label: "Courses", icon: <BookOpen className="h-4 w-4" /> },
  { value: "learning-path", label: "Paths", icon: <Compass className="h-4 w-4" /> },
  { value: "topic", label: "Topics", icon: <Landmark className="h-4 w-4" /> },
  { value: "instructor", label: "Instructors", icon: <GraduationCap className="h-4 w-4" /> },
  { value: "resource", label: "Resources", icon: <Library className="h-4 w-4" /> },
];

export default function SearchPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialQuery = searchParams.get("q") ?? "";
  const [query, setQuery] = useState(initialQuery);
  const [activeTab, setActiveTab] = useState<SearchTab>("all");
  const debouncedQuery = useDebounce(query, 200);

  const results = debouncedQuery.trim() ? searchCatalog(debouncedQuery, activeTab) : [];
  const counts = debouncedQuery.trim() ? searchCounts(debouncedQuery) : null;
  const getTabCount = (tab: SearchTab) => tab === "all" ? results.length : counts?.[tab] ?? 0;

  const handleSearch = (newQuery: string) => {
    setQuery(newQuery);
    setSearchParams({ q: newQuery });
  };

  const clearSearch = () => {
    setQuery("");
    setSearchParams({}, { replace: true });
  };

  return (
    <div className="container py-8">
      <div className="mb-8">
        <h1 className="display text-3xl mb-2">Search</h1>
        <p className="text-muted-foreground">
          Find courses, learning paths, topics, instructors, and resources.
        </p>
      </div>

      {/* Search input */}
      <div className="mb-8">
        <form onSubmit={(e) => { e.preventDefault(); handleSearch(query); }} className="relative max-w-2xl">
          <Search
            aria-hidden="true"
            className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground"
          />
          <Input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search Manetho…"
            aria-label="Search the catalog"
            className="h-12 rounded-sm border-input bg-background pl-12 pr-12 text-base"
          />
          {query && (
            <button
              type="button"
              onClick={clearSearch}
              aria-label="Clear search"
              className="absolute right-4 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-sm text-muted-foreground hover:text-foreground"
            >
              <X className="h-4 w-4" aria-hidden="true" />
            </button>
          )}
        </form>
      </div>

      {/* Tabs with counts */}
      {debouncedQuery.trim() && (
        <Tabs value={activeTab} onValueChange={(value) => setActiveTab(value as SearchTab)} className="mb-6">
          <TabsList className="grid w-full grid-cols-3 sm:grid-cols-6">
            {tabConfig.map((tab) => (
              <TabsTrigger key={tab.value} value={tab.value} className="gap-2 px-3 py-2 text-sm">
                {tab.icon}
                <span>{tab.label}</span>
                {getTabCount(tab.value) > 0 && (
                  <Badge variant="secondary" className="ml-1 h-5 px-1.5 text-[10px]">
                    {getTabCount(tab.value)}
                  </Badge>
                )}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>
      )}

      {/* Results */}
      {debouncedQuery.trim() ? (
        results.length > 0 ? (
          <Tabs value={activeTab} onValueChange={(value) => setActiveTab(value as SearchTab)}>
            {tabConfig.map((tab) => (
              <TabsContent key={tab.value} value={tab.value} className="mt-4">
                {tab.value === "all" ? (
                  <div className="space-y-6">
                    {tabConfig.filter((t) => t.value !== "all").map((t) => {
                      const filtered = results.filter((r) => r.type === t.value);
                      if (filtered.length === 0) return null;
                      return (
                        <section key={t.value} className="space-y-4">
                          <div className="flex items-center justify-between">
                            <h2 className="display text-lg flex items-center gap-2">
                              {t.icon}
                              {t.label} ({filtered.length})
                            </h2>
                          </div>
                          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                            {filtered.map((result) => (
                              <SearchResultCard key={result.id} result={result} />
                            ))}
                          </div>
                        </section>
                      );
                    })}
                  </div>
                ) : (
                  <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {results
                      .filter((r) => r.type === tab.value)
                      .map((result) => (
                        <SearchResultCard key={result.id} result={result} />
                      ))}
                  </div>
                )}
              </TabsContent>
            ))}
          </Tabs>
        ) : (
          <EmptyState
            title="No results found"
            description={`No matches for “${debouncedQuery.trim()}”. Try different keywords or check your spelling.`}
          />
        )
      ) : (
        <EmptyState
          title="Search the catalog"
          description="Enter a keyword above to search across courses, learning paths, topics, instructors, and resources."
          icon={<Search className="h-6 w-6" />}
        />
      )}
    </div>
  );
}

function SearchResultCard({ result }: { result: SearchResult }) {
  const typeIcons: Record<SearchResult["type"], React.ReactNode> = {
    course: <BookOpen className="h-3.5 w-3.5" />,
    "learning-path": <Compass className="h-3.5 w-3.5" />,
    topic: <Landmark className="h-3.5 w-3.5" />,
    instructor: <GraduationCap className="h-3.5 w-3.5" />,
    resource: <FileText className="h-3.5 w-3.5" />,
  };

  const typeLabels: Record<SearchResult["type"], string> = {
    course: "Course",
    "learning-path": "Learning Path",
    topic: "Topic",
    instructor: "Instructor",
    resource: "Resource",
  };

  return (
    <Link to={result.href} className="block rounded-sm border border-border bg-card hover:border-gold-500/50 transition-colors">
      <div className="p-4">
        <div className="flex items-start gap-3">
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-sm border border-border bg-secondary/60 text-muted-foreground">
            {typeIcons[result.type]}
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-1">
              <Badge variant="outline" className="text-[10px]">
                {typeLabels[result.type]}
              </Badge>
            </div>
            <h3 className="font-medium text-foreground mb-1">{result.title}</h3>
            <p className="text-sm text-muted-foreground line-clamp-2">{result.description}</p>
            {result.meta && (
              <p className="mt-1 text-xs text-muted-foreground/70">{result.meta}</p>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
}
