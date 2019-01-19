import React, { Component } from 'react';

class Product extends Component{
    render(){
        return (
            <div className="col-xs-3 col-lg-3 col-sm-3 col-md-3">
                <div className="thumbnail">
                    <img src="https://images-na.ssl-images-amazon.com/images/I/51UH1ltGP8L.jpg" alt=""/>
                    <div className="caption">
                        <h3>Iphone 6S</h3>
                        <p>250$</p>
                    </div>
                </div>
                <button type="button" className="btn btn-success">Mua hang</button>
            </div>
        );
    }
}
export default Product;