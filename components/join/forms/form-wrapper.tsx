import React, { useEffect, useRef, useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import cookie from 'js-cookie';
import { getStepsList } from '~/utils/getStepsList';
import Question1 from './steps/question-1';
import Question2 from './steps/question-2';
import Question3 from './steps/question-3';
import Question4 from './steps/question-4';
import Question5 from './steps/question-5';
import Question6 from './steps/question-6';
import Question7 from './steps/question-7';
import Question8 from './steps/question-8';
import Question9 from './steps/question-9';
import Question10 from './steps/question-10';
import QuestionsEn from '~/data/qustions_en.json';
import QuestionsAr from '~/data/qustions_ar.json';
import QuestionsKeys from '~/data/qustions_keys.json';
import { useTranslate } from '~/i18n';
// import { log } from 'console';

/******************************************************************
 *
 *  THIS COMPONENT WAS GENERATED BY NEXTCRAZY-CLI
 *
 ******************************************************************/

const JoinFormWrapper = () => {
   const { lang } = useTranslate();

   const userData = cookie.get('user_data') && JSON.parse(cookie.get('user_data') as any);
   const questionsData = cookie.get('questions') && JSON.parse(cookie.get('questions') as any);
   const formWrapperRef = useRef<any>(null);
   // const [questions, setQuestion] = useState([]);

   // const copy = qustionsList;

   const list = lang === 'en' ? QuestionsEn : QuestionsAr;
   useEffect(() => {
      if (questionsData) {
         // setQuestion(questionsData);
      } else {
         const qList = [] as any;
         let counter = 1;
         const qustionsList = QuestionsKeys;

         while (counter <= 10) {
            const question = qustionsList[Math.floor(Math.random() * qustionsList.length)];
            if (qList.filter((x: any) => x.key === question.key).length === 0) {
               qList.push(question);
               counter++;
            }
         }
         // setQuestion(qList);
         try {
            cookie.set('questions', JSON.stringify(qList));
         } catch (error) {
            console.log(error);
         }
      }
   }, [lang, questionsData]);
   // console.log(questions, 'questions');

   const steps = getStepsList();
   const userEmptyObj = {
      question_1: null,
      question_2: null,
      question_3: null,
      question_4: null,
      question_5: null,
      question_6: null,
      question_7: null,
      question_8: null,
      question_9: null,
      question_10: null,
      // other
      step: (steps && steps[0]) || null,
   };

   const [step, setStep] = useState('');

   useEffect(() => {
      if (userData) {
         setStep(userData?.step ? userData?.step : steps?.[0]);
      } else {
         setStep('question_1');
      }
   }, [steps, userData]);

   const methods = useForm({
      mode: 'onChange',
      defaultValues:
         (cookie.get('user_data') && JSON.parse(cookie.get('user_data') as any)) || userEmptyObj,
   });

   // console.log(methods.getValues(), 'tst');

   const renderSteps = () => {
      // role slug

      return (
         questionsData && (
            <React.Fragment>
               <Question1
                  step={step}
                  nextStep={'question_2'}
                  onNextClick={() => setStep('question_2')}
                  question={questionsData && list.find(x => x.key === questionsData[0]?.key)}
               />
               <Question2
                  step={step}
                  nextStep={'question_3'}
                  onNextClick={() => setStep('question_3')}
                  question={questionsData && list.find(x => x.key === questionsData[1]?.key)}
               />
               <Question3
                  step={step}
                  nextStep={'question_4'}
                  onNextClick={() => setStep('question_4')}
                  question={questionsData && list.find(x => x.key === questionsData[2]?.key)}
               />
               <Question4
                  step={step}
                  nextStep={'question_5'}
                  onNextClick={() => setStep('question_5')}
                  question={questionsData && list.find(x => x.key === questionsData[3]?.key)}
               />
               <Question5
                  step={step}
                  nextStep={'question_6'}
                  onNextClick={() => setStep('question_6')}
                  question={questionsData && list.find(x => x.key === questionsData[4]?.key)}
               />
               <Question6
                  step={step}
                  nextStep={'question_7'}
                  onNextClick={() => setStep('question_7')}
                  question={questionsData && list.find(x => x.key === questionsData[5]?.key)}
               />
               <Question7
                  step={step}
                  nextStep={'question_8'}
                  onNextClick={() => setStep('question_8')}
                  question={questionsData && list.find(x => x.key === questionsData[6]?.key)}
               />
               <Question8
                  step={step}
                  nextStep={'question_9'}
                  onNextClick={() => setStep('question_9')}
                  question={questionsData && list.find(x => x.key === questionsData[7]?.key)}
               />
               <Question9
                  step={step}
                  nextStep={'question_10'}
                  onNextClick={() => setStep('question_10')}
                  question={questionsData && list.find(x => x.key === questionsData[8]?.key)}
               />
               <Question10
                  step={step}
                  question={questionsData && list.find(x => x.key === questionsData[9]?.key)}
               />
            </React.Fragment>
         )
      );
   };

   return (
      <React.Fragment>
         <section className="min-h-full bg-cover bg-center bg-no-repeat">
            <div className="container relative pt-10 sm:pt-0">
               <div className="row">
                  <div className="col-12 ">
                     <div id="formWrapper" ref={formWrapperRef}>
                        <FormProvider {...methods}>{renderSteps()}</FormProvider>
                     </div>
                  </div>
               </div>
            </div>
         </section>
         {/* <style jsx global>{`
            main > div {
               height: 100%;
            }
            main > div > div {
               height: 100%;
            }
         `}</style> */}
      </React.Fragment>
   );
};

export default JoinFormWrapper;
