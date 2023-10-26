import { QuestionListType } from './questions-list';

export interface QuestionNewType {
   questions: QuestionListType[];
   current_question: number;
   current_question_start_time: number;
}
