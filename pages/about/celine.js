import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Image from 'next/image';

const Celine = () => {
  const { t } = useTranslation('about');

  return (
    <div className="container mx-auto py-20">
      <h2 className="text-3xl text-center font-bold mb-12">{t('teamMembers.celineVallender.name')}</h2>
      <div className="flex flex-col items-center">
        <Image
          src="/images/celine.jpg"
          alt={t('teamMembers.celine')}
          width={200}
          height={200}
          className="rounded-full mb-8"
        />
        <p className="text-lg text-gray-700 max-w-2xl text-center">
  {t('teamMembers.celineVallender.description')}
</p>

      </div>
    </div>
  );
};

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale ?? 'en', ['common', 'about'])),
    },
  };
}

export default Celine;
