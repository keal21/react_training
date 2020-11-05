import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from '../../css/styles.module.css';
import { selectSortAction } from '../../actions/sortActions';

const Sort = () => {
  const dispatch = useDispatch();
  const list = useSelector((state) => state.sort.list);

  const sortChangeHandler = useCallback((e) => {
    dispatch(selectSortAction(e.target.value));
  }, [dispatch]);

  return (
    <div className={styles.inlinePadding20}>
      <span>Sort by</span>

      <div className={styles.gap20} />

      <select onChange={sortChangeHandler}>
        {list.map((item) => (
          <option key={item.value} value={item.value}>{item.name}</option>
        ))}
      </select>
    </div>
  );
};

export default Sort;
