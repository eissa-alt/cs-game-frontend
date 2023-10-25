import React, { FC } from 'react';
import Header from './header';
import Footer from './footer';
// import Main from './main';
import { Toaster } from 'react-hot-toast';
// import classNames from 'classnames';
// import { useTranslate } from '~/i18n';
// import Main from './main';

/* -------------------------------------------------------------------------- */
/* -------------------------------------------------------------------------- */
/*                                 MAIN LAYOUT                                */
/* -------------------------------------------------------------------------- */
/* -------------------------------------------------------------------------- */

interface LayoutProps {
   isMiniHeaderFooterLayout?: boolean;
}

const Layout: FC<LayoutProps> = ({ children }) => {
   // const { lang } = useTranslate();
   return (
      <div className="relative  bg-[#007761]">
         <Toaster toastOptions={{ duration: 4000 }} reverseOrder={true} position="top-center" />
         <div className="flex min-h-screen w-full flex-1 flex-col">
            <Header />
            <main className="relative z-10 flex-grow">
               <div>{children}</div>
            </main>

            <Footer />
         </div>
      </div>
   );
};

export default Layout;
