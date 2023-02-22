import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import styles from './ImageGallery.module.scss';
import PropTypes from 'prop-types';

export const ImageGallery = ({ images, showModal }) => {
  const imageItems = images.map(image => (
    <ImageGalleryItem
      src={image.webformatURL}
      alt={image.tags}
      key={image.id}
      showModal={showModal}
      largeSrc={image.largeImageURL}
      tags={image.tags}
    />
  ));
  return <ul className={styles.ImageGallery}>{imageItems}</ul>;
};

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  showModal: PropTypes.func.isRequired,
};
