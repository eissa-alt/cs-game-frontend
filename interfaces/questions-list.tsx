import { OptionType } from './option';

export interface QuestionListType {
   id: string;
   question_text: string;
   options: OptionType[];
}
