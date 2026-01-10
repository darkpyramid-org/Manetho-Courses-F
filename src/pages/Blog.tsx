import { Link } from "react-router-dom";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Calendar, Clock, User } from "lucide-react";

const featuredPost = {
  slug: "future-of-learning",
  title: "The Future of Learning: AI-Powered Education in 2025",
  excerpt:
    "Explore how artificial intelligence is reshaping education, from personalized learning paths to intelligent tutoring systems that adapt to each learner's needs.",
  author: "Sarah Chen",
  date: "Jan 8, 2025",
  readTime: "8 min read",
  category: "Industry Trends",
};

const posts = [
  {
    slug: "react-best-practices",
    title: "10 React Best Practices Every Developer Should Know",
    excerpt:
      "Master React with these essential patterns for clean, maintainable code that scales.",
    author: "Marcus Johnson",
    date: "Jan 5, 2025",
    readTime: "6 min read",
    category: "React",
  },
  {
    slug: "typescript-generics",
    title: "Understanding TypeScript Generics: A Practical Guide",
    excerpt:
      "Demystify generics with real-world examples and practical use cases you can apply today.",
    author: "Alex Rivera",
    date: "Jan 3, 2025",
    readTime: "10 min read",
    category: "TypeScript",
  },
  {
    slug: "career-growth",
    title: "From Junior to Senior: A Developer's Career Roadmap",
    excerpt:
      "The skills, mindset shifts, and strategies that accelerate your growth as a developer.",
    author: "Emma Wilson",
    date: "Dec 28, 2024",
    readTime: "12 min read",
    category: "Career",
  },
  {
    slug: "api-design",
    title: "Building APIs That Developers Love",
    excerpt:
      "Design principles and patterns for creating intuitive, well-documented REST APIs.",
    author: "James Park",
    date: "Dec 22, 2024",
    readTime: "9 min read",
    category: "Backend",
  },
  {
    slug: "css-architecture",
    title: "Modern CSS Architecture for Large-Scale Applications",
    excerpt:
      "Organize your styles for maintainability with modern approaches like CSS Modules and Tailwind.",
    author: "Emma Wilson",
    date: "Dec 18, 2024",
    readTime: "7 min read",
    category: "CSS",
  },
  {
    slug: "testing-strategies",
    title: "Testing Strategies That Actually Work",
    excerpt:
      "A pragmatic approach to testing that balances coverage, speed, and maintainability.",
    author: "Marcus Johnson",
    date: "Dec 14, 2024",
    readTime: "11 min read",
    category: "Testing",
  },
];

const categories = [
  "All",
  "React",
  "TypeScript",
  "Backend",
  "Career",
  "Industry Trends",
];

export default function Blog() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <h1 className="mb-4 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              <span className="text-gradient">Blog</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Insights, tutorials, and updates from the LearnFlow team.
            </p>
          </div>

          {/* Categories */}
          <div className="mb-12 flex flex-wrap justify-center gap-2">
            {categories.map((category, index) => (
              <button
                key={category}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-smooth ${
                  index === 0
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-muted-foreground hover:bg-secondary/80 hover:text-foreground"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Featured post */}
          <Link
            to={`/blog/${featuredPost.slug}`}
            className="group mx-auto mb-12 block max-w-4xl rounded-2xl border border-border bg-card/50 p-8 transition-smooth hover:border-primary/50 hover:bg-card"
          >
            <Badge
              variant="outline"
              className="mb-4 border-primary/50 text-primary"
            >
              Featured
            </Badge>
            <h2 className="mb-3 text-2xl font-bold text-foreground transition-colors-smooth group-hover:text-primary sm:text-3xl">
              {featuredPost.title}
            </h2>
            <p className="mb-6 text-muted-foreground">{featuredPost.excerpt}</p>
            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-1">
                <User className="h-4 w-4" />
                {featuredPost.author}
              </span>
              <span className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                {featuredPost.date}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                {featuredPost.readTime}
              </span>
              <Badge variant="secondary">{featuredPost.category}</Badge>
            </div>
          </Link>

          {/* Post grid */}
          <div className="mx-auto grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <Link
                key={post.slug}
                to={`/blog/${post.slug}`}
                className="group flex flex-col rounded-xl border border-border bg-card/50 p-6 transition-smooth hover:border-primary/50 hover:bg-card"
              >
                <Badge variant="secondary" className="mb-3 w-fit">
                  {post.category}
                </Badge>
                <h3 className="mb-2 font-semibold text-foreground transition-colors-smooth group-hover:text-primary">
                  {post.title}
                </h3>
                <p className="mb-4 flex-1 text-sm text-muted-foreground line-clamp-2">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <span>{post.author}</span>
                  <span>{post.readTime}</span>
                </div>
              </Link>
            ))}
          </div>

          {/* Load more */}
          <div className="mt-12 text-center">
            <button className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline">
              Load more articles
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
