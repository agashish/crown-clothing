import React from 'react';
import {ReactComponent as ShoppingIcon} from './../../assets/shop-bag.svg';
import {connect} from 'react-redux'
import {setCartItemCounter, toggleToOpenPopup} from './../../redux/cart-reducer/cart.actions';
import './cart-icon.styles.scss';

const CartIcon = (cart) => {
    return (
        <div className="cart-icon" onClick={() => cart.toggleToOpenPopup()}>
            <ShoppingIcon className="shopping-icon" />
            <span className="item-count">{cart.itemCounter}</span>            
        </div>
    )
}

const mapStateToProps = ({cart}) => {
    return {
        itemCounter: cart.itemCounter
    }
}  

const mapDispatchToProps = dispatch => ({
    setCartItemCounter: (value) => dispatch(setCartItemCounter(value)),
    toggleToOpenPopup: () => dispatch(toggleToOpenPopup())
})

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);