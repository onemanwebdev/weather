import {combineReducers}    from 'redux';
import SearchDataReducer    from './searchDataReducer';
import WeatherDataReducer   from './weatherDataReducer';

const reducers = combineReducers({
    searchData: SearchDataReducer,  // Data for the searchBar
    weatherData: WeatherDataReducer // Data for the weather
});

export default reducers
