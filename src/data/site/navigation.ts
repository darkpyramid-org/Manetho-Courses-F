export const primaryNavigation = [
  { label: "Courses", href: "/courses", icon: "book" },
  { label: "Learning Paths", href: "/learning-paths", icon: "compass" },
  { label: "Topics", href: "/topics", icon: "landmark" },
  { label: "Instructors", href: "/instructors", icon: "graduation" },
  { label: "Resources", href: "/resources", icon: "library" },
  { label: "About", href: "/about", icon: "info" },
] as const;

export const utilityNavigation = [
  { label: "My Learning", href: "/my-learning", icon: "graduation" },
  { label: "Saved", href: "/saved", icon: "bookmark" },
] as const;

export const footerSections = [
  { title: "Learn", links: [
    { label: "Courses", href: "/courses" },
    { label: "Learning Paths", href: "/learning-paths" },
    { label: "Topics", href: "/topics" },
    { label: "Instructors", href: "/instructors" },
    { label: "Resources", href: "/resources" },
  ] },
  { title: "My Manetho", links: [
    { label: "My Learning", href: "/my-learning" },
    { label: "Saved Courses", href: "/saved" },
    { label: "Certificates", href: "/profile" },
    { label: "Profile", href: "/profile" },
  ] },
  { title: "Platform", links: [
    { label: "About Manetho", href: "/about" },
    { label: "Search", href: "/search" },
    { label: "Sign in", href: "/login" },
    { label: "Register", href: "/register" },
  ] },
] as const;
