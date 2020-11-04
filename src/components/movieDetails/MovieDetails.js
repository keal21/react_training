import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import Popup from "../system/Popup";
import {closeMovieDetailsAction} from "../../actions/movieActions";

const MovieDetails = () => {
    const dispatch = useDispatch();
    const item = useSelector(state => state.movieDetails);

    const cancelHandler = () => dispatch(closeMovieDetailsAction());

    return (
        <Popup>
            <div style={{minWidth: '600px'}}>
                <div style={{display: 'inline-block'}}>
                    <img alt='movie' src={item.url} style={{width: '300px', height: '450px'}}/>
                </div>

                <div style={{display: 'inline-block', padding: '0 20px', verticalAlign: 'top'}}>
                    <h1>{item.title}</h1>
                    <h4>{item.releaseDate}</h4>
                    <h4>{item.genre}</h4>
                    <h3>{item.overview}</h3>
                    <h5>{item.runtime}</h5>
                </div>
            </div>

            <p/>

            <button onClick={cancelHandler}>Close</button>
        </Popup>
    );
}

export default MovieDetails;
