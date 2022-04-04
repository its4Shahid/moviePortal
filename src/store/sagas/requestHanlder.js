import { call, delay, put } from 'redux-saga/effects';
import {
    getTopRatedMoviesRequest,
    getTopRatedMoviesSuccess,
    getPopularMoviesSuccess,
    setMovieSuccess,
    getMovieDetailSuccess,
    searchMovieSuccess,
} from '../actions/movieActions';
import { getPeopleDetialSuccess, searchPeopleSuccess, setPeopleSuccess } from '../actions/peopleActions';
import {
    getPopularTvShowsSuccess,
    getTopRatedTvShowsRequest,
    getTopRatedTvShowsSuccess,
    getTvShowdetailSuccess,
    getTvShowReviewsSuccess,
    searchTvShowSuccess,
    setTVShowsSuccess,
} from '../actions/tvshowActions';
import {
    getTopRatedMovies,
    getPopularMovies,
    setMovies,
    setPeople,
    setTVShow,
    getPopularTvShows,
    getTopRatedTvShows,
    getTvShowDetail,
    getTvShowReviews,
    getMovieDetail,
    getPeopleDetail,
    searchMovie,
    searchTvShows,
    searchPeople,
} from '../services/movieService';

export function* handleSetMovie() {
    try {
        const response = yield call(setMovies);
        const { data } = response;
        yield delay(1000);
        yield put(setMovieSuccess(data.results));
    } catch (error) {
        console.log('error:', error);
    }
}
export function* handleSetTVShow() {
    try {
        const response = yield call(setTVShow);
        const { data } = response;

        yield put(setTVShowsSuccess(data.results));
    } catch (error) {
        console.log('error:', error);
    }
}
export function* handleSetPeople() {
    try {
        const response = yield call(setPeople);
        const { data } = response;

        yield put(setPeopleSuccess(data.results));
    } catch (error) {
        console.log('error:', error);
    }
}
export function* handleGetTopRatedMovies() {
    try {
        const response = yield call(getTopRatedMovies);
        const { data } = response;

        yield put(getTopRatedMoviesSuccess(data.results));
    } catch (error) {
        console.log('error', error);
    }
}
export function* handleGetPopularMovies() {
    try {
        const response = yield call(getPopularMovies);
        const { data } = response;

        yield put(getPopularMoviesSuccess(data.results));
    } catch (error) {
        console.log('error:', error);
    }
}
export function* handleGetPopularTvShows() {
    const response = yield call(getPopularTvShows);
    const { data } = response;

    yield put(getPopularTvShowsSuccess(data.results));
}
export function* handleGetTopRatedTvShows() {
    try {
        const response = yield call(getTopRatedTvShows);
        const { data } = response;

        yield put(getTopRatedTvShowsSuccess(data.results));
    } catch (error) {
        console.log('error:', error);
    }
}
export function* handleGetTvShowDetails(payload) {
    try {
        const response = yield call(getTvShowDetail, payload);
        const { data } = response;

        yield put(getTvShowdetailSuccess(data));
    } catch (error) {
        console.log('error:', error);
    }
}
export function* handleGetTvShowReviews(payload) {
    try {
        const response = yield call(getTvShowReviews, payload);
        const { data } = response;

        yield put(getTvShowReviewsSuccess(data));
    } catch (error) {
        console.log('error:', error);
    }
}
export function* handleGetMovieDetail(payload) {
    try {
        const response = yield call(getMovieDetail, payload);
        const { data } = response;

        yield put(getMovieDetailSuccess(data));
    } catch (error) {
        console.log('Error:', error);
    }
}
export function* handleGetPeopleDetail(payload) {
    try {
        const response = yield call(getPeopleDetail, payload);
        const { data } = response;

        yield put(getPeopleDetialSuccess(data));
    } catch (error) {
        console.log('error:', error);
    }
}
export function* handleSearchMovie(payload) {
    try {
        const response = yield call(searchMovie, payload);
        const { data } = response;

        yield put(searchMovieSuccess(data.results));
    } catch (error) {
        console.loh('error', error);
    }
}
export function* hanldeSearchTvShow(payload) {
    try {
        const response = yield call(searchTvShows, payload);
        const { data } = response;
        yield put(searchTvShowSuccess(data.results));
    } catch (error) {
        console.log('error:', error);
    }
}
export function* handleSearchPeople(payload) {
    try {
        const response = yield put(searchPeople, payload);
        const { data } = response;
        yield put(searchPeopleSuccess(data.results));
    } catch (error) {
        console.log('error:', error);
    }
}
