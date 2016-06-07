/**
 * Created by llan on 2016/6/6.
 */
import {TITLE_CHANGE} from '../constants/actionTypes'

const initialState ={
    title : 'Amwares'
};

export default function title(state = initialState, action) {
    switch(action.type) {
        case TITLE_CHANGE:
            return { ...state, title: action.title }
        default:
            return state;
    }
}