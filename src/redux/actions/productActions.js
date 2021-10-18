import { ActionsTypes } from "../constants/actionTypes"

export const setProducts = (products) => {
	return {
		type: ActionsTypes.SET_PRODUCTS,
		payload: products
	}
}

export const selectProducts = (product) => {
	return {
		type: ActionsTypes.SELECT_PRODUCT,
		payload: product
	}
}
export const removeSelectProducts = () => {
	return {
		type: ActionsTypes.REMOVE_SELECT_PRODUCT,
	}
}