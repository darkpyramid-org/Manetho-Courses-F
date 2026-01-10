import { Link } from "react-router-dom";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Input } from "@/components/ui/input";
import {
  Search,
  BookOpen,
  Rocket,
  Code2,
  Settings,
  Users,
  Zap,
  ArrowRight,
} from "lucide-react";

const sections = [
  {
    title: "Getting Started",
    icon: Rocket,
    description: "Quick start guides and installation instructions",
    links: [
      { label: "Introduction", href: "/docs/intro" },
      { label: "Quick Start", href: "/docs/quickstart" },
      { label: "Installation", href: "/docs/installation" },
    ],
  },
  {
    title: "Core Concepts",
    icon: BookOpen,
    description: "Learn the fundamental concepts of LearnFlow",
    links: [
      { label: "Courses", href: "/docs/courses" },
      { label: "Learning Paths", href: "/docs/paths" },
      { label: "Progress Tracking", href: "/docs/progress" },
    ],
  },
  {
    title: "API Reference",
    icon: Code2,
    description: "Complete API documentation for developers",
    links: [
      { label: "Authentication", href: "/docs/api/auth" },
      { label: "Courses API", href: "/docs/api/courses" },
      { label: "Webhooks", href: "/docs/api/webhooks" },
    ],
  },
  {
    title: "Configuration",
    icon: Settings,
    description: "Customize and configure your learning environment",
    links: [
      { label: "Settings", href: "/docs/settings" },
      { label: "Themes", href: "/docs/themes" },
      { label: "Integrations", href: "/docs/integrations" },
    ],
  },
  {
    title: "Team Management",
    icon: Users,
    description: "Manage teams and organizations",
    links: [
      { label: "Team Setup", href: "/docs/team-setup" },
      { label: "Roles & Permissions", href: "/docs/roles" },
      { label: "Analytics", href: "/docs/analytics" },
    ],
  },
  {
    title: "Advanced",
    icon: Zap,
    description: "Advanced features and customization",
    links: [
      { label: "Custom Paths", href: "/docs/custom-paths" },
      { label: "Scripting", href: "/docs/scripting" },
      { label: "Plugins", href: "/docs/plugins" },
    ],
  },
];

export default function Docs() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <h1 className="mb-4 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              <span className="text-gradient">Documentation</span>
            </h1>
            <p className="mb-8 text-lg text-muted-foreground">
              Everything you need to get started with LearnFlow. Guides,
              references, and examples.
            </p>

            {/* Search */}
            <div className="relative mx-auto max-w-md">
              <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search documentation..."
                className="h-12 bg-card/50 pl-12 text-base"
              />
              <kbd className="absolute right-4 top-1/2 hidden -translate-y-1/2 rounded border border-border bg-muted px-2 py-0.5 text-xs text-muted-foreground sm:block">
                ⌘K
              </kbd>
            </div>
          </div>

          {/* Documentation sections */}
          <div className="mx-auto grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {sections.map((section) => {
              const Icon = section.icon;
              return (
                <div
                  key={section.title}
                  className="group rounded-2xl border border-border bg-card/50 p-6 transition-smooth hover:border-primary/50 hover:bg-card"
                >
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-smooth group-hover:bg-primary group-hover:text-primary-foreground">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mb-2 text-lg font-semibold text-foreground">
                    {section.title}
                  </h3>
                  <p className="mb-4 text-sm text-muted-foreground">
                    {section.description}
                  </p>
                  <ul className="space-y-2">
                    {section.links.map((link) => (
                      <li key={link.label}>
                        <Link
                          to={link.href}
                          className="group/link flex items-center text-sm text-muted-foreground transition-smooth hover:text-primary"
                        >
                          <ArrowRight className="mr-2 h-3 w-3 opacity-0 transition-all group-hover/link:opacity-100" />
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>

          {/* Help banner */}
          <div className="mx-auto mt-16 max-w-3xl rounded-2xl border border-border bg-gradient-fern p-8 text-center">
            <h2 className="mb-2 text-xl font-semibold text-foreground">
              Need help?
            </h2>
            <p className="mb-4 text-muted-foreground">
              Can't find what you're looking for? Our team is here to help.
            </p>
            <Link to="/contact">
              <span className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline">
                Contact Support
                <ArrowRight className="h-4 w-4" />
              </span>
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
