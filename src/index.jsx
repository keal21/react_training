import React from 'react';
import { createStore } from 'redux';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import rootReducer from './reducers';
import { getAllData } from './server/serverCalls';
import App from './components/App';
import NotFound from './404';

const store = createStore(rootReducer);

getAllData(store.dispatch);

render(
  <BrowserRouter>
    <Provider store={store}>
      <Switch>
        <Route path="/404" exact>
          <NotFound />
        </Route>
        <Route path="/">
          <App />
        </Route>
      </Switch>
    </Provider>
  </BrowserRouter>,
  document.getElementById('root'),
);
