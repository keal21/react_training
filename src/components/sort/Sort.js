import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import styles from "../../css/styles.module.css";
import {selectSortAction} from "../../actions/sortActions";

const Sort = () => {
    const dispatch = useDispatch();
    const list = useSelector(state => state.sort.list);

    const onChangeHandler = (e) => {
        dispatch(selectSortAction(e.target.value));
    }

    return (
        <div style={{display: 'inline-block', padding: '20px'}}>
            <span>Sort by</span>

            <div className={styles.gap20}/>

            <select onChange={onChangeHandler}>
                {list.map(item => (
                    <option key={item.value} value={item.value}>{item.name}</option>
                ))}
            </select>
        </div>
    );
};

export default Sort;
