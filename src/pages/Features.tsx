import { Link } from "react-router-dom";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Code2,
  Layers,
  Zap,
  Users,
  Shield,
  Rocket,
  BarChart3,
  Globe,
  Smartphone,
  Download,
  CheckCircle2,
} from "lucide-react";

const mainFeatures = [
  {
    icon: Code2,
    title: "Interactive Code Editor",
    description:
      "Write and run code directly in your browser with instant feedback. Support for 15+ programming languages with syntax highlighting and auto-completion.",
    highlights: [
      "Real-time code execution",
      "Syntax highlighting",
      "Auto-save progress",
      "Console output",
    ],
  },
  {
    icon: Layers,
    title: "Structured Learning Paths",
    description:
      "Follow expert-designed curricula from beginner to advanced. Each path includes courses, projects, and assessments that build on each other.",
    highlights: [
      "Beginner to advanced tracks",
      "Skill assessments",
      "Prerequisite tracking",
      "Completion certificates",
    ],
  },
  {
    icon: Users,
    title: "Community & Mentorship",
    description:
      "Learn alongside peers, join study groups, and get feedback from experienced developers. Our community is here to help you succeed.",
    highlights: [
      "Discussion forums",
      "Code reviews",
      "Study groups",
      "1-on-1 mentoring",
    ],
  },
];

const additionalFeatures = [
  {
    icon: BarChart3,
    title: "Progress Analytics",
    description: "Track your learning journey with detailed analytics and insights.",
  },
  {
    icon: Globe,
    title: "Global Access",
    description: "Learn from anywhere with content available in 12 languages.",
  },
  {
    icon: Smartphone,
    title: "Mobile Apps",
    description: "Native iOS and Android apps for learning on the go.",
  },
  {
    icon: Download,
    title: "Offline Mode",
    description: "Download courses and learn without an internet connection.",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "SSO, SAML, and SOC 2 compliance for team deployments.",
  },
  {
    icon: Rocket,
    title: "API Access",
    description: "Build custom integrations with our developer API.",
  },
];

export default function Features() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          {/* Hero */}
          <div className="mx-auto mb-20 max-w-3xl text-center">
            <h1 className="mb-6 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              Powerful features for{" "}
              <span className="text-gradient">serious learners</span>
            </h1>
            <p className="mb-8 text-lg text-muted-foreground">
              Everything you need to learn efficiently, practice effectively,
              and build a portfolio that stands out.
            </p>
            <Link to="/courses">
              <Button size="lg" className="glow-primary">
                Start Learning Free
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>

          {/* Main features */}
          <div className="mx-auto mb-20 max-w-5xl space-y-16">
            {mainFeatures.map((feature, index) => {
              const Icon = feature.icon;
              const isReversed = index % 2 === 1;

              return (
                <div
                  key={feature.title}
                  className={`flex flex-col gap-8 lg:flex-row lg:items-center lg:gap-16 ${
                    isReversed ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  {/* Content */}
                  <div className="flex-1">
                    <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                      <Icon className="h-7 w-7" />
                    </div>
                    <h2 className="mb-4 text-2xl font-bold text-foreground sm:text-3xl">
                      {feature.title}
                    </h2>
                    <p className="mb-6 text-muted-foreground">
                      {feature.description}
                    </p>
                    <ul className="grid gap-3 sm:grid-cols-2">
                      {feature.highlights.map((highlight) => (
                        <li
                          key={highlight}
                          className="flex items-center gap-2 text-sm"
                        >
                          <CheckCircle2 className="h-4 w-4 shrink-0 text-primary" />
                          <span className="text-muted-foreground">
                            {highlight}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Visual placeholder */}
                  <div className="flex-1">
                    <div className="aspect-video rounded-2xl border border-border bg-card/50 p-8 flex items-center justify-center">
                      <div className="text-center">
                        <Icon className="mx-auto h-16 w-16 text-primary/30 mb-4" />
                        <p className="text-sm text-muted-foreground">
                          Interactive demo coming soon
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Additional features grid */}
          <div className="mx-auto max-w-5xl">
            <h2 className="mb-12 text-center text-2xl font-bold text-foreground sm:text-3xl">
              And so much more
            </h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {additionalFeatures.map((feature) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={feature.title}
                    className="rounded-xl border border-border bg-card/50 p-6 transition-smooth hover:border-primary/50"
                  >
                    <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="mb-2 font-semibold text-foreground">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* CTA */}
          <div className="mx-auto mt-20 max-w-2xl text-center">
            <h2 className="mb-4 text-2xl font-bold text-foreground">
              Ready to get started?
            </h2>
            <p className="mb-8 text-muted-foreground">
              Join thousands of developers learning with LearnFlow today.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link to="/courses">
                <Button size="lg" className="glow-primary">
                  Browse Courses
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link to="/pricing">
                <Button variant="outline" size="lg">
                  View Pricing
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
