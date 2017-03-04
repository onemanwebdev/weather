import React, {Component}   from 'react';
import {connect}            from 'react-redux';
import isEmpty              from 'lodash.isempty'; 
import CurrentWeather       from '../components/currentWeather';
import SearchBar            from '../containers/searchBar';
import { fetchCurrentWeather, fetchShortForecast } from '../actions';
import { ERROR_MESSAGE }    from '../strings';
require('../../scss/style.scss');

class App extends Component {

    handleSubmit(query) {
        const { dispatch } = this.props;
        dispatch(fetchCurrentWeather({query}));
        dispatch(fetchShortForecast({query}));
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
                        {!this.props.isError ?
                            !isEmpty(this.props.currentWeather) &&
                                <CurrentWeather
                                    currentWeather={this.props.currentWeather}
                                />
                            
                        :
                            <div className="info-box info-box--error">
                                {ERROR_MESSAGE}
                            </div>
                        }
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
        currentWeather: weatherData.currentWeather
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
