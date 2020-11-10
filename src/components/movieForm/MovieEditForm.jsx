import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Redirect, useHistory, useParams } from 'react-router-dom';
import MovieFormBase from './MovieFormBase';
import { callEditMovie, callGetById } from '../../server/serverCalls';

const MovieEditForm = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const [isLoaded, setIsLoaded] = useState(false);
  const [movie, setMovie] = useState(null);
  const history = useHistory();

  useEffect(() => {
    callGetById(id).then((res) => {
      setMovie(res);
      setIsLoaded(true);
    });
  }, [id]);

  const saveHandler = useCallback((item) => {
    callEditMovie(item, dispatch);
    history.push('/');
  }, [dispatch, history]);

  return (
    <>
      {isLoaded && !movie && <Redirect to="/404" />}
      {isLoaded && movie && (
        <MovieFormBase
          title="Edit Movie"
          source={movie}
          saveHandler={saveHandler}
        />
      )}
    </>
  );
};

export default MovieEditForm;
