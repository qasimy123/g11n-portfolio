import App from 'next/app'
import { appWithTranslation } from '../src/services/i18n'

const MyApp = ({ Component, pageProps }) => <Component {...pageProps} />

MyApp.getInitialProps = async (appContext) => ({ ...await App.getInitialProps(appContext) })

export default appWithTranslation(MyApp)