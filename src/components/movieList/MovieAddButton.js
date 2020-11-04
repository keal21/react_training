import React from 'react';
import {useDispatch} from "react-redux";
import {startAddMovieAction} from "../../actions/movieActions";

const MovieAddButton = () => {
    const dispatch = useDispatch();

    const onChangeHandler = () => dispatch(startAddMovieAction());

    return (
        <button onClick={onChangeHandler}>Add Movie</button>
    )
}

export default MovieAddButton;
