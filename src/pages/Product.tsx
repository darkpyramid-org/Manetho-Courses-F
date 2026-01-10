import { Link } from "react-router-dom";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  BookOpen,
  Code2,
  Users,
  Trophy,
  Laptop,
  MessageSquare,
  BarChart3,
  Zap,
} from "lucide-react";

const features = [
  {
    icon: BookOpen,
    title: "Expert-Led Courses",
    description:
      "Learn from industry practitioners who've built products at top companies. Real experience, not just theory.",
  },
  {
    icon: Code2,
    title: "Hands-On Projects",
    description:
      "Every course includes practical projects. Build your portfolio while you learn.",
  },
  {
    icon: Users,
    title: "Community Learning",
    description:
      "Join study groups, get code reviews, and collaborate with peers worldwide.",
  },
  {
    icon: Trophy,
    title: "Verified Certificates",
    description:
      "Earn certificates recognized by employers. Showcase your skills on LinkedIn.",
  },
  {
    icon: Laptop,
    title: "Learn Anywhere",
    description:
      "Access courses on web, mobile, and tablet. Download for offline learning.",
  },
  {
    icon: MessageSquare,
    title: "Mentorship",
    description:
      "Get personalized guidance from experienced developers on Pro plans.",
  },
];

const integrations = [
  { name: "GitHub", description: "Push projects directly to your repos" },
  { name: "VS Code", description: "Integrated coding environment" },
  { name: "Slack", description: "Team notifications and updates" },
  { name: "Notion", description: "Sync notes and progress" },
];

export default function Product() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          {/* Hero */}
          <div className="mx-auto mb-20 max-w-3xl text-center">
            <h1 className="mb-6 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              The complete platform for{" "}
              <span className="text-gradient">learning by doing</span>
            </h1>
            <p className="mb-8 text-lg text-muted-foreground">
              LearnFlow combines interactive courses, real projects, and
              community support to help you build the skills that matter.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link to="/courses">
                <Button size="lg" className="glow-primary">
                  Explore Courses
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

          {/* Features */}
          <div className="mx-auto mb-20 max-w-5xl">
            <h2 className="mb-12 text-center text-2xl font-bold text-foreground sm:text-3xl">
              Everything you need to succeed
            </h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {features.map((feature) => {
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

          {/* How it works */}
          <div className="mx-auto mb-20 max-w-4xl">
            <h2 className="mb-12 text-center text-2xl font-bold text-foreground sm:text-3xl">
              How LearnFlow works
            </h2>
            <div className="relative">
              {/* Connection line */}
              <div className="absolute left-8 top-0 hidden h-full w-px bg-gradient-to-b from-primary via-primary/50 to-transparent sm:block" />

              <div className="space-y-8">
                {[
                  {
                    step: "01",
                    title: "Choose your path",
                    description:
                      "Pick a learning path based on your goals—whether it's frontend, backend, or full-stack development.",
                  },
                  {
                    step: "02",
                    title: "Learn by building",
                    description:
                      "Follow structured lessons with interactive coding exercises. Build real projects as you learn.",
                  },
                  {
                    step: "03",
                    title: "Get feedback",
                    description:
                      "Submit projects for code review. Get feedback from mentors and peers to improve.",
                  },
                  {
                    step: "04",
                    title: "Earn credentials",
                    description:
                      "Complete courses to earn verified certificates. Showcase your portfolio to employers.",
                  },
                ].map((item, index) => (
                  <div key={item.step} className="flex gap-6">
                    <div className="relative z-10 flex h-16 w-16 shrink-0 items-center justify-center rounded-full border border-primary bg-background text-xl font-bold text-primary">
                      {item.step}
                    </div>
                    <div className="pt-3">
                      <h3 className="mb-2 font-semibold text-foreground">
                        {item.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Integrations */}
          <div className="mx-auto mb-20 max-w-4xl rounded-2xl border border-border bg-card/30 p-8 sm:p-12">
            <div className="mb-8 text-center">
              <h2 className="mb-4 text-2xl font-bold text-foreground">
                Integrates with your workflow
              </h2>
              <p className="text-muted-foreground">
                Connect LearnFlow with the tools you already use.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {integrations.map((integration) => (
                <div
                  key={integration.name}
                  className="rounded-lg border border-border bg-background/50 p-4 text-center"
                >
                  <div className="mb-2 text-lg font-semibold text-foreground">
                    {integration.name}
                  </div>
                  <p className="text-xs text-muted-foreground">
                    {integration.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="mx-auto max-w-2xl text-center">
            <Zap className="mx-auto mb-4 h-12 w-12 text-primary" />
            <h2 className="mb-4 text-2xl font-bold text-foreground sm:text-3xl">
              Ready to start learning?
            </h2>
            <p className="mb-8 text-muted-foreground">
              Join 50,000+ learners building real skills with LearnFlow.
            </p>
            <Link to="/courses">
              <Button size="lg" className="glow-primary">
                Browse All Courses
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
