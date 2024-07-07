import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Image from 'next/image';

const Esto = () => {
  const { t } = useTranslation('about');

  return (
    <div className="container mx-auto py-20">
      <h2 className="text-3xl text-center font-bold mb-12">{t('teamMembers.celine')}</h2>
      <div className="flex flex-col items-center">
        <Image
          src="/images/celine.jpg"
          alt={t('teamMembers.celine')}
          width={200}
          height={200}
          className="rounded-full mb-8"
        />
        <p className="text-lg text-gray-700 max-w-2xl text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac leo nunc. Vestibulum et mauris vel ante finibus maximus nec ut leo. Integer consectetur lorem nunc, a condimentum massa posuere et. Proin ut dolor sed felis commodo bibendum. Ut faucibus dui quis lorem fermentum, a volutpat elit convallis. Proin at pharetra tortor.
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

export default Esto;
