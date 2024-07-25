import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import Link from 'next/link';

const ProjectPage = () => {
  const { t } = useTranslation('project');

  return (
    <>
      <div className="text-center py-40">
        <h2 className="text-3xl text-black font-bold">{t('title')}</h2>
        <p className="text-lg text-gray-700 mt-4">{t('description')}</p>
      </div>
      <section className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 p-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4">{t('interviewStudyTitle')}</h2>
          <p className="text-gray-700 mb-4">{t('interviewStudyDescription')}</p>
          <Link href="/project/interview-details" className="text-blue-500 hover:underline">
            {t('readMore')}
          </Link>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4">{t('surveyStudiesTitle')}</h2>
          <p className="text-gray-700 mb-4">{t('surveyStudiesDescription')}</p>
          <Link href="/project/survey-details" className="text-blue-500 hover:underline">
            {t('readMore')}
          </Link>
        </div>
      </section>
    </>
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

export default ProjectPage;
