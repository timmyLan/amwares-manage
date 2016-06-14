/**
 * Created by llan on 2016/6/13.
 */
import {INFO_OPEN,INFO_CLOSE} from '../constants/actionTypes'

const initialState =  {
    open : false,
    row : {}
};

export default function dialogState(state = initialState, action) {
    switch(action.type) {
        case INFO_OPEN:
            return {...state , open : true ,row: action.row};
        case INFO_CLOSE:
            return {...state , open : false};
        default:
            return state;
    }
}