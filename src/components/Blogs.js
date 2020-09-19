import { withTranslation } from "../services/i18n";
import { BlogsList } from "./Lists";
import Section from "./Section";

const Blogs = ({ t, MediumRssFeed }) => {
  return (
    <Section>
      <h1>{t("blogs_title")}</h1>
      {MediumRssFeed && <BlogsList blogsList={MediumRssFeed.items} />}
    </Section>
  );
};

export default withTranslation("Blogs")(Blogs);
