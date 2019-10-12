import React from 'react';

import {withRouter} from "react-router-dom";

import {connect} from "react-redux";
import {createStructuredSelector} from "reselect";
import {selectCartItems} from "../../redux/cart/cart.selectors";
import {toggleCartHidden} from "../../redux/cart/cart.actions";

import CartItem from "../cart-item/cart-item.component";
import CustomButton from '../../components/custom-button/custom-button.component';
import './cart-dropdown.styles.scss';

const CartDropdown = ({cartItems, history, dispatch}) => (
  <div className="cart-dropdown">
    <div className="cart-items"/> {cartItems.length
      ? cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem}/>)
      : <span className='empty-message'>your cart is empty</span>
}
    <CustomButton
      children='Checkout'
      onClick={() => {
      history.push('/checkout');
      dispatch(toggleCartHidden())
    }}/>
  </div>
);

const mapStateToProps = createStructuredSelector({cartItems: selectCartItems});

export default withRouter(connect(mapStateToProps)(CartDropdown));