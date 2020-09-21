import { withTranslation } from "../services/i18n";
import Section from "./Section";

const About = ({ t, i18n }) => {
  const [language] = i18n.language.split("-").map((item) => item.toLowerCase());
  const dir = i18n.dir(language);
  return (
    <>
      <Section>
        <h1>{t("about_title")}</h1>
        <p className={"about-paragraph"}>
          {t("about_paragraph")
            .split("\n")
            .map((item, i) => {
              return <p key={i}>{item}</p>;
            })}
        </p>

        <p>{t("about_favourite_technologies")}</p>
        <ul className={"favourite-technoligies-list card"}>
          {t("about_favourite_technologies_list", { returnObjects: true }).map(
            (item) => (
              <li>{item}</li>
            )
          )}
        </ul>

        <img
          dir={dir}
          className={"bitmoji"}
          src={`https://sdk.bitmoji.com/render/panel/8b80b4d8-32db-4668-8490-9b1227b0754b-3f3fdbec-d78d-441b-8530-a6c5f8c15014-v1.png?transparent=1&palette=1&width=620`}
        ></img>
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

          .bitmoji[dir="rtl"] {
            left: 0;
            transform: scaleX(-1);
          }

          .favourite-technoligies-list {
            width: fit-content;
          }
        `}
      </style>
    </>
  );
};

export default withTranslation("About")(About);
