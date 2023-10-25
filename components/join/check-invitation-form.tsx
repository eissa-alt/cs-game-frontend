import { Translate, useTranslate } from '~/i18n';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Axios from '~/utils/axios';
import CustomInput from '../shared/forms/custom-input';
import SubmitBtn from '../shared/buttons/submit-btn';
import toast from 'react-hot-toast';
// import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/20/solid';
// import classNames from 'classnames';
// import CodesList from '~/data/codes-list';
import { useRouter } from 'next/router';
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';

/******************************************************************
 *
 *  THIS COMPONENT WAS GENERATED BY NEXTCRAZY-CLI
 *
 ******************************************************************/

type FormData =
   | {
        code: string;
     }
   | { [key: string]: string };

type CodeStatus = {
   status: string;
   category: string;
};
const CheckInvitationForm = () => {
   // const { authenticated } = useAuth();
   const router = useRouter();

   const { lang, translate } = useTranslate();
   const [loading, setLoading] = useState(false);
   const { executeRecaptcha } = useGoogleReCaptcha();

   // const [step, setStep] = useState(1);
   // const [userEmail, setUserEmail] = useState('');
   // const [, setToken] = useState('');

   const {
      register,
      handleSubmit,

      // setError,
      formState: { errors },
   } = useForm<FormData>();

   const submitForm = async (values: FormData) => {
      // console.log(values);
      if (loading) {
         return;
      }
      setLoading(true);
      const recaptcha = await executeRecaptcha?.();

      try {
         const data = {
            ...values,
            recaptcha,
         };
         const response = await Axios.post(`/check-code?lang=${lang}`, data);
         const result = response.data as CodeStatus;
         if (result.status === 'valid') {
            toast.success(translate({ id: 'res:welcome_in' }));
            router.push(`${lang}/join/${result.category}/${values.code}`);
         } else {
            toast.error(translate({ id: 'res:wrong_code' }));
            setLoading(false);
         }
      } catch (error: any) {
         setLoading(false);
         if (error?.response?.status === 403) {
            toast.error(translate({ id: 'res:recaptcha_failed' }), {
               duration: 3000,
            });
         } else if (error.response?.status === 404) {
            toast.error(translate({ id: 'res:wrong_code' }));
         } else {
            toast.error('something went wrong!');
         }
      }
   };

   return (
      <React.Fragment>
         <div className="row">
            <div className="lg:col-8 lg:offset-2">
               <form
                  noValidate
                  onSubmit={handleSubmit(submitForm)}
                  //box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
                  className="border-gray relative my-5  rounded-lg border bg-gray-100 px-3 py-2 shadow-[0px_7px_29px_0px_rgba(100,100,111,0.2)] lg:mx-20 "
                  autoComplete="off">
                  <div className="row">
                     <div className="col-12  py-4 text-center font-medium ">
                        <label htmlFor="code">
                           <Translate id="homepage:access_code_label" /> <br />
                           {/* <Translate id="homepage:access_code_label_2" /> */}
                        </label>
                     </div>
                     <div className="lg:px-11">
                        <div className="row">
                           <div className="col-6">
                              {/* code */}
                              <CustomInput
                                 type="text"
                                 placeHolder={translate({ id: 'web:code' })}
                                 id="code"
                                 error={errors.code?.message}
                                 isInline={false}
                                 isRequired={true}
                                 {...register('code', {
                                    required: translate({ id: 'validation:required' }),
                                 })}
                              />
                           </div>

                           <div className="col-6">
                              <SubmitBtn
                                 id="submit-btn" //* for test cases
                                 loading={loading}
                                 text={translate({ id: 'web:join' })}
                              />
                           </div>
                        </div>
                     </div>
                  </div>
               </form>
            </div>
         </div>
      </React.Fragment>
   );
};

export default CheckInvitationForm;
