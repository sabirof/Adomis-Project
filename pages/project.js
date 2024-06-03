import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';

const ProjectPage = () => {
  const { t } = useTranslation('project');

  return (
    <>
      <div className="text-center py-8">
        <h2 className="text-3xl text-black font-bold">{t('title')}</h2>
      </div>
      <section className="grid grid-cols-3 gap-4 p-20">
        <div className="bg-accent p-6">
          <h2 className="text-green-400 font-bold text-lg mb-4">{t('contentTitle')}</h2>
          <p className="text-green-400">{t('contentDescription')}</p>
        </div>
        <div className="bg-purple-900 p-6">
          <h2 className="text-green-400 font-bold text-lg mb-4">{t('methodologyTitle')}</h2>
          <p className="text-green-400">{t('methodologyDescription')}</p>
        </div>
        <div className="bg-purple-900 p-6">
          <h2 className="text-green-400 font-bold text-lg mb-4">{t('findingsTitle')}</h2>
          <p className="text-green-400">{t('findingsDescription')}</p>
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
    revalidate: 10
  };
}

export default ProjectPage;
