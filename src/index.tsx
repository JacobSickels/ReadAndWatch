import * as React from "react";
import * as ReactDOM from "react-dom";
import './styles/styles.scss'
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';

import { Provider } from 'react-redux';

import App  from "./components/App";

const store = configureStore();

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);


ReactDOM.render(jsx, document.getElementById("app"));