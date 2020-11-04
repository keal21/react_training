import React from 'react';
import {connect} from "react-redux";
import MovieFormBase from "./MovieFormBase";
import {callEditMovie} from "../../server/serverCalls";

const MovieEditForm = ({dispatch}) => (
    <MovieFormBase
        title='Edit Movie'
        saveHandler={(item) => callEditMovie(item, dispatch)}/>
)

export default connect()(MovieEditForm);
