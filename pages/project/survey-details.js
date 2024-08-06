import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';

const SurveyDetailsPage = () => {
  const { t } = useTranslation('project');

  return (
    <div className="container mx-auto py-20 px-6">
      <div className="bg-white p-8 rounded-lg shadow-md max-w-4xl mx-auto">
        <h2 className="text-3xl text-black text-center font-bold mb-4">{t('surveyStudiesTitle')}</h2>
        
        <p className="text-lg text-center text-gray-700">{t('surveyStudyContent').replace("Postdoktorand*innen", "Postdoktorand_innen").replace("Professor*innen", "Professor_innen").replace("Diskriminierungserfahrungen und Einstellungen marginalisierter Forschender", "Diskriminierungserfahrungen und Einstellungen marginalisierter Forscher_innen")}</p>
      </div>
    </div>
  );
};

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['project', 'common'])),
    },
    revalidate: 10,
  };
}

export default SurveyDetailsPage;
