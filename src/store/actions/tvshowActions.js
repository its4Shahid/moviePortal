export const SET_TVSHOWS_HANDLER_REQUEST = 'SET_TVSHOWS_HANDLER_REQUEST';
export const SET_TVSHOWS_HANDLER_SUCCESS = 'SET_TVSHOWS_HANDLER_SUCCESS';
export const GET_POPULAR_TVSHOWS_REQUEST = 'GET_POPULAR_TVSHOWS_REQUEST';
export const GET_POPULAR_TVSHOWS_SUCCESS = 'GET_POPULAR_TCSHOWS_SUCCESS';
export const GET_TOP_RATED_TVSHOWS_REQUEST = 'GET_TOP_RATED_TVSHOWS_REQUEST';
export const GET_TOP_RATED_TVSHOWS_SUCCESS = 'GET_TOP_RATED_TVSHOWS_SUCCESS';
export const GET_TVSHOWS_DETAILS_REQUEST = 'GET_TVSHOWS_DETAILS';
export const GET_TVSHOWS_DETAILS_SUCCESS = 'GET_TVSHOWS_DETAILS_SUCCESS';
export const GET_TVSHOW_REVIEWS_REQUEST = 'GET_TVSHOW_REVIEWS_REQUEST';
export const GET_TVSHOW_REVIEWS_SUCCESS = 'GET_TVSHOW_REVIEWS_SUCCESS';

export const setTVShowsRequest = () => {
    return {
        type: SET_TVSHOWS_HANDLER_REQUEST,
    };
};
export const setTVShowsSuccess = (TvShows) => {
    return {
        type: SET_TVSHOWS_HANDLER_SUCCESS,
        payload: TvShows,
    };
};
export const getPopularTvShowsRequest = () => {
    return {
        type: GET_POPULAR_TVSHOWS_REQUEST,
    };
};
export const getPopularTvShowsSuccess = (TvShows) => {
    return {
        type: GET_POPULAR_TVSHOWS_SUCCESS,
        payload: TvShows,
    };
};
export const getTopRatedTvShowsRequest = () => {
    return {
        type: GET_TOP_RATED_TVSHOWS_REQUEST,
    };
};
export const getTopRatedTvShowsSuccess = (TvShows) => {
    return {
        type: GET_TOP_RATED_TVSHOWS_SUCCESS,
        payload: TvShows,
    };
};
export const getTvShowdetailRequest = (id) => {
    return {
        type: GET_TVSHOWS_DETAILS_REQUEST,
        payload: id,
    };
};
export const getTvShowdetailSuccess = (tvShowDetail) => {
    return {
        type: GET_TVSHOWS_DETAILS_SUCCESS,
        payload: tvShowDetail,
    };
};
export const getTvShowReviewsRequest = (id) => {
    return {
        type: GET_TVSHOW_REVIEWS_REQUEST,
        payload: id,
    };
};
export const getTvShowReviewsSuccess = (reviews) => {
    return {
        type: GET_TVSHOW_REVIEWS_REQUEST,
        payload: reviews,
    };
};
