import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectCartItemsCount } from "../../redux/cart/cart-selectors";
import { toggleCartHidden } from "../../redux/cart/cart-actions";

import { ReactComponent as ShoppingIcon } from "../assets/cart-icon.svg";

import "./cart-icon.styles.scss";

const CartIcon = ({ toggleCartHidden, numberOfCartItems }) => {
   return (
      <div className="cart-icon-container" onClick={toggleCartHidden}>
         <ShoppingIcon className="cart-icon" />
         <span className="cart-number">{numberOfCartItems}</span>
      </div>
   );
};

const mapDispatchToProps = (dispatch) => ({
   toggleCartHidden: () => dispatch(toggleCartHidden()),
});

const mapStateToProps = createStructuredSelector({
   numberOfCartItems: selectCartItemsCount,
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
