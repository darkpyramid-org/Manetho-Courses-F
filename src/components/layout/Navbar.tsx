import { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import {
  BookOpen,
  Compass,
  GraduationCap,
  Library,
  Landmark,
  Info,
  Bookmark,
  Search,
  Menu,
  X,
  User as UserIcon,
  ChevronDown,
  LogIn,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  ScrollArea,
} from "@/components/ui/scroll-area";
import { Logo } from "@/components/layout/Logo";
import { ThemeToggle } from "@/components/layout/ThemeToggle";
import { useAuth } from "@/features/auth/AuthProvider";
import { cn } from "@/lib/utils";

const primaryNav = [
  { label: "Courses", href: "/courses", icon: BookOpen },
  { label: "Learning Paths", href: "/learning-paths", icon: Compass },
  { label: "Topics", href: "/topics", icon: Landmark },
  { label: "Instructors", href: "/instructors", icon: GraduationCap },
  { label: "Resources", href: "/resources", icon: Library },
  { label: "About", href: "/about", icon: Info },
];

const utilityNav = [
  { label: "My Learning", href: "/my-learning", icon: GraduationCap },
  { label: "Saved", href: "/saved", icon: Bookmark },
];

function NavLinks({ onNavigate }: { onNavigate?: () => void }) {
  return (
    <nav aria-label="Primary" className="hidden items-center gap-0.5 xl:flex">
      {primaryNav.map((item) => (
        <NavLink
          key={item.href}
          to={item.href}
          onClick={onNavigate}
          className={({ isActive }) =>
            cn(
              "rounded-sm px-3 py-2 text-sm font-medium transition-colors",
              isActive
                ? "bg-secondary text-foreground"
                : "text-muted-foreground hover:bg-secondary/60 hover:text-foreground",
            )
          }
        >
          {item.label}
        </NavLink>
      ))}
    </nav>
  );
}

function SearchBox({ compact = false }: { compact?: boolean }) {
  const navigate = useNavigate();
  const [value, setValue] = useState("");
  return (
    <form
      role="search"
      onSubmit={(e) => {
        e.preventDefault();
        if (value.trim()) {
          navigate(`/search?q=${encodeURIComponent(value.trim())}`);
          setValue("");
        }
      }}
    >
      <div className="relative">
        <Search
          aria-hidden="true"
          className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground"
        />
        <Input
          type="search"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder={compact ? "Search Manetho…" : "Search courses, topics, instructors…"}
          aria-label="Search Manetho"
          className={cn(
            "w-full rounded-sm border-input bg-card pl-9 text-sm",
            compact ? "h-9" : "h-10",
          )}
        />
      </div>
    </form>
  );
}

function UserMenu() {
  const { user, signOut } = useAuth();
  if (!user) {
    return (
      <Link to="/login">
        <Button variant="outline" size="sm" className="rounded-sm">
          <LogIn className="mr-2 h-4 w-4" aria-hidden="true" />
          Sign in
        </Button>
      </Link>
    );
  }
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm" className="rounded-sm" aria-label="Account menu">
          <span className="flex h-7 w-7 items-center justify-center rounded-sm bg-gold-500/15 font-serif text-sm font-semibold text-gold-700 dark:text-gold-300" aria-hidden="true">
            {user.name.slice(0, 1).toUpperCase()}
          </span>
          <span className="ml-2 hidden max-w-32 truncate text-sm md:inline">
            {user.name}
          </span>
          <ChevronDown className="ml-1 h-3.5 w-3.5 text-muted-foreground" aria-hidden="true" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-56 rounded-sm">
        <DropdownMenuLabel className="font-normal">
          <span className="block text-sm font-semibold text-foreground">
            {user.name}
          </span>
          <span className="block text-xs text-muted-foreground">
            Demo session — no account is created
          </span>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem asChild>
          <Link to="/profile">
            <UserIcon className="mr-2 h-4 w-4" aria-hidden="true" />
            Profile
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link to="/my-learning">
            <GraduationCap className="mr-2 h-4 w-4" aria-hidden="true" />
            My Learning
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link to="/saved">
            <Bookmark className="mr-2 h-4 w-4" aria-hidden="true" />
            Saved courses
          </Link>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem onSelect={signOut}>
          <LogIn className="mr-2 h-4 w-4 rotate-180" aria-hidden="true" />
          Sign out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSection, setMobileSection] = useState<"main" | "utility">("main");

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/85">
      <div className="container flex h-16 items-center justify-between gap-4">
        <Logo />

        <NavLinks />

        <div className="flex items-center gap-2">
          <div className="hidden lg:block lg:w-52 xl:w-72">
            <SearchBox compact />
          </div>
          <ThemeToggle />
          <div className="hidden xl:block">
            <UserMenu />
          </div>

          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="h-9 w-9 rounded-sm xl:hidden"
                aria-label="Open menu"
                aria-expanded={mobileOpen}
              >
                {mobileOpen ? (
                  <X className="h-5 w-5" aria-hidden="true" />
                ) : (
                  <Menu className="h-5 w-5" aria-hidden="true" />
                )}
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              hideClose
              aria-describedby={undefined}
              className="w-full max-w-sm rounded-none border-border bg-card p-0"
            >
              <SheetTitle className="sr-only">Site menu</SheetTitle>
              <div className="flex h-full flex-col">
                <div className="flex items-center justify-between border-b border-border p-4">
                  <Logo />
                  <SheetClose asChild>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-9 w-9 rounded-sm"
                      aria-label="Close menu"
                    >
                      <X className="h-5 w-5" aria-hidden="true" />
                    </Button>
                  </SheetClose>
                </div>

                <div className="border-b border-border p-4">
                  <SearchBox />
                </div>

                <div className="flex border-b border-border" role="tablist" aria-label="Menu sections">
                  <button
                    role="tab"
                    aria-selected={mobileSection === "main"}
                    onClick={() => setMobileSection("main")}
                    className={cn(
                      "flex-1 border-b-2 px-4 py-3 text-sm font-medium transition-colors",
                      mobileSection === "main"
                        ? "border-gold-500 text-foreground"
                        : "border-transparent text-muted-foreground",
                    )}
                  >
                    Browse
                  </button>
                  <button
                    role="tab"
                    aria-selected={mobileSection === "utility"}
                    onClick={() => setMobileSection("utility")}
                    className={cn(
                      "flex-1 border-b-2 px-4 py-3 text-sm font-medium transition-colors",
                      mobileSection === "utility"
                        ? "border-gold-500 text-foreground"
                        : "border-transparent text-muted-foreground",
                    )}
                  >
                    My Manetho
                  </button>
                </div>

                <ScrollArea className="flex-1 p-4">
                  {mobileSection === "main" ? (
                    <ul className="space-y-1">
                      {primaryNav.map((item) => (
                        <li key={item.href}>
                          <NavLink
                            to={item.href}
                            onClick={() => setMobileOpen(false)}
                            className={({ isActive }) =>
                              cn(
                                "flex items-center gap-3 rounded-sm px-3 py-2.5 text-sm font-medium transition-colors",
                                isActive
                                  ? "bg-secondary text-foreground"
                                  : "text-muted-foreground hover:bg-secondary/60 hover:text-foreground",
                              )
                            }
                          >
                            <item.icon className="h-4 w-4" aria-hidden="true" />
                            {item.label}
                          </NavLink>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <ul className="space-y-1">
                      {utilityNav.map((item) => (
                        <li key={item.href}>
                          <NavLink
                            to={item.href}
                            onClick={() => setMobileOpen(false)}
                            className={({ isActive }) =>
                              cn(
                                "flex items-center gap-3 rounded-sm px-3 py-2.5 text-sm font-medium transition-colors",
                                isActive
                                  ? "bg-secondary text-foreground"
                                  : "text-muted-foreground hover:bg-secondary/60 hover:text-foreground",
                              )
                            }
                          >
                            <item.icon className="h-4 w-4" aria-hidden="true" />
                            {item.label}
                          </NavLink>
                        </li>
                      ))}
                      <li>
                        <NavLink
                          to="/search"
                          onClick={() => setMobileOpen(false)}
                          className={({ isActive }) =>
                            cn(
                              "flex items-center gap-3 rounded-sm px-3 py-2.5 text-sm font-medium transition-colors",
                              isActive
                                ? "bg-secondary text-foreground"
                                : "text-muted-foreground hover:bg-secondary/60 hover:text-foreground",
                            )
                          }
                        >
                          <Search className="h-4 w-4" aria-hidden="true" />
                          Search
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/profile"
                          onClick={() => setMobileOpen(false)}
                          className={({ isActive }) =>
                            cn(
                              "flex items-center gap-3 rounded-sm px-3 py-2.5 text-sm font-medium transition-colors",
                              isActive
                                ? "bg-secondary text-foreground"
                                : "text-muted-foreground hover:bg-secondary/60 hover:text-foreground",
                            )
                          }
                        >
                          <UserIcon className="h-4 w-4" aria-hidden="true" />
                          Profile
                        </NavLink>
                      </li>
                      <li className="pt-2">
                        <Link
                          to="/login"
                          onClick={() => setMobileOpen(false)}
                          className="flex items-center gap-3 rounded-sm px-3 py-2.5 text-sm font-medium text-muted-foreground hover:bg-secondary/60 hover:text-foreground"
                        >
                          <LogIn className="h-4 w-4" aria-hidden="true" />
                          Sign in
                        </Link>
                      </li>
                    </ul>
                  )}
                </ScrollArea>

                <div className="border-t border-border p-4">
                  <UserMenu />
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
