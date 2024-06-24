import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';

const Carousel = ({ posts }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const nextSlide = useCallback(() => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentSlide((prevSlide) => (prevSlide + 1) % posts.length);
    }
  }, [isTransitioning, posts.length]);

  const setSlide = (index) => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentSlide(index);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      nextSlide();
    }, 5000); // Adjust this value to control the duration between slides (5000ms = 5 seconds)

    return () => clearTimeout(timer);
  }, [currentSlide, nextSlide]);

  return (
    <div className="relative w-full overflow-hidden">
      <div
        className="flex transition-transform duration-[3000ms] ease-in-out"
        style={{ width: `${posts.length * 100}%`, transform: `translateX(-${currentSlide * (100 / posts.length)}%)` }}
        onTransitionEnd={() => setIsTransitioning(false)}
      >
        {posts.map((post) => (
          <Link key={post.sys.id} href={`/posts/${post.fields.slug}`} passHref>
            <div className="min-w-full flex-shrink-0 bg-white text-black p-4 rounded-lg shadow-md cursor-pointer transition duration-300 ease-in-out transform hover:-translate-y-1">
              <h4 className="text-lg font-semibold">{post.fields.title}</h4>
              <p>{post.fields.excerpt}</p>
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
