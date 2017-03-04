import React from 'react';
import { TEMPERATURE_LABEL,
         PRESSURE_LABEL,
         HUMIDITY_LABEL,
         CLOUD_COVERAGE_LABEL } from '../strings';

const CurrentWeather = ({currentWeather}) => {
    console.log(currentWeather);
    return (
        <div>
            {currentWeather.main &&
                <div className="content-section">
                    <h1 className="content-section__heading">{`Current weather in ${currentWeather.name}, ${currentWeather.sys.country}:`}</h1>
                    <ul className="content-section__list">
                        <li>
                            {TEMPERATURE_LABEL} <b>{currentWeather.main.temp}</b>
                        </li>
                        <li>
                            {HUMIDITY_LABEL} <b>{currentWeather.main.humidity}</b>
                        </li>
                        <li>
                            {PRESSURE_LABEL} <b>{currentWeather.main.pressure}</b>
                        </li>
                        <li>
                            {CLOUD_COVERAGE_LABEL} <b>{`${currentWeather.clouds.all}%`}</b>
                        </li>
                    </ul>
                </div>
            }
        </div>
    )
}

export default CurrentWeather; 