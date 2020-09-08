import { withTranslation } from '../services/i18n'

const About = ({ t }) => (
  <div>
    <h1>{t('about_title')}</h1>
  </div>
)

export default withTranslation('About')(About)