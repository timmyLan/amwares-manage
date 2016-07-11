/**
 * Created by llan on 2016/6/14.
 */
import { combineReducers } from 'redux'
import infoDialogState from './infoDialog'
import warningDialogState from './warningDialog'
import searchDialogState from './searchDialog'
import tableInfo from './tableInfo'
const childrenReducer = combineReducers({
  infoDialogState: infoDialogState,
  warningDialogState: warningDialogState,
  searchDialogState: searchDialogState,
  tableInfo: tableInfo
});

export default childrenReducer;
