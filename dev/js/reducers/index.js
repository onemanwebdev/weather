import {combineReducers}    from 'redux';
import SearchDataReducer    from './SearchDataReducer';

const reducers = combineReducers({
    searchData: SearchDataReducer
});

export default reducers
