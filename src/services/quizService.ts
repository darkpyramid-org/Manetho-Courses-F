import type { Quiz } from "@/types";
import { quizzes } from "@/data/quizzes";

export interface QuizRepository {
  getAll(): Quiz[];
  getById(id: string): Quiz | undefined;
  getForCourse(courseId: string): Quiz | undefined;
}

export const quizService: QuizRepository = {
  getAll: () => quizzes,
  getById: (id) => quizzes.find((q) => q.id === id),
  getForCourse: (courseId) => quizzes.find((q) => q.courseId === courseId),
};

export function quizScore(quiz: Quiz): number {
  return quiz.questions.reduce((sum, q) => sum + q.correctOptions.length, 0);
}
