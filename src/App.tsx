import { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/features/auth/AuthProvider";
import { ProgressProvider } from "@/features/progress/ProgressProvider";
import { BookmarkProvider } from "@/features/bookmarks/BookmarkProvider";
import { ThemeProvider } from "@/features/theme/ThemeProvider";
import { AppShell } from "@/components/layout/AppShell";
import { HomePage } from "@/pages/Home";
import Courses from "@/pages/Courses";
import CourseDetail from "@/pages/CourseDetail";
import Learn from "@/pages/Learn";
import Quiz from "@/pages/Quiz";
import LearningPaths, { LearningPathDetailPage } from "@/pages/LearningPaths";
import Topics, { TopicDetailPage } from "@/pages/Topics";
import Instructors, { InstructorDetailPage } from "@/pages/Instructors";
import Resources, { ResourceDetailPage } from "@/pages/Resources";
import Search from "@/pages/Search";
import MyLearning from "@/pages/MyLearning";
import Saved from "@/pages/Saved";
import { AboutPage } from "@/pages/About";
import Login from "@/pages/Login";
import Register from "@/pages/Register";
import Profile from "@/pages/Profile";
import Certificate from "@/pages/Certificate";
import NotFound from "@/pages/NotFound";

const LoadingFallback = () => <div className="flex items-center justify-center min-h-screen">Loading...</div>;

export function App() {
  return (
    <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <ThemeProvider>
        <AuthProvider>
          <ProgressProvider>
            <BookmarkProvider>
              <Routes>
                <Route element={<AppShell />}>
                  <Route path="/" element={<Suspense fallback={<LoadingFallback />}><HomePage /></Suspense>} />
                  <Route path="/courses" element={<Suspense fallback={<LoadingFallback />}><Courses /></Suspense>} />
                  <Route path="/courses/:courseSlug" element={<Suspense fallback={<LoadingFallback />}><CourseDetail /></Suspense>} />
                  <Route path="/learn/:courseSlug/:lessonSlug" element={<Suspense fallback={<LoadingFallback />}><Learn /></Suspense>} />
                  <Route path="/quiz/:courseSlug/:lessonSlug" element={<Suspense fallback={<LoadingFallback />}><Quiz /></Suspense>} />
                  <Route path="/learning-paths" element={<Suspense fallback={<LoadingFallback />}><LearningPaths /></Suspense>} />
                  <Route path="/learning-paths/:pathSlug" element={<Suspense fallback={<LoadingFallback />}><LearningPathDetailPage /></Suspense>} />
                  <Route path="/topics" element={<Suspense fallback={<LoadingFallback />}><Topics /></Suspense>} />
                  <Route path="/topics/:topicSlug" element={<Suspense fallback={<LoadingFallback />}><TopicDetailPage /></Suspense>} />
                  <Route path="/instructors" element={<Suspense fallback={<LoadingFallback />}><Instructors /></Suspense>} />
                  <Route path="/instructors/:instructorSlug" element={<Suspense fallback={<LoadingFallback />}><InstructorDetailPage /></Suspense>} />
                  <Route path="/resources" element={<Suspense fallback={<LoadingFallback />}><Resources /></Suspense>} />
                  <Route path="/resources/:resourceSlug" element={<Suspense fallback={<LoadingFallback />}><ResourceDetailPage /></Suspense>} />
                  <Route path="/search" element={<Suspense fallback={<LoadingFallback />}><Search /></Suspense>} />
                  <Route path="/my-learning" element={<Suspense fallback={<LoadingFallback />}><MyLearning /></Suspense>} />
                  <Route path="/saved" element={<Suspense fallback={<LoadingFallback />}><Saved /></Suspense>} />
                  <Route path="/about" element={<Suspense fallback={<LoadingFallback />}><AboutPage /></Suspense>} />
                  <Route path="/login" element={<Suspense fallback={<LoadingFallback />}><Login /></Suspense>} />
                  <Route path="/register" element={<Suspense fallback={<LoadingFallback />}><Register /></Suspense>} />
                  <Route path="/profile" element={<Suspense fallback={<LoadingFallback />}><Profile /></Suspense>} />
                  <Route path="/certificate/:certId" element={<Suspense fallback={<LoadingFallback />}><Certificate /></Suspense>} />
                  <Route path="*" element={<Suspense fallback={<LoadingFallback />}><NotFound /></Suspense>} />
                </Route>
              </Routes>
            </BookmarkProvider>
          </ProgressProvider>
        </AuthProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
}
