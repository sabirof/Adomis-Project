import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';

const ProjectPage = () => {
  const { t } = useTranslation('common');

  return (
    <>
      <div className="text-center py-8">
        <h2 className="text-3xl text-black font-bold">{t('project.title')}</h2>
      </div>
      <section className="grid grid-cols-3 gap-4 p-20">
        <div className="bg-purple-900 p-6">
          <h2 className="text-green-400 font-bold text-lg mb-4">{t('project.contentTitle')}</h2>
          <p className="text-green-400">{t('project.contentDescription')}</p>
        </div>
        <div className="bg-purple-900 p-6">
          <h2 className="text-green-400 font-bold text-lg mb-4">{t('project.methodologyTitle')}</h2>
          <p className="text-green-400">{t('project.methodologyDescription')}</p>
        </div>
        <div className="bg-purple-900 p-6">
          <h2 className="text-green-400 font-bold text-lg mb-4">{t('project.findingsTitle')}</h2>
          <p className="text-green-400">{t('project.findingsDescription')}</p>
        </div>
      </section>
    </>
  );
};

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
    revalidate: 10
  };
}

export default ProjectPage;
