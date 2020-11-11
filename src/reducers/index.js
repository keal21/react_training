import { combineReducers } from 'redux';
import movieListReducer from './movieListReducer';
import movieDetailsReducer from './movieDetailsReducer';
import sortReducer from './sortReducer';
import filterReducer from './filterReducer';

const rootReducer = combineReducers({
  movieList: movieListReducer,
  movieDetails: movieDetailsReducer,
  sort: sortReducer,
  filter: filterReducer,
});

export default rootReducer;
