import Head from "next/head";
import styles from "../styles/Home.module.css";
import { withTranslation } from "../src/services/i18n";
import { Hero, About, Blogs, Projects, Menu } from "../src/components";

function Home({ t, MediumRssFeed }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>{t("app_title")}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Menu />
      <main className={styles.main}>
        <Hero />
        <About />
        <Projects />
        <Blogs MediumRssFeed={MediumRssFeed} />
      </main>

      <footer className={styles.footer}>
        <p>{t("footer_made_by")}</p>
      </footer>
    </div>
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
