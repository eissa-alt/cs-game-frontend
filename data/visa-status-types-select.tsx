import { Translate } from '~/i18n';

const VisaStatusTypeSelect = [
   { value: 'valid_visa', label: <Translate id="web:valid_visa" /> },
   { value: 'iqama', label: <Translate id="web:iqama" /> },
   { value: 'need_visa', label: <Translate id="web:need_visa" /> },
];

// const TitleTypeProd = [
//    { value: 'active', label: <Translate id="web:active" /> },
//    { value: 'blocked', label: <Translate id="web:not_active" /> },
// ];

// const VisaStatusTypeSelect =
//    process.env.NEXT_PUBLIC_ENV === 'production' ? TitleTypeProd : TitleTypeTesting;

export default VisaStatusTypeSelect;
