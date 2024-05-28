import { useState, useEffect } from 'react'
import { createClient } from 'contentful'
import Link from 'next/link' // Assuming you use Next.js Link for navigation
import Layout from '../components/layout'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'

const HomePage = ({ initialPosts }) => {
  const { t } = useTranslation('common')
  const [posts, setPosts] = useState(initialPosts)
  const [activePost, setActivePost] = useState(null)
  const [currentSlide, setCurrentSlide] = useState(0)

  console.log('🚨 t("hello")', t('hello'))

  // for (const [key, value] of Object.entries(t('navbar'))) {
  //   console.log(`${key}: ${value}`)
  // }

  const handlePostClick = postId => {
    setActivePost(activePost === postId ? null : postId) // Toggle visibility of detailed post content
  }

  const nextSlide = () => {
    setCurrentSlide(prevSlide => (prevSlide + 1) % posts.length)
  }

  const prevSlide = () => {
    setCurrentSlide(prevSlide => (prevSlide - 1 + posts.length) % posts.length)
  }

  return (
    <section className='py-20'>
      <h1>{t('hello')}</h1>
      <div className='max-w-7xl mx-auto grid grid-cols-2'>
        <div className='bg-white text-center flex flex-col justify-center items-center'>
          <img src='/images/logo2.png' alt='Logo' className='h-40 w-50 mb-4' />
          <p>Your logo's tagline or additional text here</p>
        </div>
        <div className='bg-purple-900 text-white text-center p-8 space-y-4 relative'>
          <h3 className='text-xl font-bold text-green-400'>
            Latest Blog Posts
          </h3>
          <div className='overflow-hidden relative'>
            <div
              className='flex transition-transform duration-500 ease-in-out'
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {posts.map(post => (
                <div
                  key={post.sys.id}
                  onClick={() => handlePostClick(post.sys.id)}
                  className='min-w-full flex-shrink-0 bg-white text-black p-4 rounded-lg shadow-md hover:bg-purple-700 cursor-pointer'
                >
                  <h4 className='text-lg font-semibold'>{post.fields.title}</h4>
                  {activePost === post.sys.id && <p>{post.fields.excerpt}</p>}
                </div>
              ))}
            </div>
          </div>
          <button
            onClick={prevSlide}
            className='absolute top-1/2 left-0 transform -translate-y-1/2 bg-purple-700 text-white px-2 py-1 rounded-full'
          >
            &#9664;
          </button>
          <button
            onClick={nextSlide}
            className='absolute top-1/2 right-0 transform -translate-y-1/2 bg-purple-700 text-white px-2 py-1 rounded-full'
          >
            &#9654;
          </button>
        </div>
      </div>
    </section>
  )
}

export async function getStaticProps({ locale }) {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  })

  try {
    const res = await client.getEntries({ content_type: 'post' })
    return {
      props: {
        ...(await serverSideTranslations(locale ?? 'en', ['common'])),
        initialPosts: res.items.map(item => ({
          sys: { id: item.sys.id },
          fields: {
            title: item.fields.title,
            excerpt: item.fields.excerpt, // Use the appropriate field for description
          },
        })),
      },
      revalidate: 1, // Use ISR to update the cached pages
    }
  } catch (error) {
    console.error('Error fetching posts:', error)
    return {
      props: { initialPosts: [] },
    }
  }
}

export default HomePage
