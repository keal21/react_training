import React from 'react';
import {createStore} from "redux";
import {render} from "react-dom";
import {Provider} from "react-redux";
import rootReducer from './reducers';
import App from "./components/App";
import {getAllData} from "./server/serverCalls";

const store = createStore(rootReducer);

getAllData(store.dispatch);

render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
);
