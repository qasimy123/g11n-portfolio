const { nextI18NextRewrites } = require('next-i18next/rewrites')

const localeSubpaths = {'en-CA':'en-CA', 'fr-CA':'fr-CA', 'en-PK':'en-PK', 'ur-PK': 'ur-PK'}

module.exports = {
  rewrites: async () => nextI18NextRewrites(localeSubpaths),
  publicRuntimeConfig: {
    localeSubpaths,
  },
}