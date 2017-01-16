import { combineReducers } from 'redux'

import rowReducer from './rowReducer'
import colReducer from './colReducer'

export default combineReducers({
  rowReducer,
  colReducer
})
