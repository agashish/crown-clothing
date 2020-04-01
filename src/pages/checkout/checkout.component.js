import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCartItems, selectCartTotal } from './../../redux/cart-reducer/cart.selectors.js';
import CheckoutItem from './../../components/checkout-item/checkout-item.component';
import StripeCheckoutButton from './../../stripe/stripe-button.component';
// import './checkout.styles.scss';

import {
    CheckoutPageContainer,
    CheckoutHeader,
    HeaderBlockStyles,
    TotalStyles,
    StripeButton,
    TextWarning
} from './checkout.styles';

// const textStyle = {
//     fontSize: 20,
//     fontWight: 600,
//     color: 'green' 
// }

const CheckoutPage = ({cartItems, total}) => {    
    return (
        <CheckoutPageContainer>
            <CheckoutHeader>
                <HeaderBlockStyles>
                    <span>Product</span>
                </HeaderBlockStyles>
                <HeaderBlockStyles>
                    <span>Description</span>
                </HeaderBlockStyles>
                <HeaderBlockStyles>
                    <span>Quantity</span>
                </HeaderBlockStyles>
                <HeaderBlockStyles>
                    <span>Price</span>
                </HeaderBlockStyles>
                <HeaderBlockStyles>
                    <span>Remove</span>
                </HeaderBlockStyles>
            </CheckoutHeader>
            {
                cartItems.map(cartItem => (<CheckoutItem key={cartItem.id} cartItem={cartItem} />))
            }
            
            <TotalStyles>
                <span>Total: ${total}</span>
            </TotalStyles>

            {/* <div className='test-warning'>
                *Please use following test card details* 
                <br />
                4242 4242 4242 4242 - Exp: 01/20 - Cvv: 123
            </div> */}

            {/* <div style={textStyle}>
                *Please use following test card details* 
                <br />
                4242 4242 4242 4242 - Exp: 01/20 - Cvv: 123
            </div> */}

            <TextWarning isActive={true}>  
                *Please use following test card details* 
                <br />
                4242 4242 4242 4242 - Exp: 01/20 - Cvv: 123    
            </TextWarning>                

            <StripeButton>
                <StripeCheckoutButton price={total} />
            </StripeButton>
        </CheckoutPageContainer> 
    )
}

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal
})

export default connect(mapStateToProps)(CheckoutPage);