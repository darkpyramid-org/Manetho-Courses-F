import { useState, useCallback, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  CheckCircle2,
  XCircle,
  ArrowLeft,
  ArrowRight,
  Award,
  RotateCcw,
} from "lucide-react";
import type { Quiz, QuizQuestion } from "@/types";
import { quizService } from "@/services/quizService";
import { useCourseProgress } from "@/hooks/useCourseProgress";
import { courseService } from "@/services/courseService";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { formatDuration } from "@/lib/format";
import { cn } from "@/lib/utils";

interface AnswerState {
  [questionId: string]: string[]; // selected option values
}

interface QuizResult {
  score: number;
  maxScore: number;
  percentage: number;
  passed: boolean;
  answers: { questionId: string; correct: boolean; selected: string[]; correctOptions: string[] }[];
}

/**
 * QuizPlayer — the full quiz engine.
 * Supports single-choice and multi-choice questions.
 * Stores completion in progress when all questions answered.
 */
export function QuizPlayer({
  courseSlug,
  lessonSlug,
  quizId,
}: {
  courseSlug: string;
  lessonSlug: string;
  quizId: string;
}) {
  const quiz = quizService.getById(quizId);
  const course = courseService.getBySlug(courseSlug);
  const lesson = course?.modules.flatMap((m) => m.lessons).find((l) => l.slug === lessonSlug);

  const { markLessonComplete, isLessonComplete } = useCourseProgress(course);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<AnswerState>({});
  const [submitted, setSubmitted] = useState(false);
  const [result, setResult] = useState<QuizResult | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);

  if (!quiz || !course || !lesson) {
    return (
      <div className="container py-12 text-center">
        <h1 className="display text-2xl mb-4">Quiz not found</h1>
        <Link to={`/courses/${courseSlug}`} className="text-gold-700 hover:underline">
          ← Back to course
        </Link>
      </div>
    );
  }

  const questions = quiz.questions;
  const question = questions[currentIndex];

  // Calculate score when submitted
  const calculateResult = useCallback((): QuizResult => {
    const results = questions.map((q) => {
      const selected = answers[q.id] ?? [];
      const correct = q.correctOptions.every((opt) => selected.includes(opt)) &&
        selected.every((opt) => q.correctOptions.includes(opt));
      return {
        questionId: q.id,
        correct,
        selected,
        correctOptions: q.correctOptions,
      };
    });
    const score = results.filter((r) => r.correct).length;
    const maxScore = questions.length;
    const percentage = Math.round((score / maxScore) * 100);
    return { score, maxScore, percentage, passed: percentage >= 70, answers: results };
  }, [answers, questions]);

  const handleAnswerChange = (questionId: string, optionValues: string[]) => {
    if (submitted) return;
    setAnswers((prev) => ({ ...prev, [questionId]: optionValues }));
  };

  const handleSingleSelect = (questionId: string, value: string) => {
    if (submitted) return;
    setAnswers((prev) => ({ ...prev, [questionId]: [value] }));
  };

  const handleMultiToggle = (questionId: string, value: string, checked: boolean) => {
    if (submitted) return;
    setAnswers((prev) => {
      const current = prev[questionId] ?? [];
      return {
        ...prev,
        [questionId]: checked ? [...current, value] : current.filter((v) => v !== value),
      };
    });
  };

  const handleSubmit = () => {
    const res = calculateResult();
    setResult(res);
    setSubmitted(true);

    // Mark lesson complete if passed
    if (res.passed && lesson) {
      markLessonComplete(lesson.id);
    }
  };

  const handleRetry = () => {
    setAnswers({});
    setSubmitted(false);
    setResult(null);
    setCurrentIndex(0);
    setShowFeedback(false);
  };

  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex((i) => i + 1);
      setShowFeedback(false);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((i) => i - 1);
      setShowFeedback(false);
    }
  };

  const isAnswered = (q: QuizQuestion) => {
    const selected = answers[q.id] ?? [];
    if (q.type === "single") return selected.length === 1;
    return selected.length > 0;
  };

  const allAnswered = questions.every(isAnswered);

  // Auto-advance after showing feedback for a moment (optional)
  // Not implemented — user controls navigation explicitly.

  return (
    <div className="container max-w-3xl py-8">
      {/* Progress header */}
      <div className="mb-6">
        <div className="flex items-center justify-between text-sm mb-2">
          <span className="text-muted-foreground">
            Question {currentIndex + 1} of {questions.length}
          </span>
          <span className="font-medium text-foreground">
            {Math.round(((currentIndex + 1) / questions.length) * 100)}%
          </span>
        </div>
        <Progress
          value={Math.round(((currentIndex + 1) / questions.length) * 100)}
          className="h-1.5"
        />
      </div>

      {result ? (
        // Results view
        <Card className="mb-6">
          <CardHeader className="text-center">
            <CardTitle className="display">
              {result.passed ? (
                <>
                  <Award className="mr-2 h-6 w-6 inline text-gold-500" aria-hidden="true" />
                  Quiz Complete
                </>
              ) : (
                "Quiz Complete"
              )}
            </CardTitle>
            <p className="text-sm text-muted-foreground">
              {result.score} of {result.maxScore} correct ({result.percentage}%)
            </p>
          </CardHeader>
          <CardContent className="space-y-4">
            <Progress value={result.percentage} className="h-3" />

            <div className="space-y-3">
              {result.answers.map((answer, index) => {
                const q = questions[index];
                return (
                  <div
                    key={q.id}
                    className={cn(
                      "rounded-sm p-4 border",
                      answer.correct
                        ? "border-gold-500/40 bg-gold-500/10"
                        : "border-terracotta-500/40 bg-terracotta-500/10",
                    )}
                  >
                    <div className="flex items-start gap-3">
                      {answer.correct ? (
                        <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-gold-600 dark:text-gold-300" />
                      ) : (
                        <XCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-terracotta-600 dark:text-terracotta-300" />
                      )}
                      <div className="flex-1">
                        <p className="font-medium text-sm">{q.prompt}</p>
                        <div className="mt-2 space-y-1 text-xs">
                          {q.options.map((opt) => (
                            <div
                              key={opt.value}
                              className={cn(
                                "flex items-center gap-2 px-2 py-1 rounded",
                                answer.correctOptions.includes(opt.value)
                                  ? "bg-gold-500/20 text-gold-800 dark:text-gold-200"
                                  : answer.selected.includes(opt.value)
                                    ? "bg-terracotta-500/20 text-terracotta-800 dark:text-terracotta-200"
                                    : "text-muted-foreground",
                              )}
                            >
                              {answer.correctOptions.includes(opt.value) && (
                                <CheckCircle2 className="h-3 w-3" aria-hidden="true" />
                              )}
                              {answer.selected.includes(opt.value) &&
                                !answer.correctOptions.includes(opt.value) && (
                                  <XCircle className="h-3 w-3" aria-hidden="true" />
                                )}
                              {opt.label}
                            </div>
                          ))}
                        </div>
                        {q.explanation && (
                          <p className="mt-2 text-xs text-muted-foreground">
                            <span className="font-medium">Explanation:</span>{" "}
                            {q.explanation}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="flex flex-wrap gap-3 justify-center pt-4">
              <Button onClick={handleRetry} variant="outline">
                <RotateCcw className="mr-2 h-4 w-4" aria-hidden="true" />
                Retry Quiz
              </Button>
              <Link to={`/learn/${courseSlug}/${lessonSlug}`}>
                <Button variant="default">
                  <ArrowLeft className="mr-2 h-4 w-4" aria-hidden="true" />
                  Return to Lesson
                </Button>
              </Link>
              {course.modules.some((m) =>
                m.lessons.some((l) => l.slug === lessonSlug && l !== m.lessons[m.lessons.length - 1])
              ) && (
                <Link to={`/learn/${courseSlug}/${lessonNeighbourSlug(course, lessonSlug)}`}>
                  <Button variant="default">
                    Next Lesson
                    <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                  </Button>
                </Link>
              )}
            </div>
          </CardContent>
        </Card>
      ) : (
        // Question view
        <Card>
          <CardContent className="pt-6">
            <div className="space-y-4">
              <p className="text-sm text-muted-foreground">
                {question.type === "single"
                  ? "Select one answer"
                  : "Select all that apply"}
              </p>

              <h3 className="display text-lg font-medium">{question.prompt}</h3>

              {question.type === "single" ? (
                <RadioGroup
                  value={answers[question.id]?.[0] ?? ""}
                  onValueChange={(value) => handleSingleSelect(question.id, value)}
                  className="space-y-3"
                >
                  {question.options.map((opt) => (
                    <div key={opt.value} className="flex items-center gap-3">
                      <RadioGroupItem value={opt.value} id={`${question.id}-${opt.value}`} />
                      <Label htmlFor={`${question.id}-${opt.value}`} className="cursor-pointer text-sm">
                        {opt.label}
                      </Label>
                    </div>
                  ))}
                </RadioGroup>
              ) : (
                <div className="space-y-3" role="group" aria-label={question.prompt}>
                  {question.options.map((opt) => {
                    const checked = (answers[question.id] ?? []).includes(opt.value);
                    return (
                      <div key={opt.value} className="flex items-center gap-3">
                        <Checkbox
                          id={`${question.id}-${opt.value}`}
                          checked={checked}
                          onCheckedChange={(c) => handleMultiToggle(question.id, opt.value, c as boolean)}
                        />
                        <Label htmlFor={`${question.id}-${opt.value}`} className="cursor-pointer text-sm">
                          {opt.label}
                        </Label>
                      </div>
                    );
                  })}
                </div>
              )}

              {submitted && question.explanation && (
                <div className="rounded-sm bg-gold-500/10 border border-gold-500/30 p-4 text-sm text-gold-800 dark:text-gold-200">
                  <span className="font-medium">Explanation:</span> {question.explanation}
                </div>
              )}

              <Separator className="my-4" />

              <div className="flex items-center justify-between">
                <Button
                  variant="outline"
                  onClick={handlePrev}
                  disabled={currentIndex === 0}
                  className="rounded-sm"
                >
                  <ArrowLeft className="mr-2 h-4 w-4" aria-hidden="true" />
                  Previous
                </Button>

                <div className="flex items-center gap-3">
                  {currentIndex === questions.length - 1 ? (
                    <Button
                      onClick={handleSubmit}
                      disabled={!allAnswered}
                      className="rounded-sm px-8"
                    >
                      {submitted ? "Submitted" : "Submit Quiz"}
                    </Button>
                  ) : (
                    <Button
                      variant="outline"
                      onClick={handleNext}
                      disabled={!isAnswered(question)}
                      className="rounded-sm"
                    >
                      Next
                      <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                    </Button>
                  )}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}

function lessonNeighbourSlug(course: ReturnType<typeof courseService.getBySlug>, lessonSlug: string): string | undefined {
  const flat = course?.modules.flatMap((m) => m.lessons);
  const idx = flat?.findIndex((l) => l.slug === lessonSlug) ?? -1;
  if (idx >= 0 && idx < (flat?.length ?? 0) - 1) {
    return flat![idx + 1].slug;
  }
  return undefined;
}