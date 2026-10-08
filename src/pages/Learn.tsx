import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { LayoutList, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent } from "@/components/ui/sheet";
import { Curriculum, LessonHeader, LessonNavigation, LessonBody, MobileCurriculumSheet, lessonTypeLabel } from "@/components/learning/Curriculum";
import { LessonBody as LessonBodyRenderer } from "@/components/learning/LessonBody";
import { useCourseProgress } from "@/hooks/useCourseProgress";
import { courseService, findLesson, lessonNeighbours, lessonNumber } from "@/services/courseService";

export default function LearnPage() {
  const { courseSlug, lessonSlug } = useParams<{ courseSlug: string; lessonSlug: string }>();
  const navigate = useNavigate();
  const course = courseService.getBySlug(courseSlug ?? "");
  const [mobileCurriculumOpen, setMobileCurriculumOpen] = useState(false);

  if (!course) {
    return (
      <div className="container py-12 text-center">
        <h1 className="display text-2xl mb-4">Course not found</h1>
        <Link to="/courses" className="text-gold-700 hover:underline">← Back to catalog</Link>
      </div>
    );
  }

  const lessonLocation = findLesson(course, lessonSlug ?? "");
  if (!lessonLocation) {
    // Redirect to first lesson
    const firstLesson = course.modules[0]?.lessons[0];
    if (firstLesson) navigate(`/learn/${courseSlug}/${firstLesson.slug}`, { replace: true });
    return null;
  }

  const lesson = course.modules[lessonLocation.moduleIndex].lessons[lessonLocation.lessonIndex];
  const { setCurrentLesson, isLessonComplete, markLessonComplete } = useCourseProgress(course);
  const neighbours = lessonNeighbours(course, lessonSlug ?? "");

  useEffect(() => {
    setCurrentLesson(lesson.id);
  }, [lesson.id, setCurrentLesson]);

  const handlePrevious = () => {
    if (neighbours.prev) {
      navigate(`/learn/${courseSlug}/${neighbours.prev.slug}`);
    }
  };

  const handleNext = () => {
    if (!isLessonComplete(lesson.id)) {
      markLessonComplete(lesson.id);
    }
    if (neighbours.next) {
      navigate(`/learn/${courseSlug}/${neighbours.next.slug}`);
    } else {
      navigate(`/courses/${courseSlug}`);
    }
  };

  // Lesson player layout (no AppShell)
  return (
    <div className="flex min-h-screen flex-col bg-background">
      {/* Top bar */}
      <LessonHeader
        course={course}
        lesson={lesson}
        onOpenCurriculum={() => setMobileCurriculumOpen(true)}
      />

      {/* Mobile curriculum sheet */}
      <MobileCurriculumSheet
        course={course}
        currentLessonSlug={lessonSlug ?? ""}
        open={mobileCurriculumOpen}
        onOpenChange={setMobileCurriculumOpen}
      />

      <div className="flex-1 flex">
        {/* Desktop curriculum sidebar */}
        <aside
          className="hidden lg:block w-80 border-r border-border bg-card/50 flex-shrink-0"
          aria-label="Course curriculum"
        >
          <Curriculum
            course={course}
            currentLessonSlug={lessonSlug ?? ""}
          />
        </aside>

        {/* Lesson content */}
        <main className="flex-1 min-w-0" id="lesson-content">
          <div className="container py-8 max-w-4xl">
            {/* Lesson type badge & title */}
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-2">
                <span className="inline-flex items-center gap-1.5 rounded-sm border border-gold-500/40 bg-gold-500/10 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider text-gold-700 dark:text-gold-300">
                  {lessonTypeLabel(lesson.type)}
                </span>
                <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                  Lesson {String(lessonNumber(course, lesson.slug)).padStart(2, "0")}
                </span>
              </div>
              <h1 className="display text-2xl sm:text-3xl">{lesson.title}</h1>
            </div>

            {/* Lesson body */}
            <LessonBodyRenderer lesson={lesson} courseSlug={courseSlug ?? ""} />

            {/* Navigation */}
            <LessonNavigation
              course={course}
              lesson={lesson}
              onPrevious={handlePrevious}
              onNext={handleNext}
            />
          </div>
        </main>
      </div>
    </div>
  );
}