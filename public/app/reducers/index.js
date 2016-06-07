import { combineReducers } from 'redux'
import title from './title'
import tableData from './table'

const rootReducer = combineReducers({
    appBarTitle : title,
    tableData : tableData
});

export default rootReducer
