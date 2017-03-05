import React, {Component} 	from 'react';
import {connect} 			from 'react-redux';
import { CITY_LABEL } 		from '../strings';
import AutoComplete 		from 'material-ui/AutoComplete';
import getMuiTheme 			from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider 	from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin'; injectTapEventPlugin();
import { addSearchString, 
         fetchWeatherForQuery } from '../actions';

class SearchBar extends Component {
	constructor(props) {
		super(props);
		this.state = {
		  selectedText: ''
		}
	}

    /**
     * @desc Adds the search query to the list and returns callback
     * @param {string} [searchString] search string
     * @return {undefined}
     */
	handleSubmit(searchString) {
		const { dispatch } = this.props;

        // Return if the a value was already selected
        if (this.state.selectedText === searchString) return;
        
        // Add the string to the list
        dispatch(addSearchString({
            searchString
        }));

        // Execute the callback
        this.props.onSubmit(searchString);
        
        // Set the current search text
        this.setState({
            selectedText: searchString
        });
	}

    /**
     * @desc Update only when something has changed
     * @param {object} [nextProps] Props
     * @param {object} [nextState] State
     * @returns {bool} Update
    */
    shouldComponentUpdate(nextProps, nextState) {

        // Updates the component when selectedText has changed
        if (this.state.selectedText !== nextState.selectedText) return true;
            
        return false;
    }

	render() {
		return(
			<MuiThemeProvider muiTheme={getMuiTheme()}>
				<AutoComplete
					searchText          ={this.state.selectedText}
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
