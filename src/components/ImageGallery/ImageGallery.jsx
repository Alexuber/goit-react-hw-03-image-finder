import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import styles from './ImageGallery.module.scss';

export const ImageGallery = ({ images }) => {
  const imageItems = images.map(image => (
    <ImageGalleryItem
      src={image.webformatURL}
      alt={image.tags}
      key={image.id}
    />
  ));
  return <ul className={styles.ImageGallery}>{imageItems}</ul>;
};
