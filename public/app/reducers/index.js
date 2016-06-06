import { combineReducers } from 'redux'
import changeState from './toolbar'

const rootReducer = combineReducers({
    value : changeState
});

export default rootReducer
