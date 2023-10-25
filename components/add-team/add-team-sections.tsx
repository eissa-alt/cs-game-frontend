import { useTranslate } from '~/i18n';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import CustomInput from '../shared/forms/custom-input';
import SubmitBtn from '../shared/buttons/submit-btn';
import toast from 'react-hot-toast';
import { useRouter } from 'next/router';
// import classNames from 'classnames';
import Cookies from 'js-cookie';
import Axios from '~/utils/axios';
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';
import { TeamType } from '~/interfaces/team';

/******************************************************************
 *
 *  THIS COMPONENT WAS GENERATED BY NEXTCRAZY-CLI
 *
 ******************************************************************/

type FormData =
   | {
        name: string;
        //   staff_number: string;
        //   region: string;
     }
   | { [key: string]: string };

const AddTeamSections = () => {
   Cookies.remove('user_data');
   Cookies.remove('questions');

   const router = useRouter();
   const { executeRecaptcha } = useGoogleReCaptcha();

   const { lang, translate } = useTranslate();
   const [loading, setLoading] = useState(false);

   // const [loading, setLoading] = useState(true);
   // const { lang } = useTranslate();

   const {
      register,
      handleSubmit,

      setError,
      formState: { errors },
   } = useForm<FormData>();

   const submitForm = async (values: FormData) => {
      // console.log(values);
      if (loading) {
         return;
      }
      setLoading(true);
      const recaptcha = await executeRecaptcha?.();
      const data = {
         ...values,
         slug: router.query.slug,
         recaptcha,
      };
      // console.log(data, 'data');

      try {
         const response = await Axios.post(`add-team?lang=${lang}`, data);
         // console.log(response.data.data);
         const team = response.data.data as TeamType;
         toast.success(translate({ id: 'res:info_saved' }));
         router.replace(`/contests/${router.query.slug}/team/${team.id}/add-members`);
      } catch (error: any) {
         console.log(error, 'error');
         if (error?.response?.status === 403) {
            toast.error(translate({ id: 'res:recaptcha_failed' }), {
               duration: 3000,
            });
         } else if (error?.response?.status === 422) {
            const responseErrors = error?.response?.data?.data;
            Object.keys(responseErrors).map(key => {
               setError(key as 'staff_number' | 'region' | 'full_name', {
                  message: responseErrors[key][0],
               });
               // toast.error(responseErrors[key][0], {
               //    duration: 3000,
               // });
            });
            // toast.error(error?.response?.data?.status, {
            //    duration: 3000,
            // });
         } else {
            toast.error(translate({ id: 'res:500' }), {
               duration: 3000,
            });
         }
      }
      setLoading(false);
   };

   return (
      <React.Fragment>
         <div className="container">
            <div className="row">
               <div className="mx-auto  lg:col-4">
                  <form
                     noValidate
                     onSubmit={handleSubmit(submitForm)}
                     className=""
                     autoComplete="off">
                     <div className="row">
                        <div className="lg:px-11">
                           <div className="row">
                              <div className="col-12">
                                 {/* name */}
                                 <CustomInput
                                    label={translate({ id: 'web:team_name' })}
                                    type="text"
                                    id="name"
                                    error={errors.name?.message}
                                    isInline={false}
                                    isRequired={true}
                                    {...register('name', {
                                       required: translate({ id: 'validation:required' }),
                                    })}
                                 />
                              </div>
                           </div>
                           <div className="col-12 mt-2">
                              <SubmitBtn noIcon id="submit-btn" loading={loading} text={'NEXT'} />
                           </div>
                        </div>
                     </div>
                  </form>
               </div>
            </div>
         </div>
      </React.Fragment>
   );
};

export default AddTeamSections;
