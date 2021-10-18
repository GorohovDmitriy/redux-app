import React, { useEffect } from 'react'
import '../App.css'
import axios from 'axios'
import { useSelector, useDispatch } from 'react-redux'
import ProductComponent from './ProductComponent'
import { setProducts } from '../redux/actions/productActions'

const ProductListing = () => {
	const products = useSelector((state) => state)
	const dispatch = useDispatch()

	const fetchProducts = async () => {
		try {
			const response = await axios.get('https://fakestoreapi.com/products')
			dispatch(setProducts(response.data))
		} catch (error) {
			alert(error, 'Данные не загрузились!')
		}
	}

	useEffect(() => {
		fetchProducts()
	}, [])

	return (
		<div className='ui grid container'>

			<ProductComponent />

		</div>
	)
}

export default ProductListing
