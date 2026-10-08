import { Link } from "react-router-dom";
import { FileText, Calendar, ExternalLink, ArrowRight, Filter, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { PageHeader } from "@/components/shared/PageHeader";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { resourceService, resourceTypes } from "@/services/resourceService";
import { useSearchParams, useParams } from "react-router-dom";
import { useDebounce } from "@/hooks/useDebounce";
import { useState } from "react";
import { formatDate } from "@/lib/format";
import { cn } from "@/lib/utils";

const typeOptions = Object.entries(resourceTypes).map(([value, label]) => ({
  value,
  label,
}));

export default function ResourcesPage() {
  const [query, setQuery] = useState(searchParams.get("q") ?? "");
  const [type, setType] = useState(searchParams.get("type") ?? "all");
  const debouncedQuery = useDebounce(query, 250);

  const resources = debouncedQuery.trim()
    ? resourceService.search(debouncedQuery).filter((r) => type === "all" || r.type === type)
    : resourceService.getAll().filter((r) => type === "all" || r.type === type);

  return (
    <div className="container py-8">
      <Breadcrumbs items={[{ label: "Resources" }]} />
      <PageHeader
        eyebrow="Reference Library"
        title="Resources"
        description="Timelines, maps, glossaries, reading lists, and reference guides — all interlinked with courses and topics."
      />

      {/* Filter bar */}
      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="relative max-w-md flex-1">
          <Filter className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" aria-hidden="true" />
          <Input
            type="search"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setSearchParams({ q: e.target.value, type });
            }}
            placeholder="Search resources…"
            aria-label="Search resources"
            className="h-10 rounded-sm border-input bg-background pl-10 pr-10"
          />
          {query && (
            <button
              type="button"
              onClick={() => { setQuery(""); setSearchParams({ type }); }}
              aria-label="Clear search"
              className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
            >
              <X className="h-4 w-4" aria-hidden="true" />
            </button>
          )}
        </div>
        <Select value={type} onValueChange={(v) => { setType(v); setSearchParams({ q: query, type: v }); }}>
          <SelectTrigger className="w-[200px] rounded-sm" aria-label="Filter by type">
            <SelectValue placeholder="All types" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All types</SelectItem>
            {typeOptions.map((opt) => (
              <SelectItem key={opt.value} value={opt.value}>{opt.label}</SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Results */}
      <div className="space-y-4">
        {resources.length > 0 ? (
          resources.map((resource) => (
            <Card key={resource.id} className="overflow-hidden">
              <CardContent className="p-5">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <Badge variant="outline" className="text-[10px]">{resourceTypes[resource.type]}</Badge>
                      {resource.updatedAt && (
                        <>
                          <Calendar className="h-3 w-3" aria-hidden="true" />
                          <span className="text-xs text-muted-foreground">{formatDate(resource.updatedAt)}</span>
                        </>
                      )}
                    </div>
                    <Link to={`/resources/${resource.slug}`} className="font-medium text-foreground hover:text-gold-700 dark:hover:text-gold-300">
                      {resource.title}
                    </Link>
                    <p className="mt-1 text-sm text-muted-foreground line-clamp-2">{resource.description}</p>
                  </div>
                  <Button variant="outline" size="sm" asChild className="shrink-0 rounded-sm">
                    <Link to={`/resources/${resource.slug}`}>
                      Open <ExternalLink className="ml-1.5 h-3.5 w-3.5" aria-hidden="true" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))
        ) : (
          <div className="text-center py-12">
            <FileText className="mx-auto h-12 w-12 text-muted-foreground/40 mb-4" aria-hidden="true" />
            <h3 className="display text-lg mb-2">No resources found</h3>
            <p className="text-sm text-muted-foreground">
              {debouncedQuery.trim()
                ? `No matches for “${debouncedQuery.trim()}”.`
                : "No resources of this type."}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export function ResourceDetailPage() {
  const { resourceSlug } = useParams<{ resourceSlug: string }>();
  const resource = resourceService.getBySlug(resourceSlug ?? "");

  if (!resource) {
    return (
      <div className="container py-12 text-center">
        <h1 className="display text-2xl mb-4">Resource not found</h1>
        <Link to="/resources" className="text-gold-700 hover:underline">← Back to resources</Link>
      </div>
    );
  }

  return (
    <div className="container py-8">
      <Breadcrumbs items={[
        { label: "Resources", href: "/resources" },
        { label: resource.title },
      ]} />

      <div className="grid gap-8 lg:grid-cols-[1fr_380px]">
        <div className="space-y-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Badge variant="outline">{resourceTypes[resource.type]}</Badge>
              {resource.lastUpdated && (
                <>
                  <Calendar className="h-3 w-3" aria-hidden="true" />
                  <span className="text-xs text-muted-foreground">{formatDate(resource.lastUpdated)}</span>
                </>
              )}
            </div>
            <h1 className="display text-3xl">{resource.title}</h1>
            <p className="mt-2 text-lg text-muted-foreground">{resource.description}</p>
          </div>

          <div className="prose prose-neutral dark:prose-invert max-w-none reading-width">
            {resource.content ?? <p className="text-muted-foreground">Content not yet available for this resource.</p>}
          </div>
        </div>

        <aside className="lg:sticky lg:top-24">
          <Card>
            <CardHeader>
              <CardTitle className="display text-lg">Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Type</span>
                <span className="font-medium">{resourceTypes[resource.type]}</span>
              </div>
              {resource.updatedAt && (
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Last Updated</span>
                  <span className="font-medium">{formatDate(resource.updatedAt)}</span>
                </div>
              )}
            </CardContent>
          </Card>
        </aside>
      </div>
    </div>
  );
}