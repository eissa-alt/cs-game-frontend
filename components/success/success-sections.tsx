import { NextLink, Translate } from '~/i18n';

// import Lottie from 'react-lottie';
// import TicAnimations from '~/animations/tic_new.json';
import Cookies from 'js-cookie';
// import Cookies from 'js-cookie';
// import { nanoid } from 'nanoid';

/******************************************************************
 *
 *  THIS COMPONENT WAS GENERATED BY NEXTCRAZY-CLI
 *
 ******************************************************************/

// type SuccessSectionsProps = {
//    category: string;
//    token?: string;
//    withToken: boolean;
// };

const SuccessSections = () => {
   Cookies.remove('user_data');
   Cookies.remove('questions');
   const test = Cookies.get('result') && JSON.parse(Cookies.get('result') as any);
   return (
      <section>
         <div className="container py-10">
            <div className="row">
               <div className="lg:col-6 lg:offset-3">
                  <div className="">
                     <div className="p-1 sm:p-1">
                        <div className="text-center">
                           <div className="relative z-10">
                              <h1 className=" text-2xl font-bold text-white">
                                 <Translate id="web:thank_you" />
                              </h1>

                              <div className="mt-1 text-lg font-bold text-white">
                                 <Translate id="web:your_score" />
                              </div>
                              <div className="mx-auto mt-2 flex h-[100px] w-[100px] items-center justify-center rounded-full bg-white">
                                 <div className="text-3xl font-bold text-primary">{test}/10</div>
                              </div>
                              <div className="mt-5 text-center">
                                 <NextLink
                                    href={''}
                                    className={
                                       'text-md inline-block rounded-full border border-white bg-secondary px-4 py-2 text-center font-medium leading-5 text-white transition-colors duration-150 hover:bg-secondary-600 focus:outline-none  active:bg-secondary'
                                    }>
                                    <Translate id="web:back_to_homepage" />
                                 </NextLink>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
};

export default SuccessSections;
