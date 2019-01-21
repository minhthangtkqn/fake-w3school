import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
// import Product from './components/Product';

class App extends Component {
	
	showInfo (product) {
		if (product.status) {
			return (
				<p>
					ID: { product.id } <br/>
					Name: { product.name } <br/>
					Status : { product.status ? 'Active' : 'Inactive' }
				</p>
			);
		}
	}
	render() {
		var a = 10;
		var b = 3;
		var name = 'hoang minh thang';
		var product = {
			id: '1',
			name: 'iphone6s',
			status: true
		};

		var users = [
			{
				id: 1,
				name: 'thang',
				age: 18
			},
			{
				id: 2,
				name: 'hoang',
				age: 19
			},
			{
				id: 3,
				name: 'minh',
				age: 23
			}
		];

		var elements = users.map((user, index) => {
			user.age++;
			return (
				<div key={index.toString()}>
					<p>Tên: { user.name }</p>
					<p>Tuổi: { user.age }</p>
					<p>+----------------+</p>
				</div>
			);
		});
		
		return (
			<div className="App">
				<Header/>
				{/* <div className="row">
					<div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
						<Product/>
					</div>
					<div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
						<Product/>
					</div>
				</div> */}

				{/* JSX Syntax for showing object value */}
				
				<div className="ml-30">
					<p>
						{ a } <br/>
						{ a + b } <br/>
						{ name } <br/>
					</p>
					{ this.showInfo(product) } <br/>
					{ elements }
				</div>

			</div>
	);
  }
}

export default App;
