import { withTranslation } from '../services/i18n'
import LanguageChanger from './LanguageChanger'

const Hero = ({ t }) => (
  <div>
    <h1 className="header">
      {t('welcome_title')}
    </h1>
    <p>
      {t('description')}
    </p>

    <LanguageChanger />
    <style jsx>{`
        .header {
          font-size: 5em;
        }
      `}</style>
  </div>
)

export default withTranslation('Hero')(Hero)