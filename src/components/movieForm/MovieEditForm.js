import React from 'react';
import {connect} from "react-redux";
import {editMovieAction} from "../../actions";
import MovieFormBase from "./MovieFormBase";

const MovieEditForm = ({dispatch}) => (
    <MovieFormBase
        title='Edit Movie'
        saveHandler={(item) => dispatch(editMovieAction(item))}/>
)

export default connect()(MovieEditForm);
