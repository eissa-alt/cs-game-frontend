import Document, { Head, Main, NextScript, Html } from 'next/document';
import transConfig from '~/translation.json';
const { languages, defaultLanguage } = transConfig;

/* -------------------------------------------------------------------------- */
/*                                  DOCUMENT                                  */
/* -------------------------------------------------------------------------- */

export default class NextDocument extends Document {
   render() {
      /* -------- Just getting direction and language inside html elements -------- */

      const langs = languages as Record<string, string>;
      const props = this.props.__NEXT_DATA__;
      const lang = props?.query?.lang || defaultLanguage;
      const direction = langs[lang + ''] || 'ltr';
      return (
         <Html lang={lang + ''} dir={direction} className="font-primary font-main antialiased">
            <Head>
               <meta charSet="utf-8" />
               <meta name="google" content="notranslate" />
               {/* //todo */}
               <meta httpEquiv="ScreenOrientation" content="autoRotate:disabled" />

               {/* <link rel="stylesheet" href="https://use.typekit.net/zmf4cef.css" /> */}
            </Head>
            <body
               id="body"
               dir={direction}
               className="font-main antialiased ltr:text-left rtl:text-right">
               <Main />
               <NextScript />
            </body>
         </Html>
      );
   }
}
