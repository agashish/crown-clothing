import React from 'react';
import CustomButton from './../custom-button/custom-button.component';
import {connect} from 'react-redux';

import './cart-dropdown.styles.scss';

const CartDropdown = () => {
    return (
        <div className="cart-dropdown">
            <div className="cart-items"/>
            <CustomButton className="button">GO TO CART</CustomButton>
        </div>
    )
}

const mapStateToProps = ({cart}) => ({
    hidden: cart.hidden
})

export default connect(null, null)(CartDropdown);