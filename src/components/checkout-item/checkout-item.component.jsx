import React from 'react';
import {connect} from 'react-redux';
import {removeItem, decreaseItem, addItem} from './../../redux/cart-reducer/cart.actions';

import './checkout-item.styles.scss';

const CheckoutItem = ({cartItem: {id, name, quantity, price, imageUrl}, removeItem, decreaseItem, addItem}) => {
    return (
        <div className="checkout-item">
            <div className="image-container">
                <img src={imageUrl} alt="item" />
            </div>
            <span className="name">{name}</span>
            <span className="quantity">
                <span onClick={() => decreaseItem(id)}>&#10094;</span>
                    <span>{quantity}</span>
                <span onClick={() => addItem({id, name, quantity, price, imageUrl})}>&#10095;</span>
            </span>
            <span className="price">{price}</span>
            <div className="remove-button" onClick={() => removeItem(id)}>
                &#10005;
            </div>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    removeItem: (id) => dispatch(removeItem(id)),
    decreaseItem: (id) => dispatch(decreaseItem(id)),
    addItem: (item) => dispatch(addItem(item))
})

export default connect(null, mapDispatchToProps)(CheckoutItem);