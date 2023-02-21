import styles from './Button.module.scss';

export const Button = ({ handleLoadMoreBtn }) => {
  return (
    <button type="button" className={styles.Button} onClick={handleLoadMoreBtn}>
      Load more
    </button>
  );
};
