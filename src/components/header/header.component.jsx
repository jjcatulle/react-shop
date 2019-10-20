import React from "react";

import {connect} from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCartHidden } from "../../redux/cart/cart.selectors";
import { selectCurrentUser } from "../../redux/user/user.selectors";

import {ReactComponent as Logo} from "../../assets/crown.svg";

import { HeaderContainer, LogoContainer, OptionsContainer,OptionLink  } from "./header.styles";

import {auth} from '../../firebase/firebase.utils';

import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";

const Header = ({currentUser, hidden}) => (
  <HeaderContainer>
    <LogoContainer className='logo-container' to='/ '>
      <Logo className='logo'/>
    </LogoContainer>

    <OptionsContainer>
      <OptionLink to='/shop'>
        shop
      </OptionLink>
      <OptionLink to='/shop'>
        contact
      </OptionLink>
      {currentUser
        ? <OptionLink as='div' onClick={() => auth.signOut()}>
            Sign Out
          </OptionLink>
        : <OptionLink className='option' to='/signin'>Sign in</OptionLink>
}
      <CartIcon/>
    </OptionsContainer>
    {hidden
      ? null
      : <CartDropdown/>
}
  </HeaderContainer>
);

const mapStateToProps = createStructuredSelector({
  currentUser:selectCurrentUser,
  hidden:selectCartHidden
});

export default connect(mapStateToProps)(Header);