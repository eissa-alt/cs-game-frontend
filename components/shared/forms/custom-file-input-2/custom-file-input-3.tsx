// import { Translate } from '~/i18n';
// import { useAuth } from '~/auth';
import classNames from 'classnames';
import React, { forwardRef, useState } from 'react';
import toast from 'react-hot-toast';
import Axios from '~/utils/axios';
// import { toBase64 } from '~/utils/to-base-64';
// import { Translate } from '~/i18n';
// import { Translate } from '~/i18n';
import styles from './styles/custom-file-input.module.css';
import mime from 'mime-types';
// import Image from '../../image';
import { Translate, useTranslate } from '~/i18n';
import { ArrowUpTrayIcon } from '@heroicons/react/20/solid';
// import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
// import Cropper from 'react-easy-crop';
// import { Point, Area } from 'react-easy-crop/types';
// import { getCroppedImg } from '~/utils/canvas';
// import { getOrientation } from 'get-orientation/browser';
// import { CropperRef, Cropper } from 'react-advanced-cropper';
import 'react-advanced-cropper/dist/style.css';
import { toBase64 } from '~/utils/to-base-64';
import Label from '../label';
// import { Base64 } from 'js-base64';

// import Image from 'next/image';
/******************************************************************
 *
 *  THIS COMPONENT WAS GENERATED BY NEXTCRAZY-CLI
 *
 ******************************************************************/
export type InputProps = {
   label?: React.ReactNode;
   // type?: 'text' | 'email' | 'password' | 'number' | 'textarea';
   error?: React.ReactNode;
   name?: string;
   id?: string;
   innerRef?: any;
   disabled?: boolean;
   // placeHolder?: string;
   autoComplete?: string;
   className?: string;
   // groupClassName?: string;
   append?: React.ReactElement | React.ReactNode;
   prepend?: React.ReactElement | React.ReactNode;
   appendPaddingClass?: string;
   prependPaddingClass?: string;
   // isInline?: boolean;
   isRequired?: boolean;
   help?: React.ReactNode;
   note?: React.ReactNode;
   placeholderImg?: React.ReactNode;
   previewImg?: string;

   // currentImg?: string;
   inputName: string;
   callBack: (id?: string | null, url?: string | null) => void;
} & React.HTMLAttributes<HTMLInputElement | HTMLTextAreaElement>;
const CustomFileInput3 = forwardRef<any, InputProps>(
   (
      {
         label,
         error,
         // className,
         // labelClassName,
         // groupClassName,
         disabled = false,
         id = '',
         // type = 'text',
         // innerRef,
         // autoComplete,
         // placeHolder = '',
         // isInline = false,
         isRequired = false,
         note,
         help,
         // previewImg,
         // currentImg,
         callBack,
         inputName,

         placeholderImg,
         ...props
      },
      ref
   ) => {
      const [loading, setLoading] = useState(false);
      const { translate, lang } = useTranslate();

      const clearFileInput = () => {
         const el = document.getElementById(id) as HTMLInputElement;
         if (el) {
            el.value = '';
         }
      };

      const onImageChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
         const file = e.currentTarget.files?.[0];
         setLoading(true);
         if (file) {
            if (
               mime.extension(file?.type || '') === 'png' ||
               mime.extension(file?.type || '') === 'jpg' ||
               mime.extension(file?.type || '') === 'jpeg' ||
               mime.extension(file?.type || '') === 'pdf'
            ) {
               if (file.size > 2e6) {
                  toast.error(translate({ id: 'res:more_than_2_mb' }));
                  clearFileInput();
               } else {
                  try {
                     const base64val = await toBase64(file);
                     const data = {
                        file: base64val,
                        inputName: inputName,
                     };
                     const response = await Axios.post(`/upload-document?lang=${lang}`, data);
                     const ImageUrl =
                        `${process.env.NEXT_PUBLIC_STORAGE_URL}/${inputName}/` + response.data.data;
                     const ImageName = response.data.data;
                     callBack(ImageName, ImageUrl);
                     toast.success(translate({ id: 'res:img_loaded_successfully' }));
                  } catch (e) {
                     toast.error(translate({ id: 'res:500' }));
                     clearFileInput();
                  }
               }
            } else {
               toast.error(translate({ id: 'res:img_only_png_jpg_pdf_formate' }));
               clearFileInput();
            }
         } else {
            // chrome
            callBack(null, null);
         }
         setLoading(false);
      };

      return (
         <React.Fragment>
            <div className="mb-7">
               <div
                  className={classNames(
                     error && typeof error !== 'boolean'
                        ? styles['dashedBorderError']
                        : styles['dashedBorder'],
                     ' p-4'
                  )}>
                  {note && <div className="mb-1">{note}</div>}

                  {label && (
                     <div className="text-center">
                        {/* <label
                           htmlFor={id}
                           className={classNames(
                              'text-gray-light-2 inline-block text-lg',
                              isRequired && 'required-label'
                           )}>
                           {label}
                        </label> */}
                        <Label id={id} label={label} isRequired={isRequired} />
                     </div>
                  )}
                  {/* placeHolder */}
                  {placeholderImg && <div className="py-1 text-center">{placeholderImg}</div>}
                  {/* input container */}
                  <div className="flex justify-center py-1">
                     <input
                        // autoComplete={autoComplete}
                        id={id}
                        ref={ref}
                        type="file"
                        disabled={disabled}
                        className={classNames(styles['inputFile'], '')}
                        onChange={e => onImageChange(e)}
                        {...props}
                     />
                     {loading ? (
                        <label
                           className={classNames(
                              'flex cursor-pointer justify-center space-x-5 rtl:space-x-reverse',
                              'my-1 w-44 rounded-lg border border-transparent bg-secondary px-4 py-2 text-center text-sm font-medium leading-5 text-white transition-colors duration-150    ',
                              'cursor-not-allowed opacity-50'
                           )}>
                           {/* inner input content */}
                           <div className="flex space-x-2 rtl:space-x-reverse">
                              <div className="my-auto">
                                 <div role="status">
                                    <svg
                                       className="inline h-5 w-5 animate-spin fill-secondary text-gray-200 dark:text-gray-600"
                                       viewBox="0 0 100 101"
                                       fill="none"
                                       xmlns="http://www.w3.org/2000/svg">
                                       <path
                                          d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                                          fill="currentColor"
                                       />
                                       <path
                                          d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                                          fill="currentFill"
                                       />
                                    </svg>
                                    <span className="sr-only">Loading...</span>
                                 </div>
                              </div>
                              <div className="my-auto">
                                 <Translate id="web:choose_file" />
                              </div>
                           </div>
                        </label>
                     ) : (
                        !placeholderImg && (
                           <label
                              className={classNames(
                                 'flex cursor-pointer justify-center space-x-5 rtl:space-x-reverse',
                                 'my-1 w-44 border border-transparent bg-secondary px-4 py-2 text-center text-sm font-medium leading-5 text-white transition-colors duration-150',
                                 '',
                                 disabled
                                    ? 'cursor-not-allowed opacity-50'
                                    : 'hover:bg-secondary600 focus:outline-none active:bg-secondary',
                                 error &&
                                    typeof error !== 'boolean' &&
                                    '!border-red-500 focus:border-red-500 focus:ring-red-500'
                              )}
                              htmlFor={id}>
                              {/* inner input content */}
                              <div className="flex space-x-2 rtl:space-x-reverse">
                                 <div className="my-auto">
                                    <ArrowUpTrayIcon className="h-5 w-5" />
                                 </div>
                                 <div className="my-auto">
                                    <Translate id="web:choose_file" />
                                 </div>
                              </div>
                           </label>
                        )
                     )}
                  </div>
                  {help && <div>{help}</div>}
               </div>
               {error && typeof error !== 'boolean' && (
                  <div className="relative text-center">
                     <div className="absolute mt-0.5 w-full text-xs text-red-500" role="alert">
                        {error}
                     </div>
                  </div>
               )}
            </div>
         </React.Fragment>
      );
   }
);
CustomFileInput3.displayName = `CustomFileInput3`;
export default CustomFileInput3;
