import React from 'react';
import { StaticRouter } from 'react-router-dom';
import App from '../../components/App';

export default function Index() {
  // eslint-disable-next-line react/jsx-filename-extension
  return <App Router={StaticRouter} location="/search/movie 2" />;
}
