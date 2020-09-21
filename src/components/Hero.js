import { withTranslation } from "../services/i18n";

const Hero = ({ t }) => (
  <div className={"hero"}>
    <h1 className="title">{t("welcome_title")}</h1>
    <p className="description">{t("description")}</p>

    <style jsx>{`
      .hero {
        width: 80%;
        padding: 1em;
      }

      .title a {
        color: #0070f3;
        text-decoration: none;
      }

      .title a:hover,
      .title a:focus,
      .title a:active {
        text-decoration: underline;
      }

      .title {
        font-size: 5rem;
        color: #fff;
        margin: 0;
        line-height: 1.15;
      }

      .title,
      .description {
        text-align: center;
      }

      .description {
        line-height: 1.5;
        font-size: 1.5rem;
      }
      @media screen and (max-width: 600px) {
        .title {
          font-size: 4em;
        }
      }
    `}</style>
  </div>
);

export default withTranslation("Hero")(Hero);
