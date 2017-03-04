import React from 'react';
import { ResponsiveContainer, XAxis, YAxis, Tooltip, BarChart, Bar } from 'recharts';
import { LONG_FORECAST_LABEL } from '../strings';

const LongForecast = ({data}) => {
    return (
        <div>
            {data.list &&
                <div className="content-section">
                    <h1 className="content-section__heading">
                        {`${LONG_FORECAST_LABEL}:`}
                    </h1>
                    <div className="content-section__chart">
                        <ResponsiveContainer 
                            minHeight={150} 
                            minWidth={100}
                        >
                            <BarChart 
                                data={data.list} 
                                margin={{ top: 10, right: -10, left: -30, bottom: 0 }}
                            >
                                <XAxis
                                    label={null}
                                    padding={{ top: 10, bottom: 10 }}
                                    stroke="#757575"
                                    strokeWidth={0}
                                    minTickGap={35}
                                    fontSize={14}
                                    fontFamily={`"Cairo", helvetica, arial, sans-serif`}
                                />
                                <YAxis
                                    dataKey="temp.day"
                                    label={null}
                                    type="number"
                                    minTickGap={8}
                                    stroke="#757575"
                                    strokeWidth={0}
                                    fontSize={14}
                                    fontFamily={`"Cairo", helvetica, arial, sans-serif`}
                                />
                                <Bar 
                                    dataKey='temp.day' 
                                    fill='#64DDBB'
                                />
                                <Tooltip
                                    label="Temp"
                                />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            }
        </div>
    )
}

export default LongForecast; 