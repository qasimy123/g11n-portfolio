const { nextI18NextRewrites } = require("next-i18next/rewrites");

const allLanguages = ["en-CA", "fr-CA", "en-PK", "ur-PK"];

const localeSubpaths = {};

allLanguages.forEach((language) => {
  localeSubpaths[language] = language;
});

module.exports = {
  rewrites: async () => nextI18NextRewrites(localeSubpaths),
  publicRuntimeConfig: {
    localeSubpaths,
    allLanguages,
  },
};
