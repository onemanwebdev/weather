import WeatherAPI       from '../services/weatherAPI';
import * as actionTypes from '../constants/actionTypes';

const weatherDataMiddleware = store => {
    return next => {
        return action => {
            switch (action.type) {
                case actionTypes.FETCH_CURRENT_WEATHER:
                    return WeatherAPI.fetch({
                        url: 'http://api.openweathermap.org/data/2.5/weather',
                        query: {q: action.payload}
                    }).then((data) => {
                        return next({
                            ...action,
                            payload: data
                        });
                    },() => {
                        return next({
                            ...action,
                            isError: true
                        });
                    });
                case actionTypes.FETCH_SHORT_FORECAST:
                    return WeatherAPI.fetch({
                        url: 'http://api.openweathermap.org/data/2.5/forecast',
                        query: {q: action.payload}
                    }).then((data) => {
                        return next({
                            ...action,
                            payload: data
                        });
                    },() => {
                        return next({
                            ...action,
                            isError: true
                        });
                    });
                case actionTypes.FETCH_LONG_FORECAST:
                    return WeatherAPI.fetch({
                        url: 'http://api.openweathermap.org/data/2.5/forecast/daily',
                        query: {q: action.payload}
                    }).then((data) => {
                        return next({
                            ...action,
                            payload: data
                        });
                    },() => {
                        return next({
                            ...action,
                            isError: true
                        });
                    });
            }
            return next(action);
        }
    }
};

export default weatherDataMiddleware;
