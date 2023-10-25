import { QuestionListType } from './questions-list';

export interface QuestionNewType {
   questions: QuestionListType[];
   current_question: number;
}
