import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_8uXyZZA5IzZCt1SyOxyvhDph00ZaWwCtbV';

    const onToken= token => {
        console.log(token);
        alert('payment sucessful');
    }
    return (
        <StripeCheckout 
        label='Pay Now'
        name = 'AMSI'
        shippingAddress
        billingAddress
        description={`your total price is $ ${price}`}
        amount={priceForStripe}
        panelLabel='Pay Now'
        token={onToken}
        stripeKey={publishableKey}
        />
    );
};

export default StripeCheckoutButton;