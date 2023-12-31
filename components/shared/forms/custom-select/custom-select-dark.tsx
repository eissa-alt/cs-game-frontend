// import { Translate } from '~/i18n';
// import { useAuth } from '~/auth';
import classNames from 'classnames';
import { memo } from 'react';
// import Select, { Props, Theme } from 'react-select';
import Select, { Props } from 'react-select';
// import SelectStyles from '~/css/react-select';
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
   // isMulti,
   valid,
   error,
   styles,
   groupClassName,
   ...rest
}) => {
   const { translate } = useTranslate();

   // const selectTheme = ({ borderRadius, ...theme }: Theme) => ({
   //    borderRadius: SelectStyles.borderRadius || borderRadius,
   //    ...theme,
   //    spacing: {
   //       ...theme.spacing,
   //    },

   //    // colors: {
   //    //    ...theme.colors,
   //    //    text: 'green',
   //    //    primary: error
   //    //       ? SelectStyles.errorColor
   //    //       : valid
   //    //       ? SelectStyles.successColor
   //    //       : SelectStyles.borderColors,
   //    //    primary75: SelectStyles.optionFocusedBackgroundColor,
   //    //    primary50: SelectStyles.optionFocusedBackgroundColor,
   //    //    primary25: SelectStyles.optionBackgroundColor,
   //    //    neutral0: SelectStyles.backgroundColor,
   //    //    neutral5: '#e5e7eb',
   //    //    neutral10: 'transparent',
   //    //    neutral20: error
   //    //       ? SelectStyles.errorColor
   //    //       : valid
   //    //       ? SelectStyles.successColor
   //    //       : SelectStyles.defaultBorderColors,
   //    //    neutral30: error
   //    //       ? SelectStyles.errorColor
   //    //       : valid
   //    //       ? SelectStyles.successColor
   //    //       : SelectStyles.borderHoverColor,
   //    //    neutral40: SelectStyles.noOptionsColor,
   //    //    neutral50: SelectStyles.placeholderColor,
   //    //    neutral60: SelectStyles.focusedArrowColor,
   //    //    neutral70: '#e5e7eb',
   //    //    neutral80: SelectStyles.searchColor,
   //    //    neutral90: '#e5e7eb',
   //    // },
   // });

   const selectStyles: any = {
      ...styles,
      option: (style: any, state: any) => ({
         ...style,
         color: '#ffffff',
         backgroundColor: state.isSelected ? '#DF1B22' : '#212529',
         '&:hover': {
            backgroundColor: '#FBBF24',
            color: 'black',
         },
         '&:active': {
            backgroundColor: '#DF1B22',
         },
         fontSize: '14px',
      }),
      control: (style: any, state: any) => ({
         ...style,
         color: '#DF1B22',
         backgroundColor: '#212529',

         borderRadius: '12px',
         padding: '5px',
         borderColor: '#495057',
         '&:hover': {
            borderColor: state.isFocused ? '#FBBF24' : '#495057',
         },
         boxShadow: state.isFocused ? '0 0 0 3px hsl(43deg 96% 72% / 45%)' : 'none',
         outlineOffset: state.isFocused ? '2px' : '0px',
      }),

      dropdownIndicator: (style: any) => ({
         ...style,
         color: '#DF1B22',
         '&:hover': {
            color: '#DF1B22',
         },
      }),
      placeholder: (style: any) => ({
         ...style,
         color: '#DF1B22',
         fontSize: '14px',
      }),
      indicatorSeparator: (style: any) => ({
         ...style,
         backgroundColor: '#DF1B22',
      }),
      valueContainer: (style: any) => ({
         ...style,
         color: '#DF1B22',
      }),

      menu: (style: any) => ({
         ...style,

         marginTop: '7px',
         overFlow: 'hidden',
         borderRadius: '12px',
         backgroundColor: '#495057',
      }),
      menuList: (style: any) => ({
         ...style,
         padding: 0,
         borderRadius: '12px',
         overFlow: 'hidden',
         backgroundColor: '#495057',
         '::-webkit-scrollbar': {
            width: '4px',
            height: '0px',
         },
         '::-webkit-scrollbar-track': {
            background: '#f1f1f1',
         },
         '::-webkit-scrollbar-thumb': {
            background: '#888',
         },
         '::-webkit-scrollbar-thumb:hover': {
            background: '#555',
         },
      }),
      singleValue: (style: any) => ({
         ...style,
         color: '#ffffff',
         fontSize: '14px',
      }),
      input: (style: any) => ({
         ...style,
         color: '#ffffff',
         fontSize: '14px',
      }),
   };

   return (
      <div className={classNames(groupClassName || 'relative mb-5 w-full pb-1')}>
         <Select
            className="react-select my-1"
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
            <div className="text-secondarysuccess text-xs">{valid}</div>
         )}
         {error && typeof error !== 'boolean' && (
            <div className="absolute text-xs text-red-500" role="alert">
               {error}
            </div>
         )}
      </div>
   );
};

export default memo(UISelect);
