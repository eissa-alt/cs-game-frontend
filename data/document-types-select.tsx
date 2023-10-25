import { Translate } from '~/i18n';

const DocumentTypeSelect = [
   { value: 'saudi_id', label: <Translate id="web:saudi_id" /> },
   { value: 'passport', label: <Translate id="web:passport" /> },
   { value: 'iqama_id', label: <Translate id="web:iqama_id" /> },
];

// const TitleTypeProd = [
//    { value: 'active', label: <Translate id="web:active" /> },
//    { value: 'blocked', label: <Translate id="web:not_active" /> },
// ];

// const DocumentTypeSelect =
//    process.env.NEXT_PUBLIC_ENV === 'production' ? TitleTypeProd : TitleTypeTesting;

export default DocumentTypeSelect;
