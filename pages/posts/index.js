// pages/posts/index.js
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import PostCard from '@/components/posts/PostCard';
import { client } from '@/lib/contentful/client';

const Posts = ({ posts }) => {
  // eslint-disable-next-line no-unused-vars
  const { t } = useTranslation('common');

  return (
    
      <section className='section'>
        <div className='container'>
          
          <ul className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 sm:gap-10'>
            {posts.map((post) => (
              <PostCard key={post.fields.slug} post={post} />
            ))}
          </ul>
        </div>
      </section>
    
  );
};

export const getStaticProps = async ({ locale }) => {
  const response = await client.getEntries({ content_type: 'post' });

  return {
    props: {
      ...(await serverSideTranslations(locale ?? 'en', ['common'])),
      posts: response.items,
    },
    revalidate: 60,
  };
};

export default Posts;
