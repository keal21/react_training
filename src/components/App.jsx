import React from 'react';
import {
  Switch, Redirect, Route,
} from 'react-router-dom';
import MovieList from './movieList/MovieList';
import MovieAddForm from './movieForm/MovieAddForm';
import MovieEditForm from './movieForm/MovieEditForm';
import MovieDetails from './movieDetails/MovieDetails';
import Sort from './sort/Sort';
import Filter from './filter/Filter';
import styles from '../css/styles.module.css';
import MovieAddButton from './movieList/MovieAddButton';
import Search from './search/Search';
import NotFound from '../404';

// eslint-disable-next-line react/prop-types
const App = ({ Router, location, context }) => {
  return (
    <Router location={location} context={context}>
      <Switch>
        <Route path="/404" exact>
          <NotFound />
        </Route>
        <Route path="/">
          <Search />

          <div>
            <MovieAddButton />

            <div className={styles.gap100} />

            <Filter />

            <div className={styles.gap20} />

            <Sort />
          </div>

          <MovieList />

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
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
