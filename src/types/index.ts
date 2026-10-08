/** Public type entrypoint. Definitions live in small domain modules. */
export type { Course, CourseModule, Lesson } from "./course";
export type { CourseCategory, CourseLevel, LessonType, QuizQuestionType, ResourceType } from "./shared";
export type { Instructor } from "./people";
export type { LearningPath, Topic } from "./learning";
export type { GlossaryEntry, Resource, TimelineEvent } from "./resource";
export type { Quiz, QuizQuestion } from "./quiz";
export type { AuthState, AuthStatus, AuthUser, Certificate, CourseProgress, LearningStats } from "./learner";
