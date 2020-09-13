const NextI18Next = require('next-i18next').default
const { localeSubpaths } = require('next/config').default().publicRuntimeConfig
const path = require('path')

module.exports = new NextI18Next({
  defaultLanguage: 'en-CA',
  otherLanguages: ['en-CA', 'fr-CA', 'ur-PK', 'en-PK'],
  localeSubpaths,
  localePath: path.resolve('./public/static/locales'),
  keySeparator: '.',
  fallbackLng:"en-CA"
})
