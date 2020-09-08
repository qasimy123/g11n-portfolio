import { withTranslation } from '../services/i18n'

const Blogs = ({ t }) => (
  <div>
    <h1>{t('blogs_title')}</h1>
  </div>
)

export default withTranslation('Blogs')(Blogs)