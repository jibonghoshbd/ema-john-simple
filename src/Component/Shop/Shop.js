import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import './Shop.css'
import { Link } from 'react-router-dom';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([])
    const [showDisplay, setShowDisplay] = useState([])
    useEffect(() => {
        fetch('./products.JSON')
            .then(res => res.json())
            .then(data => {
                setProducts(data)
                setShowDisplay(data)
            })
    }, [])
    useEffect(() => {
        const saveCart = getStoredCart();
        if (products.length) {
            const storCart = [];
            for (const key in saveCart) {
                const addedProduct = products.find(product => product.key === key);
                if (addedProduct) {
                    const quantity = saveCart[key];
                    addedProduct.quantity = quantity;
                    storCart.push(addedProduct)
                }
            }
            setCart(storCart)
        }
    }, [products])

    const handleAddToCard = (product) => {
        const exisits = cart.find(pd => pd.key === product.key);
        let newCart = [];
        if (exisits) {
            const rest = cart.filter(pd => pd.key !== product.key);
            exisits.quantity = exisits.quantity + 1;
            newCart = [...rest, product]
        } else {
            product.quantity = 1;
            newCart = [...cart, exisits]
        }
        setCart(newCart)
        addToDb(product.key)

    }
    const handelSearch = event => {
        const searchText = event.target.value;
        const matchSearch = products.filter(product => product.name.toLowerCase().includes(searchText.toLowerCase()));

        setShowDisplay(matchSearch);
    }
    return (
        <>
            <div className="input-container">
                <input
                    onChange={handelSearch}
                    type="text"
                    placeholder='Search Product'
                />
            </div>
            <div className='shop-container'>
                <div className="product-container">
                    {
                        showDisplay.map(product => <Product
                            key={product.key}
                            product={product}
                            handleAddToCard={handleAddToCard}
                        ></Product>)
                    }
                </div>
                <div className="order-container">
                    <Cart
                        cart={cart}
                    >
                        <Link to="/review">
                            <button className="btn-regular">Review Your Order</button>
                        </Link>
                    </Cart>
                </div>

            </div>
        </>
    );
};

export default Shop;