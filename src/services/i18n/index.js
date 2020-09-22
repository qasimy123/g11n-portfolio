const NextI18Next = require("next-i18next").default;
const {
  localeSubpaths,
  allLanguages,
} = require("next/config").default().publicRuntimeConfig;
const path = require("path");

const [defaultLanguage, ...otherLanguages] = allLanguages;
module.exports = new NextI18Next({
  defaultLanguage,
  otherLanguages,
  localeSubpaths,
  localePath: path.resolve("./public/static/locales"),
  keySeparator: ".",
  fallbackLng: defaultLanguage,
});
