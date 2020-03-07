import React from 'react';

import './cart-item.styles.scss';

const CartItem = ({item: {id, name, imageUrl, price, quantity}}) => (
    <div className="cart-item">
        <img src={imageUrl} alt={name}/>
        <div className="item-details">
            <span className="name">{name}</span>
                <span>{quantity} X ${price}</span>
        </div>
    </div>
)

export default CartItem;