import React from 'react';
import { Provider } from 'react-redux';
import { useStore } from '../store';
import { getAllData } from '../server/serverCalls';

// eslint-disable-next-line react/prop-types
export default function App({ Component, pageProps }) {
  // eslint-disable-next-line react/prop-types
  const store = useStore(pageProps.initialReduxState);

  getAllData(store.dispatch);

  return (
    // eslint-disable-next-line react/jsx-filename-extension
    <Provider store={store}>
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <Component {...pageProps} store={store} />
    </Provider>
  );
}
