import { Link } from "react-router-dom";

import { connect } from "react-redux";

import { authInstance } from "../../firebase/firebase.utils";
import { ReactComponent as Logo } from "../assets/header.logo.svg";

import { selectCurrentUser } from "../../redux/user/user-selector";
import { selectIsCartHidden } from "../../redux/cart/cart-selectors";

import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown";

import "./header.styles.scss";
import { createStructuredSelector } from "reselect";

const Header = ({ currentUser, hidden }) => {
   console.log(hidden);
   return (
      <div className="header">
         <Link className="logo-container" to="/">
            <Logo />
         </Link>
         <div className="options">
            <Link className="option" to="/shop">
               Shop
            </Link>
            <Link className="option" to="/contact">
               Contact
            </Link>
            {currentUser ? (
               <div className="option" onClick={() => authInstance.signOut()}>
                  Signout
               </div>
            ) : (
               <Link className="option" to="/signin">
                  Signin
               </Link>
            )}
            <CartIcon />
            {hidden ? null : <CartDropdown />}
         </div>
      </div>
   );
};

const mapStateToProps = createStructuredSelector({
   currentUser: selectCurrentUser,
   hidden: selectIsCartHidden,
});

export default connect(mapStateToProps)(Header);
