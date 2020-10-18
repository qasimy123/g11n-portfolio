import { withTranslation } from "../services/i18n";
import Section from "./Section";
import { extractLanguageRegion } from "../util";

const About = ({ t, i18n }) => {
  const [language, region] = extractLanguageRegion(i18n.language);
  const dir = i18n.dir(language);
  return (
    <>
      <Section>
        <h1>{t("about_title")}</h1>

        <div className={"about-pic-description"}>
          <p className={"about-paragraph"}>
            {t("about_paragraph")
              .split("\n")
              .map((item, i) => {
                return <p key={i}>{item}</p>;
              })}
          </p>
          <img
            className={"about-photo"}
            src={`/static/about/${region}.jpg`}
          />
        </div>

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
          .about-photo {
            width: 30%;
            border-radius: 2em;
          }
          .about-pic-description {
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap;
            align-items: flex-start;
          }
          @media screen and (max-width: 1400px) {
            .about-paragraph {
              width: 80%;
            }
          }

          @media screen and (max-width: 600px) {
            .about-paragraph,
            h1 {
              width: 100%;
              text-align: center;
            }
            .about-photo {
              width: 50%;
            }
            .about-pic-description {
              flex-direction: column;
              align-items: center;
            }
            .about-paragraph {
              font-size: 1rem;
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
          .favourite-technologies-list {
            width: fit-content;
          }
        `}
      </style>
    </>
  );
};

export default withTranslation("About")(About);
