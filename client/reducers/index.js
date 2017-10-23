import { combineReducers } from 'redux'
import { mailReducer, mailsReducer } from './mails'

export default combineReducers({
  mail: mailReducer,
  mails: mailsReducer
})
