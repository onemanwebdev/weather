import thunk    from 'redux-thunk';
import promise  from 'redux-promise';
import {createStore, applyMiddleware, compose} from 'redux';
import reducers from '../reducers';

// Middleware for the searchBar component
import searchBarMiddleware from '../middleware/searchBarMiddleware';
// Middleware for the weatherData components
import weatherDataMiddleware from '../middleware/weatherDataMiddleware';

const middleware = [thunk, promise, searchBarMiddleware, weatherDataMiddleware];
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    reducers,
    composeEnhancers(applyMiddleware(...middleware))
);

export default store;
