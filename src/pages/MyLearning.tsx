import { useState } from "react";
import { Link } from "react-router-dom";
import { BookOpen, Award, CheckCircle2, Clock } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { useAuth } from "@/features/auth/AuthProvider";
import { useProgress } from "@/features/progress/ProgressProvider";
import { learningPathService } from "@/services/learningPathService";
import {
  ContinueLearning,
  InProgressCourseCard,
  CompletedCourseCard,
  CertificateCard,
  LearningPathCard,
  StatCard,
} from "@/components/dashboard/DashboardComponents";
import { formatDuration } from "@/lib/format";

export default function MyLearningPage() {
  const { user } = useAuth();
  const { getAllProgress, getStats, getCertificates } = useProgress();
  const [activeTab, setActiveTab] = useState("overview");

  if (!user) {
    return (
      <div className="container py-12 text-center">
        <h1 className="display text-2xl mb-4">Sign in to view your learning</h1>
        <p className="text-muted-foreground mb-6">Track progress, save courses, and earn certificates.</p>
        <Link to="/login">
          <Button className="rounded-sm">Sign In</Button>
        </Link>
      </div>
    );
  }

  const progresses = getAllProgress();
  const stats = getStats();
  const certificates = getCertificates();

  const inProgress = progresses.filter((p) => p.percentage > 0 && p.percentage < 100);
  const completed = progresses.filter((p) => p.percentage === 100);

  const paths = learningPathService.getAll();

  return (
    <div className="container py-8">
      <Breadcrumbs items={[{ label: "My Learning" }]} />
      <div className="mb-8">
        <h1 className="display text-3xl mb-2">Welcome back, {user.name}</h1>
        <p className="text-muted-foreground">Track your progress and continue where you left off.</p>
      </div>

      {/* Stats */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 mb-8">
        <StatCard label="Courses Started" value={stats.coursesStarted} icon={<BookOpen className="h-5 w-5" />} />
        <StatCard label="Courses Completed" value={stats.coursesCompleted} icon={<Award className="h-5 w-5" />} />
        <StatCard label="Lessons Completed" value={stats.lessonsCompleted} icon={<CheckCircle2 className="h-5 w-5" />} />
        <StatCard label="Time Learning" value={formatDuration(stats.totalMinutes)} icon={<Clock className="h-5 w-5" />} />
      </div>

      {/* Tabs */}
      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="in-progress">In Progress ({inProgress.length})</TabsTrigger>
          <TabsTrigger value="completed">Completed ({completed.length})</TabsTrigger>
          <TabsTrigger value="certificates">Certificates ({certificates.length})</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          <ContinueLearning />
          <div className="grid gap-4 md:grid-cols-3">
            {paths.slice(0, 3).map((path) => (
              <LearningPathCard key={path.id} path={path} />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="in-progress" className="space-y-4">
          {inProgress.length > 0 ? (
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {inProgress.map((p) => (
                <InProgressCourseCard key={p.courseId} progress={p} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <BookOpen className="mx-auto h-12 w-12 text-muted-foreground/40 mb-4" aria-hidden="true" />
              <h3 className="display text-lg mb-2">No courses in progress</h3>
              <p className="text-sm text-muted-foreground mb-4">Start a course to see it here.</p>
              <Link to="/courses">
                <Button className="rounded-sm">Browse Courses</Button>
              </Link>
            </div>
          )}
        </TabsContent>

        <TabsContent value="completed" className="space-y-4">
          {completed.length > 0 ? (
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {completed.map((p) => (
                <CompletedCourseCard key={p.courseId} progress={p} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <Award className="mx-auto h-12 w-12 text-muted-foreground/40 mb-4" aria-hidden="true" />
              <h3 className="display text-lg mb-2">No completed courses yet</h3>
              <p className="text-sm text-muted-foreground mb-4">Finish a course to earn a certificate.</p>
              <Link to="/courses">
                <Button className="rounded-sm">Browse Courses</Button>
              </Link>
            </div>
          )}
        </TabsContent>

        <TabsContent value="certificates" className="space-y-4">
          {certificates.length > 0 ? (
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {certificates.map((cert) => (
                <CertificateCard key={cert.id} certificate={cert} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <Award className="mx-auto h-12 w-12 text-muted-foreground/40 mb-4" aria-hidden="true" />
              <h3 className="display text-lg mb-2">No certificates yet</h3>
              <p className="text-sm text-muted-foreground mb-4">Complete a course to earn your first certificate.</p>
              <Link to="/courses">
                <Button className="rounded-sm">Browse Courses</Button>
              </Link>
            </div>
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
}
