import { withTranslation } from "../services/i18n";
import { BlogsList } from "./Lists";
import Section from "./Section";

const Blogs = ({ t, MediumRssFeed }) => {
  return (
    <>
      <Section>
        <h1>{t("blogs_title")}</h1>
        {MediumRssFeed && <BlogsList blogsList={MediumRssFeed.items} />}
        <img
          className={"bitmoji"}
          src={`https://sdk.bitmoji.com/render/panel/ded21d24-cb38-4e67-862b-4fcb8201f661-3f3fdbec-d78d-441b-8530-a6c5f8c15014-v1.png?transparent=1&palette=1`}
        ></img>
      </Section>
      <style jsx>
        {`
          .bitmoji {
            width: 600px;
            position: absolute;
            bottom: -1;
            right: 0;
            transform: scaleX(-1);
          }
        `}
      </style>
    </>
  );
};

export default withTranslation("Blogs")(Blogs);
