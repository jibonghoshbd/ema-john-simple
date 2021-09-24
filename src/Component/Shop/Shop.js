import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([])
    useEffect(() => {
        fetch('./products.JSON')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    useEffect(() => {
        const saveCart = getStoredCart();
        if (products.length) {
            const storCart = [];
            for (const key in saveCart) {
                const addedProduct = products.find(product => product.key === key);
                storCart.push(addedProduct)
            }
            setCart(storCart)
        }
    }, [products])

    const handleAddToCard = (product) => {
        const newCart = [...cart, product];
        setCart(newCart)
        addToDb(product.key)

    }
    return (
        <div className='shop-container'>
            <div className="product-container">
                {
                    products.map(product => <Product
                        key={product.key}
                        product={product}
                        handleAddToCard={handleAddToCard}
                    ></Product>)
                }
            </div>
            <div className="order-container">
                <Cart
                    cart={cart}
                ></Cart>
            </div>

        </div>
    );
};

export default Shop;