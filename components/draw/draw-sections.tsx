import React, { useCallback, useEffect, useRef, useState } from 'react';

import DrawSectionsInner from './draw-inner-sections';
import Axios from '~/utils/axios';
import { Translate, useTranslate } from '~/i18n';
import { useRouter } from 'next/router';

/******************************************************************
 *
 *  THIS COMPONENT WAS GENERATED BY NEXTCRAZY-CLI
 *
 ******************************************************************/
type Person = {
   id: number;
   full_name: string;
   staff_number: string;
   region: string;
};
const DrawSections = () => {
   const childRef = useRef<any>(null);
   const [loading, setLoading] = useState(true);
   const { lang } = useTranslate();
   const [names, setNames] = useState<Person[]>([]);
   const router = useRouter();
   useEffect(() => {
      async function getUserData() {
         setLoading(true);
         try {
            const response = await Axios.get(`/get-guests/${router.query.slug}?lang=${lang}`);
            // console.log(response);

            setNames(response.data.data);
         } catch (error: any) {
            // setHasError(true);
         }
         setLoading(false);
      }
      if (router.query.slug) {
         getUserData();
      }
   }, [lang, router]);

   const handleUserKeyPress = useCallback(event => {
      const { key, code } = event;

      // keyboard arrows
      if (key === 'ArrowLeft' && code === 'ArrowLeft') {
         childRef?.current?.TriggerBack();
      }
      if (key === 'ArrowRight' && code === 'ArrowRight') {
         childRef?.current?.TriggerNext();
      }

      // handheld arrows
      if (key === 'PageUp' && code === 'PageUp') {
         childRef?.current?.TriggerBack();
      }
      if (key === 'PageDown' && code === 'PageDown') {
         childRef?.current?.TriggerNext();
      }
   }, []);

   useEffect(() => {
      window.addEventListener('keydown', handleUserKeyPress, false);

      return () => {
         window.removeEventListener('document', handleUserKeyPress, false);
      };
   }, [handleUserKeyPress]);

   return loading ? (
      <div>
         <Translate id="web:loading" />
      </div>
   ) : (
      <DrawSectionsInner namesList={names} ref={childRef} />
   );
};

export default DrawSections;
