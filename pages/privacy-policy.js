import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';

export default function PrivacyPolicy() {
  const { t } = useTranslation('privacyPolicy');

  return (
    <div className="bg-white text-gray-700 p-10">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">{t('title')}</h1>
        
        <h2 className="text-xl font-semibold mb-4">{t('introductionTitle')}</h2>
        <p className="mb-4">
          {t('introductionDescription')}
        </p>
        
        <h2 className="text-xl font-semibold mb-4">{t('dataCollectionTitle')}</h2>
        <p className="mb-4">
          {t('dataCollectionDescription')}
        </p>
        
        <h2 className="text-xl font-semibold mb-4">{t('dataUseTitle')}</h2>
        <p className="mb-4">
          {t('dataUseDescription')}
        </p>
        
        <h2 className="text-xl font-semibold mb-4">{t('dataSharingTitle')}</h2>
        <p className="mb-4">
          {t('dataSharingDescription')}
        </p>
        
        {/* Continue with other sections as needed... */}
        
        <h2 className="text-xl font-semibold mb-4">{t('yourRightsTitle')}</h2>
        <p className="mb-4">
          {t('yourRightsDescription')}
        </p>

        <h2 className="text-xl font-semibold mb-4">{t('contactInformationTitle')}</h2>
        <p className="mb-4">
          {t('contactInformationDescription')}
        </p>
      </div>
    </div>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'privacyPolicy'])),
    },
    revalidate: 10,
  };
}
