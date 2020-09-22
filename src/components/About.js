import { withTranslation } from "../services/i18n";
import Section from "./Section";
import { extractLanguageRegion } from "../util";

const BITMOJI_URLS = {
  ca: `https://sdk.bitmoji.com/render/panel/8b80b4d8-32db-4668-8490-9b1227b0754b-3f3fdbec-d78d-441b-8530-a6c5f8c15014-v1.png?transparent=1&palette=1&width=620`,
  pk: `https://sdk.bitmoji.com/render/panel/8b80b4d8-32db-4668-8490-9b1227b0754b-613405ba-1820-4dc0-8612-2835d2d2c74b-v1.png?transparent=1&palette=1&width=620`,
};

const About = ({ t, i18n }) => {
  const [language, region] = extractLanguageRegion(i18n.language);
  const dir = i18n.dir(language);
  return (
    <>
      <Section>
        <h1>{t("about_title")}</h1>

        <img dir={dir} className={"bitmoji"} src={BITMOJI_URLS[region]}></img>
        <p className={"about-paragraph"}>
          {t("about_paragraph")
            .split("\n")
            .map((item, i) => {
              return <p key={i}>{item}</p>;
            })}
        </p>

        <p>{t("about_favourite_technologies")}</p>
        <ul dir={dir} className={"favourite-technologies-list card"}>
          {t("about_favourite_technologies_list", { returnObjects: true }).map(
            (item) => (
              <li>{item}</li>
            )
          )}
        </ul>
      </Section>
      <style jsx>
        {`
          .about-paragraph {
            width: 60%;
            font-size: 1.3rem;
          }
          .bitmoji {
            width: 600px;
            position: absolute;
            top: 50%;
            right: 0;
          }
          @media screen and (max-width: 1400px) {
            .about-paragraph {
              width: 80%;
            }
            .bitmoji {
              width: 300px;
              position: absolute;
              top: 60%;
              right: 0;
            }
          }

          @media screen and (max-width: 600px) {
            .about-paragraph,
            h1 {
              width: 100%;
              text-align: center;
            }
            .about-paragraph {
              font-size: 1rem;
            }
            .bitmoji {
              display: none;
            }
            .favourite-technologies-list {
              list-style-type: none;
              margin: 0;
              padding: 1;
              text-align: center;
              align-self: center;
            }
            .favourite-technologies-list[dir="rtl"] {
              text-align: center;
            }
          }

          .bitmoji[dir="rtl"] {
            left: 0;
            transform: scaleX(-1);
          }

          .favourite-technologies-list {
            width: fit-content;
          }
        `}
      </style>
    </>
  );
};

export default withTranslation("About")(About);
