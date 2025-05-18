import Image, { ImageProps } from 'next/image';

interface ImageCardProps extends Omit<ImageProps, 'src' | 'alt' | 'width' | 'height'> {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
}

const ImageCard: React.FC<ImageCardProps> = ({ className = '', ...props }) => (
  <Image {...props} className={`my-8 ${className}`} />
);

export default ImageCard;
