import axios from 'axios';
import { WEATHER_API_KEY,
         WEATHER_API_URL,
         WEATHER_API_UNIT_SYSTEM,
         WEATHER_API_VERSION }  from '../config';

let _weatherAPI = null;

/**
 * Singleton service for managing data calls to the OpenWeatherMap API
 * @constructor
 */
class WeatherAPI {
    
    /**
     * @desc Fetches Data from an API method
     * @param {string} [method] Method
     * @param {object} [query] Request params
     * @return {Promise} Response
     */
    fetch({method, query}) {
        return new Promise((resolve, reject) => {
            axios({
                method:     'get',
                url:        `${WEATHER_API_URL}/${WEATHER_API_VERSION}/${method}`,
                params:     {
                    ...query,
                    units: WEATHER_API_UNIT_SYSTEM,
                    APPID: WEATHER_API_KEY
                }
            }).then(response => {
                resolve(response.data);
            }).catch(() => {
                reject();
            });
        });
    }
}

_weatherAPI = new WeatherAPI();
export default _weatherAPI;