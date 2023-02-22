import styles from './Searchbar.module.scss';
import { SearchForm } from '../SearchForm/SearchForm';
import PropTypes from 'prop-types';

export const Searchbar = ({ handleFormSubmit }) => {
  return (
    <header className={styles.Searchbar}>
      <SearchForm handleFormSubmit={handleFormSubmit} />
    </header>
  );
};

Searchbar.propTypes = {
  handleFormSubmit: PropTypes.func.isRequired,
};
