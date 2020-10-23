import { useEffect, useState } from "react";
import Lottie from "react-lottie";
import { useTranslation } from "../services/i18n";
import theme from "../../styles/theme";
import { extractLanguageRegion } from "../util";
import languageLoadingAnimationData from "../lotties/language-loading.json";

const LanguageChanger = () => {
  const { t, i18n } = useTranslation("Hero");
  const [language, region] = extractLanguageRegion(i18n.language);
  const currTheme = theme[region];
  const dir = i18n.dir(language);
  const [selectedLocale, setSelectedLocale] = useState();
  const [loading, setLoading] = useState(false);
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: languageLoadingAnimationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
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
          <Lottie width={70} options={defaultOptions} />
        ) : (
          <div className={"language-select-container"}>
            <img
              dir={dir}
              className={"flag-icon"}
              src={`static/icons/${region}.svg`}
            ></img>
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
          </div>
        )}
      </div>
      <style jsx>{`
        .language-changer {
          display: flex;
          flex-direction: column;
          justify-content: center;
          min-width: 50px;
          max-height: 70px;
        }
        .flag-icon {
          width: 50px;
          border-radius: 100em;
        }
        .flag-icon[dir="ltr"] {
          margin-right: 5px;
        }
        .flag-icon[dir="rtl"] {
          margin-left: 5px;
        }
        .language-select-container {
          display:flex;
          align-items: center;
        }
        .select-language {
          align-items: center;
          display: flex;
          height: 100%;
          font-size: 16px;
          font-family: sans-serif;
          font-weight: 700;
          color: ${currTheme.colors.secondaryColor}
          line-height: 1.3;
          padding: 0.6em 1.4em 0.5em 0.8em;
          width: 100%;
          max-width: 100%;
          box-sizing: border-box;
          margin: 0;
          border: none;
          border-radius: 0.5em;
          appearance: none;
          background-color: ${currTheme.colors.white};
        }
        .select-language:focus {
          color: ${currTheme.colors.text};
          outline: none;
        }

        @media screen and (max-width: 600px) {
          .select-language {
            width: 100%;
            text-align-last: center;
          }
          .language-changer {
            justify-content: center;
            align-items: center;
          }
        }

        .select-language:hover {
          box-shadow: inset 0px 0px 0px 3px  ${currTheme.colors.primaryColor};
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
