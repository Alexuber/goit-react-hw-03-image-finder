import styles from './ImageGalleryItem.module.scss';

export const ImageGalleryItem = ({ src, alt }) => {
  return (
    <li className={styles.ImageGalleryItem}>
      <img className={styles.ImageGalleryItemImage} src={src} alt={alt} />
    </li>
  );
};
