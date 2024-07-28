import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Link from 'next/link';
import Image from 'next/image';

const AboutPage = () => {
  const { t } = useTranslation('about');

  const teamMembers = [
    {
      name: t('teamMembers.mirjamFischer.name'),
      role: t('teamMembers.mirjamFischer.role'),
      link: '/about/mirjam',
    },
    {
      name: t('teamMembers.estoMader.name'),
      role: t('teamMembers.estoMader.role'),
      link: '/about/esto',
    },
    {
      name: t('teamMembers.leaLuttenberger.name'),
      role: t('teamMembers.leaLuttenberger.role'),
      link: '/about/lea',
    },
    {
      name: t('teamMembers.selinAkgoz.name'),
      role: t('teamMembers.selinAkgoz.role'),
      link: '/about/selin',
    },
    {
      name: t('teamMembers.celineVallender.name'),
      role: t('teamMembers.celineVallender.role'),
      link: '/about/celine',
    },
  ];

  return (
    <div className="about-container py-40">
      <div className="about-content container mx-auto px-4">
        <h2 className="about-title text-5xl text-center font-bold mb-12">{t('teamTitle')}</h2>
        <div className="about-team-image flex justify-center mb-4">
          <Image
            src="/images/team.jpg"
            alt="Group Photo"
            width={600}
            height={500}
            objectFit="contain"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        <p className="text-center mb-12">{t('groupPictureSubtext')}</p>
        <div className="team-grid grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-5 gap-4 justify-items-center px-4">
          {teamMembers.map((member, index) => (
            <div
              className="team-grid-container text-center bg-accent hover:bg-green-400 rounded-lg p-6 border border-white w-full text-black"
              key={index}
            >
              <Link href={member.link}>
                <div className="team-member-card block">
                  <h3 className="team-member-name text-xl font-semibold">{member.name}</h3>
                  <p className="team-member-role text-gray-500">{member.role}</p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale ?? 'en', ['about', 'common'])),
    },
    revalidate: 10,
  };
}

export default AboutPage;
