import {
  callAddMovie,
  callDeleteMovie,
  callEditMovie, callGetById,
  callGetMovieList,
  getAllData,
} from './serverCalls';

global.fetch = jest.fn(() => Promise.resolve({
  json: () => Promise.resolve({}),
}));

describe('serverCalls', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    fetch.mockClear();
  });

  test('getAllData', () => {
    getAllData(dispatch);

    expect(global.fetch).toHaveBeenCalled();
  });

  test('callGetMovieList', () => {
    callGetMovieList(null, null, dispatch, null);

    expect(global.fetch).toHaveBeenCalled();
  });

  test('callAddMovie', () => {
    callAddMovie(null, dispatch);

    expect(global.fetch).toHaveBeenCalled();
  });

  test('callEditMovie', () => {
    callEditMovie(null, dispatch);

    expect(global.fetch).toHaveBeenCalled();
  });

  test('callDeleteMovie', () => {
    callDeleteMovie(null, dispatch);

    expect(global.fetch).toHaveBeenCalled();
  });

  test('callGetById', () => {
    callGetById(null, dispatch);

    expect(global.fetch).toHaveBeenCalled();
  });
});
