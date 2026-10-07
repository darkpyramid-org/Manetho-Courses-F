import { ArrowRight, Play, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden pt-32 pb-20">
      {/* Background Effects */}
      <div className="pointer-events-none absolute inset-0">
        {/* Gradient glow */}
        <div className="absolute left-1/2 top-1/3 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 bg-gradient-glow opacity-60" />
        <div className="absolute right-0 top-1/2 h-[400px] w-[400px] -translate-y-1/2 bg-gradient-radial from-fern-600/10 to-transparent" />
        
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(hsl(var(--fern-400)) 1px, transparent 1px),
                             linear-gradient(90deg, hsl(var(--fern-400)) 1px, transparent 1px)`,
            backgroundSize: "64px 64px",
          }}
        />
      </div>

      <div className="container relative mx-auto px-4">
        <div className="mx-auto max-w-4xl text-center">
          {/* Badge */}
          <div className="mb-8 inline-flex animate-fade-in items-center gap-2 rounded-full border border-border bg-card/50 px-4 py-2 backdrop-blur-sm">
            <Sparkles className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-muted-foreground">
              Introducing Manetho 2.0
            </span>
            <ArrowRight className="h-4 w-4 text-muted-foreground" />
          </div>

          {/* Headline */}
          <h1
            className="mb-6 text-4xl font-bold tracking-tight text-foreground opacity-0 animate-fade-in sm:text-5xl md:text-6xl lg:text-7xl"
            style={{ animationDelay: "100ms" }}
          >
            Learn anything.
            <br />
            <span className="text-gradient">Master everything.</span>
          </h1>

          {/* Subheadline */}
          <p
            className="mx-auto mb-10 max-w-2xl text-lg text-muted-foreground opacity-0 animate-fade-in sm:text-xl"
            style={{ animationDelay: "200ms" }}
          >
            The modern learning platform designed for developers and creators.
            Interactive courses, real-world projects, and a community that
            pushes you forward.
          </p>

          {/* CTA Buttons */}
          <div
            className="flex flex-col items-center justify-center gap-4 opacity-0 animate-fade-in sm:flex-row"
            style={{ animationDelay: "300ms" }}
          >
            <Button size="lg" className="group min-w-[180px] glow-primary">
              Start Learning
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="min-w-[180px] border-border bg-transparent hover:bg-secondary"
            >
              <Play className="mr-2 h-4 w-4" />
              Watch Demo
            </Button>
          </div>

          {/* Stats */}
          <div
            className="mt-16 grid grid-cols-2 gap-8 opacity-0 animate-fade-in sm:grid-cols-4"
            style={{ animationDelay: "400ms" }}
          >
            {[
              { value: "50K+", label: "Learners" },
              { value: "200+", label: "Courses" },
              { value: "95%", label: "Completion" },
              { value: "4.9", label: "Rating" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl font-bold text-foreground sm:text-4xl">
                  {stat.value}
                </div>
                <div className="mt-1 text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
