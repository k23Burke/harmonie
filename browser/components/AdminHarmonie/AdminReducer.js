import { Map, fromJS } from 'immutable';

export default function(state = Map(), action) {
  switch (action.type){
    case 'SET_ROLES_REQUEST':
      return state
    case 'SET_ROLES_SUCCESS':
      return state
    case 'SET_ROLES_FAILURE':
      return state
  }
  return state;
}
