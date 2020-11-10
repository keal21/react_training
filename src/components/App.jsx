import React from 'react';
import { Switch, Redirect, Route, useRouteMatch } from 'react-router-dom';
import MovieList from './movieList/MovieList';
import MovieAddForm from './movieForm/MovieAddForm';
import MovieEditForm from './movieForm/MovieEditForm';
import MovieDetails from './movieDetails/MovieDetails';
import Sort from './sort/Sort';
import Filter from './filter/Filter';
import styles from '../css/styles.module.css';
import MovieAddButton from './movieList/MovieAddButton';
import Search from './search/Search';

const App = () => {
  const match = useRouteMatch('/search/:search');
  const search = match && match.params.search;

  return (
    <>
      <Search search={search} />

      <div>
        <MovieAddButton />

        <div className={styles.gap100} />

        <Filter />

        <div className={styles.gap20} />

        <Sort />
      </div>

      <MovieList search={search} />

      <Switch>
        <Route path="/film/add" exact>
          <MovieAddForm />
        </Route>
        <Route path="/film/edit/:id" exact>
          <MovieEditForm />
        </Route>
        <Route path="/film/:id" exact>
          <MovieDetails />
        </Route>
        <Route path="/search/:search" exact />
        <Route path="/" exact />
        <Route path="*">
          <Redirect to="/404" />
        </Route>
      </Switch>
    </>
  );
};

export default App;
