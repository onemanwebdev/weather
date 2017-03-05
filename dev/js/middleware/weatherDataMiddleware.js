import WeatherAPI               from '../services/weatherAPI';
import * as actionTypes         from '../constants/actionTypes';
import * as weatherAPIMethods   from '../constants/weatherAPIMethods';

const weatherDataMiddleware = store => {
    return next => {
        return action => {

            let weatherAPIMethod = '';
            if (action.type == actionTypes.FETCH_CURRENT_WEATHER) weatherAPIMethod = weatherAPIMethods.CURRENT_WEATHER;
            if (action.type == actionTypes.FETCH_SHORT_FORECAST) weatherAPIMethod = weatherAPIMethods.HOUR_FORECAST;
            if (action.type == actionTypes.FETCH_LONG_FORECAST) weatherAPIMethod = weatherAPIMethods.DAILY_FORECAST;

            switch (action.type) {
                case actionTypes.FETCH_CURRENT_WEATHER:
                case actionTypes.FETCH_SHORT_FORECAST:
                case actionTypes.FETCH_LONG_FORECAST:
                    return WeatherAPI.fetch({
                        method: weatherAPIMethod,
                        query: {q: action.payload}
                    }).then((data) => {
                        return next({
                            ...action,
                            payload: data
                        });
                    },() => { // Return isError if there was a reject
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
