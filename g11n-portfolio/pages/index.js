import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { withTranslation } from '../src/services/i18n'
import { Hero, About, Blogs, Projects, LanguageChanger } from '../src/components'

function Home({ t }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>{t('app_title')}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>

        <Hero />
        <About />
        <Projects />
        <Blogs />

      </main>

      <footer className={styles.footer}>
        <p>{t('footer_made_by')}</p>

      </footer>
    </div>
  )
}

export default withTranslation('home')(Home)