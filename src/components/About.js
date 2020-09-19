import { withTranslation } from "../services/i18n";
import Section from "./Section";

const About = ({ t }) => (
  <Section>
    <h1>{t("about_title")}</h1>
    <p>{t("about_paragraph")}</p>

    <p>{t("about_favourite_technologies")}</p>
    <ul>
      {t("about_favourite_technologies_list", { returnObjects: true }).map(
        (item) => (
          <li>{item}</li>
        )
      )}
    </ul>
  </Section>
);

export default withTranslation("About")(About);
