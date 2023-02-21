import './styles/style.scss';
import { ToastContainer } from 'react-toastify';
import { Searchbar } from 'components/Searchbar/Searchbar';
import { ImageGallery } from 'components/ImageGallery/ImageGallery';
import { Button } from './components/Button/Button';
import { Modal } from 'components/Modal/Modal';
import { Component } from 'react';
import {
  fetchImagesFromSearch,
  fetchByClickLoadMoreBtn,
} from './services/pixabayAxios';
import { Loader } from 'components/Loader/Loader';

export class App extends Component {
  state = {
    images: [],
    isLoading: false,
    query: '',
    error: null,
    page: 1,
    isHiddenBtnBtn: null,
  };

  componentDidMount() {}

  componentDidUpdate(_, prevState) {
    // if (
    //   JSON.stringify(prevState.images) !== JSON.stringify(this.state.images) ||
    //   this.state.q !== ''
    // ) {
    //   this.getImages();
    // }
  }

  getImagesByQuery = async ({ query }) => {
    this.setState(prevState => ({
      query,
      isLoading: true,
      page: prevState.page + 1,
    }));

    try {
      const response = await fetchImagesFromSearch(query);
      this.setState({ images: response.data.hits });
    } catch (error) {
      this.setState({ error });
    } finally {
      this.setState({ isLoading: false });
    }
  };

  getImagesByLoadMoreBtn = async () => {
    const { page, query } = this.state;

    this.setState(prevState => ({
      isLoading: true,
      page: prevState.page + 1,
      isHiddenBtn: true,
    }));

    try {
      const response = await fetchByClickLoadMoreBtn(page, query);
      this.setState(prevState => ({
        images: [...prevState.images, ...response.data.hits],
      }));
    } catch (error) {
      this.setState({ error });
    } finally {
      this.setState({ isLoading: false, isHiddenBtn: false });
    }
  };

  handleLoadMoreBtn = e => {
    this.getImagesByLoadMoreBtn();
  };

  render() {
    const { images, isLoading, isHiddenBtn } = this.state;
    const { handleLoadMoreBtn } = this;
    return (
      <>
        <Searchbar getImagesByQuery={this.getImagesByQuery} />
        {images && images.length > 0 && (
          <>
            <ImageGallery images={images} />
            {!isHiddenBtn && <Button handleLoadMoreBtn={handleLoadMoreBtn} />}
          </>
        )}
        {isLoading && <Loader />}

        <Modal />
        <ToastContainer />
      </>
    );
  }
}
