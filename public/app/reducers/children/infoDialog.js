/**
 * Created by llan on 2016/6/13.
 */
import {INFO_OPEN,INFO_CLOSE,INFO_TITLE} from '../../constants/actionTypes'

const initialState =  {
    open : false,
    row : {} ,
    title : ''
};

export default function infoDialogState(state = initialState, action) {
    switch(action.type) {
        case INFO_OPEN:
            return {...state , open : true ,row: action.row};
        case INFO_CLOSE:
            return {...state , open : false};
        case INFO_TITLE:
            return {...state , title : action.title};
        default:
            return state;
    }
}