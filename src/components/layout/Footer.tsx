import { Link } from "react-router-dom";
import { Logo } from "@/components/layout/Logo";

const footerColumns = [
  {
    title: "Learn",
    links: [
      { label: "Courses", href: "/courses" },
      { label: "Learning Paths", href: "/learning-paths" },
      { label: "Topics", href: "/topics" },
      { label: "Instructors", href: "/instructors" },
      { label: "Resources", href: "/resources" },
    ],
  },
  {
    title: "My Manetho",
    links: [
      { label: "My Learning", href: "/my-learning" },
      { label: "Saved Courses", href: "/saved" },
      { label: "Certificates", href: "/my-learning/certificates" },
      { label: "Profile", href: "/profile" },
    ],
  },
  {
    title: "Platform",
    links: [
      { label: "About Manetho", href: "/about" },
      { label: "Search", href: "/search" },
      { label: "Sign in", href: "/login" },
      { label: "Register", href: "/register" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-secondary/40">
      <div className="container py-14">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <Logo />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              A digital learning platform dedicated to Ancient Egypt —
              structured courses, historical context, and archaeological
              evidence for one of history's greatest civilizations.
            </p>
            <p className="mt-4 text-xs leading-relaxed text-muted-foreground">
              Manetho is a demonstration platform. Course content is
              seed content for study; instructor profiles are illustrative.
              Progress is stored locally in your browser.
            </p>
          </div>

          {footerColumns.map((column) => (
            <nav key={column.title} aria-label={column.title}>
              <h3 className="eyebrow mb-4">{column.title}</h3>
              <ul className="space-y-2.5">
                {column.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      to={link.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-border pt-6 sm:flex-row sm:items-center">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Manetho. Learn Ancient Egypt.
          </p>
          <p className="text-xs text-muted-foreground">
            Named for Manetho of Sebennytos, the Egyptian priest who first
            divided pharaonic history into dynasties.
          </p>
        </div>
      </div>
    </footer>
  );
}
