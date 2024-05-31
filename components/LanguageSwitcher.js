import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';

const LanguageSwitcher = () => {
  const router = useRouter();
  const { i18n } = useTranslation();

  const changeLanguage = (language) => {
    router.push(router.asPath, undefined, { locale: language });
  };

  return (
    <div>
      <button onClick={() => changeLanguage('en')} disabled={i18n.language === 'en'}>
        English
      </button>
      <button onClick={() => changeLanguage('de')} disabled={i18n.language === 'de'}>
        Deutsch
      </button>
    </div>
  );
};

export default LanguageSwitcher;
