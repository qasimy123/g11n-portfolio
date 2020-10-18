import LanguageChanger from "./LanguageChanger";
import { useTranslation } from "../services/i18n";
import { extractLanguageRegion } from "../util";
import theme from "../../styles/theme";

const Menu = ({}) => {
  const { t, i18n } = useTranslation();
  const [language, region] = extractLanguageRegion(i18n.language);
  const currTheme = theme[region];
  return (
    <>
      <div className={"menu"}>
        <div className={"logo-socials"}>
          <h1>{t("first_name")}</h1>
          <ul className={"links"}>
            {t("socials", { returnObjects: true }).map((social) => (
              <a
                target="_blank"
                and
                rel="noopener noreferrer"
                href={social.url}
                className={"underline"}
              >
                {social.site}
              </a>
            ))}
          </ul>
        </div>

        <LanguageChanger />
      </div>
      <style jsx>{`
        .menu {
          justify-content: space-between;
          display: flex;
          width: 100%;
          padding: 3em;
          z-index: 1;
        }

        .logo-socials {
          display: flex;
        }
        .links {
          display: flex;
          padding: 1em;
        }
        .links a {
          margin-left: 0.5em;
          margin-right: 0.5em;
          padding: 1px;
        }

        .underline::after {
          width: 0%;
          height: 2px;
          display: block;
          background-color: ${currTheme.colors.text};
          position: relative;
          bottom: -5px;
          content: " ";
          transition: width 0.1s cubic-bezier(0.17, 0.67, 0.83, 0.67);
        }
        .underline:hover::after {
          width: 100%;
        }
        .underline:focus::after {
          width: 100%;
        }

        @media screen and (max-width: 600px) {
          .menu {
            flex-direction: column;
            justify-content: center;
          }
          .logo-socials {
            flex-direction: column;
            justify-content: center;
          }
          .menu h1 {
            text-align: center;
          }
          .links {
            justify-content: center;
          }
        }
      `}</style>
    </>
  );
};

export default Menu;
