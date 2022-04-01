import {
    GET_MOVIE_DETAIL_REQUEST,
    GET_MOVIE_DETAIL_SUCCESS,
    GET_POPULAR_MOVIES_HANDLER_REQUEST,
    GET_POPULAR_MOVIES_HANDLER_SUCCESS,
    GET_TOPRATED_MOVIES_HANDLER_REQUEST,
    GET_TOPRATED_MOVIES_HANDLER_SUCCESS,
    SET_MOVIE_HANDLER_REQUEST,
    SET_MOVIE_HANDLER_SUCCESS,
} from '../actions/movieActions';

const intialValue = {
    movies: [],
    movieDetail: [],
};

const movie = (state = intialValue, { payload, type }) => {
    switch (type) {
        case SET_MOVIE_HANDLER_REQUEST:
            return { ...state };
        case SET_MOVIE_HANDLER_SUCCESS:
            return { ...state, movies: [...payload] };
        case GET_TOPRATED_MOVIES_HANDLER_REQUEST:
            return { ...state };
        case GET_TOPRATED_MOVIES_HANDLER_SUCCESS:
            return { ...state, movies: [...payload] };
        case GET_POPULAR_MOVIES_HANDLER_REQUEST:
            return { ...state };
        case GET_POPULAR_MOVIES_HANDLER_SUCCESS:
            return { ...state, movies: [...payload] };
        case GET_MOVIE_DETAIL_REQUEST:
            return { ...state };
        case GET_MOVIE_DETAIL_SUCCESS:
            return { ...state, movieDetail: [payload] };
        default:
            return state;
    }
};
export default movie;
