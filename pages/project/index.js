import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import Link from 'next/link';

const ProjectPage = () => {
  const { t } = useTranslation('project');

  return (
    <div className="container mx-auto py-20 px-6">
      <div className="text-center max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-4xl text-black font-bold mb-6">{t('title')}</h2>
        <p className="text-xl text-gray-700 leading-relaxed">{t('description')}</p>
      </div>
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
        <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
          <h3 className="text-2xl font-semibold mb-4">{t('interviewStudyTitle')}</h3>
          <p className="text-gray-700 mb-6">{t('interviewStudyDescription').replace("Qualitative Interviewstudie, die in der ersten Phase des Forschungsprojekts durchgeführt wird.", "")}</p>
          <Link href="/project/interview-details" passHref>
            <button className="bg-accent text-gray-600 px-4 py-2 rounded hover:bg-green-400 transition-colors duration-200">
              {t('readMore')}
            </button>
          </Link>
        </div>
        <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
          <h3 className="text-2xl font-semibold mb-4">{t('surveyStudiesTitle')}</h3>
          <p className="text-gray-700 mb-6">{t('surveyStudiesDescription').replace("Quantitative Surveybefragung, die in der zweiten Phase des Forschungsprojekts durchgeführt wird.", "")}</p>
          <Link href="/project/survey-details" passHref>
            <button className="bg-accent text-gray-600 px-4 py-2 rounded hover:bg-green-400 transition-colors duration-200">
              {t('readMore')}
            </button>
          </Link>
        </div>
      </section>
    </div>
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
