import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';

const SurveyDetailsPage = () => {
  const { t } = useTranslation('project');

  return (
    <div className="container mx-auto py-20">
      <h2 className="text-3xl text-black font-bold mb-8">{t('surveyDetailsTitle')}</h2>
      <p>{t('surveyDetailsContent')}</p>
    </div>
  );
};

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['project'])),
    },
    revalidate: 10,
  };
}

export default SurveyDetailsPage;
