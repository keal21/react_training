import movieDetailsReducer from './movieDetailsReducer';
import { closeMovieDetailsAction, showMovieDetailsAction } from '../actions/movieActions';

describe('movieDetailsReducer', () => {
  const mockItem = { name: 'test' };

  test('handle SHOW_MOVIE_DETAILS', () => {
    expect(movieDetailsReducer({}, showMovieDetailsAction(mockItem))).toEqual(mockItem);
  });

  test('handle CLOSE_MOVIE_DETAILS', () => {
    expect(movieDetailsReducer(mockItem, closeMovieDetailsAction(mockItem))).toBe(null);
  });

  test('handle default', () => {
    expect(movieDetailsReducer(mockItem, { type: '' })).toBe(mockItem);
  });
});
