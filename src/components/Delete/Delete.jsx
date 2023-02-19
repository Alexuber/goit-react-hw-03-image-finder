import styles from './Delete.module.scss';
import PropTypes from 'prop-types';

export const Delete = ({ deleteContact }) => {
  return (
    <button className={styles.btn} type="button" onClick={deleteContact}>
      Delete
    </button>
  );
};

Delete.propTypes = {
  deleteContact: PropTypes.func.isRequired,
};
