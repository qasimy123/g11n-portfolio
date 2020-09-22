import theme from "../../styles/theme";
import { useTranslation } from "../services/i18n";

const Section = ({ children }) => {
  const { i18n } = useTranslation("Projects");
  const currTheme = theme[i18n.language.split("-").slice(-1)[0].toLowerCase()];
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
