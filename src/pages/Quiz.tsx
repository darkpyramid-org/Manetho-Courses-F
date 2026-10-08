import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { QuizPlayer } from "@/components/quiz/QuizPlayer";
import { courseService } from "@/services/courseService";
import { quizService } from "@/services/quizService";

export default function QuizPage() {
  const { courseSlug, lessonSlug } = useParams<{ courseSlug: string; lessonSlug: string }>();
  const course = courseService.getBySlug(courseSlug ?? "");
  const lesson = course?.modules.flatMap((m) => m.lessons).find((l) => l.slug === lessonSlug);

  // Find the quiz for this lesson
  const quiz = lesson?.type === "quiz" ? quizService.getById(lesson.quizId ?? "") : null;

  if (!course || !lesson || !quiz) {
    return (
      <div className="container py-12 text-center">
        <h1 className="display text-2xl mb-4">Quiz not found</h1>
        <p className="text-muted-foreground mb-6">The requested quiz could not be found.</p>
        <Link to={course ? `/courses/${courseSlug}` : "/courses"} className="text-gold-700 hover:underline">
          ← Back
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <QuizPlayer
        courseSlug={courseSlug ?? ""}
        lessonSlug={lessonSlug ?? ""}
        quizId={quiz.id}
      />
    </div>
  );
}