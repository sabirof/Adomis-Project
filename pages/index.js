import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import Carousel from '../components/Carousel';
import { createClient } from 'contentful';
import Image from 'next/image';


const HomePage = ({ initialPosts }) => {
  const { t, i18n } = useTranslation('common');

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2">
        <div className="bg-white text-center flex flex-col justify-center items-center p-8">
          <Image src="/images/logo2.png" alt="Logo" className="h-40 w-50 mb-4" height={100} width={200}/>
          <p>{t('Your logo\'s tagline or additional text here')}</p>
        </div>
        <div className="bg-purple-900 text-white text-center p-8 space-y-4 relative">
          <h3 className="text-xl font-bold text-green-400">{t('Latest Blog Posts')}</h3>
          <Carousel posts={initialPosts} locale={i18n.language} />
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
        initialPosts: res.items.slice(0, 4).map(item => ({
          sys: { id: item.sys.id },
          fields: {
            title: item.fields.title,
            excerpt: item.fields.excerpt,
            slug: item.fields.slug,
            date: item.sys.createdAt, // Ensure date field is available
            tags: item.fields.tags || [],
            readTime: item.fields.readTime || '5' // default to 5 min if not provided
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
 