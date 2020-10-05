import React from 'react';
import {connect} from "react-redux";
import {getFilterListAction, getMovieListAction, getSortListAction, startAddMovieAction} from "../actions";
import MovieList from "./movieList/MovieList";
import MovieAddForm from "./movieForm/MovieAddForm";
import MovieEditForm from "./movieForm/MovieEditForm";
import MovieDetails from "./movieDetails/MovieDetails";
import Sort from "./sort/Sort";
import Filter from "./filter/Filter";
import styles from "../css/styles.module.css";

const App = (props) => {
    props.getMovieListAction();
    props.getSortListAction();
    props.getFilterListAction();

    return (
        <>
            <div>
                <button onClick={props.startAddMovieAction}>Add Movie</button>
                <div className={styles.gap100}/>
                <Filter/>
                <div className={styles.gap20}/>
                <Sort/>
            </div>

            <MovieList/>

            {props.isAddMovie && <MovieAddForm/>}
            {props.isEditMovie && <MovieEditForm/>}

            {props.isMovieDetails && <MovieDetails/>}
        </>
    )
}

const mapStateToProps = state => ({
    isAddMovie: state.movieEdit && state.movieEdit.id === null,
    isEditMovie: state.movieEdit && state.movieEdit.id !== null,
    isMovieDetails: state.movieDetails,
});

const mapDispatchToProps = dispatch => ({
    getMovieListAction: () => dispatch(getMovieListAction()),
    getSortListAction: () => dispatch(getSortListAction()),
    getFilterListAction: () => dispatch(getFilterListAction()),
    startAddMovieAction: () => dispatch(startAddMovieAction()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
