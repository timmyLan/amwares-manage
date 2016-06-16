/**
 * Created by llan on 2016/6/13.
 */
import {TABLE_ROWS_LIST,CREATE_CHILD,DELETE_CHILD,UPDATE_CHILD} from '../../constants/actionTypes'

const initialState = [];

export default function tableRows(state = initialState, action) {
    switch(action.type) {
        case TABLE_ROWS_LIST:
            return [...state , ...action.json];
        case CREATE_CHILD:
            return [action.json,...state];
        case DELETE_CHILD:
            return action.json;
        case UPDATE_CHILD:
            return action.json;
        default:
            return state;
    }
}