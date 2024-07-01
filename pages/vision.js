// pages/vision.js
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const Vision = () => {
  const { t } = useTranslation('vision');

  return (
    <div className="max-w-4xl mx-auto py-20">
      <h2 className="text-3xl font-bold text-center mb-8">{t('title')}</h2>
      <p>{t('content')}</p>
    </div>
  );
};

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale ?? 'en', ['common', 'vision'])),
    },
    revalidate: 10,
  };
}

export default Vision;
