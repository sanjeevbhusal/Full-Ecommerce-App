import { ReactComponent as ShoppingIcon } from "../assets/cart-icon.svg";
import { connect } from "react-redux";
import { toggleCartHidden } from "../../redux/cart/cart-actions";
import "./cart-icon.styles.scss";

const CartIcon = ({ toggleCartHidden, numberOfCartItems }) => {
   return (
      <div className="cart-icon-container" onClick={toggleCartHidden}>
         <ShoppingIcon className="cart-icon" />
         <span className="cart-number">{numberOfCartItems}</span>
      </div>
   );
};

const mapDispatchtoProps = (dispatch) => ({
   toggleCartHidden: () => dispatch(toggleCartHidden()),
});

const mapStatetoProps = (state) => ({
   numberOfCartItems: state.cart.cartItems.length,
});

export default connect(mapStatetoProps, mapDispatchtoProps)(CartIcon);
