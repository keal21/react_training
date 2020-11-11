import {
  FETCH_FILTERS_SUCCESS, SELECT_FILTER,
  fetchFiltersSuccessAction,
  selectFilterAction,
} from './filterActions';

describe('filterAction', () => {
  test('fetchFiltersSuccessAction', () => {
    expect(fetchFiltersSuccessAction([1, 2])).toEqual(
      { type: FETCH_FILTERS_SUCCESS, list: [1, 2] },
    );
  });

  test('selectFilterAction', () => {
    expect(selectFilterAction({ name: 'test' })).toEqual(
      { type: SELECT_FILTER, item: { name: 'test' } },
    );
  });
});
