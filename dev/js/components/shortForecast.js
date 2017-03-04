import React from 'react';
import { ResponsiveContainer, XAxis, YAxis, Tooltip, LineChart, Line } from 'recharts';
import { SHORT_FORECAST_LABEL } from '../strings';

const ShortForecast = ({data}) => {
    return (
        <div>
            {data.list &&
                <div className="content-section">
                    <h1 className="content-section__heading">
                        {`${SHORT_FORECAST_LABEL}:`}
                    </h1>
                    <div className="content-section__chart">
                        <ResponsiveContainer 
                            minHeight={150} 
                            minWidth={100}
                        >
                            <LineChart 
                                data={data.list} 
                                margin={{ top: 10, right: -10, left: -30, bottom: 0 }}
                            >
                                <XAxis
                                    dataKey="dt_txt"
                                    label={null}
                                    padding={{ top: 10, bottom: 10 }}
                                    stroke="#757575"
                                    strokeWidth={0}
                                    minTickGap={35}
                                    fontSize={14}
                                    fontFamily={`"Cairo", helvetica, arial, sans-serif`}
                                />
                                <YAxis
                                    label={null}
                                    type="number"
                                    minTickGap={8}
                                    stroke="#757575"
                                    strokeWidth={0}
                                    fontSize={14}
                                    fontFamily={`"Cairo", helvetica, arial, sans-serif`}
                                />
                                <Line 
                                    dataKey='main.temp' 
                                    fill='#00BCD4'
                                />
                                <Tooltip
                                    label="Temp"
                                />
                            </LineChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            }
        </div>
    )
}

export default ShortForecast; 