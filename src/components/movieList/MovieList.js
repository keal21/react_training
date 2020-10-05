import React from "react";
import {connect} from 'react-redux';
import MovieListItem from "./MovieListItem";

const MovieList = ({movieList}) => (
    <>
        {movieList.map(item => (
            <MovieListItem key={item.id} item={item}/>
        ))}
    </>
)

function getList(source, sort, filter) {
    let result = source.concat();

    if (filter) {
        result = result.filter(item => item.genre === filter);
    }

    if (sort) {
        result.sort((a, b) => a[sort].localeCompare(b[sort]));
    }

    return result;
}

const mapStateToProps = state => ({
    movieList: getList(state.movieList, state.sort.selectedValue, state.filter.selectedValue),
});

export default connect(mapStateToProps)(MovieList);
