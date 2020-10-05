import React from 'react';
import {connect} from "react-redux";
import {addMovieAction} from "../../actions";
import MovieFormBase from "./MovieFormBase";

const MovieAddForm = ({dispatch}) => (
    <MovieFormBase
        title='Add Movie'
        saveHandler={(item) => dispatch(addMovieAction(item))}/>
)

export default connect()(MovieAddForm);
