/**
 * Created by llan on 2016/6/14.
 */
import { combineReducers } from 'redux'
import infoDialogState from './infoDialog'
import warningDialogState from './warningDialog'
import tableRows from './tableRows'
const childrenReducer = combineReducers({
    infoDialogState : infoDialogState,
    warningDialogState : warningDialogState,
    tableRows : tableRows
});

export default  childrenReducer;