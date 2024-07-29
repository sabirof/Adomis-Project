import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import Link from 'next/link';

const ProjectPage = () => {
  const { t } = useTranslation('project');

  return (
    <>
      <div className="container mx-auto py-20">
        <div className="text-center max-w-4xl mx-auto px-4 py-10">
          <h2 className="text-4xl text-black font-bold mb-6">{t('title')}</h2>
          <p className="text-xl text-gray-700 leading-relaxed">{t('description')}</p>
        </div>
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6">
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
      </div>
    </>
  );
};

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale ?? 'en', ['project', 'common'])),
    },
    revalidate: 10,
  };
}

export default ProjectPage;
