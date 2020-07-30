import React from 'react';
import ReactDOM from 'react-dom';
import FunctionComponent from "./components/functionComponent";
import PureComponent from "./components/pureComponent";
import Component from "./components/component";
import CreateElementComponent from "./components/createElementComponent";

ReactDOM.render(
  <React.StrictMode>
    <FunctionComponent />
    <PureComponent />
    <Component />
    <CreateElementComponent />
  </React.StrictMode>,
  document.getElementById('root')
);
