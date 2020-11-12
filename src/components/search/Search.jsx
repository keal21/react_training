import React, { useCallback, useState } from 'react';
import { useHistory, useRouteMatch } from 'react-router-dom';

const Search = () => {
  const match = useRouteMatch('/search/:search');
  const currentSearch = match && match.params.search;

  const history = useHistory();
  const [newSearch, setNewSearch] = useState(currentSearch || '');

  const onChangeHandler = (e) => {
    setNewSearch(e.target.value);
  };

  const onClickHandler = useCallback(() => {
    history.push(`/search/${newSearch}`);
  }, [history, newSearch]);

  return (
    <div>
      <input type="text" name="title" value={newSearch} onChange={onChangeHandler} />
      <button type="button" onClick={onClickHandler}>Search</button>
    </div>
  );
};

export default Search;
