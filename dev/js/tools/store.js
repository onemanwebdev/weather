import thunk    from 'redux-thunk';
import promise  from 'redux-promise';
import {createStore, applyMiddleware, compose} from 'redux';
import reducers from '../reducers';
import searchBarMiddleware from '../middleware/searchBarMiddleware';

const middleware = [thunk, promise, searchBarMiddleware];
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    reducers,
    composeEnhancers(applyMiddleware(...middleware))
);

export default store;
