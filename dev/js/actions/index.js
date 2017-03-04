import * as actionTypes from '../constants/actionTypes';

export const addSearchString = ({searchString}) => {
    return dispatch => {
        return dispatch({
            type: `${actionTypes.ADD_SEARCH_STRING}`,
            payload: searchString
        })
    }
}

export const fetchCurrentWeather = ({query}) => {
    return dispatch => {
        return dispatch({
            type: `${actionTypes.FETCH_CURRENT_WEATHER}`,
            payload: query
        })
    }
}

export const fetchShortForecast = ({query}) => {
    return dispatch => {
        return dispatch({
            type: `${actionTypes.FETCH_SHORT_FORECAST}`,
            payload: query
        })
    }
}

export const fetchLongForecast = ({query}) => {
    return dispatch => {
        return dispatch({
            type: `${actionTypes.FETCH_LONG_FORECAST}`,
            payload: query
        })
    }
}