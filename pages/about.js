import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import Layout from '../components/layout';

export default function AboutPage() {
  const { t } = useTranslation('common');
  const teamMembers = [
    {
      name: t('teamMembers.profMirjam'),
      role: t('about.teamRole'),
      imgSrc: '/images/profile1.png',
    },
    {
      name: t('teamMembers.drEsto'),
      role: t('about.teamRole'),
      imgSrc: '/images/profile2.png',
    },
    {
      name: t('teamMembers.lea'),
      role: t('about.teamRole'),
      imgSrc: '/images/profile3.png',
    },
    {
      name: t('teamMembers.selin'),
      role: t('about.teamRole'),
      imgSrc: '/images/profile4.png',
    },
    {
      name: t('teamMembers.celine'),
      role: t('about.teamRole'),
      imgSrc: '/images/profile5.png',
    },
    {
      name: t('teamMembers.tbd'),
      role: t('about.teamRole'),
      imgSrc: '/images/profile6.png',
    },
  ];

  return (
    
      <div className='bg-primary py-20 text-white'>
        <h2 className='text-5xl text-center font-bold mb-12'>
          {t('about.teamTitle')}
        </h2>
        <div className='grid grid-cols-3 gap-10 justify-items-center px-20'>
          {teamMembers.map((member, index) => (
            <div className='text-center bg-accent rounded-lg p-6' key={index}>
              <img
                src={member.imgSrc}
                alt={member.name}
                className='rounded-full mb-4 w-48 h-48 object-cover'
              />
              <h3 className='text-xl font-semibold'>{member.name}</h3>
              <p className='text-black'>{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale ?? 'en', ['common'])),
    },
    revalidate: 1,
  };
}
