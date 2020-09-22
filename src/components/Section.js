import theme from "../../styles/theme";
import { useTranslation } from "../services/i18n";
import { extractLanguageRegion } from "../util";
const Section = ({ children }) => {
  const { i18n } = useTranslation("Projects");
  const [language, region] = extractLanguageRegion(i18n.language);
  const currTheme = theme[region];
  return (
    <>
      <div className={"section"}>{children}</div>
      <style jsx>{`
        .section {
          display: flex;
          flex-direction: column;
          width: 80%;
          padding: 1em;
          color: ${currTheme.colors.text};
        }
        @media screen and (max-width: 600px) {
          .section {
            text-align: center;
            width: 100%;
          }
        }
      `}</style>
    </>
  );
};

export default Section;
