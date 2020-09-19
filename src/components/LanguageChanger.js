import { useEffect, useState } from "react";
import { useTranslation } from "../services/i18n";
const LanguageChanger = () => {
  const { t, i18n } = useTranslation("Hero");
  const [selectedLocale, setSelectedLocale] = useState();

  useEffect(() => {
    if (selectedLocale) {
      return;
    }
    setSelectedLocale(i18n.language);
  }, [selectedLocale]);

  const changeLocale = (e) => {
    e.preventDefault();
    i18n.changeLanguage(selectedLocale);
  };

  return (
    <>
      <div className={"language-changer"}>
        <form
          className={"language-changer-form"}
          onSubmit={(e) => changeLocale(e)}
        >
          <select
            value={selectedLocale}
            onChange={(e) => {
              setSelectedLocale(e.target.value);
            }}
          >
            <option value="en-CA">{t("locales.en_CA")}</option>
            <option value="fr-CA">{t("locales.fr_CA")}</option>
            <option value="en-PK">{t("locales.en_PK")}</option>
            <option value="ur-PK">{t("locales.ur_PK")}</option>
          </select>
          <button type="submit">{t("language_changer_button")}</button>
        </form>
      </div>
      <style jsx>{`
        .language-changer {
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .language-changer-form {
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
      `}</style>
    </>
  );
};

export default LanguageChanger;