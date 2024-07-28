/** @type {import('next-i18next').UserConfig} */
module.exports = {
  i18n: {
    defaultLocale: 'de',
    locales: ['en', 'de'],
  },
  ns: ['common', 'contact', 'about', 'newsletter', 'privacyPolicy', 'project', 'vision'], // Add all your namespaces here
  defaultNS: 'common',
  localePath: typeof window === 'undefined' ? require('path').resolve('./public/locales') : '/locales'
};
