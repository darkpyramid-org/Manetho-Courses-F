import { Link } from "react-router-dom";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Clock, ArrowRight, Heart, Zap, Globe } from "lucide-react";

const benefits = [
  {
    icon: Heart,
    title: "Health & Wellness",
    description: "Comprehensive health, dental, and vision coverage for you and your family.",
  },
  {
    icon: Zap,
    title: "Learning Budget",
    description: "$2,000 annual stipend for courses, books, and conferences.",
  },
  {
    icon: Globe,
    title: "Remote First",
    description: "Work from anywhere. We're a distributed team across 12 countries.",
  },
];

const openings = [
  {
    title: "Senior Frontend Engineer",
    department: "Engineering",
    location: "Remote (US/EU)",
    type: "Full-time",
    description: "Build beautiful, performant interfaces that millions of learners use daily.",
  },
  {
    title: "Product Designer",
    department: "Design",
    location: "Remote (Global)",
    type: "Full-time",
    description: "Shape the future of learning with thoughtful, accessible design.",
  },
  {
    title: "Backend Engineer",
    department: "Engineering",
    location: "Remote (US/EU)",
    type: "Full-time",
    description: "Build scalable APIs and infrastructure that power our platform.",
  },
  {
    title: "Content Writer",
    department: "Marketing",
    location: "Remote (Global)",
    type: "Full-time",
    description: "Create compelling content that educates and inspires our community.",
  },
  {
    title: "Customer Success Manager",
    department: "Customer Success",
    location: "Remote (Americas)",
    type: "Full-time",
    description: "Help enterprise customers achieve their learning goals.",
  },
];

export default function Careers() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          {/* Hero */}
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <h1 className="mb-6 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              Build the future of{" "}
              <span className="text-gradient">education</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Join our mission to make world-class education accessible to everyone.
              We're looking for passionate people to help us grow.
            </p>
          </div>

          {/* Benefits */}
          <div className="mx-auto mb-20 max-w-4xl">
            <h2 className="mb-8 text-center text-2xl font-bold text-foreground">
              Why work at Manetho?
            </h2>
            <div className="grid gap-6 sm:grid-cols-3">
              {benefits.map((benefit) => {
                const Icon = benefit.icon;
                return (
                  <div
                    key={benefit.title}
                    className="rounded-xl border border-border bg-card/50 p-6 text-center"
                  >
                    <div className="mx-auto mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="mb-2 font-semibold text-foreground">
                      {benefit.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {benefit.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Open positions */}
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-8 text-center text-2xl font-bold text-foreground">
              Open Positions
            </h2>
            <div className="space-y-4">
              {openings.map((job) => (
                <div
                  key={job.title}
                  className="group flex flex-col gap-4 rounded-xl border border-border bg-card/50 p-6 transition-smooth hover:border-primary/50 hover:bg-card sm:flex-row sm:items-center sm:justify-between"
                >
                  <div className="flex-1">
                    <div className="mb-2 flex flex-wrap items-center gap-2">
                      <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors-smooth">
                        {job.title}
                      </h3>
                      <Badge variant="secondary">{job.department}</Badge>
                    </div>
                    <p className="mb-3 text-sm text-muted-foreground">
                      {job.description}
                    </p>
                    <div className="flex flex-wrap items-center gap-4 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <MapPin className="h-3 w-3" />
                        {job.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {job.type}
                      </span>
                    </div>
                  </div>
                  <Button variant="outline" size="sm" className="shrink-0">
                    Apply
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              ))}
            </div>
          </div>

          {/* Don't see a role */}
          <div className="mx-auto mt-16 max-w-2xl rounded-2xl border border-border bg-gradient-fern p-8 text-center">
            <h3 className="mb-2 text-xl font-semibold text-foreground">
              Don't see the right role?
            </h3>
            <p className="mb-4 text-muted-foreground">
              We're always looking for talented people. Send us your resume and
              we'll keep you in mind for future openings.
            </p>
            <Link to="/contact">
              <Button variant="outline">Get in Touch</Button>
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
