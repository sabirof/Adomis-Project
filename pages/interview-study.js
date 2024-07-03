import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import Link from 'next/link';

const InterviewStudyPage = () => {
  const { t } = useTranslation('project');

  return (
    <>
      <div className="text-center py-8">
        <h2 className="text-3xl text-black font-bold">{t('interviewStudyTitle')}</h2>
        <p>{t('interviewStudyDescription')}</p>
        <Link href="/interview-details" passHref>
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

export default InterviewStudyPage;
