interface ImageCardProps extends React.ImgHTMLAttributes<HTMLImageElement> {}

const ImageCard: React.FC<ImageCardProps> = ({ className = '', ...props }) => (
  <img {...props} className={`my-8 ${className}`} />
);

export default ImageCard;
