import { combineReducers } from 'redux'
import postReducer from './postReducer'
import counterReducer from './counterReducer'

export default combineReducers({
    api: postReducer,
    counter: counterReducer
})