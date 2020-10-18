import { withTranslation } from "../services/i18n";
import theme from "../../styles/theme";
import { extractLanguageRegion } from "../util";

const Hero = ({ t, i18n }) => {
  const [language, region] = extractLanguageRegion(i18n.language);
  const currTheme = theme[region];
  const dir = i18n.dir(language);

  return (
    <div className={"hero"}>
      <div className={"text-container"}>
        <h1 className="title">{t("welcome_title")}</h1>
        <p className="description">{t("description")}</p>
      </div>
      <div dir={dir} className={"bitmoji"}></div>

      <style jsx>{`
        .hero {
          padding: 10em;
          width: 100%;
          height: 100vh;
          display: flex;
          align-items: center;
        }

        .text-container {
          z-index: 2;
          background: white;
          padding: 2em;
          border-radius: 3em;
          box-shadow: -8px 10px 44px -21px rgba(0, 0, 0, 0.59);
        }
        .title {
          font-size: 5rem;
          color: ${currTheme.colors.text};
          margin: 0;
          line-height: 1.15;
        }

        .description {
          color: ${currTheme.colors.text};
        }

        .bitmoji {
          z-index: 1;
          width: 400px;
          position: absolute;
          top: 50%;
          background-image: url("${`/static/bitmoji/${region}/hey.png`}");
          height: 100%;
          background-repeat: no-repeat;
          col
          display: block;
          box-sizing: border-box;
        }
        

        @media screen and (max-width: 1750px) {
          .bitmoji {
            width: 500px;
            position: absolute;
            top: 50%;
          }
        }
        @media screen and (max-width: 1500px) {
          
          .bitmoji {
            width: 400px;
          }
        }
        @media screen and (max-width: 1460px) {
          .hero {
            padding:  6rem 6rem 1rem 6rem;
          }
          .bitmoji {
            width: 400px;
            position: absolute;
            top: 60%;
          }
        }
        @media screen and (max-width: 1200px) {
          .hero {
            flex-direction: column;

          }
          .bitmoji {
            width: 300px;
            background-image: url("${`/static/bitmoji/${region}/hey_small.png`}");
            position: static;
          }
        }
        .bitmoji[dir="rtl"] {
          left: 0;
          transform: scaleX(-1);
        }
        .bitmoji[dir="ltr"] {
          right:0;
        }

        .description {
          line-height: 1.5;
          font-size: 1.5rem;
          margin-left: 0.2em;
        }
        @media screen and (max-width: 600px) {
          .hero {
            padding: 2rem;
            height: 60vh;
          }
          .bitmoji {
            display: none;
          }
          .title {
            font-size: 3em;
            text-align: center;
          }

          .description {
            font-size: 1em;
            text-align: center;
          }
          .hero {
            width: 100%;
          }
        }
      `}</style>
    </div>
  );
};

export default withTranslation("Hero")(Hero);
