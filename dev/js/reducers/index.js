import {combineReducers}    from 'redux';
import SearchDataReducer    from './searchDataReducer';
import WeatherDataReducer   from './weatherDataReducer';

const reducers = combineReducers({
    searchData: SearchDataReducer,
    weatherData: WeatherDataReducer
});

export default reducers
