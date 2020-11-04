import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import styles from "../../css/styles.module.css";
import {selectFilterAction} from "../../actions/filterActions";

const Filter = () => {
    const dispatch = useDispatch();
    const list = useSelector(state => state.filter.list);

    const onChangeHandler = (e) => {
        dispatch(selectFilterAction(e.target.value));
    }

    return (
        <div style={{display: 'inline-block', padding: '20px'}}>
            <span>Filter by</span>

            <div className={styles.gap20}/>

            <select onChange={onChangeHandler}>
                {list.map(item => (
                    <option key={item.value} value={item.value}>{item.name}</option>
                ))}
            </select>
        </div>
    );
};

export default Filter;
