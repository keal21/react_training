import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouteMatch } from 'react-router-dom';
import MovieListItem from './MovieListItem';
import { callGetMovieList } from '../../server/serverCalls';
import NoMoviesFound from './NoMovieList';

const MovieList = () => {
  const dispatch = useDispatch();

  const filter = useSelector((state) => state.filter.selectedValue);
  const sort = useSelector((state) => state.sort.selectedValue);
  const movieList = useSelector((state) => state.movieList.list);
  const isOutdated = useSelector((state) => state.movieList.isOutdated);

  const match = useRouteMatch('/search/:search');
  const search = match && match.params.search;

  useEffect(() => {
    if (filter && sort) {
      callGetMovieList(filter, sort, dispatch, search);
    }
  }, [filter, sort, isOutdated, dispatch, search]);

  return (
    <>
      {movieList.length > 0 && movieList.map((item) => (
        <MovieListItem key={item.id} item={item} />))}
      {movieList.length === 0 && <NoMoviesFound />}
    </>
  );
};

export default MovieList;
