import React from 'react';

const RevewItem = (props) => {
    const { name, price, quantity, img, key } = props.product;
    const { handelRemoveItem } = props;
    return (
        <div className='product'>

            <div className="product-details">
                <h3>{name}</h3>
                <h4>Price: {price}</h4>
                <p>Quantity: {quantity}</p>
                <button
                    className="btn-regular"
                    onClick={() => handelRemoveItem(key)}
                >Remove</button>
            </div>
        </div>
    );
};

export default RevewItem;