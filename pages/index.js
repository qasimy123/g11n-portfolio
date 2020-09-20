import Head from "next/head";
import { withTranslation } from "../src/services/i18n";
import { Hero, About, Blogs, Projects, Menu } from "../src/components";
import theme from "../styles/theme";
function Home({ t, MediumRssFeed, i18n }) {
  const currTheme = theme[i18n.language.split("-").slice(-1)[0].toLowerCase()];
  return (
    <>
      <div className={"container"}>
        <Head>
          <title>{t("app_title")}</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Menu />
        <main className={"main"}>
          <Hero />
          <About />
          <Projects />
          <Blogs MediumRssFeed={MediumRssFeed} />
        </main>

        <footer className={"footer"}>
          <p>{t("footer_made_by")}</p>
        </footer>
      </div>
      <style jsx global>{`
        .container {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          background-color: ${currTheme.colors.background};
        }

        .main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        .footer {
          width: 100%;
          height: 100px;
          background: ${currTheme.colors.secondaryColor};
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .footer img {
          margin-left: 0.5rem;
        }

        .footer a {
          display: flex;
          justify-content: center;
          align-items: center;
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
          text-align: left;
          color: inherit;
          text-decoration: none;
          
          border-radius: 0.5em;
          background: white;
          
          color: ${currTheme.colors.secondaryColor};
        }

        .card h3 {
          margin: 0 0 1rem 0;
          font-size: 1.5rem;k
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
  const rssToJsonApi = `https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2F%40q.invisible`;
  const res = await fetch(rssToJsonApi);
  const MediumRssFeed = await res.json();
  return {
    MediumRssFeed,
  };
};
export default withTranslation("home")(Home);
