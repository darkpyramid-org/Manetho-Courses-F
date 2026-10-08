import type { QuizQuestionType } from "./shared";

export interface Quiz {
  id: string;
  courseId?: string;
  title: string;
  description: string;
  questions: QuizQuestion[];
}

export interface QuizQuestion {
  id: string;
  type: QuizQuestionType;
  prompt: string;
  options: string[];
  /** Indices into `options` that are correct. */
  correctOptions: number[];
  explanation: string;
}
