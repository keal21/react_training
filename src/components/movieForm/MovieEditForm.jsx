import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import MovieFormBase from './MovieFormBase';
import { callEditMovie } from '../../server/serverCalls';

const MovieEditForm = () => {
  const dispatch = useDispatch();

  const saveHandler = useCallback((item) => {
    callEditMovie(item, dispatch);
  }, [dispatch]);

  return (
    <MovieFormBase
      title="Edit Movie"
      saveHandler={saveHandler}
    />
  );
};

export default MovieEditForm;
