import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Image from 'next/image';

const AboutPage = () => {
  const { t } = useTranslation('about');

  const teamMembers = [
    {
      name: t('teamMembers.profMirjam'),
      role: t('teamMembers.profMirjamRole'),
      imgSrc: '/images/person.png',
    },
    {
      name: t('teamMembers.drEsto'),
      role: t('teamMembers.drEstoRole'),
      imgSrc: '/images/person.png',
    },
    {
      name: t('teamMembers.lea'),
      role: t('teamMembers.leaRole'),
      imgSrc: '/images/person.png',
    },
    {
      name: t('teamMembers.selin'),
      role: t('teamMembers.selinRole'),
      imgSrc: '/images/person.png',
    },
    {
      name: t('teamMembers.celine'),
      role: t('teamMembers.celineRole'),
      imgSrc: '/images/person.png',
    },
    {
      name: t('teamMembers.tbd'),
      role: t('teamMembers.tbdRole'),
      imgSrc: '/images/person.png',
    },
  ];

  return (
    <div className='bg-primary py-20 text-white'>
      <h2 className='text-5xl text-center font-bold mb-12'>
        {t('teamTitle')}
      </h2>
      <div className='grid grid-cols-3 gap-10 justify-items-center px-20'>
        {teamMembers.map((member, index) => (
          <div className='text-center bg-accent rounded-lg p-6' key={index}>
            <Image
              src={member.imgSrc}
              alt={member.name}
              width={200}
              height={200}
              className='rounded-full mb-4 w-48 h-48 object-cover'
              priority={index === 0} // Only set priority for the first image or above the fold
            />
            <h3 className='text-xl font-semibold'>{member.name}</h3>
            <p className='text-black'>{member.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale ?? 'en', ['common', 'about'])),
    },
    revalidate: 10,
  };
}

export default AboutPage;
