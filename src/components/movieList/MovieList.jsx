import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MovieListItem from './MovieListItem';
import { callGetMovieList } from '../../server/serverCalls';

const MovieList = () => {
  const dispatch = useDispatch();

  const filter = useSelector((state) => state.filter.selectedValue);
  const sort = useSelector((state) => state.sort.selectedValue);
  const movieList = useSelector((state) => state.movieList.list);
  const isOutdated = useSelector((state) => state.movieList.isOutdated);

  useEffect(() => {
    if (filter && sort) {
      callGetMovieList(filter, sort, dispatch);
    }
  }, [filter, sort, isOutdated, dispatch]);

  return movieList.map((item) => (
    <MovieListItem key={item.id} item={item} />
  ));
};

export default MovieList;
