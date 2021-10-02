import React from 'react';
import useProducts from '../../hoks/useProducts';
import useCart from '../../hoks/useCart';
import Cart from '../Cart/Cart';
import RevewItem from '../RevewItem/RevewItem';
import Product from '../Product/Product';
import { removeFromDb } from '../../utilities/fakedb';

const OrderRevew = () => {
    const [products, setProducts] = useProducts();
    const [cart, setCart] = useCart(products)
    const handelRemoveItem = (key) => {
        const newCart = cart.filter(product => product.key !== key);
        setCart(newCart)
        removeFromDb(key)
    }
    return (
        <div className='shop-container'>
            <div className="product-container">
                {
                    cart.map(product => <RevewItem
                        key={product.key}
                        product={product}
                        handelRemoveItem={handelRemoveItem}
                    ></RevewItem>)
                }

            </div>
            <div className="order-container">
                <Cart cart={cart}>
                    <button className="btn-regular">Place Order</button>
                </Cart>
            </div>
        </div>
    );
};

export default OrderRevew;