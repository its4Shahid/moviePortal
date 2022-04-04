import { takeLatest } from 'redux-saga/effects';
import {
    handleGetTopRatedMovies,
    handleGetPopularMovies,
    handleSetMovie,
    handleSetPeople,
    handleSetTVShow,
    handleGetPopularTvShows,
    handleGetTopRatedTvShows,
    handleGetTvShowDetails,
    handleGetTvShowReviews,
    handleGetMovieDetail,
    handleGetPeopleDetail,
    handleSearchMovie,
    hanldeSearchTvShow,
    handleSearchPeople,
} from './requestHanlder';
import {
    GET_MOVIE_DETAIL_REQUEST,
    GET_POPULAR_MOVIES_HANDLER_REQUEST,
    GET_TOPRATED_MOVIES_HANDLER_REQUEST,
    SEARCH_MOVIE_REQUEST,
    SET_MOVIE_HANDLER_REQUEST,
} from '../actions/movieActions';
import {
    GET_POPULAR_TVSHOWS_REQUEST,
    GET_TOP_RATED_TVSHOWS_REQUEST,
    GET_TVSHOWS_DETAILS_REQUEST,
    GET_TVSHOW_REVIEWS_REQUEST,
    SEARCH_TVSHOW_REQUEST,
    SET_TVSHOWS_HANDLER_REQUEST,
} from '../actions/tvshowActions';
import { GET_PEOPLE_DETAIL_REQUEST, SEARCH_PEOPLE_REQUEST, SET_PEOPLE_HANDLER_REQUEST } from '../actions/peopleActions';

export function* watcherSaga() {
    yield takeLatest(SET_MOVIE_HANDLER_REQUEST, handleSetMovie);
    yield takeLatest(SET_TVSHOWS_HANDLER_REQUEST, handleSetTVShow);
    yield takeLatest(SET_PEOPLE_HANDLER_REQUEST, handleSetPeople);
    yield takeLatest(GET_TOPRATED_MOVIES_HANDLER_REQUEST, handleGetTopRatedMovies);
    yield takeLatest(GET_POPULAR_MOVIES_HANDLER_REQUEST, handleGetPopularMovies);
    yield takeLatest(GET_POPULAR_TVSHOWS_REQUEST, handleGetPopularTvShows);
    yield takeLatest(GET_TOP_RATED_TVSHOWS_REQUEST, handleGetTopRatedTvShows);
    yield takeLatest(GET_TVSHOWS_DETAILS_REQUEST, handleGetTvShowDetails);
    yield takeLatest(GET_TVSHOW_REVIEWS_REQUEST, handleGetTvShowReviews);
    yield takeLatest(GET_MOVIE_DETAIL_REQUEST, handleGetMovieDetail);
    yield takeLatest(GET_PEOPLE_DETAIL_REQUEST, handleGetPeopleDetail);
    yield takeLatest(SEARCH_MOVIE_REQUEST, handleSearchMovie);
    yield takeLatest(SEARCH_TVSHOW_REQUEST, hanldeSearchTvShow);
    yield takeLatest(SEARCH_PEOPLE_REQUEST, handleSearchPeople);
}
