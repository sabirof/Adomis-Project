import { useState, useEffect } from 'react';
import Link from 'next/link';

const Carousel = ({ posts }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const nextSlide = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentSlide((prevSlide) => (prevSlide + 1) % posts.length);
    }
  };

  const setSlide = (index) => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentSlide(index);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      nextSlide();
    }, 10000); // Slow down the transition duration to 10 seconds

    return () => clearTimeout(timer);
  }, );

  return (
    <div className="relative w-full overflow-hidden">
      <div
        className="flex transition-transform duration-1000 ease-in-out"
        style={{ transform: `translateX(-${currentSlide * 100}%)`, width: `${posts.length * 100}%` }}
        onTransitionEnd={() => setIsTransitioning(false)}
      >
        {posts.map((post) => (
          <Link key={post.sys.id} href={`/posts/${post.fields.slug}`} passHref>
            <div className="min-w-full flex-shrink-0 bg-white text-black p-8 rounded-lg shadow-md cursor-pointer transition duration-300 ease-in-out transform hover:-translate-y-1 h-80 flex flex-col justify-center items-center">
              <h4 className="text-lg font-semibold mb-2">{post.fields.title}</h4>
              <p className="mb-4">{post.fields.excerpt}</p>
              <p className="text-sm text-gray-500">{new Date(post.fields.date).toLocaleDateString()}</p>
            </div>
          </Link>
        ))}
      </div>
      <div className="absolute bottom-0 left-0 right-0 flex justify-center mb-2">
        {posts.map((_, index) => (
          <button
            key={index}
            onClick={() => setSlide(index)}
            className={`w-3 h-3 mx-1 rounded-full ${currentSlide === index ? 'bg-purple-700' : 'bg-gray-400'}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
