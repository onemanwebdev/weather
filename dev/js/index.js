import 'babel-polyfill';
import React        from 'react';
import ReactDOM     from "react-dom";
import {Provider}   from 'react-redux';
import store        from './tools/store';
import App          from './containers/app';

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
