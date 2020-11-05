import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { startAddMovieAction } from '../../actions/movieActions';

const MovieAddButton = () => {
  const dispatch = useDispatch();

  const onClickHandler = useCallback(() => {
    dispatch(startAddMovieAction());
  }, [dispatch]);

  return (
    <button type="button" onClick={onClickHandler}>Add Movie</button>
  );
};

export default MovieAddButton;
