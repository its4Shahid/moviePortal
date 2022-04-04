export const SET_MOVIE_HANDLER_REQUEST = 'SET_MOVIE_HANDLER_REQUEST';
export const SET_MOVIE_HANDLER_SUCCESS = 'SET_MOVIE_HANDLER_SUCCESS';
export const GET_TOPRATED_MOVIES_HANDLER_REQUEST = 'GET_LATEST_MOVIES_HANDLER_REQUEST';
export const GET_TOPRATED_MOVIES_HANDLER_SUCCESS = 'GET_LATEST_MOVIES_HANDLER_SUCCESS';
export const GET_POPULAR_MOVIES_HANDLER_REQUEST = 'GET_POPULAR_MOVIES_HANDLER_REQUEST';
export const GET_POPULAR_MOVIES_HANDLER_SUCCESS = 'GET_POPULAR_MOVIES_HANDLER_SUCCESS';
export const GET_MOVIE_DETAIL_REQUEST = 'GET_MOVIE_DETAIL_REQUEST';
export const GET_MOVIE_DETAIL_SUCCESS = 'GET_MOVIE_DETAIL_SUCCESS';
export const SEARCH_MOVIE_REQUEST = 'SEARCH_MOVIE_REQUEST';
export const SEARCH_MOVIE_SUCCESS = 'SEARCH_MOVIE_SUCCESS';

export const setMovieRequest = () => {
    return {
        type: SET_MOVIE_HANDLER_REQUEST,
    };
};
export const setMovieSuccess = (movies) => {
    return {
        type: SET_MOVIE_HANDLER_SUCCESS,
        payload: movies,
    };
};
export const getTopRatedMoviesRequest = () => {
    return {
        type: GET_TOPRATED_MOVIES_HANDLER_REQUEST,
    };
};
export const getTopRatedMoviesSuccess = (movies) => {
    return {
        type: GET_TOPRATED_MOVIES_HANDLER_SUCCESS,
        payload: movies,
    };
};
export const getPopularMoviesRequest = () => {
    return {
        type: GET_POPULAR_MOVIES_HANDLER_REQUEST,
    };
};
export const getPopularMoviesSuccess = (movies) => {
    return {
        type: GET_POPULAR_MOVIES_HANDLER_SUCCESS,
        payload: movies,
    };
};
export const getMovieDetailRequest = (id) => {
    return { type: GET_MOVIE_DETAIL_REQUEST, payload: id };
};
export const getMovieDetailSuccess = (movieDetail) => {
    return { type: GET_MOVIE_DETAIL_SUCCESS, payload: movieDetail };
};
export const searchMovieRequest = (name) => {
    return {
        type: SEARCH_MOVIE_REQUEST,
        payload: name,
    };
};
export const searchMovieSuccess = (movies) => {
    return {
        type: SEARCH_MOVIE_SUCCESS,
        payload: movies,
    };
};
