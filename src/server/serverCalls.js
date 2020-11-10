import {
  fetchMovieListSuccessAction,
  movieListIsOutdatedAction,
} from '../actions/movieActions';
import { fetchFiltersSuccessAction } from '../actions/filterActions';
import { fetchSortsSuccessAction } from '../actions/sortActions';

function call(action, item, filter, sort, dispatch, updateMovieList, search) {
  let url = `http://127.0.0.1:4000?action=${action}`;

  if (item) {
    const params = Object.keys(item)
      .map((key) => `${key}=${item[key]}`)
      .join('&');
    url = `${url}&${params}`;
  }

  if (filter) {
    url = `${url}&filter=${filter}`;
  }

  if (sort) {
    url = `${url}&sort=${sort}`;
  }

  if (search) {
    url = `${url}&search=${search}`;
  }

  fetch(url)
    .then(async (source) => {
      const res = await source.json();

      if (res.movieList) {
        dispatch(fetchMovieListSuccessAction(res.movieList));
      }

      if (!action) {
        dispatch(fetchFiltersSuccessAction(res.filters));
        dispatch(fetchSortsSuccessAction(res.sorts));
      }

      if (updateMovieList) {
        dispatch(movieListIsOutdatedAction());
      }
    })
    .catch((error) => {
      // dispatch(fetchMovieListErrorAction(error));
      console.log(error);
    });
}

export function getAllData(dispatch) {
  call('', null, null, null, dispatch);
}

export function callGetMovieList(filter, sort, dispatch, search) {
  call('get', null, filter, sort, dispatch, false, search);
}

export function callAddMovie(item, dispatch) {
  call('add', item, null, null, dispatch, true);
}

export function callEditMovie(item, dispatch) {
  call('edit', item, null, null, dispatch, true);
}

export function callDeleteMovie(item, dispatch) {
  call('delete', item, null, null, dispatch, true);
}

export function callGetById(id) {
  const url = `http://127.0.0.1:4000?action=getById&id=${id}`;

  return fetch(url)
    .then(async (source) => {
      const res = await source.json();

      return res.movie;
    })
    .catch((error) => console.log(error));
}
