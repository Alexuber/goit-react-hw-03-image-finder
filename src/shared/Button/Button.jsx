import styles from './Button.module.scss';
import PropTypes from 'prop-types';

export const Button = ({ handleLoadMoreBtn }) => {
  return (
    <button type="button" className={styles.Button} onClick={handleLoadMoreBtn}>
      Load more
    </button>
  );
};

Button.propTypes = {
  handleLoadMoreBtn: PropTypes.func.isRequired,
};
