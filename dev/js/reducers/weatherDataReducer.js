import * as actionTypes from '../constants/actionTypes';

const defaultState = {
    isError: false,
    lastUpdated: null,
    currentWeather: {}
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
    }
    return state;
}