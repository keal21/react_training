export const GET_MOVIE_LIST = 'GET_MOVIE_LIST';
export const GET_SORT_LIST = 'GET_SORT_LIST';
export const GET_FILTER_LIST = 'GET_FILTER_LIST';

export const ADD_MOVIE = 'ADD_MOVIE';
export const EDIT_MOVIE = 'EDIT_MOVIE';
export const DELETE_MOVIE = 'DELETE_MOVIE';

export const START_ADD_MOVIE = 'START_ADD_MOVIE';
export const START_EDIT_MOVIE = 'START_EDIT_MOVIE';
export const CANCEL_EDIT_MOVIE = 'CANCEL_EDIT_MOVIE';

export const SHOW_DETAIL_MOVIE = 'SHOW_DETAIL_MOVIE';
export const CANCEL_DETAIL_MOVIE = 'CANCEL_DETAIL_MOVIE';

export const SELECT_SORT = 'SELECT_SORT';
export const SELECT_FILTER = 'SELECT_FILTER';

// -------------------------------------------------------

export const getMovieListAction = () => ({
    type: GET_MOVIE_LIST,
})

export const getSortListAction = () => ({
    type: GET_SORT_LIST,
})

export const getFilterListAction = () => ({
    type: GET_FILTER_LIST,
})

// -------------------------------------------------------

export const addMovieAction = (item) => ({
    type: ADD_MOVIE,
    item,
})

export const editMovieAction = (item) => ({
    type: EDIT_MOVIE,
    item,
})

export const deleteMovieAction = (item) => ({
    type: DELETE_MOVIE,
    item,
})

// -------------------------------------------------------

export const startAddMovieAction = () => ({
    type: START_ADD_MOVIE,
})

export const startEditMovieAction = (item) => ({
    type: START_EDIT_MOVIE,
    item,
})

export const cancelEditMovieAction = (item) => ({
    type: CANCEL_EDIT_MOVIE,
})

// -------------------------------------------------------

export const showDetailMovieAction = (item) => ({
    type: SHOW_DETAIL_MOVIE,
    item,
})

export const cancelDetailMovieAction = (item) => ({
    type: CANCEL_DETAIL_MOVIE,
})

// -------------------------------------------------------

export const selectSortAction = (item) => ({
    type: SELECT_SORT,
    item,
})

export const selectFilterAction = (item) => ({
    type: SELECT_FILTER,
    item,
})
