import * as actionTypes         from '../constants/actionTypes';
import { RECENTLY_USED_LIMIT }  from '../config';

const defaultState = [];
export default function (state = defaultState, action) {
    switch (action.type) {
        case actionTypes.ADD_SEARCH_STRING:
            // Remove element if already in the array
            if (state.indexOf(action.payload) > -1) state.splice(state.indexOf(action.payload),1);
            // Add element to the beginning of the array
            state.unshift(action.payload);
            // Slice if reached the limit
            if (state.length > RECENTLY_USED_LIMIT) return state.slice(0, RECENTLY_USED_LIMIT);
            // Return the array
            return state;
    }
    return state;
}
