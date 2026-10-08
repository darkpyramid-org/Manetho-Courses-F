import { useParams, Link } from "react-router-dom";
import { Award, User, Calendar, ArrowLeft, Shield, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { PageHeader } from "@/components/shared/PageHeader";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { useProgress } from "@/features/progress/ProgressProvider";
import { courseService } from "@/services/courseService";
import { formatDate } from "@/lib/format";

export default function CertificatePage() {
  const { certId } = useParams<{ certId: string }>();
  const { getCertificates } = useProgress();
  const certificates = getCertificates();
  const certificate = certificates.find((c) => c.id === certId);

  if (!certificate) {
    return (
      <div className="container py-12 text-center">
        <h1 className="display text-2xl mb-4">Certificate not found</h1>
        <p className="text-muted-foreground mb-6">This certificate does not exist or has been removed.</p>
        <Link to="/my-learning">
          <Button className="rounded-sm">← Back to My Learning</Button>
        </Link>
      </div>
    );
  }

  const course = courseService.getById(certificate.courseId);
  const issuedDate = new Date(certificate.issuedAt);
  const formattedDate = issuedDate.toLocaleDateString("en-GB", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="container py-12 max-w-2xl">
      <Breadcrumbs items={[
        { label: "My Learning", href: "/my-learning" },
        { label: "Certificates", href: "/my-learning/certificates" },
        { label: certificate.courseTitle },
      ]} />

      {/* Certificate Card */}
      <Card className="relative overflow-hidden border-2 border-gold-500/30 mb-8">
        <div className="absolute inset-0 bg-gradient-to-br from-gold-500/5 via-transparent to-gold-500/5" aria-hidden="true" />
        <div className="absolute inset-0 bg-[url('/hero.svg')] bg-cover bg-center opacity-[0.02]" aria-hidden="true" />

        <CardHeader className="relative pb-6 border-b border-gold-500/20">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Shield className="h-6 w-6 text-gold-500" aria-hidden="true" />
            <span className="text-[11px] font-semibold uppercase tracking-widest text-gold-700 dark:text-gold-300">
              Certificate of Completion
            </span>
          </div>
          <Award className="mx-auto h-16 w-16 text-gold-500/60 mb-4" aria-hidden="true" />
          <h1 className="display text-center text-3xl mb-2">{certificate.courseTitle}</h1>
          <p className="text-center text-lg text-muted-foreground">
            Awarded to <strong>{certificate.studentName}</strong>
          </p>
        </CardHeader>

        <CardContent className="relative py-6 space-y-4 text-center">
          <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-1.5">
              <Calendar className="h-4 w-4" aria-hidden="true" />
              <span>Issued {formattedDate}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <User className="h-4 w-4" aria-hidden="true" />
              <span>ID: {certificate.id.slice(0, 12)}…</span>
            </div>
          </div>

          <div className="rounded-sm border border-gold-500/30 bg-gold-500/10 px-4 py-3 text-xs text-gold-800 dark:text-gold-200 max-w-md mx-auto">
            <strong>Verification:</strong> This certificate can be verified at{" "}
            <code className="font-mono">{window.location.origin}/verify/{certificate.id}</code>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <Button variant="outline" className="rounded-sm" asChild>
              <Link to={course ? `/courses/${course.slug}` : "/my-learning"}>
                <ArrowLeft className="mr-2 h-4 w-4" aria-hidden="true" />
                {course ? "Review Course" : "Back to Learning"}
              </Link>
            </Button>
            <Button className="rounded-sm" disabled>
              <Download className="mr-2 h-4 w-4" aria-hidden="true" />
              Download PDF
            </Button>
          </div>

          <p className="text-xs text-muted-foreground/70 max-w-md mx-auto">
            This certificate demonstrates completion of the course on Manetho.
            It is not an accredited qualification and does not confer academic credit.
          </p>
        </CardContent>
      </Card>

      {/* Details */}
      <Card>
        <CardHeader>
          <h2 className="display text-lg">Certificate Details</h2>
        </CardHeader>
        <CardContent className="space-y-3 text-sm">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-muted-foreground">Student</p>
              <p className="font-medium">{certificate.studentName}</p>
            </div>
            <div>
              <p className="text-muted-foreground">Course</p>
              <p className="font-medium">{certificate.courseTitle}</p>
            </div>
            <div>
              <p className="text-muted-foreground">Certificate ID</p>
              <p className="font-mono text-xs">{certificate.id}</p>
            </div>
            <div>
              <p className="text-muted-foreground">Issued</p>
              <p className="font-medium">{formattedDate}</p>
            </div>
          </div>

          {course && (
            <div className="pt-4 border-t border-border">
              <p className="text-muted-foreground mb-2">Course Details</p>
              <div className="grid grid-cols-2 gap-4 text-xs">
                <div>
                  <p className="text-muted-foreground">Duration</p>
                  <p className="font-medium">{formatDuration(course.durationMinutes)}</p>
                </div>
                <div>
                  <p className="text-muted-foreground">Lessons</p>
                  <p className="font-medium">{course.lessonCount}</p>
                </div>
                <div>
                  <p className="text-muted-foreground">Level</p>
                  <p className="font-medium capitalize">{course.level}</p>
                </div>
                <div>
                  <p className="text-muted-foreground">Category</p>
                  <p className="font-medium">{course.category}</p>
                </div>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}