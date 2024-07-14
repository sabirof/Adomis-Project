import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import { createClient } from 'contentful';
import Image from 'next/image';
import Link from 'next/link';

const HomePage = ({ initialPosts }) => {
  const { t } = useTranslation('common');

  return (
    <section className="py-20 w-full">
      {/* Spacing between navbar and content */}
      <div className="pt-16">
        <div className="w-full max-w-7xl mx-auto">
          {/* Logo and Text Box Section */}
          <div className="w-full flex flex-col items-center md:flex-row md:items-start md:justify-center mb-16 p-8 bg-gray-100 shadow-md rounded-md">
            <div className="flex-none mb-8 md:mb-0 md:mr-8">
              <Image src="/images/logo3.png" alt="Logo" width={300} height={300} className="object-contain" quality={100} />
            </div>
            <div className="flex-1 text-center md:text-left space-y-4">
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6">Title for Lorem Ipsum Text</h1>
              <p className="text-base sm:text-lg md:text-xl text-gray-700 mb-8">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac leo nunc. Vestibulum et mauris vel ante finibus maximus nec ut leo. Integer consectetur lorem nunc, a condimentum massa posuere et. Proin ut dolor sed felis commodo bibendum. Ut faucibus dui quis lorem fermentum, a volutpat elit convallis. Proin at pharetra tortor. In convallis tortor non purus tristique tincidunt. Curabitur venenatis felis eu magna semper, eu varius felis vestibulum. Phasellus in est lacus. Sed mollis velit velit, et dapibus risus tristique at. Nulla at dolor finibus, dictum magna ut, elementum eros. Morbi vulputate nec tortor in malesuada. Vivamus ultrices in mi in posuere. In tempor velit non tortor suscipit, in elementum arcu fringilla. Donec pulvinar ligula eros, ac scelerisque nisi elementum a.
              </p>
              <Link href="/about" passHref>
                <button className="bg-green-400 text-white px-6 py-3 rounded-lg transition duration-200 hover:bg-green-700 focus:outline-none">About Us</button>
              </Link>
            </div>
          </div>

          {/* Blog Posts Section */}
          <div className="text-left p-8 bg-gray-50 shadow-md rounded-md">
  <div className="flex items-center mb-4">
    <h3 className="text-xl font-bold text-green-400 mr-2">{t('Latest Blog Posts')}</h3>
    <Link href="/news" passHref>
      <svg className="w-6 h-6 text-green-400 cursor-pointer hover:text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
      </svg>
    </Link>
  </div>
  <div className="blog-posts-container">
    {initialPosts.map(post => (
      <div key={post.sys.id} className="bg-white rounded-lg shadow-md overflow-hidden blog-post-preview">
        <Link href={`/news/${post.fields.slug}`} passHref>
          <div className="block h-full">
            <div className="relative w-full h-64">
              <Image
                src={post.fields.coverImage ? `https:${post.fields.coverImage.fields.file.url}` : '/images/default-image.png'}
                alt={post.fields.title}
                layout="fill"
                className="object-cover"
              />
            </div>
            <div className="p-4 flex flex-col justify-between h-32 blog-post-preview-content">
              <h4 className="text-lg font-bold mb-2 blog-post-title">{post.fields.title}</h4>
              <p className="text-gray-600 blog-post-excerpt">{post.fields.excerpt}</p>
            </div>
          </div>
        </Link>
      </div>
    ))}
  </div>
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
