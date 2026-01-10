import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Users, Target, Heart, Globe } from "lucide-react";

const stats = [
  { value: "50K+", label: "Active Learners" },
  { value: "200+", label: "Expert-Led Courses" },
  { value: "150+", label: "Countries Reached" },
  { value: "95%", label: "Completion Rate" },
];

const values = [
  {
    icon: Target,
    title: "Mission-Driven",
    description:
      "We believe education should be accessible, practical, and transformative. Every decision we make centers on learner success.",
  },
  {
    icon: Heart,
    title: "Community First",
    description:
      "Learning is better together. We foster a supportive community where everyone helps each other grow.",
  },
  {
    icon: Globe,
    title: "Global Reach",
    description:
      "We're building a platform that transcends borders, making world-class education available everywhere.",
  },
];

const team = [
  {
    name: "Sarah Chen",
    role: "CEO & Co-Founder",
    bio: "Former engineering lead at Google. Passionate about democratizing tech education.",
  },
  {
    name: "Marcus Johnson",
    role: "CTO & Co-Founder",
    bio: "Built learning platforms at scale. Believes in learning by doing.",
  },
  {
    name: "Emma Wilson",
    role: "Head of Design",
    bio: "Award-winning designer focused on creating delightful learning experiences.",
  },
  {
    name: "Alex Rivera",
    role: "Head of Content",
    bio: "15+ years in curriculum development. Expert in instructional design.",
  },
];

export default function About() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          {/* Hero */}
          <div className="mx-auto mb-20 max-w-3xl text-center">
            <h1 className="mb-6 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              Empowering the next generation of{" "}
              <span className="text-gradient">creators</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              We're on a mission to make high-quality education accessible to
              everyone. LearnFlow combines expert instruction, hands-on
              projects, and community support to help you build real skills.
            </p>
          </div>

          {/* Stats */}
          <div className="mx-auto mb-20 grid max-w-4xl grid-cols-2 gap-8 sm:grid-cols-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="text-center rounded-xl border border-border bg-card/50 p-6"
              >
                <div className="text-3xl font-bold text-foreground">
                  {stat.value}
                </div>
                <div className="mt-1 text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* Story */}
          <div className="mx-auto mb-20 max-w-3xl">
            <h2 className="mb-6 text-center text-2xl font-bold text-foreground">
              Our Story
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                LearnFlow started in 2021 when two engineers noticed a gap in
                online education. Most platforms focused on passive
                video-watching, but real learning happens when you build things.
              </p>
              <p>
                We set out to create a different kind of learning platform—one
                where every course includes real projects, where learners
                support each other, and where instructors are practitioners, not
                just teachers.
              </p>
              <p>
                Today, LearnFlow serves over 50,000 learners worldwide, with
                students from startups and Fortune 500 companies alike. We're
                just getting started.
              </p>
            </div>
          </div>

          {/* Values */}
          <div className="mx-auto mb-20 max-w-5xl">
            <h2 className="mb-8 text-center text-2xl font-bold text-foreground">
              Our Values
            </h2>
            <div className="grid gap-6 sm:grid-cols-3">
              {values.map((value) => {
                const Icon = value.icon;
                return (
                  <div
                    key={value.title}
                    className="rounded-2xl border border-border bg-card/50 p-6 text-center"
                  >
                    <div className="mx-auto mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="mb-2 font-semibold text-foreground">
                      {value.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {value.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Team */}
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-8 text-center text-2xl font-bold text-foreground">
              Leadership Team
            </h2>
            <div className="grid gap-6 sm:grid-cols-2">
              {team.map((member) => (
                <div
                  key={member.name}
                  className="flex items-start gap-4 rounded-xl border border-border bg-card/50 p-6"
                >
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-primary/10 text-lg font-semibold text-primary">
                    {member.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">
                      {member.name}
                    </h3>
                    <p className="mb-2 text-sm text-primary">{member.role}</p>
                    <p className="text-sm text-muted-foreground">{member.bio}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
