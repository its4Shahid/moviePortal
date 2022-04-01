import { combineReducers } from 'redux';
import movie from '../reducers/movie.reducer';
import TVShows from './tvShow.reducer';
import people from './people.reducer';

const rootReducer = combineReducers({
    movie,
    TVShows,
    people,
});
export default rootReducer;
