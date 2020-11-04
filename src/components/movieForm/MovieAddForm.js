import React from 'react';
import {connect} from "react-redux";
import MovieFormBase from "./MovieFormBase";
import {callAddMovie} from "../../server/serverCalls";

const MovieAddForm = ({dispatch}) => (
    <MovieFormBase
        title='Add Movie'
        saveHandler={(item) => callAddMovie(item, dispatch)}/>
);


export default connect()(MovieAddForm);
