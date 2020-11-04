export const FETCH_FILTERS_SUCCESS = 'FETCH_FILTERS_SUCCESS';
export const SELECT_FILTER = 'SELECT_FILTER';

export const fetchFiltersSuccessAction = (list) => ({
    type: FETCH_FILTERS_SUCCESS,
    list,
});

export const selectFilterAction = (item) => ({
    type: SELECT_FILTER,
    item,
})
