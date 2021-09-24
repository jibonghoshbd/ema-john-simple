import React from 'react';
import './Cart.css'

const Cart = (props) => {
    // console.log(props.cart)
    const { cart } = props;
    let total = 0;
    for (const product of cart) {
        total = total + product.price;
    }
    const shippingCost = total > 0 ? 15 : 0;
    const tax = (total + shippingCost) * .10;
    const grandTotal = total + shippingCost + tax;
    return (
        <div>
            <h3>Order Summary</h3>
            <h4>Items ordered: {props.cart.length}</h4>

            <p>Total: $ {total}</p>
            <p>Shipping: $ {shippingCost.toFixed(2)}</p>
            <p>Tax: $ {tax}</p>
            <p>GrandTotal: $ {grandTotal.toFixed(2)}</p>
        </div>
    );
};

export default Cart;