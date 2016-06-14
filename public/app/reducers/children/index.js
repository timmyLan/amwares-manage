/**
 * Created by llan on 2016/6/14.
 */
import { combineReducers } from 'redux'
import infoDialogState from './infoDialog'
import warningDialogState from './warningDialog'
const childrenReducer = combineReducers({
    infoDialogState : infoDialogState,
    warningDialogState : warningDialogState
});

export default  childrenReducer;