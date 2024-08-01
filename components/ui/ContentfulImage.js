import Image from 'next/image';

const contentfulLoader = ({ src, width, quality }) => {
  return `${src}?w=${width}&q=${quality || 75}`;
};

const ContentfulImage = ({ alt, ...props }) => {
  return <Image loader={contentfulLoader} alt={alt || ''} {...props} />;
};

export default ContentfulImage;
