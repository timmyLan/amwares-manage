import { combineReducers } from 'redux'
import childrenReducer from './children'

const rootReducer = combineReducers({
  children: childrenReducer
});

export default rootReducer
