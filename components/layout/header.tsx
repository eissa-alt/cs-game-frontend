import React from 'react';
// import LangSwitcher from '../shared/langSwitcher';
import NProgress from 'nprogress';
import Router from 'next/router';
import Image from '../shared/image';
// import { useTranslate } from '~/i18n';
// import useTranslate from '../../i18n/useTranslate';
// import Image from '../shared/image';

const MiniHeader = () => {
   NProgress.configure({
      showSpinner: false,
   });
   Router.events.on('routeChangeStart', () => {
      NProgress.start();
   });
   Router.events.on('routeChangeComplete', () => NProgress.done());
   Router.events.on('routeChangeError', () => NProgress.done());

   // const { lang } = useTranslate();

   return (
      <header>
         <div className="container relative z-20 md:px-12">
            <div className="row py-6">
               <React.Fragment>
                  <div className="col-6 self-center">
                     <div className="h-[60px] w-[140px]">
                        <Image
                           src="/images/saudi_payments.svg"
                           alt="SSC logo"
                           // width="150"
                           // height="71"
                           layout="fill"
                           objectFit="contain"
                           className=" rounded-lg"
                        />
                     </div>
                  </div>
                  <div className="col-6 self-center">
                     <div className="h-[60px] w-[140px] rtl:mr-auto">
                        <Image
                           src="/images/cyber_security_dept.svg"
                           alt="SSC logo"
                           // width="150"
                           // height="71"
                           layout="fill"
                           objectFit="contain"
                           className="rounded-lg"
                        />
                     </div>
                  </div>
               </React.Fragment>
            </div>
         </div>
      </header>
   );
};

export default MiniHeader;
