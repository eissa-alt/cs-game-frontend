import classNames from 'classnames';
import { memo } from 'react';
import Select, { Props } from 'react-select';
import { useTranslate } from '~/i18n';
/******************************************************************
 *
 *  THIS COMPONENT WAS GENERATED BY NEXTCRAZY-CLI
 *
 ******************************************************************/
interface UISelectProps extends Props {
   innerRef?: any;
   error?: React.ReactNode;
   valid?: React.ReactNode;
   groupClassName?: string;
}

const UISelect: React.FC<UISelectProps> = ({
   id,
   innerRef,
   valid,
   error,
   styles,
   groupClassName,
   ...rest
}) => {
   const { translate } = useTranslate();

   const colors = {
      main: '#7F8694',
      secondary: '#9900E0',
      error: '#ffd33a',
      border: '#7F8694',
      OptBg: '#ffffff',
      hover: '#ffffff',
      isFocusedBg: '#02B2B1',
      isFocusedColor: '#ffffff',
      selectedBg: '#02B2B1',
      selectedColor: '#ffffff',
      disabled: '#f2f2f2',
      boxShadowIsError: '0 0 0 3px #ffd33a80',
      boxShadowIsFocused: '0 0 0 3px #7F869480',
      valSelected: '#02B2B1',
   };

   const selectStyles: any = {
      ...styles,
      option: (style: any, state: any) => ({
         ...style,
         color: state.isSelected ? colors.isFocusedColor : colors.main,
         backgroundColor: state.isSelected
            ? state.isFocused
               ? colors.isFocusedBg
               : colors.selectedBg
            : state.isFocused
            ? colors.isFocusedBg
            : colors.OptBg,
         '&:hover': {
            backgroundColor: colors.selectedBg,
            color: colors.isFocusedColor,
         },
         // border: '2px',
         // borderColor: colors.border,

         fontSize: '16px',
      }),
      control: (style: any, state: any) => ({
         ...style,
         color: colors.main,

         backgroundColor: state.isDisabled ? colors.disabled : 'white',
         cursor: state.isDisabled ? 'not-allowed' : 'default',
         pointerEvents: state.isDisabled && 'auto', // cancel mouse events when disabled
         // pointerEvents: isDisabled ? 'none' : null, // cancel mouse events when disabled

         borderRadius: '30px',
         padding: '2px',
         borderColor: error ? colors.error : '',
         '&:hover': {
            borderColor: state.isFocused
               ? error
                  ? colors.error
                  : colors.main
               : error
               ? colors.error
               : colors.border,
         },
         // boxShadow: 'none',
         boxShadow: state.isFocused
            ? error
               ? colors.boxShadowIsError
               : colors.boxShadowIsFocused
            : 'none',
         outlineOffset: state.isFocused ? '2px' : '0px',
      }),

      dropdownIndicator: (style: any) => ({
         ...style,
         color: colors.main,
         '&:hover': {
            color: colors.main,
         },
      }),
      placeholder: (style: any) => ({
         ...style,
         color: colors.main,
         fontSize: '16px',
         fontWeight: '500',
      }),
      indicatorSeparator: (style: any) => ({
         ...style,
         backgroundColor: colors.main,
      }),
      valueContainer: (style: any) => ({
         ...style,
         color: 'colors.main',
      }),

      menu: (style: any) => ({
         ...style,

         marginTop: '7px',
         overFlow: 'hidden',
         borderRadius: '0px',
         backgroundColor: colors.main,
         zIndex: '99',
         border: `1px solid ${colors.main}`,
      }),
      menuList: (style: any) => ({
         ...style,
         padding: 0,
         borderRadius: '0px',
         overFlow: 'hidden',
         backgroundColor: colors.main,
         '::-webkit-scrollbar': {
            width: '4px',
            height: '0px',
         },
         '::-webkit-scrollbar-track': {
            background: '#f1f1f1',
         },
         '::-webkit-scrollbar-thumb': {
            background: colors.main,
         },
         '::-webkit-scrollbar-thumb:hover': {
            background: colors.main,
         },
      }),
      singleValue: (style: any) => ({
         ...style,
         color: colors.valSelected,
         fontSize: '16px',
         fontWeight: 500,
      }),
      input: (style: any) => ({
         ...style,
         color: colors.main,
         fontSize: '16px',
      }),
   };

   return (
      <div className={classNames(groupClassName || 'relative mb-5 w-full pb-1')}>
         <Select
            className="react-select "
            inputId={id}
            instanceId={id}
            styles={selectStyles}
            // menuIsOpen={true}
            noOptionsMessage={message =>
               `${translate({ id: 'common:no_results' })} ${message.inputValue}`
            }
            ref={innerRef}
            //! need to check style on -> true
            isSearchable={true}
            // theme={selectTheme}
            {...rest}
         />

         {valid && !error && typeof valid !== 'boolean' && (
            <div className="text-xs text-primary">{valid}</div>
         )}
         {error && typeof error !== 'boolean' && (
            <div className="absolute inset-x-0 text-center text-xs text-[#ffd33a]" role="alert">
               {error}
            </div>
         )}
      </div>
   );
};

export default memo(UISelect);
