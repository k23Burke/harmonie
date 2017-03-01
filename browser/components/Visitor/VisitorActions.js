import { CALL_API } from 'redux-api-middleware'
import { API_ENDPOINT } from '../../constants/endPoints'

export function getVisitorData () {
  return {
    [CALL_API]: {
      endpoint: `${API_ENDPOINT}/api/visitor-data`,
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
      types: ['GET_VISITOR_DATA_REQUEST',
              'GET_VISITOR_DATA_SUCCESS',
              'GET_VISITOR_DATA_FAILURE']
    }
  }
}
