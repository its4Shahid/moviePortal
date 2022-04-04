import {
    GET_MOVIE_DETAIL_REQUEST,
    GET_MOVIE_DETAIL_SUCCESS,
    GET_POPULAR_MOVIES_HANDLER_REQUEST,
    GET_POPULAR_MOVIES_HANDLER_SUCCESS,
    GET_TOPRATED_MOVIES_HANDLER_REQUEST,
    GET_TOPRATED_MOVIES_HANDLER_SUCCESS,
    SEARCH_MOVIE_REQUEST,
    SEARCH_MOVIE_SUCCESS,
    SET_MOVIE_HANDLER_REQUEST,
    SET_MOVIE_HANDLER_SUCCESS,
} from '../actions/movieActions';

const intialValue = {
    movies: [],
    movieDetail: [],
    isLoading: false,
};

const movie = (state = intialValue, { payload, type }) => {
    switch (type) {
        case SET_MOVIE_HANDLER_REQUEST:
            return { ...state, isLoading: true };
        case SET_MOVIE_HANDLER_SUCCESS:
            return { ...state, movies: [...payload], isLoading: false };
        case GET_TOPRATED_MOVIES_HANDLER_REQUEST:
            return { ...state, isLoading: true };
        case GET_TOPRATED_MOVIES_HANDLER_SUCCESS:
            return { ...state, movies: [...payload], isLoading: false };
        case GET_POPULAR_MOVIES_HANDLER_REQUEST:
            return { ...state, isLoading: true };
        case GET_POPULAR_MOVIES_HANDLER_SUCCESS:
            return { ...state, movies: [...payload], isLoading: false };
        case GET_MOVIE_DETAIL_REQUEST:
            return { ...state, isLoading: true };
        case GET_MOVIE_DETAIL_SUCCESS:
            return { ...state, movieDetail: [payload], isLoading: false };
        case SEARCH_MOVIE_REQUEST:
            return { ...state, isLoading: true };
        case SEARCH_MOVIE_SUCCESS:
            return { ...state, movies: [...payload], isLoading: false };
        default:
            return state;
    }
};
export default movie;
