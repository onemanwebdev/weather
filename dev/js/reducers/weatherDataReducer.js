import * as actionTypes from '../constants/actionTypes';

const defaultState = {
    isError: false,
    lastUpdated: null,
    currentWeather: {},
    shortForecast: {},
    longForecast: {}
};
export default function (state = defaultState, action) {
    switch (action.type) {
        case actionTypes.FETCH_CURRENT_WEATHER:
            if (action.isError) return {...state, isError: true}; 
            return {
                ...state,
                isError: false,
                lastUpdated: new Date(),
                currentWeather: action.payload
            };
        case actionTypes.FETCH_SHORT_FORECAST:
            if (action.isError) return {...state, isError: true}; 
            return {
                ...state,
                isError: false,
                lastUpdated: new Date(),
                shortForecast: action.payload
            };
        case actionTypes.FETCH_LONG_FORECAST:
            if (action.isError) return {...state, isError: true}; 
            return {
                ...state,
                isError: false,
                lastUpdated: new Date(),
                longForecast: action.payload
            };
    }
    return state;
}