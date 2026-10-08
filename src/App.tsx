import { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/features/auth/AuthProvider";
import { ProgressProvider } from "@/features/progress/ProgressProvider";
import { BookmarkProvider } from "@/features/bookmarks/BookmarkProvider";
import { ThemeProvider } from "@/features/theme/ThemeProvider";
import { AppShell } from "@/components/layout/AppShell";
import { HomePage } from "@/pages/Home";
import { CoursesPage } from "@/pages/Courses";
import { CourseDetailPage } from "@/pages/CourseDetail";
import { LearnPage } from "@/pages/Learn";
import { QuizPage } from "@/pages/Quiz";
import { LearningPathsPage, LearningPathDetailPage } from "@/pages/LearningPaths";
import { TopicsPage, TopicDetailPage } from "@/pages/Topics";
import { InstructorsPage, InstructorDetailPage } from "@/pages/Instructors";
import { ResourcesPage, ResourceDetailPage } from "@/pages/Resources";
import { SearchPage } from "@/pages/Search";
import { MyLearningPage } from "@/pages/MyLearning";
import { SavedPage } from "@/pages/Saved";
import { AboutPage } from "@/pages/About";
import { LoginPage } from "@/pages/Login";
import { RegisterPage } from "@/pages/Register";
import { ProfilePage } from "@/pages/Profile";
import { CertificatePage } from "@/pages/Certificate";
import { NotFoundPage } from "@/pages/NotFound";

const LoadingFallback = () => <div className="flex items-center justify-center min-h-screen">Loading...</div>;

export function App() {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <AuthProvider>
          <ProgressProvider>
            <BookmarkProvider>
              <AppShell>
                <Routes>
                  <Route path="/" element={<Suspense fallback={<LoadingFallback />}><HomePage /></Suspense>} />
                  <Route path="/courses" element={<Suspense fallback={<LoadingFallback />}><CoursesPage /></Suspense>} />
                  <Route path="/courses/:courseSlug" element={<Suspense fallback={<LoadingFallback />}><CourseDetailPage /></Suspense>} />
                  <Route path="/learn/:courseSlug/:lessonSlug" element={<Suspense fallback={<LoadingFallback />}><LearnPage /></Suspense>} />
                  <Route path="/quiz/:courseSlug/:lessonSlug" element={<Suspense fallback={<LoadingFallback />}><QuizPage /></Suspense>} />
                  <Route path="/learning-paths" element={<Suspense fallback={<LoadingFallback />}><LearningPathsPage /></Suspense>} />
                  <Route path="/learning-paths/:pathSlug" element={<Suspense fallback={<LoadingFallback />}><LearningPathDetailPage /></Suspense>} />
                  <Route path="/topics" element={<Suspense fallback={<LoadingFallback />}><TopicsPage /></Suspense>} />
                  <Route path="/topics/:topicSlug" element={<Suspense fallback={<LoadingFallback />}><TopicDetailPage /></Suspense>} />
                  <Route path="/instructors" element={<Suspense fallback={<LoadingFallback />}><InstructorsPage /></Suspense>} />
                  <Route path="/instructors/:instructorSlug" element={<Suspense fallback={<LoadingFallback />}><InstructorDetailPage /></Suspense>} />
                  <Route path="/resources" element={<Suspense fallback={<LoadingFallback />}><ResourcesPage /></Suspense>} />
                  <Route path="/resources/:resourceSlug" element={<Suspense fallback={<LoadingFallback />}><ResourceDetailPage /></Suspense>} />
                  <Route path="/search" element={<Suspense fallback={<LoadingFallback />}><SearchPage /></Suspense>} />
                  <Route path="/my-learning" element={<Suspense fallback={<LoadingFallback />}><MyLearningPage /></Suspense>} />
                  <Route path="/saved" element={<Suspense fallback={<LoadingFallback />}><SavedPage /></Suspense>} />
                  <Route path="/about" element={<Suspense fallback={<LoadingFallback />}><AboutPage /></Suspense>} />
                  <Route path="/login" element={<Suspense fallback={<LoadingFallback />}><LoginPage /></Suspense>} />
                  <Route path="/register" element={<Suspense fallback={<LoadingFallback />}><RegisterPage /></Suspense>} />
                  <Route path="/profile" element={<Suspense fallback={<LoadingFallback />}><ProfilePage /></Suspense>} />
                  <Route path="/certificate/:certId" element={<Suspense fallback={<LoadingFallback />}><CertificatePage /></Suspense>} />
                  <Route path="*" element={<Suspense fallback={<LoadingFallback />}><NotFoundPage /></Suspense>} />
                </Routes>
              </AppShell>
            </BookmarkProvider>
          </ProgressProvider>
        </AuthProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
}