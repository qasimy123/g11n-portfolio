import { ProjectsList } from "./Lists";
import { withTranslation } from "../services/i18n";
import Section from "./Section";

const Projects = ({ t }) => (
  <Section>
    <h1>{t("projects_title")}</h1>

    <ProjectsList projects={t("projects_list", { returnObjects: true })} />
  </Section>
);

export default withTranslation("Projects")(Projects);
