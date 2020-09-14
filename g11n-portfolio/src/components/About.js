import { withTranslation } from "../services/i18n";

const About = ({ t }) => (
  <div>
    <h1>{t("about_title")}</h1>
    <p>{t("about_paragraph")}</p>

    <p>{t("about_favourite_technologies")}</p>
    <ul>
      {t("about_favourite_technologies_list", { returnObjects: true }).map(
        (item) => (
          <p>{item}</p>
        )
      )}
    </ul>
  </div>
);

export default withTranslation("About")(About);
