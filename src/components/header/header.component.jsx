import React from "react";

import {Link} from "react-router-dom";

import {connect} from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCartHidden } from "../../redux/cart/cart.selectors";
import { selectCurrentUser } from "../../redux/user/user.selectors";

import './header.styles.scss';
import {ReactComponent as Logo} from "../../assets/crown.svg";

import {auth} from '../../firebase/firebase.utils';

import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown";

const Header = ({currentUser, hidden}) => (
  <div className="header">
    <Link className='logo-container' to='/ '>
      <Logo className='logo'/>
    </Link>

    <div className="options">
      <Link className='option' to='/shop'>
        shop
      </Link>
      <Link className='option' to='/shop'>
        contact
      </Link>
      {currentUser
        ? <div className='option' onClick={() => auth.signOut()}>
            Sign Out</div>
        : <Link className='option' to='/signin'>Sign in</Link>
}
      <CartIcon/>
    </div>
    {hidden
      ? null
      : <CartDropdown/>
}
  </div>
);

const mapStateToProps = createStructuredSelector({
  currentUser:selectCurrentUser,
  hidden:selectCartHidden
});

export default connect(mapStateToProps)(Header);