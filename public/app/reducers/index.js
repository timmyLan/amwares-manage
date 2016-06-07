import { combineReducers } from 'redux'
import title from './title'
import {tableData,tableType} from './table'

const rootReducer = combineReducers({
    appBarTitle : title,
    tableData : tableData,
    tableType : tableType
});

export default rootReducer
