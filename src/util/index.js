const extractLanguageRegion = (local) => {
  return local.split("-").map((item) => item.toLowerCase());
};

module.exports = { extractLanguageRegion };
