import { GetServerSideProps } from 'next';
import { Fragment } from 'react';
import { NextSeo } from 'next-seo';
import { useTranslate } from '~/i18n';
import StartSections from '~/components/start/start-sections';

const HomePage = () => {
   const { translate } = useTranslate();

   return (
      <Fragment>
         <NextSeo
            title={translate({ id: 'meta:title' })}
            description={translate({ id: 'meta:desc' })}
         />
         <StartSections />
      </Fragment>
   );
};

/*******************************************************************
 *
 *  THIS PAGE IS USING SERVER SIDE RENDERING WITH getServerSideProps
 *
 *******************************************************************/

export const getServerSideProps: GetServerSideProps = async () => {
   // It's better to use getServerSideProps than statically generating pages for not found :O
   return {
      props: {},
   };
};
export default HomePage;
