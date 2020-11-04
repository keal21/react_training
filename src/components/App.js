import React from 'react';
import {useSelector} from "react-redux";
import MovieList from "./movieList/MovieList";
import MovieAddForm from "./movieForm/MovieAddForm";
import MovieEditForm from "./movieForm/MovieEditForm";
import MovieDetails from "./movieDetails/MovieDetails";
import Sort from "./sort/Sort";
import Filter from "./filter/Filter";
import styles from "../css/styles.module.css";
import MovieAddButton from "./movieList/MovieAddButton";

const App = () => {
    const isAddMovie = useSelector(state => state.movieEdit && !state.movieEdit.id);
    const isEditMovie = useSelector(state => state.movieEdit && state.movieEdit.id);
    const isMovieDetails = useSelector(state => state.movieDetails);

    return (
        <>
            <div>
                <MovieAddButton/>

                <div className={styles.gap100}/>

                <Filter/>

                <div className={styles.gap20}/>

                <Sort/>
            </div>

            <MovieList/>

            {isAddMovie && <MovieAddForm/>}
            {isEditMovie && <MovieEditForm/>}

            {isMovieDetails && <MovieDetails/>}
        </>
    )
}

export default App;
