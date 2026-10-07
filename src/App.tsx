import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/features/theme/ThemeProvider";
import { AuthProvider } from "@/features/auth/AuthProvider";
import { ProgressProvider } from "@/features/progress/ProgressProvider";
import { BookmarkProvider } from "@/features/bookmarks/BookmarkProvider";
import Index from "./pages/Index";
import Courses from "./pages/Courses";
import Pricing from "./pages/Pricing";
import Docs from "./pages/Docs";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import Product from "./pages/Product";
import Careers from "./pages/Careers";
import Features from "./pages/Features";
import Changelog from "./pages/Changelog";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
    <AuthProvider>
    <ProgressProvider>
    <BookmarkProvider>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/docs" element={<Docs />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/product" element={<Product />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/features" element={<Features />} />
          <Route path="/changelog" element={<Changelog />} />
          <Route path="/components" element={<Courses />} />
          <Route path="/tutorials" element={<Courses />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
    </BookmarkProvider>
    </ProgressProvider>
    </AuthProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
