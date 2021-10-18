import React, { useEffect } from 'react'
import { useParams } from 'react-router'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { selectProducts, removeSelectProducts } from '../redux/actions/productActions'

const ProductDetail = () => {
	const product = useSelector((state) => state.product)
	const { image, title, price, description, category } = product
	const { productId } = useParams()
	const dispatch = useDispatch()

	const fetchProductDetail = async () => {
		try {
			const response = await axios.get(`https://fakestoreapi.com/products/${productId}`)
			dispatch(selectProducts(response.data))
		} catch (error) {
			alert(error, 'Ошибка!')
		}
	}

	useEffect(() => {
		if (productId && productId !== '') {
			fetchProductDetail()
		}
		return () => {
			dispatch(removeSelectProducts())
		}
	}, [productId])

	return (
		<div className='ui grid container'>
			{Object.keys(product).length === 0 ? (
				<div>...Loading</div>
			) : (
				<div className="ui placeholder segment">
					<div className='ui two column stackable center align grid'>
						<div className="ui vertical divider">AND</div>
						<div className="middle align row">
							<div className="column lp">
								<img src={image} alt={title} className="ui fluid image" />
							</div>
							<div className="column rp">
								<h1>{title}</h1>
								<h2>
									<a className='ui teal tag label'>${price}</a>
								</h2>
								<h3 className="ui brown block header">{category}</h3>
								<p>{description}</p>
								<div className="ui vertical animated button" tabIndex='0'>
									<div className="hidden content">
										<i className="shop icon"></i>
									</div>
									<div className="visible content">Add to cart</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			)}

		</div>
	)
}

export default ProductDetail
