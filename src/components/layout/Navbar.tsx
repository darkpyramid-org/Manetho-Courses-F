import { useState } from "react";
import { Link } from "react-router-dom";
import { Search, Menu, X, BookOpen, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const navItems = [
  { label: "Courses", href: "/courses" },
  { label: "Docs", href: "/docs" },
  { label: "Pricing", href: "/pricing" },
];

export function Navbar() {
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 pt-4">
      <nav
        className="mx-auto max-w-6xl glass rounded-2xl shadow-fern-lg"
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="flex h-16 items-center justify-between px-6">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-2 transition-smooth hover:opacity-80"
            aria-label="Go to homepage"
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary">
              <BookOpen className="h-5 w-5 text-primary-foreground" />
            </div>
            <span className="text-lg font-semibold text-foreground">
              LearnFlow
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-1 md:flex">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                className="rounded-lg px-4 py-2 text-sm font-medium text-muted-foreground transition-smooth hover:bg-secondary hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Right Section */}
          <div className="flex items-center gap-3">
            {/* Search - Desktop */}
            <div className="relative hidden md:block">
              <Search
                className={`absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 transition-colors-smooth ${
                  isSearchFocused ? "text-primary" : "text-muted-foreground"
                }`}
              />
              <Input
                type="search"
                placeholder="Search..."
                className="h-9 w-48 bg-secondary/50 pl-9 text-sm placeholder:text-muted-foreground focus:w-64 focus:bg-secondary transition-all duration-200"
                onFocus={() => setIsSearchFocused(true)}
                onBlur={() => setIsSearchFocused(false)}
                aria-label="Search"
              />
              <kbd className="pointer-events-none absolute right-3 top-1/2 hidden -translate-y-1/2 select-none rounded border border-border bg-muted px-1.5 py-0.5 text-[10px] font-medium text-muted-foreground lg:block">
                ⌘K
              </kbd>
            </div>

            {/* User Button - Desktop */}
            <Button
              variant="ghost"
              size="icon"
              className="hidden h-9 w-9 rounded-lg text-muted-foreground transition-smooth hover:bg-secondary hover:text-foreground md:flex"
              aria-label="User menu"
            >
              <User className="h-5 w-5" />
            </Button>

            {/* Mobile Menu */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-9 w-9 rounded-lg text-muted-foreground transition-smooth hover:bg-secondary hover:text-foreground md:hidden"
                  aria-label="Open menu"
                >
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="w-full max-w-xs border-border bg-card p-0"
              >
                <div className="flex h-full flex-col">
                  {/* Mobile Header */}
                  <div className="flex items-center justify-between border-b border-border p-4">
                    <Link
                      to="/"
                      className="flex items-center gap-2"
                      onClick={() => setIsOpen(false)}
                    >
                      <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary">
                        <BookOpen className="h-5 w-5 text-primary-foreground" />
                      </div>
                      <span className="text-lg font-semibold text-foreground">
                        LearnFlow
                      </span>
                    </Link>
                  </div>

                  {/* Mobile Search */}
                  <div className="border-b border-border p-4">
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                      <Input
                        type="search"
                        placeholder="Search..."
                        className="h-10 w-full bg-secondary/50 pl-9"
                        aria-label="Search"
                      />
                    </div>
                  </div>

                  {/* Mobile Nav Items */}
                  <nav className="flex-1 p-4">
                    <ul className="space-y-1">
                      {navItems.map((item) => (
                        <li key={item.label}>
                          <Link
                            to={item.href}
                            className="flex items-center rounded-lg px-4 py-3 text-base font-medium text-muted-foreground transition-smooth hover:bg-secondary hover:text-foreground"
                            onClick={() => setIsOpen(false)}
                          >
                            {item.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </nav>

                  {/* Mobile Footer */}
                  <div className="border-t border-border p-4">
                    <Button className="w-full" variant="default">
                      Get Started
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>
    </header>
  );
}
