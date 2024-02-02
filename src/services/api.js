import axios from 'axios';
import { toast } from 'react-toastify';

const KEY = 'da273fadec6e0549daf77f4eda281870';
axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

const makeRequest = async path => {
  const url = `${path}`;
  try {
    const response = await axios.get(url, {
      params: { api_key: KEY },
    });
    return response.data;
  } catch (error) {
    toast.error('Error');
    console.error(error);
  }
};

export const getListTrending = async () =>
  await makeRequest('trending/movie/day?');

export const getIdMovie = async movieId =>
  await makeRequest(`movie/${movieId}`);

export const getCastMovie = async movieId =>
  await makeRequest(`movie/${movieId}/credits`);

export const getReviewsMovie = async movieId =>
  await makeRequest(`movie/${movieId}/reviews`);

export const getSearchMovie = async search =>
  await makeRequest(`search/movie?query=${search}&page=1`);
