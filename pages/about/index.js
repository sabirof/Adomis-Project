import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Link from 'next/link';
import Image from 'next/image';

const AboutPage = () => {
  const { t } = useTranslation('about');

  const teamMembers = [
    {
      name: t('teamMembers.profMirjam'),
      role: t('teamMembers.profMirjamRole'),
      link: '/about/mirjam',
    },
    {
      name: t('teamMembers.drEsto'),
      role: t('teamMembers.drEstoRole'),
      link: '/about/esto',
    },
    {
      name: t('teamMembers.lea'),
      role: t('teamMembers.leaRole'),
      link: '/about/lea',
    },
    {
      name: t('teamMembers.selin'),
      role: t('teamMembers.selinRole'),
      link: '/about/selin',
    },
    {
      name: t('teamMembers.celine'),
      role: t('teamMembers.celineRole'),
      link: '/about/celine',
    },
  ];

  return (
    <div className="about-container py-40">
  <div className="about-content container mx-auto px-4">
    <h2 className="about-title text-5xl text-center font-bold mb-12">{t('teamTitle')}</h2>
    <div className="about-description text-center text-lg mb-12 max-w-3xl mx-auto">
          <p>{t('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed euismod nisi porta lorem mollis aliquam. Maecenas pharetra convallis posuere morbi. Ornare suspendisse sed nisi lacus sed viverra tellus in. Hac habitasse platea dictumst quisque sagittis purus sit amet volutpat. Dui vivamus arcu felis bibendum ut tristique et. Augue neque gravida in fermentum et sollicitudin ac orci phasellus. Malesuada nunc vel risus commodo viverra maecenas. Egestas fringilla phasellus faucibus scelerisque eleifend donec pretium. Pharetra magna ac placerat vestibulum.')}</p>
          </div>
    <div className="about-team-image flex justify-center mb-12">
      <Image
        src="/images/team.jpg"
        alt="Group Photo"
        width={600}
        height={500}
        objectFit="contain"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
       
      />
    </div>
    <div className="team-grid grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-5 gap-4 justify-items-center px-4">
    {teamMembers.map((member, index) => (
        <div
          className="team-grid-container text-center bg-accent hover:bg-green-400 rounded-lg p-6 border border-white w-full text-black"
          key={index}
        >
          <Link href={member.link}>
            <div className="team-member-card block">
              <h3 className="team-member-name text-xl font-semibold">{member.name}</h3>
              <p className="team member role text-gray-500">{member.role}</p>
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
      ...(await serverSideTranslations(locale ?? 'en', ['common', 'about'])),
    },
    revalidate: 10,
  };
}

export default AboutPage;