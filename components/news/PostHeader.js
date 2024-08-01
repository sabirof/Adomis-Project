import Avatar from '../ui/Avatar';
import ContentfulImage from '../ui/ContentfulImage';

const PostHeader = ({ post }) => {
  const { title, coverImage, author } = post.fields || {};

  return (
    <>
      <div className="flex justify-center mb-10">
        <h2 className="text-2xl font-bold text-center">{title}</h2>
      </div>
      {coverImage && (
        <div className='mb-8 md:mb-16 sm:mx-0'>
          <ContentfulImage
            alt={`Cover Image for ${title}`}
            src={coverImage.fields.file.url}
            width={coverImage.fields.file.details.image.width}
            height={coverImage.fields.file.details.image.height}
          />
        </div>
      )}
      {author && (
        <div className="flex justify-center mt-10">
          <Avatar name={author.fields.name} picture={author.fields.picture} />
        </div>
      )}
    </>
  );
}

export default PostHeader;
