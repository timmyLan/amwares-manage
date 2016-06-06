/**
 * Created by llan on 2016/5/25.
 */
import {CHANGE} from '../constants/actionTypes';

const value= 3;


export default function changeState(state = value, action) {
    switch(action.type) {
        case CHANGE:
            return action.value;
        default:
            return state;
    }
}