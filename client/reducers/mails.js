import {MAIL_LIST_RESULT, MAIL_SEND_RESULT} from '../constants/ActionTypes'

export const mailReducer = (state = {}, action) => {
  switch (action.type) {
    case MAIL_SEND_RESULT:
      return {
        ...state,
        ...action.payload
      }
    default:
      return state
  }
}

export const mailsReducer = (state = [], action) => {
  switch (action.type) {
    case MAIL_LIST_RESULT:
      return action.payload
    default:
      return state
  }
}