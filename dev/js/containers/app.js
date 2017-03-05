import React, {Component}   from 'react';
import {connect}            from 'react-redux';
import isEmpty              from 'lodash.isempty'; 
import CurrentWeather       from '../components/currentWeather';
import ShortForecast        from '../components/shortForecast';
import LongForecast         from '../components/longForecast';
import SearchBar            from './searchBar';
import { fetchCurrentWeather, 
         fetchShortForecast,
         fetchLongForecast } from '../actions';
import { ERROR_MESSAGE }    from '../strings';
require('../../scss/style.scss');

class App extends Component {

    /**
     * @desc Dispatches actions with the query
     * @param {string} [query] Query
     * @return {undefined}
     */
    handleSubmit(query) {
        const { dispatch } = this.props;

        // Perform the fetches
        dispatch(fetchCurrentWeather({query}));
        dispatch(fetchShortForecast({query}));
        dispatch(fetchLongForecast({query}));
    }

    /**
     * @desc Returns components
     * @return {undefined}
     */
    renderData() {

        // If there was an error - show error box
        if (this.props.isError) return (<div className="info-box info-box--error">{ERROR_MESSAGE}</div>);

        // Return nothing if there is no data available
        if (isEmpty(this.props.currentWeather)) return null;

        return (
            <div>
                <CurrentWeather
                    data={this.props.currentWeather}
                />
                <ShortForecast
                    data={this.props.shortForecast}
                />
                <LongForecast
                    data={this.props.longForecast}
                />
            </div>
        );
    }

    render() {
        return (
            <div className="weather-widget__wrapper">
                <div className="weather-widget">
                    <div className="weather-widget__search-bar">
                        <SearchBar
                            onSubmit={(query) => {
                                this.handleSubmit({
                                    query
                                });
                            }}
                        />
                    </div>
                    <div className="weather-widget__content">
                        { this.renderData() }
                    </div>
                </div>
            </div>
        )
    }
};

const mapStateToProps = (state) => {
    const { weatherData } = state;
    return {
        isError: weatherData.isError,
        currentWeather: weatherData.currentWeather,
        shortForecast: weatherData.shortForecast,
        longForecast: weatherData.longForecast
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        dispatch
    };
};

const mergeProps = (stateProps, dispatchProps, ownProps) => {
    return {
        ...ownProps,
        ...dispatchProps,
        ...stateProps
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
    mergeProps
)(App)
