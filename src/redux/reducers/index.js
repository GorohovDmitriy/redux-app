import { combineReducers } from "redux"
import { productReducer, selectProductReducer } from "./productReducer"


export const reducers = combineReducers({
	allProducts: productReducer,
	product: selectProductReducer
})

