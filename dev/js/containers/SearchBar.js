// React stuff
import React, {Component} 	from 'react';
import {connect} 			from 'react-redux';
// Actions
import { addSearchString, fetchWeatherForQuery } from '../actions';
// Strings
import { CITY_LABEL } 		from '../strings';
// UI Stuff
import AutoComplete 		from 'material-ui/AutoComplete';
import getMuiTheme 			from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider 	from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin'; injectTapEventPlugin();

class SearchBar extends Component {
	constructor(props) {
		super(props);
		this.state = {
		  selectedData: ''
		}
	}

	handleSubmit(searchString) {
		const { dispatch } = this.props;
        dispatch(addSearchString({
            searchString
        }));
        this.props.onSubmit(searchString);
	}

	render() {
		return(
			<MuiThemeProvider muiTheme={getMuiTheme()}>
				<AutoComplete
					searchText          ={this.state.selectedData}
					floatingLabelText   ={CITY_LABEL}
					filter              ={AutoComplete.noFilter}
					openOnFocus         ={true}
                    fullWidth           ={true}
					dataSource          ={this.props.searchData}
					onNewRequest        ={(searchString) => {
						this.handleSubmit(searchString);
					}} 
				/>
			</MuiThemeProvider>
		)
	}
}

const mapStateToProps = (state) => {
    const { searchData } = state;
    return {
        searchData
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
)(SearchBar)
