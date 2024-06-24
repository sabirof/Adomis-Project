import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import Image from 'next/image';

const LanguageSwitcher = () => {
  const router = useRouter();
  const { i18n } = useTranslation();

  const changeLanguage = (language) => {
    router.push(router.asPath, undefined, { locale: language });
  };

  return (
    <div className="flex space-x-2">
      <button onClick={() => changeLanguage('en')} disabled={i18n.language === 'en'}>
        <Image src="/images/en.png" alt="English flag" width={28} height={16} />
      </button>
      <button onClick={() => changeLanguage('de')} disabled={i18n.language === 'de'}>
        <Image src="/images/de.png" alt="German flag" width={24} height={16} />
      </button>
    </div>
  );
};

export default LanguageSwitcher;
