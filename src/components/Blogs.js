import { withTranslation } from "../services/i18n";
import { BlogsList } from "./Lists";
import Section from "./Section";

const BITMOJI_URLS = {
  ca: `https://sdk.bitmoji.com/render/panel/ded21d24-cb38-4e67-862b-4fcb8201f661-3f3fdbec-d78d-441b-8530-a6c5f8c15014-v1.png?transparent=1&palette=1`,
  pk: `https://sdk.bitmoji.com/render/panel/ded21d24-cb38-4e67-862b-4fcb8201f661-613405ba-1820-4dc0-8612-2835d2d2c74b-v1.png?transparent=1&palette=1`,
};
const Blogs = ({ t, MediumRssFeed, i18n }) => {
  const [language, region] = i18n.language
    .split("-")
    .map((item) => item.toLowerCase());
  const dir = i18n.dir(language);
  return (
    <>
      <Section>
        <h1>{t("blogs_title")}</h1>
        <img dir={dir} className={"bitmoji"} src={BITMOJI_URLS[region]}></img>
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
