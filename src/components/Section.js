import theme from "../../styles/theme";
import { i18n } from "../services/i18n";

const Section = ({ children }) => {
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
      `}</style>
    </>
  );
};

export default Section;
