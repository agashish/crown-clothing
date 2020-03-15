import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({price}) => { 
    const priceForStripe = price * 100; // For making cense
    const publishableKey = 'pk_test_8wMQlsfoK9j9RQP1Jwnsx6c800FPsuY5VV';

    const onToken = token => {
        console.log(token);
        alert('Payment Successful');
    }

    return (
        <StripeCheckout
            label='Pay Now'   
            name='Crown Clothing Ltd.'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}

            // name="Three Comma Co." // the pop-in header title
            // description="Big Data Stuff" // the pop-in header subtitle
            // image="https://stripe.com/img/documentation/checkout/marketplace.png" // the pop-in header image (default none)
            // ComponentClass="div"
            // label="Buy the Thing" // text inside the Stripe button
            // panelLabel="Give Money" // prepended to the amount in the bottom pay button
            // amount={1000000} // cents
            // currency="USD"
            // stripeKey={publishableKey}
            // locale="zh"
            // email="info@vidhub.co"
            // // Note: Enabling either address option will give the user the ability to
            // // fill out both. Addresses are sent as a second parameter in the token callback.
            // shippingAddress
            // billingAddress={false}
            // // Note: enabling both zipCode checks and billing or shipping address will
            // // cause zipCheck to be pulled from billing address (set to shipping if none provided).
            // zipCode={false}
            // alipay // accept Alipay (default false)
            // bitcoin // accept Bitcoins (default false)
            // allowRememberMe // "Remember Me" option (default true)
            // // token={onToken} // submit callback
            // // opened={this.onOpened} // called when the checkout popin is opened (no IE6/7)
            // // closed={this.onClosed} // called when the checkout popin is closed (no IE6/7)
            // // Note: `reconfigureOnUpdate` should be set to true IFF, for some reason
            // // you are using multiple stripe keys
            // reconfigureOnUpdate={false}
            // // Note: you can change the event to `onTouchTap`, `onClick`, `onTouchStart`
            // // useful if you're using React-Tap-Event-Plugin
            // triggerEvent="onTouchTap"
        />
    )
}

export default StripeCheckoutButton;