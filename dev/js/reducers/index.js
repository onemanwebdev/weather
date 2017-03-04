import {combineReducers}    from 'redux';
import SearchDataReducer    from './searchDataReducer';

const reducers = combineReducers({
    searchData: SearchDataReducer
});

export default reducers
