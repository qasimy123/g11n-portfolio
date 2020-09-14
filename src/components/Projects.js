import { ProjectsList } from "./Lists";
import { withTranslation } from "../services/i18n";

const Projects = ({ t }) => (
  <div>
    <h1>{t("projects_title")}</h1>

    <ProjectsList projects={t("projects_list", { returnObjects: true })} />
  </div>
);

export default withTranslation("Projects")(Projects);
