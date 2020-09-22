import { useEffect, useState } from "react";
import { useTranslation } from "../services/i18n";
import theme from "../../styles/theme";

const LanguageChanger = () => {
  const { t, i18n } = useTranslation("Hero");
  const [language, region] = i18n.language
    .split("-")
    .map((item) => item.toLowerCase());
  const currTheme = theme[region];
  const dir = i18n.dir(language);
  const [selectedLocale, setSelectedLocale] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (selectedLocale) {
      return;
    }
    setSelectedLocale(i18n.language);
  }, [selectedLocale]);

  const changeLocale = async (val) => {
    setLoading(true);
    await i18n.changeLanguage(val);
    setLoading(false);
  };

  return (
    <>
      <div className={"language-changer"}>
        {loading ? (
          <p>{t("loading")}</p>
        ) : (
          <select
            dir={dir}
            className="select-language"
            value={selectedLocale}
            onChange={(e) => {
              changeLocale(e.target.value);
              setSelectedLocale(e.target.value);
            }}
          >
            <option value="en-CA">{t("locales.en_CA")}</option>
            <option value="fr-CA">{t("locales.fr_CA")}</option>
            <option value="en-PK">{t("locales.en_PK")}</option>
            <option value="ur-PK">{t("locales.ur_PK")}</option>
          </select>
        )}
      </div>
      <style jsx>{`
        .language-changer {
          display: flex;
          flex-direction: column;
          justify-content: center;
          min-width: 50px;
        }

        .select-language {
          display: block;
          font-size: 16px;
          font-family: sans-serif;
          font-weight: 700;
          color: ${currTheme.colors.secondaryColor};
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

        @media screen and (max-width: 600px) {
          .select-language {
            width: 60%;
            text-align-last: center;
          }
          .language-changer {
            justify-content: center;
            align-items: center;
          }
        }

        .select-language:hover {
          box-shadow: inset 0px 5px 16px -7px rgba(0, 0, 0, 0.57);
          cursor: pointer;
        }
        .select-language[dir="rtl"] {
          padding: 0.6em 0.8em 0.5em 1.4em;
        }
      `}</style>
    </>
  );
};

export default LanguageChanger;
