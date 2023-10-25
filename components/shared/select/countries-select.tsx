import classNames from 'classnames';
import React, { useEffect, useState } from 'react';
import { ClassicSpinner } from 'react-spinners-kit';
import { Translate, useTranslate } from '~/i18n';
import Axios from '~/utils/axios';
import { CustomSelect } from '../forms/custom-select';
import Label from '../forms/label';

/******************************************************************
 *
 *  THIS COMPONENT WAS GENERATED BY NEXTCRAZY-CLI
 *
 ******************************************************************/

type Item = {
   value: string;
   label: string;
};
type CountrySelectProps = {
   // type: 'whole' | 'part';
   callBack: (value: any) => void;
   errors: string | undefined;
   selected_id?: string | null;
   label?: string;
   isRequired?: boolean;
   isPhoneCode?: boolean;
};

const CountrySelect = ({
   label,
   callBack,
   errors,
   selected_id,
   isRequired,
   isPhoneCode,
}: CountrySelectProps) => {
   const { lang, translate } = useTranslate();
   const [fetchLoading, setFetchLoading] = useState(false);

   // const [hasError, setHasError] = useState(false);
   const [countries, setCountries] = useState<any>([]);

   useEffect(() => {
      const fetchData = async () => {
         setFetchLoading(true);
         try {
            const response = await Axios.get(`/countries?lang=${lang}`);

            setCountries(response.data.data);
            setFetchLoading(false);
         } catch (error: any) {
            setFetchLoading(false);
            // setCountries([]);
            // setHasError(true);
         }
      };
      fetchData();
   }, [lang]);

   const countriesOptions: Item[] = countries.map((country: any) => ({
      value: country.id,
      label: `${country.name} ${isPhoneCode ? `(+${country.phone_code})` : ''}`,
   }));

   const selected = countriesOptions.find(item => item.value === selected_id);

   return (
      <React.Fragment>
         <div className={classNames(label ? 'row' : 'relative mb-5 w-full')}>
            {label && (
               <div className={classNames(label ? 'mb-5 self-center md:col-3' : '')}>
                  <Label id={''} label={label} isRequired={isRequired} />
               </div>
            )}

            <div className={classNames(label ? 'md:col-9' : '')}>
               {fetchLoading ? (
                  <div className="custom-input focus:shadow-outline-purple mb-5 block w-full animate-pulse select-none rounded-md">
                     <div className="flex">
                        <div className="my-auto">
                           <Translate id="web:loading" />
                        </div>
                        <div className="my-auto ltr:ml-4 rtl:mr-4">
                           <ClassicSpinner color="#bebebe" size={20} />
                        </div>
                     </div>
                  </div>
               ) : (
                  <CustomSelect
                     value={selected || ''}
                     placeholder={translate({ id: 'web:select_country' })}
                     onChange={callBack}
                     // id="countries_id"
                     options={countriesOptions}
                     error={errors}
                  />
               )}
            </div>
         </div>
      </React.Fragment>
   );
};

export default CountrySelect;
