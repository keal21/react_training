export const FETCH_MOVIE_LIST_SUCCESS = 'FETCH_MOVIE_LIST_SUCCESS';
export const MOVIE_LIST_IS_OUTDATED = 'MOVIE_LIST_IS_OUTDATED';

export const SHOW_MOVIE_DETAILS = 'SHOW_MOVIE_DETAILS';
export const CLOSE_MOVIE_DETAILS = 'CLOSE_MOVIE_DETAILS';

export const START_ADD_MOVIE = 'START_ADD_MOVIE';
export const START_EDIT_MOVIE = 'START_EDIT_MOVIE';
export const CANCEL_EDIT_MOVIE = 'CANCEL_EDIT_MOVIE';

export const fetchMovieListSuccessAction = (list) => ({
  type: FETCH_MOVIE_LIST_SUCCESS,
  list,
});

export const movieListIsOutdatedAction = () => ({
  type: MOVIE_LIST_IS_OUTDATED,
});

export const showMovieDetailsAction = (item) => ({
  type: SHOW_MOVIE_DETAILS,
  item,
});

export const closeMovieDetailsAction = () => ({
  type: CLOSE_MOVIE_DETAILS,
});

export const startEditMovieAction = (item) => ({
  type: START_EDIT_MOVIE,
  item,
});

export const cancelEditMovieAction = () => ({
  type: CANCEL_EDIT_MOVIE,
});
