import React, { useCallback } from 'react';
import { useHistory } from 'react-router-dom';

const MovieAddButton = () => {
  const history = useHistory();

  const onClickHandler = useCallback(() => {
    history.push('/film/add');
  }, [history]);

  return (
    <button type="button" onClick={onClickHandler}>Add Movie</button>
  );
};

export default MovieAddButton;
