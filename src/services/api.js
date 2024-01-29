import axios from 'axios';

const KEY = 'da273fadec6e0549daf77f4eda281870';
axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

const makeRequest = async (path) => {
    const url = `${path}&api_key=${KEY}`;
    try {
        const response = await axios.get(url);
        return response.data;
    } catch (error) {
        console.error(error);
        throw error;
    }
};
  
export const getListTrending = async () => await makeRequest('trending/movie/day?');

export const getIdMovie = async (movie_id) => await makeRequest(`movie/${movie_id}?`);

