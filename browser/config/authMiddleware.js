import { CALL_API } from 'redux-api-middleware'
import {
  AUTH_LOGIN_SUCCESS,
  AUTH_LOGOUT_REQUEST,
  AUTH_REMOVE_USER
} from '../constants/ActionTypes'
const SECRET_TOKEN = process.env.SECRET_TOKEN


export const authLocalManager = store => next => action => {
  if (action.type === AUTH_LOGIN_SUCCESS) {
    localStorage.setItem(SECRET_TOKEN, action.payload.token)
  }
  if ( action.type === AUTH_LOGOUT_REQUEST ||
      (action.payload &&
        (action.payload.status === 401 || action.payload.status === 403)
      )
  ) {
    localStorage.setItem(SECRET_TOKEN, '')
    action.type = AUTH_REMOVE_USER
  }

  return next(action)
}

export const apiAuthHeader = store => next => action => {
  const callApi = action[CALL_API]
  if (callApi) {
  	const token = localStorage.getItem(SECRET_TOKEN)
    callApi.headers = Object.assign({}, callApi.headers)
    callApi.headers['x-access-token'] = token
  }
  return next(action)
}

export default {
	apiAuthHeader,
	authLocalManager
}
