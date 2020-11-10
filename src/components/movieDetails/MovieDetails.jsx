import React, { useCallback, useEffect, useState } from 'react';
import { Redirect, useHistory, useParams } from 'react-router-dom';
import Popup from '../system/Popup';
import styles from '../../css/styles.module.css';
import { callGetById } from '../../server/serverCalls';

const MovieDetails = () => {
  const { id } = useParams();
  const [isLoaded, setIsLoaded] = useState(false);
  const [item, setItem] = useState(null);
  const history = useHistory();

  useEffect(() => {
    callGetById(id)
      .then((res) => {
        setItem(res);
        setIsLoaded(true);
      });
  }, [id]);

  const cancelHandler = useCallback(() => {
    history.push('/');
  }, [history]);

  return (
    <>
      {isLoaded && !item && <Redirect to="/404" />}
      {isLoaded && item && (
      <Popup>
        <div className={styles.minWidth600}>
          <div className={styles.inline}>
            <img alt="movie" src={item.url} className={styles.imagePreview}/>
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
      )}
    </>
  );
};

export default MovieDetails;
