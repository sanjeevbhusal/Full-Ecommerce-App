import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectCartItemsCount } from "../../redux/cart/cart-selectors";
import { toggleCartHidden } from "../../redux/cart/cart-actions";

import { ReactComponent as ShoppingIcon } from "../assets/cart-icon.svg";

import { CartIconContainer, CartIconNumber } from "./cart-icon.styles";

const CartIcon = ({ toggleCartHidden, numberOfCartItems }) => {
   return (
      <CartIconContainer onClick={toggleCartHidden}>
         <ShoppingIcon className="cart-icon" />
         <CartIconNumber className="cart-number">
            {numberOfCartItems}
         </CartIconNumber>
      </CartIconContainer>
   );
};

const mapDispatchToProps = (dispatch) => ({
   toggleCartHidden: () => dispatch(toggleCartHidden()),
});

const mapStateToProps = createStructuredSelector({
   numberOfCartItems: selectCartItemsCount,
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
