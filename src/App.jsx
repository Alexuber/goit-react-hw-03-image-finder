import './styles/style.scss';
import { ToastContainer, toast } from 'react-toastify';
import { Searchbar } from 'components/Searchbar/Searchbar';
import { ImageGallery } from 'components/ImageGallery/ImageGallery';
import { Button } from './shared/Button/Button';
import { Modal } from 'shared/Modal/Modal';
import { Component } from 'react';
import { fetchImages } from './services/pixabayAxios';
import { Loader } from 'shared/Loader/Loader';

export class App extends Component {
  state = {
    images: [],
    status: 'idle',
    query: '',
    error: null,
    page: 1,
    isModal: false,
    imgDetails: {},
  };

  componentDidUpdate(_, prevState) {
    const { page, query } = this.state;
    if (prevState.page !== page || prevState.query !== query) {
      this.getImages();
    }
  }

  getImages = async () => {
    const { page, query } = this.state;

    try {
      this.setState({
        status: 'pending',
      });
      const { data } = await fetchImages(page, query);

      if (data.totalHits === 0) {
        this.showErrorAlert('Nothing found for your request');
      }
      this.setState(prevState => ({
        images: [...prevState.images, ...data.hits],
        status: 'success',
      }));
    } catch ({ message }) {
      this.setState({
        error: message || 'Ooops...something wrong! Try again later!',
        status: 'error',
      });
      this.showErrorAlert(message);
    }
  };

  handleLoadMoreBtn = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  handleFormSubmit = ({ query }) => {
    this.setState({
      query,
      images: [],
      page: 1,
    });
  };

  showModal = (largeImageURL, tags) => {
    this.setState({ isModal: true, imgDetails: { largeImageURL, tags } });
  };

  hideModal = () => {
    this.setState({ isModal: false, postDetails: {} });
  };

  showErrorAlert(message) {
    toast.warn(message, {
      position: 'top-right',
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'colored',
    });
  }

  render() {
    const { images, status, isModal, imgDetails } = this.state;
    const { handleLoadMoreBtn, showModal, hideModal, handleFormSubmit } = this;
    return (
      <>
        <Searchbar handleFormSubmit={handleFormSubmit} />
        {images && images.length > 0 && (
          <>
            <ImageGallery images={images} showModal={showModal} />
            {status === 'success' && (
              <Button handleLoadMoreBtn={handleLoadMoreBtn} />
            )}
          </>
        )}
        {status === 'pending' && <Loader />}
        {isModal && (
          <Modal showModal={showModal} hideModal={hideModal}>
            <img src={imgDetails.largeImageURL} alt={imgDetails.tags} />
          </Modal>
        )}
        <ToastContainer />
      </>
    );
  }
}
