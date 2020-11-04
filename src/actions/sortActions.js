export const FETCH_SORTS_SUCCESS = 'FETCH_SORTS_SUCCESS';
export const SELECT_SORT = 'SELECT_SORT';

export const fetchSortsSuccessAction = (list) => ({
    type: FETCH_SORTS_SUCCESS,
    list,
});

export const selectSortAction = (item) => ({
    type: SELECT_SORT,
    item,
})
