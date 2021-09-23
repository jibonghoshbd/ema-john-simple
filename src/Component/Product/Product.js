import React from 'react';
import './Product.css'

const Product = (props) => {
    console.log(props.product)
    const { img, name, seller, price, stock } = props.product;
    return (
        <div className='product'>
            <div>
                <img src={img} alt="" />
            </div>
            <div>
                <h3>{name}</h3>
                <p>by: <small>{seller}</small></p>
                <h5>$ {price}</h5>
                <p><small>only {stock} left in stock - order soon</small></p>
            </div>
        </div>
    );
};

export default Product;