import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import { createClient } from 'contentful';
import Image from 'next/image';
import Link from 'next/link';

const HomePage = ({ initialPosts }) => {
  const { t } = useTranslation('common');

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center flex flex-col justify-center items-center mb-8">
          <Image src="/images/logo2.png" alt="Logo" className="h-40 w-50 mb-4" width={280} height={280} />
          <p>{t('Your logo\'s tagline or additional text here')}</p>
        </div>
        <div className="text-center p-8 space-y-4 relative">
          <h3 className="text-xl font-bold text-green-400 mb-4">{t('Latest Blog Posts')}</h3>
          <div className="blog-posts-container">
            {initialPosts.map(post => (
              <div key={post.sys.id} className="blog-post-preview">
                <Link href={`/news/${post.fields.slug}`} passHref legacyBehavior>
                  <div className="block overflow-hidden">
                    <Image
                      src={post.fields.coverImage ? `https:${post.fields.coverImage.fields.file.url}` : '/images/default-image.png'}
                      alt={post.fields.title}
                      width={300}
                      height={200}
                      className="object-cover"
                    />
                    <div className="blog-post-preview-content">
                      <h4 className="blog-post-title">{post.fields.title}</h4>
                      <p className="blog-post-excerpt">{post.fields.excerpt}</p>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
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
    const res = await client.getEntries({ content_type: 'post', limit: 3, order: '-sys.createdAt' });
    return {
      props: {
        ...(await serverSideTranslations(locale ?? 'en', ['common'])),
        initialPosts: res.items.map(item => ({
          sys: { id: item.sys.id },
          fields: {
            title: item.fields.title,
            excerpt: item.fields.excerpt,
            slug: item.fields.slug,
            coverImage: item.fields.coverImage || null
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
