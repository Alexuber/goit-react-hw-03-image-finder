import { Component } from 'react';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';
import 'react-toastify/dist/ReactToastify.css';

import styles from './SearchForm.module.scss';

export class SearchForm extends Component {
  state = {
    query: '',
  };

  handleInputChange = ({ target: { value } }) => {
    this.setState({ query: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    if (this.state.query.trim() === '') {
      toast.error('Search field is empty!', {
        position: 'top-right',
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'colored',
      });
      return;
    }
    this.props.handleFormSubmit({ ...this.state });
    this.reset();
  };

  reset = () => {
    this.setState({ query: '' });
  };

  render() {
    const { handleSubmit, handleInputChange } = this;
    const { query } = this.state;
    return (
      <form className={styles.SearchForm} onSubmit={handleSubmit}>
        <button type="submit" className={styles.SearchFormButton}></button>
        <span className={styles.SearchFormButtonLabel}>Search</span>
        <input
          onChange={handleInputChange}
          className={styles.SearchFormInput}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={query}
        />
      </form>
    );
  }
}

SearchForm.propTypes = {
  handleFormSubmit: PropTypes.func.isRequired,
};
