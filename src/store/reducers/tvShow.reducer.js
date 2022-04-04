import {
    GET_POPULAR_TVSHOWS_REQUEST,
    GET_POPULAR_TVSHOWS_SUCCESS,
    GET_TOP_RATED_TVSHOWS_REQUEST,
    GET_TOP_RATED_TVSHOWS_SUCCESS,
    GET_TVSHOWS_DETAILS_REQUEST,
    GET_TVSHOWS_DETAILS_SUCCESS,
    GET_TVSHOW_REVIEWS_REQUEST,
    GET_TVSHOW_REVIEWS_SUCCESS,
    SEARCH_TVSHOW_REQUEST,
    SEARCH_TVSHOW_SUCCESS,
    SET_TVSHOWS_HANDLER_REQUEST,
    SET_TVSHOWS_HANDLER_SUCCESS,
} from '../actions/tvshowActions';

const intialValue = {
    tvShows: [],
    tvShowDetail: [],
    reviews: [],
    isLoading: false,
};

const TVShows = (state = intialValue, { payload, type }) => {
    switch (type) {
        case SET_TVSHOWS_HANDLER_REQUEST:
            return { ...state, isLoading: true };
        case SET_TVSHOWS_HANDLER_SUCCESS:
            return { ...state, tvShows: [...payload], isLoading: false };
        case GET_POPULAR_TVSHOWS_REQUEST:
            return { ...state, isLoading: true };
        case GET_POPULAR_TVSHOWS_SUCCESS:
            return { ...state, tvShows: [...payload], isLoading: false };
        case GET_TOP_RATED_TVSHOWS_REQUEST:
            return { ...state, isLoading: true };
        case GET_TOP_RATED_TVSHOWS_SUCCESS:
            return { ...state, tvShows: [...payload], isLoading: false };
        case GET_TVSHOWS_DETAILS_REQUEST:
            return { ...state, isLoading: true };
        case GET_TVSHOWS_DETAILS_SUCCESS:
            return { ...state, tvShowDetail: [payload], isLoading: false };
        case GET_TVSHOW_REVIEWS_REQUEST:
            return { ...state, isLoading: true };
        case GET_TVSHOW_REVIEWS_SUCCESS:
            return { ...state, reviews: [payload], isLoading: false };
        case SEARCH_TVSHOW_REQUEST:
            return { ...state, isLoading: true };
        case SEARCH_TVSHOW_SUCCESS:
            return { ...state, tvShows: [...payload], isLoading: false };
        default:
            return state;
    }
};
export default TVShows;
