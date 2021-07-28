import './App.css';
import Header from './components/Header';
import Lists from './components/Lists';
import Title from './components/Title';
import React from 'react';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			items: [
				{ id: 1, name: 'Dâu', price: 8000, thumb: 'assets/photos/001.jpeg' },
				{ id: 2, name: 'Chuối', price: 3000, thumb: 'assets/photos/002.jpeg' },
				{ id: 3, name: 'Dứa', price: 7000, thumb: 'assets/photos/003.jpeg' },
				{ id: 4, name: 'Cam', price: 5000, thumb: 'assets/photos/004.jpeg' },
				{ id: 5, name: 'Đu đủ', price: 10000, thumb: 'assets/photos/005.jpeg' },
				{ id: 6, name: 'Cherry', price: 12000, thumb: 'assets/photos/006.jpeg' }
			],
			cart: [

			]
		}
	}

	handleAddToCart = (fruit) => {
		let exist = false;
		let positionEle = null;
		if (this.state.cart.length > 0) {
			this.state.cart.forEach((value, index) => {
				if (value.id == fruit.id) {
					exist = true;
					positionEle = index;
				}
			})
		} else {
			this.setState({
				cart: [...this.state.cart, { id: fruit.id, quantity: 1, name: fruit.name, price: fruit.price }]
			})
		}
		if (!exist) {
			this.setState({
				cart: [...this.state.cart, { id: fruit.id, quantity: 1, name: fruit.name, price: fruit.price }]
			})
		}else {
			this.state.cart.splice(positionEle,1);
			this.setState({
				cart: [...this.state.cart]
			})
		}
	}

	handleSetQuantity = (item,quantity) => {
		this.state.cart.forEach((value, index) => {
			if (value.id == item.id) {
				value.quantity = quantity
			}
			this.setState({
				cart: [...this.state.cart]
			})
		})
	}

	render() {
		
		return (
			<div className="container">
				<Header 
					cart = {this.state.cart}
					handleSetQuantity = { (item,quantity) => this.handleSetQuantity(item,quantity)}
				/>
				<Title />
				<Lists
					onAddToCart={(item) => this.handleAddToCart(item)}
					fruits={this.state.items}
					cart = {this.state.cart}
				/>
			</div>
		);
	}
}

export default App;
