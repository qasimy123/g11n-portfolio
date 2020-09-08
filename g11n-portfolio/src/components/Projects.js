import { withTranslation } from '../services/i18n'

const Projects = ({ t }) => (
  <div>
    <h1>{t('projects_title')}</h1>
  </div>
)

export default withTranslation('Projects')(Projects)