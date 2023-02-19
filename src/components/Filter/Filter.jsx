import styles from './Filter.module.scss';
import PropTypes from 'prop-types';

export const Filter = ({ onChangeFilter, value }) => {
  return (
    <>
      <h3 className={styles.title}>Find contacts by name</h3>
      <input
        className={styles.input}
        type="text"
        name="filter"
        onChange={onChangeFilter}
        value={value}
        placeholder="Search..."
      />
    </>
  );
};

Filter.propTypes = {
  onChangeFilter: PropTypes.func.isRequired,
  value: PropTypes.string,
};
