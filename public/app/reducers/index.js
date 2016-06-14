import { combineReducers } from 'redux'
import dialogInfoState from './info'
import dialogWarningState from './warning'

const rootReducer = combineReducers({
    dialogInfoState : dialogInfoState,
    dialogWarningState　: dialogWarningState
});

export default rootReducer
