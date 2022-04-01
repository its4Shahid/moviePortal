import {
    GET_POPULAR_TVSHOWS_REQUEST,
    GET_POPULAR_TVSHOWS_SUCCESS,
    GET_TOP_RATED_TVSHOWS_REQUEST,
    GET_TOP_RATED_TVSHOWS_SUCCESS,
    GET_TVSHOWS_DETAILS_REQUEST,
    GET_TVSHOWS_DETAILS_SUCCESS,
    GET_TVSHOW_REVIEWS_REQUEST,
    GET_TVSHOW_REVIEWS_SUCCESS,
    SET_TVSHOWS_HANDLER_REQUEST,
    SET_TVSHOWS_HANDLER_SUCCESS,
} from '../actions/tvshowActions';

const intialValue = {
    tvShows: [],
    tvShowDetail: [],
    reviews: [],
};

const TVShows = (state = intialValue, { payload, type }) => {
    switch (type) {
        case SET_TVSHOWS_HANDLER_REQUEST:
            return { ...state };
        case SET_TVSHOWS_HANDLER_SUCCESS:
            return { ...state, tvShows: [...payload] };
        case GET_POPULAR_TVSHOWS_REQUEST:
            return { ...state };
        case GET_POPULAR_TVSHOWS_SUCCESS:
            return { ...state, tvShows: [...payload] };
        case GET_TOP_RATED_TVSHOWS_REQUEST:
            return { ...state };
        case GET_TOP_RATED_TVSHOWS_SUCCESS:
            return { ...state, tvShows: [...payload] };
        case GET_TVSHOWS_DETAILS_REQUEST:
            return { ...state };
        case GET_TVSHOWS_DETAILS_SUCCESS:
            return { ...state, tvShowDetail: [payload] };
        case GET_TVSHOW_REVIEWS_REQUEST:
            return { ...state };
        case GET_TVSHOW_REVIEWS_SUCCESS:
            return { ...state, reviews: [payload] };
        default:
            return state;
    }
};
export default TVShows;
