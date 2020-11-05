import { FETCH_MOVIE_LIST_SUCCESS, MOVIE_LIST_IS_OUTDATED } from '../actions/movieActions';

const initialState = {
  list: [],
  isOutdated: false,
};

const movieListReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_MOVIE_LIST_SUCCESS:
      return {
        ...state,
        list: action.list,
        isOutdated: false,
      };
    case MOVIE_LIST_IS_OUTDATED:
      return {
        ...state,
        isOutdated: true,
      };
    default:
      return state;
  }
};

export default movieListReducer;
