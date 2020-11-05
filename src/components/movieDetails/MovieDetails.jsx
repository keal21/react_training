import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Popup from '../system/Popup';
import styles from '../../css/styles.module.css';
import { closeMovieDetailsAction } from '../../actions/movieActions';

const MovieDetails = () => {
  const dispatch = useDispatch();
  const item = useSelector((state) => state.movieDetails);

  const cancelHandler = useCallback(() => {
    dispatch(closeMovieDetailsAction());
  }, [dispatch]);

  return (
    <Popup>
      <div className={styles.minWidth600}>
        <div className={styles.inline}>
          <img alt="movie" src={item.url} className={styles.imagePreview} />
        </div>

        <div className={styles.inline}>
          <h1>{item.title}</h1>
          <h4>{item.releaseDate}</h4>
          <h4>{item.genre}</h4>
          <h3>{item.overview}</h3>
          <h5>{item.runtime}</h5>
        </div>
      </div>

      <p />

      <button type="button" onClick={cancelHandler}>Close</button>
    </Popup>
  );
};

export default MovieDetails;
