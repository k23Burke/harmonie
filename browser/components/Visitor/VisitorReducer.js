import { Map, fromJS } from 'immutable';

export default function(state = Map(), action) {
  switch (action.type){
    case 'GET_VISITOR_DATA_REQUEST':
      return state.set('loading', true)
                  .set('loaded', false)
    case 'GET_VISITOR_DATA_SUCCESS':
      return state.set('loading', false)
                  .set('loaded', true)
                  .setIn(['data', 'roleTypes'], fromJS(action.payload.roleTypes))
                  .setIn(['data', 'organizationTypes'], fromJS(action.payload.organizationTypes))
    case 'GET_VISITOR_DATA_FAILURE':
      return state
  }
  return state;
}
