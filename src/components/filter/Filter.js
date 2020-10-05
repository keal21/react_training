import React from 'react';
import {connect} from "react-redux";
import {selectFilterAction} from "../../actions";
import styles from "../../css/styles.module.css";

const Filter = props => (
    <div style={{display: 'inline-block', padding: '20px'}}>
        <span>Filter by</span>
        <div className={styles.gap20}/>
        <select onChange={(e) => props.selectFilterAction(e.target.value)}>
            {props.list.map(item => (
                <option key={item} value={item}>{item}</option>
            ))}
        </select>
    </div>
)

const mapStateToProps = state => ({
    list: state.filter.list,
    selectedValue: state.filter.selectedValue,
});

const mapDispatchToProps = dispatch => ({
    selectFilterAction: item => dispatch(selectFilterAction(item)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
