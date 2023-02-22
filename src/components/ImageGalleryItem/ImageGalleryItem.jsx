import styles from './ImageGalleryItem.module.scss';
import PropTypes from 'prop-types';

export const ImageGalleryItem = ({ src, alt, largeSrc, tags, showModal }) => {
  return (
    <li
      className={styles.ImageGalleryItem}
      onClick={() => showModal(largeSrc, tags)}
    >
      <img className={styles.ImageGalleryItemImage} src={src} alt={alt} />
    </li>
  );
};

ImageGalleryItem.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  largeSrc: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  showModal: PropTypes.func.isRequired,
};
