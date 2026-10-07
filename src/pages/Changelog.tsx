import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Badge } from "@/components/ui/badge";
import { Sparkles, Bug, Zap, Wrench } from "lucide-react";

type ChangeType = "feature" | "improvement" | "fix" | "breaking";

interface Change {
  type: ChangeType;
  description: string;
}

interface Release {
  version: string;
  date: string;
  title: string;
  changes: Change[];
}

const releases: Release[] = [
  {
    version: "2.4.0",
    date: "January 8, 2025",
    title: "AI-Powered Learning Paths",
    changes: [
      { type: "feature", description: "Personalized learning recommendations powered by AI" },
      { type: "feature", description: "Smart progress predictions based on your learning style" },
      { type: "improvement", description: "Redesigned course cards with progress indicators" },
      { type: "fix", description: "Fixed video playback issues on Safari" },
    ],
  },
  {
    version: "2.3.0",
    date: "December 15, 2024",
    title: "Team Collaboration",
    changes: [
      { type: "feature", description: "Team workspaces for organizations" },
      { type: "feature", description: "Shared learning paths and assignments" },
      { type: "improvement", description: "Enhanced analytics dashboard" },
      { type: "improvement", description: "Faster code editor initialization" },
      { type: "fix", description: "Resolved certificate generation delays" },
    ],
  },
  {
    version: "2.2.0",
    date: "November 20, 2024",
    title: "Mobile Experience Upgrade",
    changes: [
      { type: "feature", description: "Offline mode for iOS and Android apps" },
      { type: "feature", description: "Download courses for offline viewing" },
      { type: "improvement", description: "Improved touch gestures for code editor" },
      { type: "fix", description: "Fixed notification sync issues" },
    ],
  },
  {
    version: "2.1.0",
    date: "October 30, 2024",
    title: "Code Review System",
    changes: [
      { type: "feature", description: "Submit projects for mentor code reviews" },
      { type: "feature", description: "Inline comments and suggestions" },
      { type: "improvement", description: "Enhanced syntax highlighting for 5 new languages" },
      { type: "breaking", description: "API v1 deprecated, please migrate to v2" },
    ],
  },
  {
    version: "2.0.0",
    date: "September 15, 2024",
    title: "Manetho 2.0",
    changes: [
      { type: "feature", description: "Complete platform redesign with dark theme" },
      { type: "feature", description: "New interactive code editor" },
      { type: "feature", description: "Real-time collaboration features" },
      { type: "improvement", description: "50% faster page load times" },
      { type: "improvement", description: "Improved accessibility (WCAG 2.1 AA)" },
    ],
  },
];

const typeConfig: Record<ChangeType, { icon: typeof Sparkles; label: string; className: string }> = {
  feature: {
    icon: Sparkles,
    label: "New",
    className: "bg-fern-500/20 text-fern-400 border-fern-500/30",
  },
  improvement: {
    icon: Zap,
    label: "Improved",
    className: "bg-blue-500/20 text-blue-400 border-blue-500/30",
  },
  fix: {
    icon: Bug,
    label: "Fixed",
    className: "bg-amber-500/20 text-amber-400 border-amber-500/30",
  },
  breaking: {
    icon: Wrench,
    label: "Breaking",
    className: "bg-rose-500/20 text-rose-400 border-rose-500/30",
  },
};

export default function Changelog() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="mx-auto mb-16 max-w-2xl text-center">
            <h1 className="mb-4 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              <span className="text-gradient">Changelog</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              New updates and improvements to Manetho.
            </p>
          </div>

          {/* Releases */}
          <div className="mx-auto max-w-3xl">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-0 top-0 hidden h-full w-px bg-border sm:block sm:left-24" />

              <div className="space-y-12">
                {releases.map((release) => (
                  <article key={release.version} className="relative">
                    <div className="flex flex-col gap-4 sm:flex-row sm:gap-8">
                      {/* Version and date */}
                      <div className="shrink-0 sm:w-24 sm:text-right">
                        <div className="text-sm font-semibold text-foreground">
                          v{release.version}
                        </div>
                        <div className="text-xs text-muted-foreground">
                          {release.date}
                        </div>
                      </div>

                      {/* Timeline dot */}
                      <div className="absolute left-0 top-1 hidden h-3 w-3 -translate-x-1 rounded-full border-2 border-primary bg-background sm:block sm:left-24" />

                      {/* Content */}
                      <div className="flex-1 rounded-xl border border-border bg-card/50 p-6 sm:ml-4">
                        <h2 className="mb-4 text-xl font-semibold text-foreground">
                          {release.title}
                        </h2>
                        <ul className="space-y-3">
                          {release.changes.map((change, index) => {
                            const config = typeConfig[change.type];
                            const Icon = config.icon;
                            return (
                              <li
                                key={index}
                                className="flex items-start gap-3"
                              >
                                <Badge
                                  variant="outline"
                                  className={`shrink-0 ${config.className}`}
                                >
                                  <Icon className="mr-1 h-3 w-3" />
                                  {config.label}
                                </Badge>
                                <span className="text-sm text-muted-foreground">
                                  {change.description}
                                </span>
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
