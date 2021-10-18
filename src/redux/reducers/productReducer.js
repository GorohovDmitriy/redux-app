import { ActionsTypes } from '../constants/actionTypes'

const initialState = {
	products: [],
}

export const productReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case ActionsTypes.SET_PRODUCTS:
			return {
				...state,
				products: payload,
			}

		default:
			return state
	}
}

export const selectProductReducer = (state = {}, { type, payload }) => {
	switch (type) {
		case ActionsTypes.SELECT_PRODUCT:
			return {
				...state,
				...payload,
			}
		case ActionsTypes.REMOVE_SELECT_PRODUCT:
			return {}
		default:
			return state
	}
}
