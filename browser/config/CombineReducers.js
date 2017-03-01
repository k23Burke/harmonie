import { combineReducers } from 'redux'
import AuthReducer from '../components/Auth/AuthReducer'
import AdminReducer from '../components/AdminHarmonie/AdminReducer'
import VisitorReducer from '../components/Visitor/VisitorReducer'
import ThingReducer from '../components/Things/ThingReducer'

export default combineReducers({
	auth: AuthReducer,
	things: ThingReducer,
	admin: AdminReducer,
	visitors: VisitorReducer
})