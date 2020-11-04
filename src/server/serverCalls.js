import {fetchMovieListSuccessAction, movieListIsOutdatedAction} from "../actions/movieActions";
import {fetchFiltersSuccessAction} from "../actions/filterActions";
import {fetchSortsSuccessAction} from "../actions/sortActions";

function call(action, item, filter, sort, dispatch, updateMovieList) {
    let url = 'http://127.0.0.1:4000?action=' + action;

    if (item) {
        const params = Object.keys(item).map(key => key + '=' + item[key]).join('&');
        url = url + '&' + params;
    }

    if (filter) {
        url = url + '&filter=' + filter;
    }

    if (sort) {
        url = url + '&sort=' + sort;
    }

    fetch(url)
        .then(async function (res) {
            res = await res.json();

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
        .catch(error => {
            //dispatch(fetchMovieListErrorAction(error));
            console.log(error);
        });
}

export function getAllData(dispatch) {
    call('', null, null, null, dispatch);
}

export function callGetMovieList(filter, sort, dispatch) {
    call('get', null, filter, sort, dispatch);
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
