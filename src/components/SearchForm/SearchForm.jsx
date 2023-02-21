import { Component } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import styles from './SearchForm.module.scss';

export class SearchForm extends Component {
  state = {
    query: '',
  };

  handleInputChange = ({ target: { value } }) => {
    this.setState({ query: value });
  };

  handleFormSubmit = e => {
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
    this.props.getImagesByQuery({ ...this.state });
    this.reset();
  };

  reset = () => {
    this.setState({ query: '' });
  };

  render() {
    return (
      <form className={styles.SearchForm} onSubmit={this.handleFormSubmit}>
        <button type="submit" className={styles.SearchFormButton}></button>
        <span className={styles.SearchFormButtonLabel}>Search</span>
        <input
          onChange={this.handleInputChange}
          className={styles.SearchFormInput}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={this.state.query}
        />
      </form>
    );
  }
}
