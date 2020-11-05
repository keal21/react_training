import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import MovieFormBase from './MovieFormBase';
import { callAddMovie } from '../../server/serverCalls';

const MovieAddForm = () => {
  const dispatch = useDispatch();

  const saveHandler = useCallback((item) => {
    callAddMovie(item, dispatch);
  }, [dispatch]);

  return (
    <MovieFormBase
      title="Add Movie"
      saveHandler={saveHandler}
    />
  );
};

export default MovieAddForm;
