import {
  FETCH_SORTS_SUCCESS,
  fetchSortsSuccessAction,
  SELECT_SORT,
  selectSortAction,
} from './sortActions';

describe('sortAction', () => {
  test('fetchSortsSuccessAction', () => {
    expect(fetchSortsSuccessAction([1, 2])).toEqual(
      { type: FETCH_SORTS_SUCCESS, list: [1, 2] },
    );
  });

  test('selectSortAction', () => {
    expect(selectSortAction({ name: 'test' })).toEqual(
      { type: SELECT_SORT, item: { name: 'test' } },
    );
  });
});
