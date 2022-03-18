import { connect } from "react-redux";

import { createStructuredSelector } from "reselect";

import { authInstance } from "../../firebase/firebase.utils";
import { ReactComponent as Logo } from "../assets/header.logo.svg";

import { selectCurrentUser } from "../../redux/user/user-selector";
import { selectIsCartHidden } from "../../redux/cart/cart-selectors";

import { signoutStart } from "../../redux/user/user-actions";

import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown";

import {
  HeaderContainer,
  LogoContainer,
  OptionsContainer,
  Option,
} from "./header.styles";

const Header = ({ currentUser, hidden, signOut }) => {
  return (
    <HeaderContainer className="header">
      <LogoContainer to="/">
        <Logo />
      </LogoContainer>
      <OptionsContainer>
        <Option to="/shop">Shop</Option>
        <Option to="/contact">Contact</Option>
        {currentUser ? (
          <Option as="div" onClick={() => signOut()}>
            Signout
          </Option>
        ) : (
          <Option to="/signin">Signin</Option>
        )}
        <CartIcon />
        {hidden ? null : <CartDropdown />}
      </OptionsContainer>
    </HeaderContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectIsCartHidden,
});

const mapDispatchToProps = (dispatch) => ({
  signOut: () => dispatch(signoutStart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
