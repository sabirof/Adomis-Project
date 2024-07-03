import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import Link from 'next/link';

const SurveyStudiesPage = () => {
  const { t } = useTranslation('project');

  return (
    <>
      <div className="text-center py-8">
        <h2 className="text-3xl text-black font-bold">{t('surveyStudiesTitle')}</h2>
        <p>{t('surveyStudiesDescription')}</p>
        <Link href="/survey-details" passHref>
          <div className="text-blue-500 underline">{t('readMore')}</div>
        </Link>
      </div>
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

export default SurveyStudiesPage;
