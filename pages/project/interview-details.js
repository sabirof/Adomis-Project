import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';

const InterviewDetailsPage = () => {
  const { t } = useTranslation('project');

  return (
    <div className="container mx-auto p-8">
      <h2 className="text-3xl text-black font-bold mb-4">{t('interviewStudyTitle')}</h2>
      <p className="text-gray-700 text-lg">{t('interviewStudyDescription')}</p>
      {/* Add more detailed text here */}
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

export default InterviewDetailsPage;
