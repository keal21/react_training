import {
  CANCEL_EDIT_MOVIE,
  cancelEditMovieAction,
  CLOSE_MOVIE_DETAILS,
  closeMovieDetailsAction,
  FETCH_MOVIE_LIST_SUCCESS,
  fetchMovieListSuccessAction,
  MOVIE_LIST_IS_OUTDATED,
  movieListIsOutdatedAction,
  SHOW_MOVIE_DETAILS,
  showMovieDetailsAction,
  START_EDIT_MOVIE,
  startEditMovieAction,
} from './movieActions';

describe('movieAction', () => {
  test('movieListIsOutdatedAction', () => {
    expect(movieListIsOutdatedAction()).toEqual(
      { type: MOVIE_LIST_IS_OUTDATED },
    );
  });

  test('closeMovieDetailsAction', () => {
    expect(closeMovieDetailsAction()).toEqual(
      { type: CLOSE_MOVIE_DETAILS },
    );
  });

  test('cancelEditMovieAction', () => {
    expect(cancelEditMovieAction()).toEqual(
      { type: CANCEL_EDIT_MOVIE },
    );
  });

  test('fetchMovieListSuccessAction', () => {
    expect(fetchMovieListSuccessAction([1, 2])).toEqual(
      { type: FETCH_MOVIE_LIST_SUCCESS, list: [1, 2] },
    );
  });

  test('showMovieDetailsAction', () => {
    expect(showMovieDetailsAction({ name: 'test' })).toEqual(
      { type: SHOW_MOVIE_DETAILS, item: { name: 'test' } },
    );
  });

  test('startEditMovieAction', () => {
    expect(startEditMovieAction({ name: 'test' })).toEqual(
      { type: START_EDIT_MOVIE, item: { name: 'test' } },
    );
  });
});
