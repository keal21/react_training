import React from 'react';
import { createStore } from 'redux';
import { hydrate } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import rootReducer from './reducers';
import { getAllData } from './server/serverCalls';
import App from './components/App';

const store = createStore(rootReducer);

getAllData(store.dispatch);

hydrate(
  <Provider store={store}>
    <App Router={BrowserRouter} store={store} />
  </Provider>,
  document.getElementById('root'),
);
