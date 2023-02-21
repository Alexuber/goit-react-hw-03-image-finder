import styles from './Searchbar.module.scss';
import { SearchForm } from '../SearchForm/SearchForm';

export const Searchbar = ({ getImagesByQuery }) => {
  return (
    <header className={styles.Searchbar}>
      <SearchForm getImagesByQuery={getImagesByQuery} />
    </header>
  );
};
