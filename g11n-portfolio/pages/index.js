import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { withTranslation } from '../services/i18n'

function Home({t}) {
  return (
    <div className={styles.container}>
      <Head>
        <title>{t('app_title')}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          {t('welcome_title')}
        </h1>

        <p className={styles.description}>
          {t('description')}
        </p>

        <div className={styles.grid}>
          <h1>sdds</h1>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}

export default withTranslation('home')(Home)