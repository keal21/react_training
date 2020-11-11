import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import MovieFormBase from './MovieFormBase';
import { callAddMovie } from '../../server/serverCalls';
import getNewMovie from '../../reducers/movieEditReducer';

const MovieAddForm = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const saveHandler = useCallback((item) => {
    callAddMovie(item, dispatch);
    history.push('/');
  }, [dispatch, history]);

  return (
    <MovieFormBase
      title="Add Movie"
      source={getNewMovie()}
      saveHandler={saveHandler}
    />
  );
};

export default MovieAddForm;
