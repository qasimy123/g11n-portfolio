import { withTranslation } from "../services/i18n";
import { BlogsList } from "./Lists";
import Section from "./Section";
import { extractLanguageRegion } from "../util";

const Blogs = ({ t, MediumRssFeed, i18n }) => {
  const [language, region] = extractLanguageRegion(i18n.language);
  const dir = i18n.dir(language);
  return (
    <>
      <Section>
        <h1>{t("blogs_title")}</h1>
        <img
          dir={dir}
          className={"bitmoji"}
          src={`/static/bitmoji/${region}/read.png`}
        ></img>
        {MediumRssFeed && <BlogsList blogsList={MediumRssFeed.items} />}
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

          .bitmoji[dir="rtl"] {
            left: 0;
            transform: scaleX(1);
          }
          @media screen and (max-width: 1400px) {
            .bitmoji {
              width: 300px;
            }
          }

          @media screen and (max-width: 1160px) {
            .bitmoji {
              width: 300px;

              position: relative;
            }
          }
          @media screen and (max-width: 800px) {
            .bitmoji {
              width: 100%;
            }
          }
        `}
      </style>
    </>
  );
};

export default withTranslation("Blogs")(Blogs);
