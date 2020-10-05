import React from 'react';
import {connect} from "react-redux";
import {selectSortAction} from "../../actions";
import styles from "../../css/styles.module.css";

const Sort = props => (
    <div style={{display: 'inline-block', padding: '20px'}}>
        <span>Sort by</span>
        <div className={styles.gap20}/>
        <select onChange={(e) => props.selectSortAction(e.target.value)}>
            {props.list.map(item => (
                <option key={item.field} value={item.field}>{item.name}</option>
            ))}
        </select>
    </div>
)

const mapStateToProps = state => ({
    list: state.sort.list,
    selectedValue: state.sort.selectedValue,
});

const mapDispatchToProps = dispatch => ({
    selectSortAction: item => dispatch(selectSortAction(item)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Sort);
