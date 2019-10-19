import React from 'react';

import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton=({price})=>{
    const priceForStripe=price*100;
    const publishableKey='pk_test_yPtoiANjc2Q442MviALOc05t00FPwTCdGf';

    // handle token for payment
    const onToken=token=>{
        console.log(token);
        alert('success')
    }
    return(
        <StripeCheckout 
        label='Pay Now'
        name='Crwn Clothing'
        billingAddress
        shippingAddress
        image='https://svgshare.com/i/CUz.svg'
        description={`Your total: $ ${price}`}
        amount={priceForStripe}
        panelLabel='pay now'
        stripeKey={publishableKey}
        token={onToken}
        />
    );
}

export default StripeCheckoutButton;