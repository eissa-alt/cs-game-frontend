// import { Translate } from '~/i18n';
// import { useAuth } from '~/auth';
import classNames from 'classnames';
import { forwardRef } from 'react';

/******************************************************************
 *
 *  THIS COMPONENT WAS GENERATED BY NEXTCRAZY-CLI
 *
 ******************************************************************/
export type InputProps = {
   label?: React.ReactNode;
   type?: 'text' | 'email' | 'password' | 'number' | 'textarea' | 'time';
   error?: React.ReactNode;
   name?: string;
   id?: string;
   innerRef?: any;
   disabled?: boolean;
   placeHolder?: string;
   autoComplete?: string;
   className?: string;
   groupClassName?: string;

   isInline?: boolean;
   isRequired?: boolean;
   help?: React.ReactNode;
   // value?: string | number | readonly string[] | undefined;
} & React.HTMLAttributes<HTMLInputElement | HTMLTextAreaElement>;
const PhoneInput = forwardRef<any, InputProps>(
   (
      {
         label,
         error,
         className,
         // labelClassName,
         groupClassName,
         disabled = false,
         id = '',

         // innerRef,
         autoComplete,
         placeHolder = '',
         isInline = false,
         isRequired = false,
         // value = '',
         help,
         ...props
      },
      ref
   ) => {
      // const { authenticated } = useAuth();

      return (
         <div className={groupClassName || classNames(isInline ? 'row' : 'relative mb-5  w-full')}>
            {label && (
               <div className={classNames(isInline ? 'self-center md:mb-5 md:col-3' : '')}>
                  <label
                     htmlFor={id}
                     className={classNames(
                        'inline-block font-light text-white',
                        isRequired && 'required-label'
                     )}>
                     {label}
                  </label>
               </div>
            )}
            <div className={classNames(isInline ? 'mb-5 md:col-9' : '')}>
               <div className="col-12">
                  <div className={classNames('relative flex')}>
                     {/* prepend */}
                     <span className="absolute-v-center"></span>
                     <input
                        autoComplete={autoComplete}
                        id={id}
                        ref={ref}
                        // ref={innerRef}
                        type="text"
                        placeholder={placeHolder}
                        // value={value}
                        className={
                           className ||
                           classNames(
                              'custom-input focus:shadow-outline-secondary my-1 block w-full rounded-xl text-white focus:border-secondary-400 focus:outline-none',
                              // 'ltr:pl-20',
                              disabled && 'disabled:cursor-not-allowed disabled:opacity-50'
                           )
                        }
                        disabled={disabled}
                        {...props}
                     />
                  </div>
                  {help && <div>{help}</div>}
                  {error && typeof error !== 'boolean' && (
                     <div className="absolute text-xs text-secondary-500" role="alert">
                        {error}
                     </div>
                  )}
               </div>
            </div>
         </div>
      );
   }
);
PhoneInput.displayName = `PhoneInput`;
export default PhoneInput;
