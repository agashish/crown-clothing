import React from 'react';
import CustomButton from './../custom-button/custom-button.component';
import {connect} from 'react-redux';
import CartItem from './../cart-tem/cart-item.components';

import './cart-dropdown.styles.scss';

import { selectCartItems } from './../../redux/cart-reducer/cart.selectors';

const CartDropdown = ({cartItems}) => {
    console.log('ITS RENDERED')
    return (
        <div className="cart-dropdown">
            <div className="cart-items">
                {
                    cartItems.map(item => (
                        <CartItem key={item.id} item={item} />
                    ))
                }
            </div>
            <CustomButton className="button">GO TO CART</CustomButton>
        </div>
    )
}

const mapStateToProps = state => ({
    cartItems: selectCartItems(state)
})

export default connect(mapStateToProps, null)(CartDropdown);