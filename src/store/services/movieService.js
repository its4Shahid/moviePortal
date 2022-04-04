import { ReorderRounded, RestaurantRounded } from '@mui/icons-material';
import axios from 'axios';

const API_URL = 'https://api.themoviedb.org/3/';
const API_KEY = 'a281b49762bc05a9f85f3bd60ac3c7d4';

export const setMovies = () => {
    return axios.request({
        method: 'get',
        url: `${API_URL}discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=free`,
    });
};
export const setTVShow = () => {
    return axios.request({
        method: 'get',
        url: `${API_URL}discover/tv?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&include_null_first_air_dates=false&with_watch_monetization_types=flatrate&with_status=0&with_type=0`,
    });
};
export const setPeople = () => {
    return axios.request({
        method: 'get',
        url: `${API_URL}person/popular?api_key=${API_KEY}&language=en-US&page=1`,
    });
};
export const getTopRatedMovies = () => {
    return axios.request({
        method: 'get',
        url: `${API_URL}movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`,
    });
};
export const getPopularMovies = () => {
    return axios.request({
        method: 'get',
        url: `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=1`,
    });
};
export const getPopularTvShows = () => {
    return axios.request({
        method: 'get',
        url: `${API_URL}tv/popular?api_key=${API_KEY}&language=en-US&page=1`,
    });
};
export const getTopRatedTvShows = () => {
    return axios.request({
        method: 'get',
        url: `${API_URL}tv/top_rated?api_key=${API_KEY}&language=en-US&page=1`,
    });
};
export const getTvShowDetail = (id) => {
    return axios.request({
        method: 'get',
        url: `${API_URL}tv/${id.payload}?api_key=${API_KEY}&language=en-US`,
    });
};
export const getTvShowReviews = (id) => {
    return axios.request({
        method: 'get',
        url: `${API_URL}tv/${id.payload}/reviews?api_key=${API_KEY}&language=en-US&page=1`,
    });
};
export const getMovieDetail = (id) => {
    return axios.request({
        method: 'get',
        url: `${API_URL}movie/${id.payload}?api_key=${API_KEY}&language=en-US`,
    });
};
export const getPeopleDetail = (id) => {
    return axios.request({
        method: 'get',
        url: `${API_URL}person/${id.payload}?api_key=${API_KEY}&language=en-US`,
    });
};
export const searchMovie = (name) => {
    return axios.request({
        method: 'get',
        url: `${API_URL}search/movie?api_key=${API_KEY}&language=en-US&query=${name.payload}&page=1&include_adult=false`,
    });
};
export const searchTvShows = (name) => {
    return axios.request({
        method: 'get',
        url: `${API_URL}search/tv?api_key=${API_KEY}&language=en-US&page=1&query=${name.payload}&include_adult=false`,
    });
};
export const searchPeople = (name) => {
    return axios.request({
        method: 'get',
        url: `${API_URL}search/person?api_key=${API_KEY}&language=en-US&query=${name.payload}&page=1&include_adult=false`,
    });
};
