import React from 'react';
import './Product.css'

const Product = (props) => {
    // console.log(props)
    const { img, name, seller, price, stock } = props.product;
    return (
        <div className='product'>
            <div>
                <img src={img} alt="" />
            </div>
            <div className="product-details">
                <h3>{name}</h3>
                <p>by: <small>{seller}</small></p>
                <h5>$ {price}</h5>
                <p><small>only {stock} left in stock - order soon</small></p>
                <button
                    onClick={() => props.handleAddToCard(props.product)}
                    className='btn-regular'
                >add to card</button>
            </div>
        </div>
    );
};

export default Product;