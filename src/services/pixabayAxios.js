import axios from 'axios';
const API_KEY = '33015202-198cac1ea48a9228f9ef5fb5a';
const BASE_URL = 'https://pixabay.com/api';

const imageInstance = axios.create({
  baseURL: BASE_URL,
});

export const fetchImagesFromSearch = query => {
  return imageInstance.get('/', {
    params: {
      key: API_KEY,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      per_page: 3,
      q: query,
    },
  });
};

export const fetchByClickLoadMoreBtn = (page, query) => {
  return imageInstance.get('/', {
    params: {
      key: API_KEY,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      per_page: 3,
      q: query,
      page: page,
    },
  });
};