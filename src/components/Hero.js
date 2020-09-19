import { withTranslation } from "../services/i18n";

const Hero = ({ t }) => (
  <div className={"hero"}>
    <h1 className="header">{t("welcome_title")}</h1>
    <p>{t("description")}</p>

    <style jsx>{`
      .header {
        font-size: 5em;
        color: #fff;
      }
      .hero {
        background: green;
        width: 80%;
        padding: 1em;
      }
    `}</style>
  </div>
);

export default withTranslation("Hero")(Hero);
