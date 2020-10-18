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
      <style jsx global>{`
        .section {
          display: flex;
          flex-direction: column;
          width: 80%;
          padding: 1em;
          color: ${currTheme.colors.text};
        }
        .section h1 {
          font-size: 3em;
          position: relative;
          overflow: hidden;
        }

        .section h1:after {
          content: " ";
          top: 50%;
          width: 30%;
          margin-left: 20px;
          height: 7px;
          position: absolute;
          border-radius: 1em;
          background: ${currTheme.colors.primaryColor};
        }

        @media screen and (max-width: 600px) {
          .section {
            text-align: center;
            width: 100%;
          }
          .section h1:after {
            display: none;
          }
        }
      `}</style>
    </>
  );
};

export default Section;
