import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from '../../css/styles.module.css';
import { selectFilterAction } from '../../actions/filterActions';

const Filter = () => {
  const dispatch = useDispatch();
  const list = useSelector((state) => state.filter.list);

  const filterChangeHandler = useCallback((e) => {
    dispatch(selectFilterAction(e.target.value));
  }, [dispatch]);

  return (
    <div className={styles.inlinePadding20}>
      <span>Filter by</span>

      <div className={styles.gap20} />

      <select onChange={filterChangeHandler}>
        {list.map((item) => (
          <option key={item.value} value={item.value}>{item.name}</option>
        ))}
      </select>
    </div>
  );
};

export default Filter;
