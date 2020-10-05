import React from 'react';
import {connect} from "react-redux";
import {startEditMovieAction, deleteMovieAction, showDetailMovieAction} from "../../actions";
import styles from '../../css/styles.module.css';

const MovieListItem = ({item, ...props}) => {
    return (
        <div style={{display: 'inline-block', padding: '20px'}}>
            <div onClick={() => {props.showDetailMovieAction(item)}} style={{cursor: 'pointer'}}>
                <img alt='movie' src={item.url} style={{width: '300px', height: '450px'}}/><br/>

                <span>{item.title}</span><br/>
                <span>{item.releaseDate}</span><br/>
                <span>{item.genre}</span><br/>
            </div>

            <button onClick={() => {props.startUpdateMovieAction(item)}}>Edit</button>

            <div className={styles.gap20}/>

            <button onClick={() => {props.deleteMovieAction(item)}}>Delete</button>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    startUpdateMovieAction: item => dispatch(startEditMovieAction(item)),
    deleteMovieAction: item => dispatch(deleteMovieAction(item)),
    showDetailMovieAction: item => dispatch(showDetailMovieAction(item)),
});

export default connect(null, mapDispatchToProps)(MovieListItem);
