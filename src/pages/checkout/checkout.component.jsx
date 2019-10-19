import React from 'react';

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCartItems, selectCartTotal } from "../../redux/cart/cart.selectors";

import CheckoutItem from "../../components/checkout-item/checkout-item.component";

import './checkout.styles.scss';
import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component';

const CheckoutPage = ({cartItems, total}) => (
  <div className="checkout-page">
    <div className="checkout-header">
      <div className="header-block">
        <span>
          Product
        </span>
      </div>
      <div className="header-block">
        <span>
          description
        </span>
      </div>
      <div className="header-block">
        <span>
          quantity
        </span>
      </div>
      <div className="header-block">
        <span>price</span>
      </div>
      <div className="header-block">
        <span>remove</span>
      </div>
    </div>
    {
        cartItems.map(cartItem=>
            <CheckoutItem key={cartItem.id} cartItem={cartItem}/>
        )
    }
    <div className="total">
        <span>TOTAL: ${total}</span>
    </div>
    <div className="test-warning">
      *Use Test Credit card for payment
    </div>
    <StripeCheckoutButton price={total}/>
  </div>
);

const mapStateToProps=createStructuredSelector({
    cartItems:selectCartItems,
    total:selectCartTotal
})

export default connect(mapStateToProps)(CheckoutPage);