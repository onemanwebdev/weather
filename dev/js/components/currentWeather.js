import React from 'react';
import { TEMPERATURE_LABEL,
         PRESSURE_LABEL,
         CURRENT_WEATHER_LABEL,
         HUMIDITY_LABEL,
         CLOUD_COVERAGE_LABEL } from '../strings';

const CurrentWeather = ({data}) => {
    return (
        <div>
            {data.main &&
                <div className="content-section">
                    <h1 className="content-section__heading">
                        {`${CURRENT_WEATHER_LABEL} ${data.name}, ${data.sys.country}:`}
                    </h1>
                    <ul className="content-section__list">
                        <li>
                            {TEMPERATURE_LABEL} <b>{`${data.main.temp} C`}</b>
                        </li>
                        <li>
                            {HUMIDITY_LABEL} <b>{`${data.main.humidity} %`}</b>
                        </li>
                        <li>
                            {PRESSURE_LABEL} <b>{`${data.main.pressure} hPa`}</b>
                        </li>
                        <li>
                            {CLOUD_COVERAGE_LABEL} <b>{`${data.clouds.all} %`}</b>
                        </li>
                    </ul>
                </div>
            }
        </div>
    )
}

export default CurrentWeather; 