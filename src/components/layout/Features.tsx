import { Code2, Layers, Zap, Users, Shield, Rocket } from "lucide-react";

const features = [
  {
    icon: Code2,
    title: "Explore Every Era",
    description:
      "Move from the earliest dynasties to the Ptolemaic period with clear, structured lessons.",
  },
  {
    icon: Layers,
    title: "Structured Paths",
    description:
      "Follow curated learning paths from beginner to advanced, designed by experts.",
  },
  {
    icon: Zap,
    title: "Learn in Context",
    description:
      "Connect rulers, beliefs, places, and daily life to see how ancient Egypt fits together.",
  },
  {
    icon: Users,
    title: "Study the Sources",
    description:
      "Build your understanding with guided reading, visual references, and trusted historical context.",
  },
  {
    icon: Shield,
    title: "Track Your Progress",
    description:
      "Keep your learning organized with bookmarks, progress tracking, and completed-course milestones.",
  },
  {
    icon: Rocket,
    title: "Keep Discovering",
    description:
      "Save fascinating courses and return to the topics you want to explore more deeply.",
  },
];

export function Features() {
  return (
    <section className="relative py-24">
      {/* Section background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-fern-900/30 to-transparent" />

      <div className="container relative mx-auto px-4">
        {/* Section header */}
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Everything you need to{" "}
            <span className="text-gradient">level up</span>
          </h2>
          <p className="text-lg text-muted-foreground">
Everything in Manetho is designed to help you learn consistently and build confidence through practice.
          </p>
        </div>

        {/* Features grid */}
        <div className="mx-auto grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group relative rounded-2xl border border-border bg-card/50 p-6 transition-smooth hover:border-primary/50 hover:bg-card"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Hover glow */}
              <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-radial from-primary/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />

              <div className="relative">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-smooth group-hover:bg-primary group-hover:text-primary-foreground">
                  <feature.icon className="h-6 w-6" />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-foreground">
                  {feature.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
