import React from 'react';
import {ReactComponent as ShoppingIcon} from './../../assets/shop-bag.svg';
import {connect} from 'react-redux'
import {setCartItemCounter, toggleToOpenPopup} from './../../redux/cart-reducer/cart.actions';
import './cart-icon.styles.scss';
import {selectCartItemCount} from './../../redux/cart-reducer/cart.selectors';

const CartIcon = ({toggleToOpenPopup, itemCounter}) => { 
    console.log('COUNTER PUBLISHED')
    return (
        <div className="cart-icon" onClick={() => toggleToOpenPopup()}>
            <ShoppingIcon className="shopping-icon" />
            <span className="item-count">{itemCounter}</span>            
        </div>
    )
}

const mapStateToProps = state => { 
    return {
        itemCounter: selectCartItemCount(state)
    }
}  

const mapDispatchToProps = dispatch => ({
    // setCartItemCounter: (value) => dispatch(setCartItemCounter(value)),
    toggleToOpenPopup: () => dispatch(toggleToOpenPopup())
})

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);