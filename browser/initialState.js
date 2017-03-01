import { Map, fromJS } from 'immutable';

const initalState = {
	auth: fromJS({
		attempted: false
	}),
	things: fromJS({}),
	admin: fromJS({})
}

export default initalState