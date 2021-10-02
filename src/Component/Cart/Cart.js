import React from 'react';
import './Cart.css'

const Cart = (props) => {
    // console.log(props.cart)
    const { cart } = props;
    let totalQuantity = 0;
    let total = 0;
    for (const product of cart) {
        if (!product.quantity) {
            product.quantity = 1;
        }
        total = total + product.price * product.quantity;
        totalQuantity = totalQuantity + product.quantity;
    }
    const shippingCost = total > 0 ? 15 : 0;
    const tax = (total + shippingCost) * .10;
    const grandTotal = total + shippingCost + tax;
    return (
        <div>
            <h3>Order Summary</h3>
            <h4>Items ordered: {totalQuantity}</h4>

            <p>Total: $ {total}</p>
            <p>Shipping: $ {shippingCost.toFixed(2)}</p>
            <p>Tax: $ {tax}</p>
            <p>GrandTotal: $ {grandTotal.toFixed(2)}</p>
            {props.children}
        </div>
    );
};

export default Cart;