import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { createClient } from 'contentful';
import Image from 'next/image';
import Link from 'next/link';

const NewsPage = ({ posts }) => {
  const { t } = useTranslation('common');

  return (
    <div className="container mx-auto py-20">
      <h2 className="text-3xl font-bold text-center mb-8">{t('news.title')}</h2>
      <div className="blog-posts-container">
        {posts.map((post) => (
          <Link
            key={post.sys.id}
            href={`/news/${post.fields.slug}`}
            passHref
            legacyBehavior>
            <div className="block overflow-hidden blog-post-preview">
              <Image
                src={post.fields.coverImage ? `https:${post.fields.coverImage.fields.file.url}` : '/images/default-image.png'}
                alt={post.fields.title}
                width={300}
                height={200}
                className="object-cover"
              />
              <div className="blog-post-preview-content">
                <h3 className="blog-post-title">{post.fields.title}</h3>
                <p className="blog-post-excerpt">{post.fields.excerpt}</p>
              </div>
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
