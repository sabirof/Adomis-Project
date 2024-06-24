import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import Carousel from '../components/Carousel';
import { createClient } from 'contentful';
import Image from 'next/image';

const HomePage = ({ initialPosts }) => {
  const { t } = useTranslation('common');

  return (
   
      <section className="py-20">
        <div className="max-w-7xl mx-auto grid grid-cols-2">
          <div className="bg-white text-center flex flex-col justify-center items-center">
            <Image src="/images/logo2.png" alt="Logo" className="h-40 w-50 mb-4" width={280} height={280} />
            <p>{t('Your logo\'s tagline or additional text here')}</p>
          </div>
          <div className="bg-purple-900 text-white text-center p-8 space-y-4 relative">
            <h3 className="text-xl font-bold text-green-400">{t('Latest Blog Posts')}</h3>
            <Carousel posts={initialPosts} />
          </div>
        </div>
      </section>
    
  );
};

export async function getStaticProps({ locale }) {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  });

  try {
    const res = await client.getEntries({ content_type: 'post' });
    return {
      props: {
        ...(await serverSideTranslations(locale ?? 'en', ['common'])),
        initialPosts: res.items.map(item => ({
          sys: { id: item.sys.id },
          fields: {
            title: item.fields.title,
            excerpt: item.fields.excerpt, // Use the appropriate field for description
            slug: item.fields.slug, // Make sure to include the slug field
          }
        }))
      },
      revalidate: 1,
    };
  } catch (error) {
    console.error('Error fetching posts:', error);
    return {
      props: {
        ...(await serverSideTranslations(locale ?? 'en', ['common'])),
        initialPosts: [],
      },
    };
  }
}

export default HomePage;
