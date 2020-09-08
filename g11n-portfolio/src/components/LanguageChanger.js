import { useTranslation } from '../services/i18n'

const LanguageChanger = () => {
  const {t} = useTranslation("Hero");
  return (<div>
    <button>{t('language_changer_button')}</button>
  </div>)
}

export default LanguageChanger