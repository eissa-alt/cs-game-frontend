// const nextBuildId = require('next-build-id');
const withBundleAnalyzer = require('@next/bundle-analyzer')({
   enabled: process.env.ANALYZE === 'true',
});
// const withTM = require('next-transpile-modules')([
//    '@fullcalendar/core',
//    '@fullcalendar/react',
//    '@fullcalendar/common',
//    '@fullcalendar/daygrid',
//    '@fullcalendar/timegrid',
// ]);
module.exports = withBundleAnalyzer({
   // generateBuildId: () => nextBuildId({ dir: __dirname, describe: true }),
   images: {
      domains: ['dummyimage.com', 'api.registration.taravantura.rs'],
   },

   webpack(config) {
      config.module.rules.push({
         test: /\.svg$/,
         use: [
            {
               loader: '@svgr/webpack',
               options: {
                  svgo: false,
               },
            },
         ],
      });
      return config;
   },
});
