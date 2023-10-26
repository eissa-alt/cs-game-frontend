import { useTranslate } from '~/i18n';
import React, { useEffect, useState } from 'react';
// import { useForm } from 'react-hook-form';
// import CustomInput from '../shared/forms/custom-input';
// import SubmitBtn from '../shared/buttons/submit-btn';
// import toast from 'react-hot-toast';
import { useRouter } from 'next/router';
// import classNames from 'classnames';
// import Cookies from 'js-cookie';
import Axios from '~/utils/axios';
// import ButtonBtn from '../shared/buttons/button-btn';
import { QuestionNewType } from '~/interfaces/question-new';
import CustomRadioInput from '../shared/forms/custom-radio-input';
import { toast } from 'react-hot-toast';
import Timer from './timer';

/******************************************************************
 *
 *  THIS COMPONENT WAS GENERATED BY NEXTCRAZY-CLI
 *
 ******************************************************************/

const QuestionsSections = () => {
   // const router = useRouter();

   const { lang, translate } = useTranslate();
   const [loading, setLoading] = useState(false);
   const [isTimeUp, setIsTimeUp] = useState(false);
   const [question, setQuestion] = useState<QuestionNewType>();

   const router = useRouter();
   useEffect(() => {
      async function getUserData() {
         setLoading(true);
         try {
            const response = await Axios.get(
               `/get-questions/${router.query.slug}/${router.query.team_id}?lang=${lang}`
            );
            // console.log(response);
            if (response.data.data.is_completed === 'yes') {
               router.replace(
                  `/contests/${router.query?.slug}/team/${router.query?.team_id}/score`
               );
            } else {
               setQuestion(response.data.data);
            }
         } catch (error: any) {
            // setHasError(true);
         }
         setLoading(false);
      }

      if (router) {
         getUserData();
      }
   }, [lang, router]);

   const submitForm = async (value: string) => {
      if (loading) {
         return;
      }
      setLoading(true);
      const data = {
         question_id: question?.questions[question?.current_question - 1]?.id,
         option_id: value,
         is_time_up: isTimeUp,
      };

      try {
         const response = await Axios.post(
            `submit-answer/${router.query.slug}/${router.query.team_id}?lang=${lang}`,
            data
         );
         // console.log(response.data.data);
         if (response.data.data.is_completed === 'yes') {
            router.replace(`/contests/${router.query?.slug}/team/${router.query?.team_id}/score`);
         } else {
            setQuestion(response.data.data);
            setIsTimeUp(false);
         }

         toast.success('Answer Saved!', {
            duration: 3000,
         });
      } catch (error: any) {
         toast.error(translate({ id: 'res:500' }), {
            duration: 3000,
         });
      }
      setLoading(false);
   };
   return (
      <React.Fragment>
         {!loading && (
            <div className="container">
               <div className="row">
                  <div className="lg:col-4 lg:offset-4">
                     <div className="mt-5">
                        <div>
                           <div className="p-1 sm:p-1">
                              <div className="pt-1">
                                 <form noValidate className="relative" autoComplete="off">
                                    {/* question_1 */}
                                    <CustomRadioInput
                                       label={translate({
                                          id: `web:question_${question?.current_question}`,
                                       })}
                                       subLabel={
                                          question?.questions[question?.current_question - 1]
                                             ?.question_text
                                       }
                                       // isRequired
                                       isInline={false}
                                       callBack={val => submitForm(val)}
                                       options={question?.questions[
                                          question?.current_question - 1
                                       ]?.options.map(item => {
                                          return { label: item.option_text, value: item.id };
                                       })}
                                       id="question_1"
                                       // error={errors.question_1?.message}
                                       // {...register('question_1', {
                                       //    required: translate({ id: 'validation:required' }),
                                       // })}
                                    />
                                 </form>
                              </div>
                              <Timer
                                 currentTime={question?.current_question_start_time || 0}
                                 setIsTimeUp={setIsTimeUp}
                              />
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         )}
      </React.Fragment>
   );
};

export default QuestionsSections;
