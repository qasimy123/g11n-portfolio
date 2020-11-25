import Head from "next/head";
import Lottie from "react-lottie";
import { useState, useEffect } from "react";
import { withTranslation } from "../src/services/i18n";
import { Hero, About, Blogs, Projects, Menu } from "../src/components";
import { extractLanguageRegion } from "../src/util";
import theme from "../styles/theme";
import caBackgroundAnimationData from "../src/lotties/ca.json";
import pkBackgroundAnimationData from "../src/lotties/pk.json";

function Home({ t, MediumRssFeed, i18n }) {
  const [language, region] = extractLanguageRegion(i18n.language);
  const currTheme = theme[region];
  const dir = i18n.dir(language);
  const [animationData, setAnimationData] = useState(caBackgroundAnimationData);
  const [animationOptions, setAnimationOptions] = useState(false);

  useEffect(() => {
    const opts = {
      ca: caBackgroundAnimationData,
      pk: pkBackgroundAnimationData,
    };
    setAnimationData(opts[region]);
  }, [region]);
  useEffect(() => {
    const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: animationData,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice",
      },
    };

    setAnimationOptions(defaultOptions);
  }, [animationData]);
  return (
    <>
      <div lang={language} dir={dir} className={"container"}>
        <Head>
          <title>{t("app_title")}</title>
          <link rel="icon" href="/favicon.ico" />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon-16x16.png"
          />
          <link rel="manifest" href="/site.webmanifest" />
        </Head>
        <div className={"menu-hero"}>
          <Menu />
          <Hero />
          <div className={"background"}>
            {animationOptions && (
              <Lottie
                options={animationOptions}
                isClickToPauseDisabled={true}
              />
            )}
          </div>
        </div>
        <main className={"main"}>
          <About />
          <Projects />
          <Blogs MediumRssFeed={MediumRssFeed} />
        </main>

        <footer className={"footer"}>
          <p>{t("footer_made_by")}</p>
          <a href="https://www.vecteezy.com/free-vector/landscape">
            {t("mountain_landscape_vector")}
          </a>
          <a href="https://www.vecteezy.com/free-vector/rice-field">
            {t("rice_field_vector")}
          </a>
        </footer>
      </div>
      <style jsx global>{`
        .container {
          direction: ${dir};
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          background-color: ${currTheme.colors.background};
        }
        .menu-hero {
          display: flex;
          flex-direction: column;
          width: 100%;
          position: relative;
        }
        .background {
          color: #999999;
          position: absolute;
          top: 0;
          left: 0;
          overflow: hidden;
          width: 100%;
          height: 100%;
          ${region === "pk" &&
          `
          background-image:url("/static/pk_background.svg");
          background-repeat: no-repeat;
          background-size: cover;
          `};
        }
        .main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          max-width: 1440px;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        .footer {
          width: 100%;
          background: ${currTheme.colors.secondaryColor};
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          padding: 2em;
        }

        .footer img {
          margin-left: 0.5rem;
        }

        .footer a,
        .footer p {
          display: flex;
          justify-content: center;
          align-items: center;
          color: ${currTheme.colors.primaryColor};
        }
        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;
          max-width: 800px;
          margin-top: 3rem;
        }

        .card {
          flex-basis: 45%;
          padding: 1.5rem;
          color: inherit;
          text-decoration: none;
          text-align: left;
          border-radius: 0.5em;
          background: ${currTheme.colors.white};

          color: ${currTheme.colors.secondaryColor};
        }

        .card[dir="rtl"] {
          text-align: right;
        }

        .card h3 {
          margin: 0 0 1rem 0;
          font-size: 1.5rem;
        }

        .card p {
          margin: 0;
          font-size: 1.25rem;
          line-height: 1.5;
        }

        .logo {
          height: 1em;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
      `}</style>
    </>
  );
}
Home.getInitialProps = async () => {
  const username = "@qasim-khawaja";
  const rssFeedUrl = `https://medium.com/feed/${username}`;
  const rssToJsonApi = `https://api.rss2json.com/v1/api.json?rss_url=${rssFeedUrl}`;
  const res = await fetch(rssToJsonApi);
  const MediumRssFeed = await res.json();
  return {
    MediumRssFeed,
  };
};
export default withTranslation("home")(Home);
