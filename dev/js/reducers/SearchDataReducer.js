import * as actionTypes         from '../constants/actionTypes';

const defaultState = [];
export default function (state = defaultState, action) {
    switch (action.type) {
        case actionTypes.ADD_SEARCH_STRING:
            return state;
    }
    return state;
}
