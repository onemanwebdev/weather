import * as actionTypes from '../constants/actionTypes';
import { RECENTLY_USED_LIMIT }  from '../config';

const searchBarMiddleware = store => {
    return next => {
        return action => {
            switch (action.type) {
                case actionTypes.ADD_SEARCH_STRING:
                    let searchData = store.getState().searchData;
                    // Remove element if already in the array
                    if (searchData.indexOf(action.payload) > -1) searchData.splice(searchData.indexOf(action.payload),1);
                    // Add element to the beginning of the array
                    searchData.unshift(action.payload);
                    // Slice if reached the limit
                    if (searchData.length > RECENTLY_USED_LIMIT) searchData = searchData.slice(0, RECENTLY_USED_LIMIT);
            }
            return next(action);
        }
    }
};

export default searchBarMiddleware;
