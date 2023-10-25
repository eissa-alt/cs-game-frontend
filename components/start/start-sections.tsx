import { useTranslate } from '~/i18n';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { useRouter } from 'next/router';
// import classNames from 'classnames';
import Axios from '~/utils/axios';
import ButtonBtn from '../shared/buttons/button-btn';

/******************************************************************
 *
 *  THIS COMPONENT WAS GENERATED BY NEXTCRAZY-CLI
 *
 ******************************************************************/

const StartSections = () => {
   const router = useRouter();

   const { lang, translate } = useTranslate();
   const [loading, setLoading] = useState(false);
   const start = async () => {
      if (loading) {
         return;
      }
      setLoading(true);
      try {
         const response = await Axios.get(
            `contests-status/${router.query?.slug}/${router.query?.team_id}?lang=${lang}`
         );
         if (response.data.status === 'failed') {
            toast.error('يرجى الانتظار', {
               duration: 4000,
            });
         } else {
            toast.success('تم بدأ التحدي', {
               duration: 4000,
            });
            router.replace(
               `/contests/${router.query?.slug}/team/${router.query?.team_id}/questions`
            );
         }
      } catch (error: any) {
         toast.error(translate({ id: 'res:500' }), {
            duration: 4000,
         });
      }
      setLoading(false);
   };
   return (
      <React.Fragment>
         <div className="container">
            <div className="row">
               <div className="lg:col-4 lg:offset-4">
                  <div className="mt-5">
                     <div className="mb-10 text-center text-xl font-black text-white">
                        {'التحدي'}
                     </div>
                     <div className="mb-3 text-center text-white">
                        {'لإكمال التحدي، يجب عليك الإجابة على 10 أسئلة'}
                     </div>
                     <ButtonBtn
                        id=""
                        callBack={() => {
                           start();
                        }}
                        noIcon
                        loading={loading}
                        text={'البدأ'}
                     />
                  </div>
               </div>
            </div>
         </div>
      </React.Fragment>
   );
};

export default StartSections;
