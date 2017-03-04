import axios                from 'axios';
import { WEATHER_API_KEY }  from '../config';

let _weatherAPI = null;

class WeatherAPI {

    fetch({url, query}) {
        return new Promise((resolve, reject) => {
            axios({
                method:     'get',
                url:        url,
                params:     {
                    ...query,
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