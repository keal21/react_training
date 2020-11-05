import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import styles from '../../css/styles.module.css';
import { callDeleteMovie } from '../../server/serverCalls';
import { showMovieDetailsAction, startEditMovieAction } from '../../actions/movieActions';
import Movie from '../../types/movieType';

const MovieListItem = ({ item }) => {
  const dispatch = useDispatch();

  const showDetailsHandler = useCallback(() => {
    dispatch(showMovieDetailsAction(item));
  }, [item, dispatch]);

  const startEditMovieHandler = useCallback(() => {
    dispatch(startEditMovieAction(item));
  }, [item, dispatch]);

  const deleteMovieHandler = useCallback(() => {
    callDeleteMovie(item, dispatch);
  }, [item, dispatch]);

  return (
    <div className={styles.inlinePadding20}>
      {/* eslint-disable-next-line max-len */}
      {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */}
      <div onClick={showDetailsHandler} className={styles.cursorPointer}>
        <img alt="movie" src={item.url} className={styles.imagePreview} />
        <br />

        <span>{item.title}</span>
        <br />
        <span>{item.releaseDate}</span>
        <br />
        <span>{item.genre}</span>
        <br />
      </div>

      <button type="button" onClick={startEditMovieHandler}>Edit</button>

      <div className={styles.gap20} />

      <button type="button" onClick={deleteMovieHandler}>Delete</button>
    </div>
  );
};

MovieListItem.propTypes = Movie;

export default MovieListItem;
