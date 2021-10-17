import { ActionsTypes } from "../constants/actionTypes";

const initialState = {
	product: [{
		id: 1,
		title: 'Dmitriy',
		category: 'programmer'
	}]
}

export const productReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case ActionsTypes.SET_PRODUCTS:
			return state


		default:
			return state
	}
}