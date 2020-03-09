import React from 'react';
import CustomButton from './../custom-button/custom-button.component';
import {connect} from 'react-redux';
import CartItem from './../cart-tem/cart-item.components';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';
import './cart-dropdown.styles.scss';
import {toggleToOpenPopup} from './../../redux/cart-reducer/cart.actions';
import { selectCartItems } from './../../redux/cart-reducer/cart.selectors';

const CartDropdown = ({cartItems, history, dispatch}) => {
    console.log('ITS RENDERED')
    return (
        <div className="cart-dropdown">
            <div className="cart-items">
                {
                    cartItems.length ? cartItems.map(item => (
                        <CartItem key={item.id} item={item} />
                    )) : 
                    <span className="empty-message">Your cart is empty</span>                    
                }
            </div>
            <CustomButton className="button" 
                onClick={
                    () => {
                        history.push('/checkout')
                        dispatch(toggleToOpenPopup())
                    }
                }>GO TO CART</CustomButton>
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
})

export default withRouter(connect(mapStateToProps, null)(CartDropdown));