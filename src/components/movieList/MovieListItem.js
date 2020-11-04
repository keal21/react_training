import React from 'react';
import {useDispatch} from "react-redux";
import styles from '../../css/styles.module.css';
import {callDeleteMovie} from "../../server/serverCalls";
import {showMovieDetailsAction, startEditMovieAction} from "../../actions/movieActions";

const MovieListItem = ({item}) => {
    const dispatch = useDispatch();

    const showDetailsHandler = () => dispatch(showMovieDetailsAction(item));
    const startEditMovieHandler = () => dispatch(startEditMovieAction(item));
    const deleteMovieHandler = () => callDeleteMovie(item, dispatch);

    return (
        <div style={{display: 'inline-block', padding: '20px'}}>
            <div onClick={showDetailsHandler} style={{cursor: 'pointer'}}>
                <img alt='movie' src={item.url} style={{width: '300px', height: '450px'}}/><br/>

                <span>{item.title}</span><br/>
                <span>{item.releaseDate}</span><br/>
                <span>{item.genre}</span><br/>
            </div>

            <button onClick={startEditMovieHandler}>Edit</button>

            <div className={styles.gap20}/>

            <button onClick={deleteMovieHandler}>Delete</button>
        </div>
    )
}

export default MovieListItem;
