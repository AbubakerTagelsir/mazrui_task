import {FETCH_POSTS} from '../actions/types';
import { func } from 'prop-types';

export default function(state = [], action){
    switch(action.type){
        case FETCH_POSTS:
            return action.payload;
        default: 
            return state;
    }
}