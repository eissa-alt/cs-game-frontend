const plugin = require('tailwindcss/plugin');
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
   mode: 'jit',
   corePlugins: {
      container: false, //! I am using tailwind-bootstrap-grid
   },
   // darkMode: 'class',
   future: {
      removeDeprecatedGapUtilities: true,
      purgeLayersByDefault: true,
   },
   experimental: {
      applyComplexClasses: true,
   },

   content: ['./components/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}'],
   theme: {
      // customForms: theme => ({
      //    default: {
      //       'input, textarea': {
      //          '&::placeholder': {
      //             color: theme('colors.primary'),
      //          },
      //       },
      //    },
      // }),
      extend: {
         // typography: theme => ({
         //    DEFAULT: {
         //       css: {
         //          color: theme('white'),
         //       },
         //    },
         // }),
         fontFamily: {
            main: ['IBM_Plex_Sans_Arabic', ...defaultTheme.fontFamily.sans],
            // ar: ['IBM_Plex_Sans_Arabic', ...defaultTheme.fontFamily.sans],
            // system: ['Segoe UI', ...defaultTheme.fontFamily],
         },
         colors: {
            // primary color
            primary: {
               DEFAULT: '#007761',
               50: '#30FFD9',
               100: '#1BFFD5',
               200: '#00F1C5',
               300: '#00C9A4',
               400: '#00A082',
               500: '#007761',
               600: '#003F33',
               700: '#000706',
               800: '#000000',
               900: '#000000',
               950: '#000000'
            },
            // secondary color
            // secondary: {
            //    DEFAULT: '#02B2B1',
            //    50: '#6EFDFD',
            //    100: '#5AFDFC',
            //    200: '#32FDFC',
            //    300: '#09FCFB',
            //    400: '#02DAD9',
            //    500: '#02B2B1',
            //    600: '#017B7A',
            //    700: '#014343',
            //    800: '#000C0C',
            //    900: '#000000',
            //    950: '#000000',
            // },
         },
         backgroundImage: {
            'body-bg': "url('/images/bg-hero.png')",
         },
      },
   },
   variants: {
      float: ['responsive', 'direction'],
      margin: ['responsive', 'direction'],
      padding: ['responsive', 'direction'],
      inset: ['responsive', 'direction'],
      fontFamily: ['direction'],
      backgroundColor: ['responsive', 'direction', 'hover', 'focus', 'disabled', 'dark'],
      display: ['responsive', 'dark'],
      textColor: ['responsive', 'direction', 'hover', 'focus', 'disabled', 'dark'],
      placeholderColor: ['focus', 'dark'],
      borderColor: ['responsive', 'direction', 'hover', 'focus', 'disabled', 'dark'],
      textAlign: ['responsive', 'direction'],
      justifyContent: ['responsive', 'direction'],
      opacity: ['responsive', 'hover', 'focus', 'disabled'],
      cursor: ['responsive', 'disabled'],
      rotate: ['responsive', 'hover', 'focus', 'direction'],
      space: ['responsive', 'direction'],
      borderWidth: ['responsive', 'direction'],
      borderRadius: ['responsive', 'direction'],
      backgroundPosition: ['responsive', 'direction'],
      letterSpacing: ['responsive', 'direction'],
      boxShadow: ['focus'],
      order: ['direction'],
      divideColor: ['dark'],
   },
   plugins: [
      require('@tailwindcss/forms'),
      require('@tailwindcss/typography'),
      require('tailwind-bootstrap-grid')({
         rtl: true,
         // containerMaxWidths: { sm: '540px', md: '720px', lg: '960px', xl: '1140px' },
      }),

      plugin(function ({ addUtilities, variants }) {
         const newUtilities = {
            '.flip-x': {
               '--transform-scale-x': '-1',
            },
            '.flip-y': {
               '--transform-scale-y': '-1',
            },
         };
         addUtilities(newUtilities, variants('flip'));
      }),

      plugin(function ({ addVariant }) {
         addVariant('hocus', ['&:hover', '&:focus']);
      }),
   ],
};
