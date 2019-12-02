import {FETCH_USER, SET_CURRENT_USER} from '../actions/types';
import isEmpty from '../validation/is-empty';

const initialState = {
    isAuthenticated: false,
    user: {}
}

export default function (state = initialState, action) {
    console.log(action);
    switch(action.type){
        case SET_CURRENT_USER:
            return {
                isAuthenticated: !isEmpty(action.payload),
                user: action.payload
            };
        case FETCH_USER:
            return action.payload || false;
        default:
            return state;
    }
};