import API from '../../API/API'
import { ActionsTypes } from '../constants/actionTypes'

export const fetchProducts = () => async (dispatch) => {
	const response = await API.get('/products')
	dispatch({ type: ActionsTypes.FETCH_PRODUCT, payload: response.data })
}

export const fetchProduct = (id) => async (dispatch) => {
	const response = await API.get(`/products/${id}`)
	dispatch({ type: ActionsTypes.SELECT_PRODUCT, payload: response.data })
}

export const setProducts = (products) => {
	return {
		type: ActionsTypes.SET_PRODUCTS,
		payload: products,
	}
}

export const selectProducts = (product) => {
	return {
		type: ActionsTypes.SELECT_PRODUCT,
		payload: product,
	}
}
export const removeSelectProducts = () => {
	return {
		type: ActionsTypes.REMOVE_SELECT_PRODUCT,
	}
}
