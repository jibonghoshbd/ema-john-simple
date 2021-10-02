import { useEffect } from "react";
import { useState } from "react"
import { getStoredCart } from "../utilities/fakedb";

const useCart = products => {
    const [cart, setCart] = useState([]);
    useEffect(() => {
        if (products.length) {
            const sevedCart = getStoredCart();
            const storCart = [];
            for (const key in sevedCart) {
                const addedProducts = products.find(product => product.key === key);
                if (addedProducts) {
                    // set quantity
                    const quantity = sevedCart[key];
                    addedProducts.quantity = quantity;
                    storCart.push(addedProducts)
                }
            }
            setCart(storCart)
        }

    }, [products])
    return [cart, setCart]

}
export default useCart;