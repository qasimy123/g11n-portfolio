import LanguageChanger from "./LanguageChanger";
import { useTranslation } from "../services/i18n";

const Menu = ({}) => {
  const { t, i18n } = useTranslation();
  return (
    <>
      <div className={"section"}>
        <h1>{t("first_name")}</h1>
        <ul className={"links"}>
          {t("socials", { returnObjects: true }).map((social) => (
            <a href={social.url}>{social.site}</a>
          ))}
        </ul>

        <LanguageChanger />
      </div>
      <style jsx>{`
        .section {
          justify-content: space-between;
          display: flex;
          width: 100%;
          padding: 2em;
        }
        .links {
          display: flex;
          padding: 1em;
        }
        .links a {
          margin-left: 0.5em;
          margin-right: 0.5em;
        }
        @media screen and (max-width: 600px) {
          .section {
            flex-direction: column;
            justify-content: center;
          }
          .section h1 {
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
