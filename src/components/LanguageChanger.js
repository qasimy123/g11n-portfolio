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
    i18n.changeLanguage(selectedLocale);
  };

  return (
    <>
      <div className={"language-changer"}>
        <select
          className="select-language"
          value={selectedLocale}
          onChange={(e) => {
            setSelectedLocale(e.target.value);
          }}
          onClick={changeLocale}
        >
          <option value="en-CA">{t("locales.en_CA")}</option>
          <option value="fr-CA">{t("locales.fr_CA")}</option>
          <option value="en-PK">{t("locales.en_PK")}</option>
          <option value="ur-PK">{t("locales.ur_PK")}</option>
        </select>
      </div>
      <style jsx>{`
        .language-changer {
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .select-language {
          display: block;
          font-size: 16px;
          font-family: sans-serif;
          font-weight: 700;
          color: #444;
          line-height: 1.3;
          padding: 0.6em 1.4em 0.5em 0.8em;
          width: 100%;
          max-width: 100%;
          box-sizing: border-box;
          margin: 0;
          border: none;
          border-radius: 0.5em;
          appearance: none;
          background-color: #fff;
        }
        .select-language:focus {
          color: #222;
          outline: none;
        }

        *[dir="rtl"] .select-language,
        :root:lang(ar) .select-language,
        :root:lang(iw) .select-language {
          background-position: left 0.7em top 50%, 0 0;
          padding: 0.6em 0.8em 0.5em 1.4em;
        }
      `}</style>
    </>
  );
};

export default LanguageChanger;
