import { combineReducers } from 'redux';
import movieListReducer from './movieListReducer';
import movieEditReducer from './movieEditReducer';
import movieDetailsReducer from './movieDetailsReducer';
import sortReducer from './sortReducer';
import filterReducer from './filterReducer';

const rootReducer = combineReducers({
  movieList: movieListReducer,
  movieEdit: movieEditReducer,
  movieDetails: movieDetailsReducer,
  sort: sortReducer,
  filter: filterReducer,
});

export default rootReducer;
