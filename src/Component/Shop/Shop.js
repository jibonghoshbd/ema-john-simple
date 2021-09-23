import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('./products.JSON')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <div className='shop-container'>
            <div className="product-container">
                <h1>Product: {products.length}</h1>
                {
                    products.map(product => <Product
                        product={product}
                    ></Product>)
                }
            </div>
            <div className="order-container">
                <h1>Hello Order Container</h1>
                <h3>Hello Order</h3>
            </div>

        </div>
    );
};

export default Shop;