import styles from './ImageGalleryItem.module.scss';

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
