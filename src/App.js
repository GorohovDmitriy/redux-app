import React from 'react'
import Header from '../src/containers/Header'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css'
import ProductListing from './containers/ProductListing'
import ProductDetail from './containers/ProductDetail'

function App() {
	return (
		<div className='App'>
			<Header />
			<Router>
				<Switch>
					<Route path='/' exact component={ProductListing} />
					<Route path='/product/:productId' exact component={ProductDetail} />
					<Route>404 Not Found!</Route>
				</Switch>
			</Router>
		</div>
	)
}

export default App
