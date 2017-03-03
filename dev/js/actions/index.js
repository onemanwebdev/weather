import * as actionTypes from '../constants/actionTypes';

export const addSearchString = ({searchString}) => {
    return dispatch => {
        return dispatch({
            type: `${actionTypes.ADD_SEARCH_STRING}`,
            payload: searchString
        })
    }
}