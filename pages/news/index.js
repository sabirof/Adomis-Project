import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { createClient } from 'contentful';
import Link from 'next/link';

const NewsPage = ({ posts }) => {
  const { t } = useTranslation('common');

  return (
    <div className="container mx-auto py-20">
      <h2 className="text-3xl font-bold text-center mb-8">{t('news.title')}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post) => (
          <Link key={post.sys.id} href={`/news/${post.fields.slug}`} passHref>
            <div className="bg-white p-6 rounded-lg shadow-md cursor-pointer">
              <h3 className="text-xl font-bold mb-4">{post.fields.title}</h3>
              <p>{post.fields.excerpt}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export const getStaticProps = async ({ locale }) => {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  });

  try {
    const response = await client.getEntries({ content_type: 'post' }); // Keep the content type as 'post'
    return {
      props: {
        ...(await serverSideTranslations(locale ?? 'en', ['common'])),
        posts: response.items,
        revalidate: 60,
      },
    };
  } catch (error) {
    console.error('Error fetching news:', error);
    return {
      props: {
        ...(await serverSideTranslations(locale ?? 'en', ['common'])),
        posts: [],
      },
    };
  }
};

export default NewsPage;
